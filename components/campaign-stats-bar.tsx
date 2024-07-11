import { Button } from "@/components/ui/button";

export default function CampaignStatsBar() {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center sm:justify-center xl:justify-end gap-[15px]">
      <Button variant="outline" className="w-full sm:w-auto">
        Total Screens{" "}
        <span className="ml-4 size-8 bg-foreground text-background flex items-center justify-center rounded-full">
          324
        </span>
      </Button>
      <Button variant="outline" className="w-full sm:w-auto">
        Available Screens{" "}
        <span className="ml-4 size-8 bg-success text-foreground flex items-center justify-center rounded-full">
          321
        </span>
      </Button>
      <Button variant="outline" className="w-full sm:w-auto">
        Inactive Campaigns{" "}
        <span className="ml-4 size-8 bg-destructive text-foreground flex items-center justify-center rounded-full">
          03
        </span>
      </Button>
    </div>
  );
}
