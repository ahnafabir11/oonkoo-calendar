import { Card } from "@/components/ui/card";
import CalendarFilter from "./calendar-filter";

export default function CampaignCalendar() {
  return (
    <Card>
      <CalendarFilter />

      {/* CALENDER VIEW */}
      <div className="border text-center">Calender View</div>
    </Card>
  );
}
