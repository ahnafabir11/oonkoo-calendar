import { Card } from "@/components/ui/card";
import CalendarFilter from "./calendar-filter";

export default function CampaignCalendar() {
  return (
    <Card className="w-full">
      <CalendarFilter />

      {/* CALENDER VIEW */}
      <div className="border text-center">Calender View</div>
    </Card>
  );
}
