import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Star, TrendingUp, ThumbsUp, ThumbsDown, Film, Award, Calendar } from "lucide-react";

// Temporary data - in a real app, we'd fetch this from an API
const critics = [
  {
    id: "1",
    name: "Eleanor Mathews",
    publication: "Cinematic Vision",
    avatar: "https://i.pravatar.cc/150?img=32",
    bio: "Veteran film critic specializing in indie and foreign cinema with over 15 years of experience. Eleanor's reviews are known for their depth and attention to directorial choices and narrative structure. Previously worked as a film theory professor before becoming a full-time critic.",
    reviewCount: 486,
    avgRating: 7.2,
    biasMetric: "Favors character-driven dramas",
    discrepancyRate: 18,
    genre: "Drama",
    socialMedia: {
      twitter: "@eleanorcritic",
      website: "cinematicvision.com",
    },
    recentReviews: [
      {
        id: 1,
        movie: "The Forgotten Path",
        rating: 9.2,
        avgCriticRating: 8.7,
        audienceRating: 5.6,
        date: "Feb 28, 2025",
        image: "https://ext.same-assets.com/1305686771/894498254.jpeg",
      },
      {
        id: 2,
        movie: "Echoes of Tomorrow",
        rating: 6.5,
        avgCriticRating: 4.3,
        audienceRating: 8.3,
        date: "Feb 12, 2025",
        image: "https://ext.same-assets.com/873106332/3525570599.jpeg",
      },
      {
        id: 3,
        movie: "The Last Memory",
        rating: 8.1,
        avgCriticRating: 8.5,
        audienceRating: 7.8,
        date: "Jan 17, 2025",
        image: "https://ext.same-assets.com/634093610/2497355559.jpeg",
      },
    ],
    biasChart: {
      drama: 85,
      comedy: 45,
      action: 30,
      scifi: 60,
      horror: 35,
      animation: 50,
      documentary: 90,
    },
    awards: {
      predictions: 42,
      accuracy: 76,
    },
  },
  {
    id: "2",
    name: "Marcus Chen",
    publication: "Film Observer",
    avatar: "https://i.pravatar.cc/150?img=60",
    bio: "Award-winning critic with focus on blockbuster analysis. Marcus brings technical expertise to his reviews, often highlighting cinematography, special effects, and sound design. Started his career as a film school graduate working in post-production before transitioning to criticism.",
    reviewCount: 734,
    avgRating: 6.8,
    biasMetric: "Tends to favor action franchises",
    discrepancyRate: 23,
    genre: "Action",
    socialMedia: {
      twitter: "@marcusfilmobs",
      website: "filmobserver.com",
    },
    recentReviews: [
      {
        id: 1,
        movie: "Captain America: Brave New World",
        rating: 7.8,
        avgCriticRating: 6.2,
        audienceRating: 8.5,
        date: "Mar 15, 2025",
        image: "https://ext.same-assets.com/2904732731/2895502533.jpeg",
      },
      {
        id: 2,
        movie: "The Alto Knights",
        rating: 8.4,
        avgCriticRating: 7.9,
        audienceRating: 7.2,
        date: "Mar 05, 2025",
        image: "https://ext.same-assets.com/1139749172/2858084274.jpeg",
      },
      {
        id: 3,
        movie: "Black Bag",
        rating: 9.2,
        avgCriticRating: 8.8,
        audienceRating: 7.1,
        date: "Feb 22, 2025",
        image: "https://ext.same-assets.com/1949775581/3312507257.jpeg",
      },
    ],
    biasChart: {
      drama: 50,
      comedy: 55,
      action: 90,
      scifi: 85,
      horror: 60,
      animation: 40,
      documentary: 35,
    },
    awards: {
      predictions: 37,
      accuracy: 62,
    },
  },
];

// This type of function would typically be a database query
function getCriticById(id: string) {
  return critics.find(critic => critic.id === id);
}

export default function CriticProfile({ params }: { params: { id: string } }) {
  const critic = getCriticById(params.id);

  if (!critic) {
    notFound();
  }

  return (
    <>
      <div className="container-custom pt-6 pb-12">
        <Button variant="ghost" size="sm" asChild className="mb-8">
          <Link href="/critics">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Critics
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar - Critic Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-32 w-32 rounded-full overflow-hidden mb-4">
                    <Image
                      src={critic.avatar}
                      alt={critic.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl">{critic.name}</CardTitle>
                  <CardDescription className="text-lg">{critic.publication}</CardDescription>
                  <div className="flex mt-2 gap-2">
                    <Badge variant="outline">{critic.genre} Specialist</Badge>
                    {critic.discrepancyRate < 20 ? (
                      <Badge variant="secondary">Low Discrepancy</Badge>
                    ) : critic.discrepancyRate > 30 ? (
                      <Badge variant="destructive">High Discrepancy</Badge>
                    ) : (
                      <Badge variant="outline">Medium Discrepancy</Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">{critic.bio}</p>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{critic.reviewCount}</div>
                      <div className="text-sm text-muted-foreground">Reviews</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{critic.avgRating}/10</div>
                      <div className="text-sm text-muted-foreground">Avg Rating</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="text-sm font-medium mb-2">Bias Assessment</h3>
                    <p className="text-sm text-muted-foreground mb-2">{critic.biasMetric}</p>

                    <div className="space-y-2">
                      {Object.entries(critic.biasChart).map(([genre, score]) => (
                        <div key={genre} className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="capitalize">{genre}</span>
                            <span>{score}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-primary rounded-full h-2"
                              style={{ width: `${score}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="text-sm font-medium mb-2">Social Media</h3>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center text-sm">
                        <span className="text-muted-foreground mr-2">Twitter:</span>
                        <span>{critic.socialMedia.twitter}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="text-muted-foreground mr-2">Website:</span>
                        <span>{critic.socialMedia.website}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Awards Prediction</CardTitle>
                <CardDescription>How well this critic predicts award winners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">{critic.awards.predictions}</div>
                    <div className="text-sm text-muted-foreground">Predictions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">{critic.awards.accuracy}%</div>
                    <div className="text-sm text-muted-foreground">Accuracy</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Critic Analysis</CardTitle>
                <CardDescription>
                  Understanding {critic.name}'s reviewing patterns and biases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="reviews">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="reviews">Recent Reviews</TabsTrigger>
                    <TabsTrigger value="discrepancies">Discrepancies</TabsTrigger>
                    <TabsTrigger value="trends">Rating Trends</TabsTrigger>
                  </TabsList>

                  <TabsContent value="reviews" className="mt-6">
                    <div className="space-y-6">
                      {critic.recentReviews.map((review) => (
                        <div key={review.id} className="flex gap-4 pb-6 border-b last:border-0">
                          <div className="relative h-24 w-16 flex-shrink-0 rounded-md overflow-hidden">
                            <Image
                              src={review.image}
                              alt={review.movie}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h3 className="font-medium">{review.movie}</h3>
                              <div className="flex items-center gap-1.5">
                                <Star className="h-4 w-4 text-accent fill-accent" />
                                <span className="font-medium">{review.rating}/10</span>
                              </div>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground mt-1">
                              <Calendar className="h-3 w-3 mr-1" />
                              {review.date}
                            </div>
                            <div className="grid grid-cols-2 gap-2 mt-3">
                              <div className="flex items-center text-sm gap-1">
                                <Film className="h-3 w-3 text-primary" />
                                <span className="text-muted-foreground">Avg Critics:</span>
                                <span>{review.avgCriticRating}/10</span>
                              </div>
                              <div className="flex items-center text-sm gap-1">
                                <ThumbsUp className="h-3 w-3 text-secondary" />
                                <span className="text-muted-foreground">Audience:</span>
                                <span>{review.audienceRating}/10</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="discrepancies" className="mt-6">
                    <div className="space-y-6">
                      {critic.recentReviews.map((review) => {
                        const criticDiff = +(review.rating - review.avgCriticRating).toFixed(1);
                        const audienceDiff = +(review.rating - review.audienceRating).toFixed(1);

                        return (
                          <div key={review.id} className="flex gap-4 pb-6 border-b last:border-0">
                            <div className="relative h-24 w-16 flex-shrink-0 rounded-md overflow-hidden">
                              <Image
                                src={review.image}
                                alt={review.movie}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <h3 className="font-medium">{review.movie}</h3>
                                <div className="flex items-center gap-1.5">
                                  <Star className="h-4 w-4 text-accent fill-accent" />
                                  <span className="font-medium">{review.rating}/10</span>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-2 mt-3">
                                <div>
                                  <div className="flex items-center text-sm justify-between mb-1">
                                    <span className="text-muted-foreground">vs. Other Critics</span>
                                    <Badge
                                      variant={criticDiff > 0 ? "outline" : "secondary"}
                                      className={criticDiff > 0 ? "border-primary/50 bg-primary/10" : ""}
                                    >
                                      {criticDiff > 0 ? "+" : ""}{criticDiff}
                                    </Badge>
                                  </div>
                                  <div className="w-full bg-muted rounded-full h-2">
                                    <div
                                      className={`rounded-full h-2 ${criticDiff > 0 ? "bg-primary" : "bg-secondary"}`}
                                      style={{
                                        width: `${Math.min(Math.abs(criticDiff) * 10, 100)}%`,
                                        marginLeft: criticDiff < 0 ? "auto" : 0,
                                      }}
                                    />
                                  </div>
                                </div>
                                <div>
                                  <div className="flex items-center text-sm justify-between mb-1">
                                    <span className="text-muted-foreground">vs. Audience</span>
                                    <Badge
                                      variant={audienceDiff > 0 ? "outline" : "secondary"}
                                      className={audienceDiff > 0 ? "border-primary/50 bg-primary/10" : ""}
                                    >
                                      {audienceDiff > 0 ? "+" : ""}{audienceDiff}
                                    </Badge>
                                  </div>
                                  <div className="w-full bg-muted rounded-full h-2">
                                    <div
                                      className={`rounded-full h-2 ${audienceDiff > 0 ? "bg-primary" : "bg-secondary"}`}
                                      style={{
                                        width: `${Math.min(Math.abs(audienceDiff) * 10, 100)}%`,
                                        marginLeft: audienceDiff < 0 ? "auto" : 0,
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </TabsContent>

                  <TabsContent value="trends" className="mt-6">
                    <div className="flex items-center justify-center h-64 border rounded-lg">
                      <p className="text-muted-foreground">
                        Rating trends visualization would appear here in a production app
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Review History</CardTitle>
                <CardDescription>Analysis of {critic.name}'s reviewing patterns over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <h3 className="text-lg font-medium">Genres Reviewed</h3>
                    <div className="space-y-3">
                      {Object.entries(critic.biasChart)
                        .sort(([, a], [, b]) => b - a)
                        .map(([genre, score]) => (
                          <div key={genre} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="capitalize">{genre}</span>
                              <span>{score}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2.5">
                              <div
                                className="bg-accent rounded-full h-2.5"
                                style={{ width: `${score}%` }}
                              />
                            </div>
                          </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center items-center">
                    <div className="h-48 w-48 bg-muted rounded-full flex items-center justify-center relative">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary">{critic.discrepancyRate}%</div>
                        <div className="text-sm text-muted-foreground">Audience Discrepancy</div>
                      </div>
                      <div className="absolute inset-0 border-4 border-primary rounded-full opacity-30" />
                      <div
                        className="absolute top-0 right-0 bottom-0 left-0 border-4 border-primary rounded-full"
                        style={{
                          clipPath: `polygon(50% 50%, 50% 0%, ${50 + critic.discrepancyRate * 3.6}% 0%)`,
                        }}
                      />
                    </div>
                    <p className="mt-4 text-sm text-center text-muted-foreground max-w-xs">
                      {critic.discrepancyRate < 20
                        ? "This critic's ratings closely align with audience preferences."
                        : critic.discrepancyRate > 30
                        ? "This critic's ratings often differ significantly from audience preferences."
                        : "This critic's ratings moderately differ from audience preferences."}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between items-center">
              <Button variant="outline" asChild>
                <Link href={`/critics/${Number(params.id) > 1 ? Number(params.id) - 1 : 2}`}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous Critic
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={`/critics/${Number(params.id) < 2 ? Number(params.id) + 1 : 1}`}>
                  Next Critic
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
