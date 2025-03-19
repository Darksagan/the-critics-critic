import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Share2, Flag, BookmarkPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PostCard } from "@/components/forum/post-card";
import { PostForm } from "@/components/forum/post-form";
import { forumCategories, forumTopics, forumPosts, getPostsByTopic } from "@/lib/forum/data";

interface TopicPageProps {
  params: {
    id: string;
  };
}

export function generateMetadata({ params }: TopicPageProps) {
  const topic = forumTopics.find((topic) => topic.id === params.id);

  if (!topic) {
    return {
      title: "Topic Not Found - The Critics' Critic",
      description: "The forum topic you're looking for could not be found.",
    };
  }

  return {
    title: `${topic.title} - The Critics' Critic Forum`,
    description: `Join the discussion about "${topic.title}" on The Critics' Critic Forum.`,
  };
}

export default function TopicPage({ params }: TopicPageProps) {
  const topic = forumTopics.find((topic) => topic.id === params.id);

  if (!topic) {
    return notFound();
  }

  const category = forumCategories.find((cat) => cat.id === topic.categoryId);
  const posts = getPostsByTopic(params.id);

  return (
    <div className="container mx-auto py-12">
      <div className="mb-4">
        <Button variant="ghost" size="sm" asChild>
          <Link href={`/forum/${topic.categoryId}`} className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to {category?.name || "category"}
          </Link>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
        <h1 className="text-3xl font-bold">{topic.title}</h1>

        <div className="flex items-center gap-2 text-sm">
          <Button variant="outline" size="sm">
            <BookmarkPlus className="mr-1 h-4 w-4" />
            <span>Follow</span>
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-1 h-4 w-4" />
            <span>Share</span>
          </Button>
          <Button variant="outline" size="sm">
            <Flag className="mr-1 h-4 w-4" />
            <span>Report</span>
          </Button>
        </div>
      </div>

      <div className="text-sm text-muted-foreground mb-8">
        Started by {topic.author.name} • {posts.length} {posts.length === 1 ? "reply" : "replies"} • {topic.views} views
      </div>

      <div className="space-y-6">
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} isOriginalPost={index === 0} />
        ))}
      </div>

      <div className="mt-8">
        <PostForm />
      </div>

      <div className="mt-12 p-4 bg-muted/50 rounded-lg border text-sm text-center">
        <p>
          Please remember to follow our <Link href="/forum/guidelines" className="text-primary hover:underline">community guidelines</Link> when posting.
        </p>
      </div>
    </div>
  );
}
