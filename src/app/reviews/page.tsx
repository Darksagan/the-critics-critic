import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ReviewCard } from "@/components/reviews/review-card";
import { ReviewForm } from "@/components/reviews/review-form";
import { reviews } from "@/lib/reviews/data";

export const metadata = {
  title: "Community Reviews - The Critics' Critic",
  description: "Read and share opinions about film critics from our community of movie lovers.",
};

export default function ReviewsPage() {
  // Group reviews by criticId
  const reviewsByGroup = reviews.reduce<Record<string, typeof reviews>>((acc, review) => {
    if (!acc[review.criticId]) {
      acc[review.criticId] = [];
    }
    acc[review.criticId].push(review);
    return acc;
  }, {});

  return (
    <div className="container mx-auto py-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Community Reviews</h1>
        <p className="text-xl text-muted-foreground">
          Read and share opinions about film critics from our community of movie lovers.
        </p>
      </div>

      <Separator className="my-8" />

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="all">All Reviews</TabsTrigger>
          <TabsTrigger value="critic1">Roger Ebert</TabsTrigger>
          <TabsTrigger value="critic2">A.O. Scott</TabsTrigger>
          <TabsTrigger value="critic3">Pauline Kael</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </TabsContent>

        <TabsContent value="critic1" className="space-y-6">
          {reviewsByGroup["1"]?.map((review) => (
            <ReviewCard key={review.id} review={review} />
          )) || <p>No reviews yet for this critic.</p>}
        </TabsContent>

        <TabsContent value="critic2" className="space-y-6">
          {reviewsByGroup["2"]?.map((review) => (
            <ReviewCard key={review.id} review={review} />
          )) || <p>No reviews yet for this critic.</p>}
        </TabsContent>

        <TabsContent value="critic3" className="space-y-6">
          {reviewsByGroup["3"]?.map((review) => (
            <ReviewCard key={review.id} review={review} />
          )) || <p>No reviews yet for this critic.</p>}
        </TabsContent>
      </Tabs>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Add Your Review</h2>
        <ReviewForm />
      </div>
    </div>
  );
}
