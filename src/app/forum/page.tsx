import React from "react";
import Link from "next/link";
import { MessageCircle, Users, Search, PlusCircle } from "lucide-react";
import { CategoryCard } from "@/components/forum/category-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { forumCategories } from "@/lib/forum/data";

export const metadata = {
  title: "Film Critics Forum - The Critics' Critic",
  description: "Join discussions about film criticism, critics, and movie analysis with fellow film enthusiasts.",
};

export default function ForumPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Film Critics Forum</h1>
        <p className="text-xl text-muted-foreground">
          Join discussions about film criticism, critics, and movie analysis with fellow film enthusiasts.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-8">
        <div className="flex items-center">
          <div className="flex items-center text-sm text-muted-foreground mr-6">
            <MessageCircle className="h-4 w-4 mr-1" />
            <span>166 Topics</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-1" />
            <span>1,247 Members</span>
          </div>
        </div>

        <div className="flex w-full md:w-auto gap-2">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search forum..."
              className="w-full md:w-[200px] pl-8"
            />
          </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Topic
          </Button>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="grid gap-6">
        {forumCategories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      <div className="mt-12 p-6 bg-muted/50 rounded-lg border">
        <h2 className="text-xl font-bold mb-4">Forum Guidelines</h2>
        <ul className="space-y-2 text-sm">
          <li>Be respectful to other forum members, even when disagreeing.</li>
          <li>Keep discussions related to film criticism and analysis.</li>
          <li>Do not post spam, advertisements, or self-promotion.</li>
          <li>Avoid spoilers in thread titles. Use spoiler tags when discussing key plot points.</li>
          <li>Credit sources when sharing other critics' work or opinions.</li>
        </ul>
        <div className="flex justify-end mt-4">
          <Button variant="outline" asChild>
            <Link href="/forum/guidelines">Full Guidelines</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
