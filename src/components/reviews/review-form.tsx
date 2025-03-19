import React from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ReviewForm() {
  const [rating, setRating] = React.useState<number>(0);
  const [hoveredRating, setHoveredRating] = React.useState<number>(0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Write a Review</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="rating">Rating</Label>
          <div className="flex space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-6 w-6 cursor-pointer ${
                  i < (hoveredRating || rating)
                    ? "text-yellow-500 fill-yellow-500"
                    : "text-muted-foreground"
                }`}
                onMouseEnter={() => setHoveredRating(i + 1)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => setRating(i + 1)}
              />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">
              {rating > 0 ? `${rating} out of 5 stars` : "Select a rating"}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="review">Your Review</Label>
          <Textarea
            id="review"
            placeholder="Share your thoughts about this critic..."
            className="min-h-[120px]"
          />
          <p className="text-xs text-muted-foreground">
            Tell others what you think about this critic's style, biases, and accuracy. Be honest but respectful.
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Submit Review</Button>
      </CardFooter>
    </Card>
  );
}
