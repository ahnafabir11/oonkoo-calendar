import CampaignStatsBar from "./campaign-stats-bar";

export default function CalendarHeader() {
  return (
    <header className="flex flex-col xl:flex-row items-center justify-between gap-4">
      <h1 className="w-full text-center xl:text-left text-4xl font-medium tracking-tight lg:text-5xl">
        <span className="text-muted-foreground">Let&apos;s</span> Create Your
        Campaign
      </h1>

      <CampaignStatsBar />
    </header>
  );
}
