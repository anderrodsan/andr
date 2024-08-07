"use client";

import { Copy, File } from "lucide-react";
import React from "react";
import { highlight } from "sugar-high";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";

export default function Code({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  let codeHTML = highlight(children as string);

  const [copied, setCopied] = React.useState<boolean>(false);

  return (
    <div className="relative p-4 pt-5 rounded-lg bg-muted">
      <div className="absolute top-0 left-0 w-full flex items-center justify-end rounded-t-lg p-2">
        <TooltipProvider>
          <Tooltip open={copied} delayDuration={0}>
            <TooltipTrigger
              className="relative p-2 rounded-lg bg-secondary opacity-80 hover:opacity-70 text-black dark:text-white"
              onClick={() => {
                navigator.clipboard.writeText(children as string);
                setCopied(true);
                setTimeout(() => setCopied(false), 1000);
              }}
            >
              <Copy size={16} />
            </TooltipTrigger>
            <TooltipContent>Copied!</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <code
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        className="w-full overflow-x-auto"
      />
    </div>
  );
}
