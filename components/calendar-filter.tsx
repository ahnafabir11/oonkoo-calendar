import MonthNavigator from "./month-navigator";
import CampaignFormDrawer from "./campaign-form-drawer";
import CampaignFilterDrawer from "./campaign-filter-drawer";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CalendarFilter() {
  return (
    <div className="flex items-center justify-between md:justify-start gap-4 py-5 px-4 flex-wrap">
      <CampaignFilterDrawer className="order-1 xl:hidden" />

      <CampaignFormDrawer className="order-2 sm:order-3 md:order-4 xl:hidden" />

      <MonthNavigator className="basis-full sm:basis-auto order-3 sm:order-2" />

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
