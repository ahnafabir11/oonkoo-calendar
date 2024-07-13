import { format, addDays, subDays, eachDayOfInterval } from "date-fns";

/*
 * This is the Campaign type
 * that will come from database
 *
 * This type is made based on the designprovided
 * Note: Replace it with the actual Campaign type
 */
export type Campaign = {
  id: string;
  startDate: string;
  endDate: string;
  timeSlot: number;
  location: string;
  status: string;
} & (
  | {
      allDay: true;
      // While allDay is enable there will be no ad slots
    }
  | {
      allDay: false;
      adSlots: { from: string; to: string }[];
    }
);

/*
 * Campaign Label will be displayed in the calendar
 *
 * @ status
 * status is need to make campaign label Gray Colored in Calendar
 *
 * @ allDay
 * if allDay is enabled  campaign label will be primary colored
 *
 * @ hasPrevious
 * this value will be used to make the label rounded from left side
 *
 * @ hasAfter
 * this value will be used to make the label rounded from right side
 *
 * @ label
 * label text will be displayed on the campaign label
 * this label will be vary according to allDay value
 *
 * @ placeholder
 * this text will be displayed as tooltip while hovering any campaign label
 *
 * Note: Update Campaign label according to your requirement make sure
 * to update the label data inside convertCampaignsToCalendarLabels function
 */
export interface CampaignLabel {
  status: string;
  allDay: boolean;
  hasPrevious: boolean;
  hasAfter: boolean;
  label: string;
  placeholder: string;
}

export const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const convertCampaignsToCalendarLabels = (campaigns: Campaign[]) => {
  return campaigns.reduce<Record<string, (CampaignLabel | null)[]>>(
    (acc, campaign) => {
      /*
       * From campaign date range creating
       * a date interval with date-fns
       */
      const days = eachDayOfInterval({
        start: campaign.startDate,
        end: campaign.endDate,
      });

      const daysLength = days.length;
      const { allDay, status } = campaign;

      /*
       * Looping the interval to generate an array of objects
       * here key will be ex. "2002-12-01" and
       * the actual object type will be IntervalData
       */
      days.forEach((day, index) => {
        const DATE_FORMAT = "yyyy-MM-dd";
        const dateKey = format(day, DATE_FORMAT);
        const preDateKey = format(subDays(day, 1), DATE_FORMAT);
        const nextDateKey = format(addDays(day, 1), DATE_FORMAT);

        /*
         * If no array found with dateKey
         * create new empty array with dateKey
         */
        if (!acc[dateKey]) {
          acc[dateKey] = [];
        }

        /*
         * If campaign ad slot is all day
         * then insert campaign data into the date array
         * this data will be rendered in calendar cell
         */
        if (campaign.allDay) {
          const data: CampaignLabel = {
            allDay,
            status,
            hasPrevious: index !== 0,
            hasAfter: index !== daysLength - 1,
            label: index === 0 ? "All Day" : "-",
            placeholder: `${format(campaign.startDate, DATE_FORMAT)} - ${format(
              campaign.endDate,
              DATE_FORMAT
            )}`,
          };

          const maxLength = Math.max(
            acc[preDateKey]?.length || 0,
            acc[nextDateKey]?.length || 0
          );

          const currLength = acc[dateKey].length;
          const indexToBeInserted =
            currLength === 0 ? Math.max(0, maxLength - 1) : currLength;

          acc[dateKey][indexToBeInserted] = data;
        } else {
          /*
           * If campaign ad slot is not all day
           * then there will an ad slots array
           * map over the ad slots array and insert
           * campaign data into the date array
           * Note: each data will be inserted into the same date array
           * this data will be rendered in calendar cell
           */
          const slotsLength = campaign.adSlots.length;

          campaign.adSlots.forEach(({ from, to }, slotIndex) => {
            const TIME_FORMAT = "hh:mm aa";
            const data: CampaignLabel = {
              allDay,
              status,
              hasPrevious: index !== 0,
              hasAfter: index !== daysLength - 1,
              label: index === 0 ? "Slot" : "-",
              placeholder: `${format(from, TIME_FORMAT)} ${format(
                to,
                TIME_FORMAT
              )}`,
            };

            const maxLength =
              Math.max(
                acc[preDateKey]?.length || 0,
                acc[nextDateKey]?.length || 0
              ) - slotsLength;

            const currLength = acc[dateKey].length;
            const indexToBeInserted =
              currLength === 0 ? Math.max(0, maxLength) : currLength;

            acc[dateKey][indexToBeInserted] = data;
          });
        }

        // fill empty items with null
        for (let i = 0; i < acc[dateKey].length; i++) {
          if (!acc[dateKey][i]) {
            acc[dateKey][i] = null;
          }
        }
      });

      return acc;
    },
    {}
  );
};
