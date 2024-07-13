import { Button } from "@/components/ui/button";
import CampaignFormDrawer from "./campaign-form-drawer";
import CampaignFilterDrawer from "./campaign-filter-drawer";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CalendarFilter() {
  return (
    <div className="flex items-center justify-between md:justify-start gap-4 py-5 px-4 flex-wrap">
      <CampaignFilterDrawer className="order-1 xl:hidden" />

      <CampaignFormDrawer className="order-2 sm:order-3 md:order-4 xl:hidden" />

      {/* SWITCH MONTH */}
      <div className="flex items-center justify-between basis-full sm:basis-auto order-3 sm:order-2">
        <div>
          <Button size="icon" variant="ghost">
            <ChevronLeftIcon className="size-6" />
          </Button>
          <Button size="icon" variant="ghost">
            <ChevronRightIcon className="size-6" />
          </Button>
        </div>

        <h5 className="text-xl leading-5 font-medium">June 2024</h5>
      </div>

      {/* SWITCH CALENDER VIEW */}
      <Tabs
        defaultValue="month"
        className="basis-full md:basis-auto order-4 md:order-3 md:ml-auto"
      >
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="month">Month</TabsTrigger>
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="day">Day</TabsTrigger>
          <TabsTrigger value="list">List</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
