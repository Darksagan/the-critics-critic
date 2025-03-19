import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Film, Star, TrendingUp, User, Award, PieChart, Search } from "lucide-react";

// Temporary data for our homepage
const featuredCritics = [
  {
    id: 1,
    name: "Eleanor Mathews",
    publication: "Cinematic Vision",
    avatar: "https://i.pravatar.cc/150?img=32",
    bio: "Veteran film critic specializing in indie and foreign cinema",
    reviewCount: 486,
    avgRating: 7.2,
    biasMetric: "Favors character-driven dramas",
    discrepancyRate: 18,
  },
  {
    id: 2,
    name: "Marcus Chen",
    publication: "Film Observer",
    avatar: "https://i.pravatar.cc/150?img=60",
    bio: "Award-winning critic with focus on blockbuster analysis",
    reviewCount: 734,
    avgRating: 6.8,
    biasMetric: "Tends to favor action franchises",
    discrepancyRate: 23,
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    publication: "The Movie Column",
    avatar: "https://i.pravatar.cc/150?img=5",
    bio: "Specializes in genre films with attention to representation",
    reviewCount: 521,
    avgRating: 7.5,
    biasMetric: "Prioritizes diverse storytelling",
    discrepancyRate: 15,
  },
  {
    id: 4,
    name: "James Wilson",
    publication: "Screen Analysis",
    avatar: "https://i.pravatar.cc/150?img=11",
    bio: "Former filmmaker turned critic with technical expertise",
    reviewCount: 612,
    avgRating: 6.5,
    biasMetric: "Emphasis on technical achievement",
    discrepancyRate: 27,
  },
];

const recentDiscrepancies = [
  {
    id: 1,
    movie: "The Forgotten Path",
    criticScore: 92,
    audienceScore: 56,
    discrepancy: 36,
    image: "https://ext.same-assets.com/1305686771/894498254.jpeg",
  },
  {
    id: 2,
    movie: "Echoes of Tomorrow",
    criticScore: 43,
    audienceScore: 83,
    discrepancy: 40,
    image: "https://ext.same-assets.com/873106332/3525570599.jpeg",
  },
  {
    id: 3,
    movie: "The Last Memory",
    criticScore: 85,
    audienceScore: 78,
    discrepancy: 7,
    image: "https://ext.same-assets.com/634093610/2497355559.jpeg",
  },
];

const stats = [
  { label: "Critics Analyzed", value: "1,250+" },
  { label: "Movies Covered", value: "17,800+" },
  { label: "Reviews Processed", value: "425,000+" },
  { label: "Bias Patterns Identified", value: "320+" },
];

const features = [
  {
    title: "Critic Bias Analysis",
    description: "See how critics' preferences and biases affect their reviews through our proprietary bias detection system.",
    icon: <User className="h-10 w-10 text-primary" />,
  },
  {
    title: "Rating Discrepancy Tracking",
    description: "Track the gap between critic and audience scores to identify the most controversial films.",
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
  },
  {
    title: "Historical Trends",
    description: "Analyze how critics' tastes have evolved over time and how they align with industry awards.",
    icon: <PieChart className="h-10 w-10 text-primary" />,
  },
  {
    title: "Critics vs. Awards",
    description: "Compare critics' reviews with major award wins to see who best predicts industry recognition.",
    icon: <Award className="h-10 w-10 text-primary" />,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-muted/30">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Who <span className="text-primary">Critiques</span> the Critics?
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Uncover biases, track discrepancies, and discover trends in film criticism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/critics">Explore Critics</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/methodology">Our Methodology</Link>
              </Button>
            </div>
          </div>

          <div className="relative mt-16 bg-card rounded-lg shadow-lg p-4 border">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <Badge className="text-lg py-2 px-4 bg-accent text-accent-foreground">Featured Analysis</Badge>
            </div>
            <Tabs defaultValue="discrepancies" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="discrepancies">Biggest Discrepancies</TabsTrigger>
                <TabsTrigger value="critics">Featured Critics</TabsTrigger>
              </TabsList>
              <TabsContent value="discrepancies" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recentDiscrepancies.map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={item.image}
                          alt={item.movie}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader className="pt-4 pb-2">
                        <CardTitle className="text-lg">{item.movie}</CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary">
                              Critics: {item.criticScore}%
                            </Badge>
                          </div>
                          <div className="flex items-center">
                            <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary">
                              Audience: {item.audienceScore}%
                            </Badge>
                          </div>
                        </div>
                        <div className="mt-2">
                          <Badge variant={item.discrepancy > 30 ? "destructive" : "outline"} className="w-full justify-center">
                            {item.discrepancy}% Discrepancy
                          </Badge>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" size="sm" className="w-full" asChild>
                          <Link href={`/movies/${item.id}`}>
                            View Analysis
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="critics" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredCritics.slice(0, 4).map((critic) => (
                    <Card key={critic.id}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-4">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden">
                            <Image
                              src={critic.avatar}
                              alt={critic.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{critic.name}</CardTitle>
                            <CardDescription>{critic.publication}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <p className="text-sm text-muted-foreground mb-3">{critic.bio}</p>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex flex-col">
                            <span className="text-muted-foreground">Reviews</span>
                            <span className="font-medium">{critic.reviewCount}</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-muted-foreground">Avg. Rating</span>
                            <span className="font-medium">{critic.avgRating}/10</span>
                          </div>
                          <div className="flex flex-col col-span-2">
                            <span className="text-muted-foreground">Key Bias</span>
                            <span className="font-medium">{critic.biasMetric}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" size="sm" className="w-full" asChild>
                          <Link href={`/critics/${critic.id}`}>
                            View Full Profile
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Abstract background decorations */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-5xl font-bold mb-2 text-primary">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Uncover the Truth Behind Film Criticism</h2>
            <p className="text-xl text-muted-foreground">
              Our advanced analytics platform reveals the hidden patterns and biases that influence movie reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 border-muted h-full">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Discover Film Criticism Insights?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Join our community of film enthusiasts and learn how critics' biases shape the movie landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link href="/explore">Explore Data</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
