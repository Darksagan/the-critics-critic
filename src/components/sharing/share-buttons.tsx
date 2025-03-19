"use client";

import React, { useState } from "react";
import { Twitter, Facebook, Linkedin, Mail, Link2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ShareButtonsProps {
  title: string;
  description?: string;
  url?: string;
  compact?: boolean;
  dropdownOnly?: boolean;
}

export function ShareButtons({
  title,
  description = "",
  url = typeof window !== "undefined" ? window.location.href : "",
  compact = false,
  dropdownOnly = false
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  // Get the current URL if not provided
  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");

  // URL encode the title and description
  const encodedTitle = encodeURIComponent(title);
  const encodedDesc = encodeURIComponent(description);
  const encodedUrl = encodeURIComponent(shareUrl);

  // Social media share URLs
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const mailUrl = `mailto:?subject=${encodedTitle}&body=${encodedDesc}%0A%0A${encodedUrl}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const shareButtons = (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size={compact ? "icon" : "default"}
              className={compact ? "h-8 w-8" : ""}
              onClick={() => window.open(twitterUrl, "_blank")}
            >
              <Twitter className={compact ? "h-4 w-4" : "h-4 w-4 mr-2"} />
              {!compact && "Twitter"}
            </Button>
          </TooltipTrigger>
          <TooltipContent>Share on Twitter</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size={compact ? "icon" : "default"}
              className={compact ? "h-8 w-8" : ""}
              onClick={() => window.open(facebookUrl, "_blank")}
            >
              <Facebook className={compact ? "h-4 w-4" : "h-4 w-4 mr-2"} />
              {!compact && "Facebook"}
            </Button>
          </TooltipTrigger>
          <TooltipContent>Share on Facebook</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size={compact ? "icon" : "default"}
              className={compact ? "h-8 w-8" : ""}
              onClick={() => window.open(linkedinUrl, "_blank")}
            >
              <Linkedin className={compact ? "h-4 w-4" : "h-4 w-4 mr-2"} />
              {!compact && "LinkedIn"}
            </Button>
          </TooltipTrigger>
          <TooltipContent>Share on LinkedIn</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size={compact ? "icon" : "default"}
              className={compact ? "h-8 w-8" : ""}
              onClick={() => window.open(mailUrl, "_blank")}
            >
              <Mail className={compact ? "h-4 w-4" : "h-4 w-4 mr-2"} />
              {!compact && "Email"}
            </Button>
          </TooltipTrigger>
          <TooltipContent>Share via Email</TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size={compact ? "icon" : "default"}
              className={compact ? "h-8 w-8" : ""}
              onClick={copyToClipboard}
            >
              {copied ? (
                <Check className={compact ? "h-4 w-4" : "h-4 w-4 mr-2"} />
              ) : (
                <Link2 className={compact ? "h-4 w-4" : "h-4 w-4 mr-2"} />
              )}
              {!compact && (copied ? "Copied!" : "Copy Link")}
            </Button>
          </TooltipTrigger>
          <TooltipContent>{copied ? "Copied!" : "Copy Link"}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );

  if (dropdownOnly) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            Share
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => window.open(twitterUrl, "_blank")}>
            <Twitter className="mr-2 h-4 w-4" />
            <span>Twitter</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => window.open(facebookUrl, "_blank")}>
            <Facebook className="mr-2 h-4 w-4" />
            <span>Facebook</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => window.open(linkedinUrl, "_blank")}>
            <Linkedin className="mr-2 h-4 w-4" />
            <span>LinkedIn</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => window.open(mailUrl, "_blank")}>
            <Mail className="mr-2 h-4 w-4" />
            <span>Email</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={copyToClipboard}>
            {copied ? <Check className="mr-2 h-4 w-4" /> : <Link2 className="mr-2 h-4 w-4" />}
            <span>{copied ? "Copied!" : "Copy Link"}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {shareButtons}
    </div>
  );
}
