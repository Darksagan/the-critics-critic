import React from "react";
import Link from "next/link";
import { ExternalLink, User, Newspaper, Clock, BookOpen, Play } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CriticProfile } from "@/lib/recommendations/data";

interface CriticCardProps {
  critic: CriticProfile;
  matchScore?: number;
}

export function CriticCard({ critic, matchScore }: CriticCardProps) {
  // Configure expertise level badge
  const expertiseBadge = {
    beginner: { label: "Beginner", variant: "outline" as const },
    intermediate: { label: "Intermediate", variant: "secondary" as const },
    expert: { label: "Expert", variant: "default" as const }
  };

  const badge = expertiseBadge[critic.expertiseLevel];

  return (
    <Card className="group h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <Avatar className="h-16 w-16 mb-2">
            <AvatarImage src={critic.avatar} alt={critic.name} />
            <AvatarFallback><User className="h-6 w-6" /></AvatarFallback>
          </Avatar>
          {matchScore && (
            <div className="text-sm text-muted-foreground">
              Match: <span className="font-medium text-primary">{matchScore}%</span>
            </div>
          )}
        </div>
        <CardTitle className="group-hover:text-primary transition-colors">
          <Link href={`/critics/${critic.id}`}>{critic.name}</Link>
        </CardTitle>
        <div className="flex items-center space-x-2 mt-1">
          <Badge variant={badge.variant}>{badge.label}</Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Newspaper className="h-3.5 w-3.5 mr-1" />
            <span>{critic.publication}</span>
          </div>
        </div>
        <CardDescription className="line-clamp-3 mt-2">{critic.bio}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 flex-grow">
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{critic.yearsActive} years active</span>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-1.5">Focus areas</h4>
            <div className="flex flex-wrap gap-1.5">
              {critic.focus.map(item => (
                <Badge key={item} variant="secondary" className="text-xs">
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-1.5">Critical style</h4>
            <div className="flex flex-wrap gap-1.5">
              {critic.style.map(item => (
                <Badge key={item} variant="outline" className="text-xs">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex gap-2">
        <Button variant="outline" asChild className="w-full">
          <Link href={`/critics/${critic.id}`}>
            View profile <BookOpen className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="icon">
          <ExternalLink className="h-4 w-4" />
          <span className="sr-only">External reviews</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
