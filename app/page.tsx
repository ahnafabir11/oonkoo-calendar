import Header from "@/components/header";
import CampaignForm from "@/components/campaign-form";
import CampaignFilter from "@/components/campaign-filter";
import CalendarHeader from "@/components/calendar-header";
import CampaignCalendar from "@/components/campaign-calendar";
import { z } from "zod";
import { redirect } from "next/navigation";
import { format } from "date-fns";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const result = z
    .object({ selectedDate: z.string().date() })
    .safeParse(searchParams);

  if (result.error) redirect(`?selected=${format(new Date(), "yyyy-MM-dd")}`);

  const { selectedDate } = result.data;

  return (
    <main>
      <Header />

      <section className="container mt-32 space-y-4">
        <CalendarHeader />

        <div className="flex gap-3">
          {/* LEFT SIDE */}
          <div className="hidden xl:block w-full max-w-72 shrink-0">
            <CampaignFilter />
          </div>

          <CampaignCalendar selectedDate={new Date(selectedDate)} />

          {/* CREATE CAMPAIGN FORM */}
          <div className="hidden xl:block w-full max-w-72 shrink-0">
            <CampaignForm />
          </div>
        </div>
      </section>
    </main>
  );
}
