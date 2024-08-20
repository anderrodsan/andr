"use client";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { getCalApi } from "@calcom/embed-react";

export default function BookMeeting({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#FFFFFF" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Button
      size={"sm"}
      className={className}
      data-cal-namespace=""
      data-cal-link="anderrodsan/30min"
      data-cal-config='{"layout":"month_view"}'
    >
      {title}
    </Button>
  );
}
