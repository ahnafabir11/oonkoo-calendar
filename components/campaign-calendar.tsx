import {
  getDay,
  format,
  isToday,
  endOfMonth,
  startOfMonth,
  eachDayOfInterval,
} from "date-fns";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  WEEKDAYS,
  CampaignLabel,
  convertCampaignsToCalendarLabels,
  Campaign,
} from "@/lib/cmapaign-calendar-utils";
import path from "path";
import { cn } from "@/lib/utils";
import fsPromise from "fs/promises";
import { PropsWithChildren } from "react";
import { Card } from "@/components/ui/card";
import CalendarFilter from "./calendar-filter";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// Get mock campaign data
const getData = async () => {
  const filePath = path.join(process.cwd(), "db/campaigns.json");
  const jsonData = await fsPromise.readFile(filePath, "utf-8");
  const objectData = JSON.parse(jsonData);

  return objectData as Campaign[];
};

export default async function CampaignCalendar() {
  const selectedDate = new Date();

  const firstDayOfMonth = startOfMonth(selectedDate);
  const lastDayOfMonth = endOfMonth(selectedDate);

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  });

  const startingDayIndex = getDay(firstDayOfMonth);
  const endingDayIndex = getDay(lastDayOfMonth);

  const campaigns = await getData();
  const campaignLabels = convertCampaignsToCalendarLabels(campaigns);

  return (
    <Card className="w-full mb-10">
      <CalendarFilter />

      {/* CALENDER VIEW */}
      <ScrollArea>
        <div className="min-w-max w-full grid grid-cols-7">
          {WEEKDAYS.map((day) => (
            <div key={day} className="text-center border-t p-1">
              {day}
            </div>
          ))}

          {/* Fill previous month's day with black cell  */}
          {Array.from({ length: startingDayIndex }).map((_, index) => (
            <CalendarDayCell key={`staring-empty-${index}`} />
          ))}

          {/* Mapping selected month with campaign */}
          {daysInMonth.map((date) => {
            const dateKey = format(date, "yyyy-MM-dd");
            const todaysCampaigns = campaignLabels[dateKey] || [];

            return (
              <CalendarDayCell key={date.toDateString()}>
                <CalendarDay date={date} />

                {todaysCampaigns.map((campaingData, idx) => (
                  <CampaignBadge key={idx} data={campaingData} />
                ))}
              </CalendarDayCell>
            );
          })}

          {/* Fill next month's day with black cell  */}
          {Array.from({ length: 6 - endingDayIndex }).map((_, index) => (
            <CalendarDayCell key={`ending-empty-${index}`} />
          ))}
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Card>
  );
}

function CalendarDayCell({ children }: PropsWithChildren) {
  return <div className="min-h-24 min-w-24 border-t border-l">{children}</div>;
}

function CalendarDay({ date }: { date: Date }) {
  return (
    <span
      className={cn(
        "text-sm font-medium size-6 inline-flex items-center justify-center rounded-full m-3",
        { "bg-primary text-primary-foreground": isToday(date) }
      )}
    >
      {format(date, "d")}
    </span>
  );
}

function CampaignBadge({ data }: { data: CampaignLabel | null }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            className={cn(
              "invisible whitespace-nowrap text-sm block px-2 py-1 mb-2",
              {
                "w-11/12 rounded-r-md mr-auto": !data?.hasAfter,
                "w-11/12 rounded-l-md ml-auto": !data?.hasPrevious,
                "visible bg-primary text-primary-foreground": data,
                "bg-destructive": !data?.allDay,
                "bg-secondary text-secondary-foreground":
                  data?.status === "pre-booked",
              }
            )}
          >
            {data ? data.label : "blank"}
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>{data?.placeholder}</p>
          <p className="uppercase">({data?.status})</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
