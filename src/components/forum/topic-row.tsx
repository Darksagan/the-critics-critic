import React from "react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { MessageSquare, Eye, Pin, Lock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { ForumTopic } from "@/lib/forum/data";

interface TopicRowProps {
  topic: ForumTopic;
}

export function TopicRow({ topic }: TopicRowProps) {
  const createdAtDate = new Date(topic.createdAt);
  const lastReplyDate = topic.lastReply ? new Date(topic.lastReply.at) : null;

  return (
    <div className="flex items-center gap-4 py-4 border-b last:border-0">
      {/* Topic Icon & Title */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          {topic.isPinned && (
            <Pin className="h-4 w-4 text-orange-500" />
          )}
          {topic.isLocked && (
            <Lock className="h-4 w-4 text-slate-500" />
          )}
          <h3 className="font-medium truncate">
            <Link
              href={`/forum/topic/${topic.id}`}
              className="hover:text-primary transition-colors"
            >
              {topic.title}
            </Link>
          </h3>
        </div>
        <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
          <span>Started by {topic.author.name}</span>
          <span>•</span>
          <span>{formatDistanceToNow(createdAtDate, { addSuffix: true })}</span>
        </div>
      </div>

      {/* Stats */}
      <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center">
          <MessageSquare className="mr-1 h-4 w-4" />
          <span>{topic.replies}</span>
        </div>
        <div className="flex items-center">
          <Eye className="mr-1 h-4 w-4" />
          <span>{topic.views}</span>
        </div>
      </div>

      {/* Last Reply */}
      {topic.lastReply && (
        <div className="hidden lg:flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={topic.lastReply.author.avatar} alt={topic.lastReply.author.name} />
            <AvatarFallback>{topic.lastReply.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <div className="font-medium">{topic.lastReply.author.name}</div>
            <div className="text-xs text-muted-foreground">
              {formatDistanceToNow(lastReplyDate!, { addSuffix: true })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
