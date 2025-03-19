"use client";

import React from "react";
import { CriticReview } from "@/lib/compare/data";

interface RatingChartProps {
  reviews: CriticReview[];
  height?: number;
}

export function RatingChart({ reviews, height = 250 }: RatingChartProps) {
  if (reviews.length === 0) {
    return <div className="text-center p-8 text-muted-foreground">No reviews available</div>;
  }

  // Sort reviews by rating (highest to lowest)
  const sortedReviews = [...reviews].sort((a, b) => b.rating - a.rating);

  // Find min and max values for scaling
  const maxRating = Math.max(...reviews.map(r => r.rating));
  const minRating = Math.min(...reviews.map(r => r.rating));

  // Padding for chart
  const padding = 10;

  // Bar height calculations
  const availableHeight = height - padding * 2;
  const barHeight = Math.min(30, availableHeight / reviews.length);
  const barGap = 10;

  // Calculate a color based on the rating
  const getRatingColor = (rating: number) => {
    if (rating >= 9) return "#10b981"; // emerald-500
    if (rating >= 7) return "#34d399"; // emerald-400
    if (rating >= 5) return "#f59e0b"; // amber-500
    if (rating >= 3) return "#f97316"; // orange-500
    return "#ef4444"; // red-500
  };

  return (
    <div className="p-4">
      <div className="relative" style={{ height }}>
        {/* Y-axis scale */}
        <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-muted-foreground">
          <div>10</div>
          <div>7.5</div>
          <div>5</div>
          <div>2.5</div>
          <div>0</div>
        </div>

        {/* Horizontal grid lines */}
        <div className="absolute left-8 right-0 top-0 bottom-0">
          {[0, 2.5, 5, 7.5, 10].map(value => (
            <div
              key={value}
              className="absolute left-0 right-0 border-t border-border/30"
              style={{ top: `${(10 - value) / 10 * 100}%` }}
            />
          ))}
        </div>

        {/* Bars for each critic */}
        <div className="absolute left-12 right-0 top-0 bottom-0 flex flex-col justify-around">
          {sortedReviews.map((review, index) => {
            const barWidth = `${(review.rating / 10) * 100}%`;
            const color = getRatingColor(review.rating);

            return (
              <div
                key={review.criticId + "-" + review.movieId}
                className="relative flex items-center"
              >
                <div className="mr-2 w-24 text-xs truncate" title={review.criticName}>
                  {review.criticName}
                </div>
                <div className="relative flex-grow h-5">
                  <div
                    className="absolute left-0 top-0 h-full rounded"
                    style={{
                      width: barWidth,
                      backgroundColor: color,
                      transition: "width 0.5s ease-out"
                    }}
                  />
                  <div className="absolute left-0 top-0 h-full w-full flex items-center pl-2 text-xs font-medium">
                    {review.rating.toFixed(1)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
