import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CircleHelpIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export default function CampaignFilter() {
  return (
    <div className="space-y-3">
      <Card className="min-h-40 p-3">
        {/* <-- BLANK --> */}
        {/* OTHER CAMPAIGN FILTER */}
      </Card>

      <Card className="min-h-40 p-3 space-y-2">
        <div className="bg-background flex items-center gap-2 rounded-md py-3 px-4">
          <Switch defaultChecked id="surge-attention" />
          <Label className="font-bold" htmlFor="surge-attention">
            Surge Attention
          </Label>
        </div>
        <div className="bg-background flex items-center gap-2 rounded-md py-3 px-4">
          <Switch defaultChecked id="booked" />
          <Label className="font-bold" htmlFor="booked">
            Booked
          </Label>
        </div>
        <div className="bg-background flex items-center gap-2 rounded-md py-3 px-4">
          <Switch defaultChecked id="pre-booked" />
          <Label className="font-bold" htmlFor="pre-booked">
            Pre-Booked
          </Label>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="ml-auto">
                <CircleHelpIcon className="size-4" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Pre-Booked Campaign</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </Card>

      <Card className="min-h-40 p-3">
        {/* <-- BLANK --> */}
        {/* OTHER CAMPAIGN FILTER */}
      </Card>
    </div>
  );
}
