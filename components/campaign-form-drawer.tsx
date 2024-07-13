import { cn } from "@/lib/utils";
import CampaignForm from "./campaign-form";
import { Button } from "@/components/ui/button";
import { CalendarPlusIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function CampaignFormDrawer({
  className,
}: {
  className?: string;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className={cn("", className)}>
          <CalendarPlusIcon className="size-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="p-1 pt-10">
        <ScrollArea className="h-full">
          <CampaignForm />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
