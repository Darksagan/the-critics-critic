import React from "react";
import Link from "next/link";
import { CalendarIcon, ClockIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { blogPosts } from "@/lib/blog/data";

export const metadata = {
  title: "Blog - The Critics' Critic",
  description: "Insights, analysis, and opinions on film criticism and the world of movie reviews.",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">The Critics' Corner</h1>
        <p className="text-xl text-muted-foreground">
          Insights, analysis, and opinions on film criticism and the world of movie reviews.
        </p>
      </div>

      <Separator className="my-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 text-xs rounded-md">
                {post.category}
              </div>
            </div>
            <CardHeader className="p-4 pb-0">
              <div className="flex items-center text-sm text-muted-foreground space-x-4 mb-2">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <CardTitle className="line-clamp-2 hover:text-primary transition-colors">
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-2 flex-grow">
              <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <div className="text-sm font-medium">By {post.author}</div>
              <Button variant="ghost" size="sm" asChild>
                <Link href={`/blog/${post.id}`} className="flex items-center">
                  Read more <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button variant="outline" size="lg">
          Load more articles
        </Button>
      </div>
    </div>
  );
}
