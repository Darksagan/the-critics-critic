"use client";

import React, { useState } from "react";
import { Info, ThumbsUp, BarChart3, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { MovieCard } from "@/components/compare/movie-card";
import { CriticReviewCard } from "@/components/compare/critic-review-card";
import { RatingChart } from "@/components/compare/rating-chart";
import { movies, getReviewsForMovie, getAverageRating } from "@/lib/compare/data";

export default function ComparePage() {
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("reviews");

  const selectedMovieData = selectedMovie
    ? movies.find(movie => movie.id === selectedMovie)
    : null;

  const reviews = selectedMovie
    ? getReviewsForMovie(selectedMovie)
    : [];

  const averageRating = selectedMovie
    ? getAverageRating(selectedMovie)
    : 0;

  const handleMovieSelect = (movieId: string) => {
    setSelectedMovie(movieId);
  };

  // Format average rating with decimal
  const formattedAverage = averageRating.toFixed(1);

  // Calculate a color for the average rating
  const getAverageRatingColor = (rating: number) => {
    if (rating >= 9) return "text-green-500";
    if (rating >= 7) return "text-emerald-500";
    if (rating >= 5) return "text-amber-500";
    return "text-red-500";
  };

  const averageRatingColor = getAverageRatingColor(averageRating);

  return (
    <div className="container mx-auto py-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Compare Critics</h1>
        <p className="text-xl text-muted-foreground">
          See how different critics rated the same films and compare their perspectives
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Movie selection */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Film className="mr-2 h-5 w-5" />
                Select a Film
              </CardTitle>
              <CardDescription>
                Choose a film to see reviews from different critics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                {movies.map(movie => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    selected={selectedMovie === movie.id}
                    onClick={() => handleMovieSelect(movie.id)}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column - Reviews and comparison */}
        <div className="lg:col-span-2">
          {selectedMovie ? (
            <>
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{selectedMovieData?.title}</h2>
                  <p className="text-muted-foreground">
                    {selectedMovieData?.year} • {selectedMovieData?.director}
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Average Rating</div>
                  <div className={`text-3xl font-bold ${averageRatingColor}`}>
                    {formattedAverage}
                  </div>
                </div>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-2 w-60">
                  <TabsTrigger value="reviews" className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>Reviews</span>
                  </TabsTrigger>
                  <TabsTrigger value="compare" className="flex items-center gap-1">
                    <BarChart3 className="h-4 w-4" />
                    <span>Compare</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="reviews" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {reviews.length > 0 ? (
                      reviews.map(review => (
                        <CriticReviewCard key={review.criticId} review={review} />
                      ))
                    ) : (
                      <div className="col-span-2 text-center py-12 text-muted-foreground">
                        No reviews found for this movie
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="compare" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Rating Comparison</CardTitle>
                      <CardDescription>
                        How different critics rated {selectedMovieData?.title}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RatingChart reviews={reviews} />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-4 bg-muted/50 rounded-lg border text-center">
              <Info className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium mb-2">Select a film to begin</h3>
              <p className="text-muted-foreground">
                Choose a film from the left panel to see reviews and comparisons from different critics
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
