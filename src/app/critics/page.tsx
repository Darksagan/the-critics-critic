import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Search, Filter, Star, TrendingUp } from "lucide-react";

// Temporary data for our critics page
const critics = [
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
    genre: "Drama",
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
    genre: "Action",
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
    genre: "Various",
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
    genre: "Sci-Fi",
  },
  {
    id: 5,
    name: "Olivia Johnson",
    publication: "The Film Lens",
    avatar: "https://i.pravatar.cc/150?img=23",
    bio: "Academic film scholar with focus on classical cinema",
    reviewCount: 392,
    avgRating: 7.8,
    biasMetric: "Prefers classic filmmaking techniques",
    discrepancyRate: 31,
    genre: "Classic",
  },
  {
    id: 6,
    name: "Richard Thompson",
    publication: "Movie Maven",
    avatar: "https://i.pravatar.cc/150?img=51",
    bio: "Populist critic known for entertaining reviews",
    reviewCount: 825,
    avgRating: 6.2,
    biasMetric: "Favors mainstream entertainment",
    discrepancyRate: 14,
    genre: "Comedy",
  },
  {
    id: 7,
    name: "Zoe Blackwell",
    publication: "Indie Film Journal",
    avatar: "https://i.pravatar.cc/150?img=15",
    bio: "Independent film specialist with festival experience",
    reviewCount: 345,
    avgRating: 7.9,
    biasMetric: "Prefers arthouse and experimental",
    discrepancyRate: 38,
    genre: "Independent",
  },
  {
    id: 8,
    name: "David Park",
    publication: "Blockbuster Breakdown",
    avatar: "https://i.pravatar.cc/150?img=67",
    bio: "Franchise expert with deep knowledge of pop culture",
    reviewCount: 679,
    avgRating: 6.7,
    biasMetric: "Favors big-budget spectacles",
    discrepancyRate: 19,
    genre: "Action",
  },
];

export default function CriticsPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-muted/30 border-b">
        <div className="container-custom py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Critics Database</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore our comprehensive database of film critics and analyze their reviewing patterns, biases, and discrepancies.
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="border-b">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                className="pl-9"
                placeholder="Search critics by name or publication..."
              />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Publication" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Publications</SelectItem>
                  <SelectItem value="mainstream">Mainstream Media</SelectItem>
                  <SelectItem value="online">Online Publications</SelectItem>
                  <SelectItem value="newspaper">Newspapers</SelectItem>
                  <SelectItem value="independent">Independent</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Genre Focus" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Genres</SelectItem>
                  <SelectItem value="action">Action</SelectItem>
                  <SelectItem value="drama">Drama</SelectItem>
                  <SelectItem value="comedy">Comedy</SelectItem>
                  <SelectItem value="scifi">Sci-Fi</SelectItem>
                  <SelectItem value="horror">Horror</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Critics Grid */}
      <div className="container-custom py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {critics.map((critic) => (
            <Card key={critic.id} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden flex-shrink-0">
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
                    <Badge variant="outline" className="mt-1">
                      {critic.genre}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{critic.bio}</p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Star className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">Avg Rating:</span>
                    <span className="font-medium">{critic.avgRating}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Discrepancy:</span>
                    <span className="font-medium">{critic.discrepancyRate}%</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link href={`/critics/${critic.id}`}>
                    View Profile
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-1">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">4</Button>
            <Button variant="outline" size="sm">5</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </div>
    </>
  );
}
