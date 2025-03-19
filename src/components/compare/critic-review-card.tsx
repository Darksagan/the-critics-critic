import React from "react";
import { ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CriticReview } from "@/lib/compare/data";

interface CriticReviewCardProps {
  review: CriticReview;
  backgroundColor?: string;
}

export function CriticReviewCard({
  review,
  backgroundColor = "var(--background)"
}: CriticReviewCardProps) {
  // Format the rating with a decimal if needed
  const formattedRating = review.rating.toString().includes(".")
    ? review.rating.toFixed(1)
    : review.rating.toString();

  // Calculate a color based on the rating
  const getRatingColor = (rating: number) => {
    if (rating >= 9) return "text-green-500";
    if (rating >= 7) return "text-emerald-500";
    if (rating >= 5) return "text-amber-500";
    return "text-red-500";
  };

  const ratingColor = getRatingColor(review.rating);

  return (
    <Card className="h-full" style={{ backgroundColor }}>
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <Avatar className="h-10 w-10">
          <AvatarFallback>{review.criticName[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1 overflow-hidden">
          <div className="flex items-start justify-between">
            <div className="space-y-0.5">
              <h3 className="font-medium text-base leading-none">{review.criticName}</h3>
              <p className="text-xs text-muted-foreground truncate">{review.publication}</p>
            </div>
            <div className={`text-lg font-bold ${ratingColor}`}>
              {formattedRating}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="mb-1 text-xs text-muted-foreground">
          {review.date}
        </div>
        <p className="text-sm">{review.snippet}</p>

        {review.url && (
          <div className="mt-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-xs px-2 h-7"
              onClick={() => window.open(review.url, '_blank')}
            >
              Read full review <ExternalLink className="ml-1 h-3 w-3" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
