"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Film, User, Award, PieChart, Search, Sun, Moon, BookOpen, Star, MessageSquare, ThumbsUp, BarChart3 } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Critics", href: "/critics" },
  { label: "Recommendations", href: "/recommendations" },
  { label: "Compare", href: "/compare" },
  { label: "Blog", href: "/blog" },
  { label: "Reviews", href: "/reviews" },
  { label: "Forum", href: "/forum" },
  { label: "Movies", href: "/movies" },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button className="lg:hidden" variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="lg:hidden">
              <div className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className="text-xl font-bold flex items-center gap-2 text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  <Film className="h-5 w-5" />
                  The Critics' Critic
                </Link>
                <nav className="flex flex-col gap-2 mt-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-2 text-base px-3 py-2 rounded-md hover:bg-muted transition-colors ${
                        pathname === item.href ? "font-medium text-primary bg-muted" : "text-foreground/80"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label === "Home" && <Film className="h-4 w-4" />}
                      {item.label === "Critics" && <User className="h-4 w-4" />}
                      {item.label === "Recommendations" && <ThumbsUp className="h-4 w-4" />}
                      {item.label === "Compare" && <BarChart3 className="h-4 w-4" />}
                      {item.label === "Blog" && <BookOpen className="h-4 w-4" />}
                      {item.label === "Reviews" && <Star className="h-4 w-4" />}
                      {item.label === "Forum" && <MessageSquare className="h-4 w-4" />}
                      {item.label === "Movies" && <Film className="h-4 w-4" />}
                      {item.label === "Analytics" && <PieChart className="h-4 w-4" />}
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <Film className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg hidden md:inline-block">The Critics' Critic</span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-muted transition-colors ${
                pathname === item.href ? "text-primary" : "text-foreground/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <ThemeSwitcher />
          <Button variant="default" size="sm" className="hidden md:flex">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}
