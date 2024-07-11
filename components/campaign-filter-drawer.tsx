import { cn } from "@/lib/utils";
import { ListFilterIcon } from "lucide-react";
import CampaignFilter from "./campaign-filter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function CampaignFilterDrawer({
  className,
}: {
  className?: string;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className={cn("", className)}>
          <ListFilterIcon className="size-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="pt-10">
        <CampaignFilter />
      </SheetContent>
    </Sheet>
  );
}
