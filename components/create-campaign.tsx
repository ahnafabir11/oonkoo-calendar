import CampaignForm from "./campaign-form";
import CampaignFilter from "./campaign-filter";
import CalendarHeader from "./calendar-header";
import CampaignCalendar from "./campaign-calendar";

export default function CreateCampaign() {
  return (
    <section className="container mt-32 space-y-4">
      <CalendarHeader />

      <div className="flex gap-3">
        {/* LEFT SIDE */}
        <div className="hidden xl:block w-full max-w-72 shrink-0">
          <CampaignFilter />
        </div>

        <CampaignCalendar />

        {/* CREATE CAMPAIGN FORM */}
        <div className="hidden xl:block w-full max-w-72 shrink-0">
          <CampaignForm />
        </div>
      </div>
    </section>
  );
}
