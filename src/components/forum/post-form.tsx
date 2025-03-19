import React from "react";
import { Bold, Italic, Link as LinkIcon, Image, List, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface PostFormProps {
  submitLabel?: string;
  placeholder?: string;
  replyingTo?: string;
  title?: string;
  onCancel?: () => void;
}

export function PostForm({
  submitLabel = "Post Reply",
  placeholder = "Write your reply here...",
  replyingTo,
  title = "Reply to this topic",
  onCancel
}: PostFormProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>{title}</CardTitle>
        {replyingTo && (
          <p className="text-sm text-muted-foreground">
            Replying to <span className="font-medium">{replyingTo}</span>
          </p>
        )}
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap items-center gap-1 border rounded-t-md p-1.5 bg-muted/50">
          <Button type="button" variant="ghost" size="sm" className="h-8 px-2">
            <Bold className="h-4 w-4" />
            <span className="sr-only">Bold</span>
          </Button>
          <Button type="button" variant="ghost" size="sm" className="h-8 px-2">
            <Italic className="h-4 w-4" />
            <span className="sr-only">Italic</span>
          </Button>
          <Button type="button" variant="ghost" size="sm" className="h-8 px-2">
            <Quote className="h-4 w-4" />
            <span className="sr-only">Quote</span>
          </Button>
          <Button type="button" variant="ghost" size="sm" className="h-8 px-2">
            <LinkIcon className="h-4 w-4" />
            <span className="sr-only">Link</span>
          </Button>
          <Button type="button" variant="ghost" size="sm" className="h-8 px-2">
            <List className="h-4 w-4" />
            <span className="sr-only">List</span>
          </Button>
          <Button type="button" variant="ghost" size="sm" className="h-8 px-2">
            <Image className="h-4 w-4" />
            <span className="sr-only">Image</span>
          </Button>
        </div>
        <Textarea
          className="min-h-[150px] border-t-0 rounded-t-none"
          placeholder={placeholder}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        {onCancel ? (
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        ) : (
          <div />
        )}
        <Button>{submitLabel}</Button>
      </CardFooter>
    </Card>
  );
}
