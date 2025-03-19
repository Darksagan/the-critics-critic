import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { blogPosts } from "@/lib/blog/data";

interface Params {
  id: string;
}

export function generateMetadata({ params }: { params: Params }) {
  const post = blogPosts.find((post) => post.id === params.id);

  if (!post) {
    return {
      title: "Post Not Found - The Critics' Critic",
      description: "The blog post you're looking for could not be found.",
    };
  }

  return {
    title: `${post.title} - The Critics' Critic`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = blogPosts.find((post) => post.id === params.id);

  if (!post) {
    return notFound();
  }

  // Get related posts (exclude current post)
  const relatedPosts = blogPosts
    .filter(relatedPost => relatedPost.id !== post.id)
    .slice(0, 2);

  return (
    <div className="container mx-auto py-12">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/blog" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all articles
          </Link>
        </Button>
      </div>

      <div className="relative h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center text-sm text-muted-foreground mb-6">
          <div>By {post.author}</div>
          <div className="mx-2">•</div>
          <div>{post.date}</div>
          <div className="mx-2">•</div>
          <div>{post.readTime}</div>
        </div>

        <Separator className="my-8" />

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map(relatedPost => (
              <div key={relatedPost.id} className="flex space-x-4">
                <div className="h-24 w-24 rounded overflow-hidden flex-shrink-0">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium mb-1">
                    <Link href={`/blog/${relatedPost.id}`} className="hover:text-primary transition-colors">
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{relatedPost.date}</p>
                  <p className="text-sm line-clamp-2">{relatedPost.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
