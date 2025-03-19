import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, PlusCircle, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TopicRow } from "@/components/forum/topic-row";
import { forumCategories, forumTopics, getTopicsByCategory } from "@/lib/forum/data";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}

export function generateMetadata({ params }: CategoryPageProps) {
  const category = forumCategories.find((cat) => cat.id === params.categoryId);

  if (!category) {
    return {
      title: "Category Not Found - The Critics' Critic",
      description: "The forum category you're looking for could not be found.",
    };
  }

  return {
    title: `${category.name} - The Critics' Critic Forum`,
    description: category.description,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = forumCategories.find((cat) => cat.id === params.categoryId);

  if (!category) {
    return notFound();
  }

  const topics = getTopicsByCategory(params.categoryId);

  return (
    <div className="container mx-auto py-12">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/forum" className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to categories
          </Link>
        </Button>
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{category.name}</h1>
        <p className="text-muted-foreground">{category.description}</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-8">
        <div className="text-sm text-muted-foreground">
          {topics.length} {topics.length === 1 ? "topic" : "topics"} in this category
        </div>

        <div className="flex items-center gap-2">
          <Select defaultValue="latest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest activity</SelectItem>
              <SelectItem value="newest">Newest topics</SelectItem>
              <SelectItem value="most-viewed">Most viewed</SelectItem>
              <SelectItem value="most-replies">Most replies</SelectItem>
            </SelectContent>
          </Select>

          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Topic
          </Button>
        </div>
      </div>

      <Separator className="my-6" />

      {topics.length > 0 ? (
        <div className="space-y-1 rounded-md border">
          {topics.map((topic) => (
            <TopicRow key={topic.id} topic={topic} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">No topics in this category yet.</p>
          <Button className="mt-4">Create the first topic</Button>
        </div>
      )}
    </div>
  );
}
