"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Film, Star, TrendingUp, User, Award, PieChart, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

// Types for movies and critics
interface Movie {
  id: number;
  title: string;
  poster: string;
  year: string;
  criticScore: number;
  audienceScore: number;
  discrepancy: number;
  genre: string;
}

interface Critic {
  id: number;
  name: string;
  publication: string;
  avatar: string;
  bio: string;
  reviewCount: number;
  avgRating: number;
  biasMetric: string;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [critics, setCritics] = useState<Critic[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [genreFilter, setGenreFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data from API routes
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [moviesRes, criticsRes] = await Promise.all([
          fetch(`/api/movies?q=${searchQuery}&genre=${genreFilter}`),
          fetch('/api/critics'), // Placeholder; update with actual route if exists
        ]);
        const moviesData = await moviesRes.json();
        const criticsData = await criticsRes.json();
        setMovies(moviesData);
        setCritics(criticsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchQuery, genreFilter]);

  const stats = [
    { label: 'Critics Analyzed', value: '1,250+' },
    { label: 'Movies Covered', value: '17,800+' },
    { label: 'Reviews Processed', value: '425,000+' },
    { label: 'Bias Patterns Identified', value: '320+' },
  ];

  const features = [
    {
      title: 'Critic Bias Analysis',
      description: 'See how critics’ preferences and biases affect their reviews.',
      icon: <User className="h-10 w-10 text-orange-500" />,
    },
    {
      title: 'Rating Discrepancy Tracking',
      description: 'Track gaps between critic and audience scores.',
      icon: <TrendingUp className="h-10 w-10 text-orange-500" />,
    },
    {
      title: 'Historical Trends',
      description: 'Analyze critics’ tastes over time.',
      icon: <PieChart className="h-10 w-10 text-orange-500" />,
    },
    {
      title: 'Critics vs. Awards',
      description: 'Compare reviews with award wins.',
      icon: <Award className="h-10 w-10 text-orange-500" />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={cn('relative py-20 md:py-28 overflow-hidden bg-gray-900 text-white')}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className={cn('text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6')}>
              Who <span className="text-orange-500">Critiques</span> the Critics?
            </h1>
            <p className={cn('text-xl md:text-2xl text-gray-400 mb-8')}>
              Uncover biases, track discrepancies, and discover trends in film criticism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className={cn('bg-orange-500 hover:bg-orange-600')}>
                <Link href="/critics">Explore Critics</Link>
              </Button>
              <Button size="lg" variant="outline" className={cn('border-orange-500 text-orange-500 hover:bg-orange-500/10')}>
                <Link href="/methodology">Our Methodology</Link>
              </Button>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search movies..."
                className={cn('w-full pl-10 p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className={cn('p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500')}
              value={genreFilter}
              onChange={(e) => setGenreFilter(e.target.value)}
            >
              <option value="all">All Genres</option>
              <option value="Drama">Drama</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
          </div>

          {/* Tabs for Discrepancies and Critics */}
          <div className={cn('relative mt-16 bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-700')}>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <Badge className={cn('text-lg py-2 px-4 bg-orange-500 text-white')}>Featured Analysis</Badge>
            </div>
            <Tabs defaultValue="discrepancies" className="w-full">
              <TabsList className={cn('grid w-full grid-cols-2 bg-gray-700')}>
                <TabsTrigger value="discrepancies">Biggest Discrepancies</TabsTrigger>
                <TabsTrigger value="critics">Featured Critics</TabsTrigger>
              </TabsList>
              <TabsContent value="discrepancies" className="mt-6">
                {isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className={cn('animate-pulse bg-gray-700 rounded-lg h-80')}></div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {movies.map((item) => (
                      <Card key={item.id} className={cn('overflow-hidden bg-gray-800 border-gray-700 hover:scale-105 transition-transform duration-200')}>
                        <div className="relative h-48">
                          <Image
                            src={item.poster}
                            alt={item.title}
                            fill
                            className="object-cover"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="/fallback.png"
                          />
                        </div>
                        <CardHeader className="pt-4 pb-2">
                          <CardTitle className={cn('text-lg text-white')}>{item.title}</CardTitle>
                          <CardDescription className={cn('text-gray-400')}>{item.year}</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="flex justify-between items-center mb-2">
                            <Badge variant="outline" className={cn('bg-orange-500/10 text-orange-500 border-orange-500')}>
                              Critics: {item.criticScore}%
                            </Badge>
                            <Badge variant="outline" className={cn('bg-teal-500/10 text-teal-500 border-teal-500')}>
                              Audience: {item.audienceScore}%
                            </Badge>
                          </div>
                          <Badge variant={item.discrepancy > 30 ? 'destructive' : 'outline'} className="w-full justify-center">
                            {item.discrepancy}% Discrepancy
                          </Badge>
                        </CardContent>
                        <CardFooter>
                          <Button variant="ghost" size="sm" className={cn('w-full text-orange-500 hover:bg-orange-500/10')} asChild>
                            <Link href={`/movies/${item.id}`}>
                              View Analysis <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
              <TabsContent value="critics" className="mt-6">
                {isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className={cn('animate-pulse bg-gray-700 rounded-lg h-64')}></div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {critics.map((critic) => (
                      <Card key={critic.id} className={cn('bg-gray-800 border-gray-700 hover:scale-105 transition-transform duration-200')}>
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-4">
                            <div className="relative h-12 w-12 rounded-full overflow-hidden">
                              <Image
                                src={critic.avatar}
                                alt={critic.name}
                                fill
                                className="object-cover"
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="/fallback.png"
                              />
                            </div>
                            <div>
                              <CardTitle className={cn('text-lg text-white')}>{critic.name}</CardTitle>
                              <CardDescription className={cn('text-gray-400')}>{critic.publication}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className={cn('text-sm text-gray-400 mb-3')}>{critic.bio}</p>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="flex flex-col">
                              <span className={cn('text-gray-400')}>Reviews</span>
                              <span className={cn('font-medium text-white')}>{critic.reviewCount}</span>
                            </div>
                            <div className="flex flex-col">
                              <span className={cn('text-gray-400')}>Avg. Rating</span>
                              <span className={cn('font-medium text-white')}>{critic.avgRating}/10</span>
                            </div>
                            <div className="flex flex-col col-span-2">
                              <span className={cn('text-gray-400')}>Key Bias</span>
                              <span className={cn('font-medium text-white')}>{critic.biasMetric}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button variant="ghost" size="sm" className={cn('w-full text-orange-500 hover:bg-orange-500/10')} asChild>
                            <Link href={`/critics/${critic.id}`}>
                              View Full Profile <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Stats Section */}
      <section className={cn('py-16 md:py-24 bg-gray-800')}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={cn('text-3xl md:text-5xl font-bold mb-2 text-orange-500')}>{stat.value}</div>
                <div className={cn('text-sm md:text-base text-gray-400')}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={cn('py-16 md:py-24 bg-gray-900')}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className={cn('text-3xl md:text-4xl font-bold mb-4 text-white')}>Uncover the Truth Behind Film Criticism</h2>
            <p className={cn('text-xl text-gray-400')}>Our advanced analytics platform reveals hidden patterns and biases.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className={cn('border-2 border-gray-700 bg-gray-800 h-full hover:shadow-lg transition-shadow')}>
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className={cn('text-xl text-white')}>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={cn('text-gray-400')}>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={cn('bg-orange-500 text-white py-20')}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={cn('text-3xl md:text-4xl font-bold mb-4')}>Ready to Discover Film Criticism Insights?</h2>
            <p className={cn('text-xl mb-8 text-white/90')}>Join our community of film enthusiasts.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className={cn('bg-white text-orange-500 hover:bg-gray-100')}>
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className={cn('border-white text-white hover:bg-white/10')}>
                <Link href="/explore">Explore Data</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}