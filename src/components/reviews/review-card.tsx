import React from "react";
import { Star, ThumbsUp, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ReviewType } from "@/lib/reviews/data";

export function ReviewCard({ review }: { review: ReviewType }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start space-x-4 pb-2">
        <Avatar>
          <AvatarImage src={review.user.avatar} alt={review.user.name} />
          <AvatarFallback>{review.user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <div className="font-medium">{review.user.name}</div>
          <div className="flex items-center text-sm text-muted-foreground">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="mx-2">•</span>
            <span>{review.date}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{review.content}</p>
      </CardContent>
      <Separator />
      <CardFooter className="p-4 flex justify-between">
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <ThumbsUp className="mr-1 h-4 w-4" />
          <span>{review.likes}</span>
        </Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <MessageSquare className="mr-1 h-4 w-4" />
          <span>{review.replies}</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
