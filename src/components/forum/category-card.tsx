import React from "react";
import Link from "next/link";
import {
  MessageSquare,
  Users,
  Film,
  TrendingUp,
  HelpCircle,
  Settings,
  ChevronRight
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ForumCategory } from "@/lib/forum/data";

const iconMap = {
  MessageSquare,
  Users,
  Film,
  TrendingUp,
  HelpCircle,
  Settings
};

interface CategoryCardProps {
  category: ForumCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const IconComponent = iconMap[category.icon as keyof typeof iconMap] || MessageSquare;

  return (
    <Card className="relative overflow-hidden transition-all hover:border-primary/50 group">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="bg-muted rounded-lg p-3 text-primary">
            <IconComponent className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              <Link href={`/forum/${category.id}`} className="focus:outline-none">
                {category.name}
              </Link>
            </CardTitle>
            <CardDescription className="mt-1">{category.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center">
            <MessageSquare className="mr-1 h-4 w-4" />
            <span>{category.topics} topics</span>
          </div>
          <div className="flex items-center">
            <Users className="mr-1 h-4 w-4" />
            <span>{category.posts} posts</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="absolute right-2 top-1/2 -translate-y-1/2">
        <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
      </CardFooter>
    </Card>
  );
}
