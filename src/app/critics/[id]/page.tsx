import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Star, TrendingUp, ThumbsUp, ThumbsDown, Film, Award, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

// Types for critic data
interface Review {
  id: number;
  movie: string;
  rating: number;
  avgCriticRating: number;
  audienceRating: number;
  date: string;
  image: string;
}

interface Critic {
  id: string;
  name: string;
  publication: string;
  avatar: string;
  bio: string;
  reviewCount: number;
  avgRating: number;
  biasMetric: string;
  discrepancyRate: number;
  genre: string;
  socialMedia: { twitter: string; website: string };
  recentReviews: Review[];
  biasChart: { [key: string]: number };
  awards: { predictions: number; accuracy: number };
}

export default function CriticProfile({ params }: { params: { id: string } }) {
  const [critic, setCritic] = useState<Critic | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCritic = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/critics/${params.id}`);
        if (!response.ok) throw new Error("Critic not found");
        const data = await response.json();
        setCritic(data);
      } catch (error) {
        console.error("Error fetching critic:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCritic();
  }, [params.id]);

  if (isLoading) return <div className="container-custom pt-6 pb-12">Loading...</div>;
  if (!critic) notFound();

  return (
    <div className={cn("container-custom pt-6 pb-12")}>
      <Button variant="ghost" size="sm" asChild className={cn("mb-8")}>
        <Link href="/critics">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Critics
        </Link>
      </Button>

      <div className={cn("grid grid-cols-1 lg:grid-cols-3 gap-8")}>
        {/* Sidebar - Critic Info */}
        <div className={cn("space-y-6")}>
          <Card>
            <CardHeader className={cn("pb-2")}>
              <div className={cn("flex flex-col items-center text-center")}>
                <div className={cn("relative h-32 w-32 rounded-full overflow-hidden mb-4")}>
                  <Image
                    src={critic.avatar || "/fallback.png"}
                    alt={critic.name}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <CardTitle className={cn("text-2xl")}>{critic.name}</CardTitle>
                <CardDescription className={cn("text-lg")}>{critic.publication}</CardDescription>
                <div className={cn("flex mt-2 gap-2")}>
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
              <div className={cn("space-y-4")}>
                <p className={cn("text-muted-foreground")}>{critic.bio}</p>
                <div className={cn("grid grid-cols-2 gap-4 pt-4 border-t")}>
                  <div className={cn("text-center")}>
                    <div className={cn("text-2xl font-bold text-primary")}>{critic.reviewCount}</div>
                    <div className={cn("text-sm text-muted-foreground")}>Reviews</div>
                  </div>
                  <div className={cn("text-center")}>
                    <div className={cn("text-2xl font-bold text-primary")}>{critic.avgRating}/10</div>
                    <div className={cn("text-sm text-muted-foreground")}>Avg Rating</div>
                  </div>
                </div>
                <div className={cn("pt-4 border-t")}>
                  <h3 className={cn("text-sm font-medium mb-2")}>Bias Assessment</h3>
                  <p className={cn("text-sm text-muted-foreground mb-2")}>{critic.biasMetric}</p>
                  <div className={cn("space-y-2")}>
                    {Object.entries(critic.biasChart).map(([genre, score]) => (
                      <div key={genre} className={cn("space-y-1")}>
                        <div className={cn("flex justify-between text-xs")}>
                          <span className={cn("capitalize")}>{genre}</span>
                          <span>{score}%</span>
                        </div>
                        <div className={cn("w-full bg-muted rounded-full h-2")}>
                          <div
                            className={cn("bg-primary rounded-full h-2")}
                            style={{ width: `${score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={cn("pt-4 border-t")}>
                  <h3 className={cn("text-sm font-medium mb-2")}>Social Media</h3>
                  <div className={cn("grid grid-cols-1 gap-2")}>
                    <div className={cn("flex items-center text-sm")}>
                      <span className={cn("text-muted-foreground mr-2")}>Twitter:</span>
                      <span>{critic.socialMedia.twitter}</span>
                    </div>
                    <div className={cn("flex items-center text-sm")}>
                      <span className={cn("text-muted-foreground mr-2")}>Website:</span>
                      <span>{critic.socialMedia.website}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className={cn("text-lg")}>Awards Prediction</CardTitle>
              <CardDescription>How well this critic predicts award winners</CardDescription>
            </CardHeader>
            <CardContent>
              <div className={cn("grid grid-cols-2 gap-4")}>
                <div className={cn("text-center")}>
                  <div className={cn("text-2xl font-bold text-accent")}>{critic.awards.predictions}</div>
                  <div className={cn("text-sm text-muted-foreground")}>Predictions</div>
                </div>
                <div className={cn("text-center")}>
                  <div className={cn("text-2xl font-bold text-accent")}>{critic.awards.accuracy}%</div>
                  <div className={cn("text-sm text-muted-foreground")}>Accuracy</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className={cn("lg:col-span-2 space-y-8")}>
          <Card>
            <CardHeader>
              <CardTitle>Critic Analysis</CardTitle>
              <CardDescription>Understanding {critic.name}'s reviewing patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="reviews">
                <TabsList className={cn("grid w-full grid-cols-3")}>
                  <TabsTrigger value="reviews">Recent Reviews</TabsTrigger>
                  <TabsTrigger value="discrepancies">Discrepancies</TabsTrigger>
                  <TabsTrigger value="trends">Rating Trends</TabsTrigger>
                </TabsList>

                <TabsContent value="reviews" className={cn("mt-6")}>
                  <div className={cn("space-y-6")}>
                    {critic.recentReviews.map((review) => (
                      <div key={review.id} className={cn("flex gap-4 pb-6 border-b last:border-0")}>
                        <div className={cn("relative h-24 w-16 flex-shrink-0 rounded-md overflow-hidden")}>
                          <Image
                            src={review.image || `https://image.tmdb.org/t/p/w200${getMoviePoster(review.movie)}` || "/fallback.png"}
                            alt={review.movie}
                            fill
                            className="object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className={cn("flex-1")}>
                          <div className={cn("flex justify-between")}>
                            <h3 className={cn("font-medium")}>{review.movie}</h3>
                            <div className={cn("flex items-center gap-1.5")}>
                              <Star className="h-4 w-4 text-accent fill-accent" />
                              <span className={cn("font-medium")}>{review.rating}/10</span>
                            </div>
                          </div>
                          <div className={cn("flex items-center text-sm text-muted-foreground mt-1")}>
                            <Calendar className="h-3 w-3 mr-1" />
                            {review.date}
                          </div>
                          <div className={cn("grid grid-cols-2 gap-2 mt-3")}>
                            <div className={cn("flex items-center text-sm gap-1")}>
                              <Film className="h-3 w-3 text-primary" />
                              <span className={cn("text-muted-foreground")}>Avg Critics:</span>
                              <span>{review.avgCriticRating}/10</span>
                            </div>
                            <div className={cn("flex items-center text-sm gap-1")}>
                              <ThumbsUp className="h-3 w-3 text-secondary" />
                              <span className={cn("text-muted-foreground")}>Audience:</span>
                              <span>{review.audienceRating}/10</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="discrepancies" className={cn("mt-6")}>
                  <div className={cn("space-y-6")}>
                    {critic.recentReviews.map((review) => {
                      const criticDiff = +(review.rating - review.avgCriticRating).toFixed(1);
                      const audienceDiff = +(review.rating - review.audienceRating).toFixed(1);
                      return (
                        <div key={review.id} className={cn("flex gap-4 pb-6 border-b last:border-0")}>
                          <div className={cn("relative h-24 w-16 flex-shrink-0 rounded-md overflow-hidden")}>
                            <Image
                              src={review.image || `https://image.tmdb.org/t/p/w200${getMoviePoster(review.movie)}` || "/fallback.png"}
                              alt={review.movie}
                              fill
                              className="object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div className={cn("flex-1")}>
                            <div className={cn("flex justify-between")}>
                              <h3 className={cn("font-medium")}>{review.movie}</h3>
                              <div className={cn("flex items-center gap-1.5")}>
                                <Star className="h-4 w-4 text-accent fill-accent" />
                                <span className={cn("font-medium")}>{review.rating}/10</span>
                              </div>
                            </div>
                            <div className={cn("grid grid-cols-2 gap-2 mt-3")}>
                              <div>
                                <div className={cn("flex items-center text-sm justify-between mb-1")}>
                                  <span className={cn("text-muted-foreground")}>vs. Other Critics</span>
                                  <Badge
                                    variant={criticDiff > 0 ? "outline" : "secondary"}
                                    className={cn(criticDiff > 0 ? "border-primary/50 bg-primary/10" : "")}
                                  >
                                    {criticDiff > 0 ? "+" : ""}{criticDiff}
                                  </Badge>
                                </div>
                                <div className={cn("w-full bg-muted rounded-full h-2")}>
                                  <div
                                    className={cn(`rounded-full h-2 ${criticDiff > 0 ? "bg-primary" : "bg-secondary"}`)}
                                    style={{
                                      width: `${Math.min(Math.abs(criticDiff) * 10, 100)}%`,
                                      marginLeft: criticDiff < 0 ? "auto" : 0,
                                    }}
                                  />
                                </div>
                              </div>
                              <div>
                                <div className={cn("flex items-center text-sm justify-between mb-1")}>
                                  <span className={cn("text-muted-foreground")}>vs. Audience</span>
                                  <Badge
                                    variant={audienceDiff > 0 ? "outline" : "secondary"}
                                    className={cn(audienceDiff > 0 ? "border-primary/50 bg-primary/10" : "")}
                                  >
                                    {audienceDiff > 0 ? "+" : ""}{audienceDiff}
                                  </Badge>
                                </div>
                                <div className={cn("w-full bg-muted rounded-full h-2")}>
                                  <div
                                    className={cn(`rounded-full h-2 ${audienceDiff > 0 ? "bg-primary" : "bg-secondary"}`)}
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

                <TabsContent value="trends" className={cn("mt-6")}>
                  <div className="flex items-center justify-center h-64 border rounded-lg">
                    <chartjs type="line" config='{"data":{"labels":["Jan 2025","Feb 2025","Mar 2025","Apr 2025","May 2025"],"datasets":[{"label":"Rating","data":[7.2,7.1,7.3,7.0,7.4],"borderColor":"rgba(249,115,22,1)","backgroundColor":"rgba(249,115,22,0.2)","fill":true,"tension":0.4}]},"options":{"responsive":true,"plugins":{"legend":{"labels":{"color":"rgba(255,255,255,0.87)"}},"tooltip":{"callbacks":{"label":function(context){return context.dataset.label + ": " + context.parsed.y + "/10";}}}},"scales":{"y":{"beginAtZero":true,"max":10,"ticks":{"color":"rgba(255,255,255,0.87)"}},"x":{"ticks":{"color":"rgba(255,255,255,0.87)"}}}}'></chartjs>
                    <p className={cn("text-muted-foreground")}>Rating trends over time</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Review History</CardTitle>
              <CardDescription>Analysis of {critic.name}'s reviewing patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className={cn("flex flex-col md:flex-row gap-6")}>
                <div className={cn("flex-1 space-y-4")}>
                  <h3 className={cn("text-lg font-medium")}>Genres Reviewed</h3>
                  <div className={cn("space-y-3")}>
                    {Object.entries(critic.biasChart)
                      .sort(([, a], [, b]) => b - a)
                      .map(([genre, score]) => (
                        <div key={genre} className={cn("space-y-1")}>
                          <div className={cn("flex justify-between text-sm")}>
                            <span className={cn("capitalize")}>{genre}</span>
                            <span>{score}%</span>
                          </div>
                          <div className={cn("w-full bg-muted rounded-full h-2.5")}>
                            <div
                              className={cn("bg-accent rounded-full h-2.5")}
                              style={{ width: `${score}%` }}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className={cn("flex-1 flex flex-col justify-center items-center")}>
                  <div className={cn("h-48 w-48 bg-muted rounded-full flex items-center justify-center relative")}>
                    <div className={cn("text-center")}>
                      <div className={cn("text-4xl font-bold text-primary")}>{critic.discrepancyRate}%</div>
                      <div className={cn("text-sm text-muted-foreground")}>Audience Discrepancy</div>
                    </div>
                    <div className={cn("absolute inset-0 border-4 border-primary rounded-full opacity-30")} />
                    <div
                      className={cn("absolute top-0 right-0 bottom-0 left-0 border-4 border-primary rounded-full")}
                      style={{
                        clipPath: `polygon(50% 50%, 50% 0%, ${50 + critic.discrepancyRate * 3.6}% 0%)`,
                      }}
                    />
                  </div>
                  <p className={cn("mt-4 text-sm text-center text-muted-foreground max-w-xs")}>
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

          <div className={cn("flex justify-between items-center")}>
            <Button variant="outline" asChild>
              <Link href={`/critics/${parseInt(params.id) > 1 ? (parseInt(params.id) - 1).toString() : "1"}`}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous Critic
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href={`/critics/${parseInt(params.id) < critics.length ? (parseInt(params.id) + 1).toString() : "2"}`}>
                Next Critic <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Placeholder function to map movie titles to TMDb poster paths (replace with API call)
function getMoviePoster(movieTitle: string): string {
  // This is a mock; in a real app, query TMDb API with movie title
  const posterMap: { [key: string]: string } = {
    "The Forgotten Path": "/path/to/poster1.jpg",
    "Echoes of Tomorrow": "/path/to/poster2.jpg",
    "The Last Memory": "/path/to/poster3.jpg",
    "Captain America: Brave New World": "/path/to/poster4.jpg",
    "The Alto Knights": "/path/to/poster5.jpg",
    "Black Bag": "/path/to/poster6.jpg",
  };
  return posterMap[movieTitle] || "";
}