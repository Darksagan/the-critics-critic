import React from "react";
import { formatDistanceToNow } from "date-fns";
import { ThumbsUp, Flag, MoreVertical, Edit } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import type { ForumPost } from "@/lib/forum/data";

interface PostCardProps {
  post: ForumPost;
  isOriginalPost?: boolean;
}

export function PostCard({ post, isOriginalPost = false }: PostCardProps) {
  const createdAtDate = new Date(post.createdAt);

  return (
    <Card className={isOriginalPost ? "border-primary/30" : ""}>
      <CardHeader className="flex flex-row items-start space-x-4 pb-3">
        <div className="flex flex-col items-center space-y-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="text-xs text-center">
            <div className="font-medium">{post.author.name}</div>
            <div className="text-muted-foreground">Joined {post.author.joined}</div>
            <div className="text-muted-foreground">{post.author.posts} posts</div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              {formatDistanceToNow(createdAtDate, { addSuffix: true })}
              {post.isEdited && <span className="ml-2">(edited)</span>}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="cursor-pointer">
                  <Edit className="mr-2 h-4 w-4" />
                  <span>Quote</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Flag className="mr-2 h-4 w-4" />
                  <span>Report</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="mt-2 whitespace-pre-line">
            {post.content}
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardFooter className="p-3 flex justify-between">
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <ThumbsUp className="mr-1 h-4 w-4" />
          <span>{post.likes}</span>
        </Button>
        <Button variant="outline" size="sm">
          Reply
        </Button>
      </CardFooter>
    </Card>
  );
}
