import { z } from "zod";

export const CreateCampaignSchema = z.object({
  startDate: z.date(),
  endDate: z.date(),
  allDay: z.boolean(),
  timeSlot: z.coerce.number(),
  location: z.string(),
});
