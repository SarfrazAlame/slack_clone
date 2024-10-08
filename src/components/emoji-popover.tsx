import React, { useState } from "react";
import { Tooltip, TooltipProvider } from "./ui/tooltip";
import { Popover } from "./ui/popover";

interface EmojiPopOverProps {
  children: React.ReactNode;
  hint?: string;
  onEmojiSelect: (emoji: string) => void;
}

export const EmojiPopOver = ({
  children,
  hint = "Emoji",
  onEmojiSelect,
}: EmojiPopOverProps) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    <TooltipProvider>
      <Popover>
        <Tooltip
        
        >{children}</Tooltip>
      </Popover>
    </TooltipProvider>
  );
};
