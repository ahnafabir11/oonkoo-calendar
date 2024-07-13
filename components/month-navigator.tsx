"use client";

import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { cn, createQueryString } from "@/lib/utils";
import { addMonths, format, subMonths } from "date-fns";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function MonthNavigator({ className }: { className?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedDate = searchParams.get("selectedDate") || new Date();

  // this function will help to keep the existing params and
  // add the new selectedDate param in the end of query string
  const generateQueryString = useCallback(createQueryString, [searchParams]);

  const navigatePreviousMonth = () => {
    const updatedDate = format(subMonths(selectedDate, 1), "yyyy-MM-dd");
    const qureyString = generateQueryString(searchParams, {
      selectedDate: updatedDate,
    });
    router.push(`?${qureyString}`);
  };

  const navigateNextMonth = () => {
    const updatedDate = format(addMonths(selectedDate, 1), "yyyy-MM-dd");
    const qureyString = generateQueryString(searchParams, {
      selectedDate: updatedDate,
    });
    router.push(`?${qureyString}`);
  };

  return (
    <div className={cn("flex items-center justify-between", className)}>
      <div>
        <Button size="icon" variant="ghost" onClick={navigatePreviousMonth}>
          <ChevronLeftIcon className="size-6" />
        </Button>
        <Button size="icon" variant="ghost" onClick={navigateNextMonth}>
          <ChevronRightIcon className="size-6" />
        </Button>
      </div>

      <h5 className="text-xl leading-5 font-medium">
        {format(selectedDate, "MMMM yyyy")}
      </h5>
    </div>
  );
}
