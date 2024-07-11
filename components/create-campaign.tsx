import CalendarHeader from "./calendar-header";
import CampaignCalendar from "./campaign-calendar";

export default function CreateCampaign() {
  return (
    <section className="container mt-32 space-y-4">
      <CalendarHeader />

      <div>
        {/* LEFT SIDE */}
        <CampaignCalendar />
        {/* CREATE CAMPAIGN FORM */}
      </div>
    </section>
  );
}
