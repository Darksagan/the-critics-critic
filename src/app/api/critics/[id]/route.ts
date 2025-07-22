import { NextResponse } from "next/server";

   export async function GET(request: Request, { params }: { params: { id: string } }) {
     try {
       const critics = [
         {
           id: "1",
           name: "Eleanor Mathews",
           publication: "Cinematic Vision",
           avatar: "https://i.pravatar.cc/150?img=32",
           bio: "Veteran film critic specializing in indie and foreign cinema with over 15 years of experience...",
           reviewCount: 486,
           avgRating: 7.2,
           biasMetric: "Favors character-driven dramas",
           discrepancyRate: 18,
           genre: "Drama",
           socialMedia: { twitter: "@eleanorcritic", website: "cinematicvision.com" },
           recentReviews: [
             { id: 1, movie: "The Forgotten Path", rating: 9.2, avgCriticRating: 8.7, audienceRating: 5.6, date: "Feb 28, 2025" },
             { id: 2, movie: "Echoes of Tomorrow", rating: 6.5, avgCriticRating: 4.3, audienceRating: 8.3, date: "Feb 12, 2025" },
             { id: 3, movie: "The Last Memory", rating: 8.1, avgCriticRating: 8.5, audienceRating: 7.8, date: "Jan 17, 2025" },
           ],
           biasChart: { drama: 85, comedy: 45, action: 30, scifi: 60, horror: 35, animation: 50, documentary: 90 },
           awards: { predictions: 42, accuracy: 76 },
         },
         {
           id: "2",
           name: "Marcus Chen",
           publication: "Film Observer",
           avatar: "https://i.pravatar.cc/150?img=60",
           bio: "Award-winning critic with focus on blockbuster analysis...",
           reviewCount: 734,
           avgRating: 6.8,
           biasMetric: "Tends to favor action franchises",
           discrepancyRate: 23,
           genre: "Action",
           socialMedia: { twitter: "@marcusfilmobs", website: "filmobserver.com" },
           recentReviews: [
             { id: 1, movie: "Captain America: Brave New World", rating: 7.8, avgCriticRating: 6.2, audienceRating: 8.5, date: "Mar 15, 2025" },
             { id: 2, movie: "The Alto Knights", rating: 8.4, avgCriticRating: 7.9, audienceRating: 7.2, date: "Mar 05, 2025" },
             { id: 3, movie: "Black Bag", rating: 9.2, avgCriticRating: 8.8, audienceRating: 7.1, date: "Feb 22, 2025" },
           ],
           biasChart: { drama: 50, comedy: 55, action: 90, scifi: 85, horror: 60, animation: 40, documentary: 35 },
           awards: { predictions: 37, accuracy: 62 },
         },
       ];

       const critic = critics.find((c) => c.id === params.id);
       if (!critic) {
         return NextResponse.json({ error: "Critic not found" }, { status: 404 });
       }

       // Fetch movie posters from TMDb (example implementation)
       const updatedReviews = await Promise.all(
         critic.recentReviews.map(async (review) => {
           const searchResponse = await fetch(
             `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(review.movie)}`
           );
           if (searchResponse.ok) {
             const searchData = await searchResponse.json();
             const movie = searchData.results[0];
             return {
               ...review,
               image: movie?.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : "/fallback.png",
             };
           }
           return { ...review, image: "/fallback.png" };
         })
       );

       const updatedCritic = { ...critic, recentReviews: updatedReviews };
       return NextResponse.json(updatedCritic);
     } catch (error) {
       console.error("Error fetching critic:", error);
       return NextResponse.json({ error: "Failed to fetch critic" }, { status: 500 });
     }
   }