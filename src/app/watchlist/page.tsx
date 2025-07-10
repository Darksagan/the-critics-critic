"use client"; // Required for client-side interactivity in App Router

import { useState, useEffect } from "react";
import Link from "next/link";

// Define types for movies and ratings
interface Movie {
  id: number;
  title: string;
  criticScore: number; // Average score (using TMDB's vote_average as a placeholder)
}

interface UserRating {
  movieId: number;
  rating: number; // User's rating (1-5)
}

/**
 * Personalized Watchlist Generator
 * Fetches movies from TMDB API and allows users to rate them.
 */
export default function WatchlistPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [userRatings, setUserRatings] = useState<UserRating[]>([]);

  // Fetch movies from TMDB API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("/api/movies");
        if (!response.ok) {
          throw new Error("Failed to fetch movies from API route");
        }
        const data = await response.json();
        const fetchedMovies: Movie[] = data.results.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          criticScore: Math.round(movie.vote_average * 10),
        }));
        setMovies(fetchedMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([]);
      }
    };
  
    fetchMovies();
  }, []);

  // Handle user rating submission
  const handleRating = (movieId: number, rating: number) => {
    setUserRatings((prev) => {
      const existingRating = prev.find((r) => r.movieId === movieId);
      if (existingRating) {
        return prev.map((r) =>
          r.movieId === movieId ? { ...r, rating } : r
        );
      }
      return [...prev, { movieId, rating }];
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Personalized Watchlist</h1>
      <p className="mb-4">
        Movies recommended based on critics you trust. Rate them to refine your recommendations!
      </p>

      {movies.length === 0 ? (
        <p>Loading movies...</p>
      ) : (
        <ul className="space-y-4">
          {movies.map((movie) => {
            const userRating = userRatings.find((r) => r.movieId === movie.id);
            return (
              <li key={movie.id} className="border p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold">{movie.title}</h2>
                <p>Critic Score: {movie.criticScore}%</p>
                <div className="mt-2">
                  <label htmlFor={`rating-${movie.id}`} className="mr-2">
                    Your Rating (1-5):
                  </label>
                  <select
                    id={`rating-${movie.id}`}
                    value={userRating?.rating || ""}
                    onChange={(e) =>
                      handleRating(movie.id, parseInt(e.target.value))
                    }
                    className="border rounded p-1"
                  >
                    <option value="">Not rated</option>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <div className="mt-6">
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}