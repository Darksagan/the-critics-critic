export interface Movie {
  id: string;
  title: string;
  year: number;
  director: string;
  poster: string;
  genres: string[];
}

export interface CriticReview {
  criticId: string;
  criticName: string;
  publication: string;
  movieId: string;
  rating: number; // Out of 10
  snippet: string;
  url?: string;
  date: string;
}

export const movies: Movie[] = [
  {
    id: "1",
    title: "Oppenheimer",
    year: 2023,
    director: "Christopher Nolan",
    poster: "https://images.unsplash.com/photo-1689284609460-3487a7bc5b2f?q=80&w=500&auto=format&fit=crop",
    genres: ["Biography", "Drama", "History"]
  },
  {
    id: "2",
    title: "Barbie",
    year: 2023,
    director: "Greta Gerwig",
    poster: "https://images.unsplash.com/photo-1690719160025-aaa2b7f6570c?q=80&w=500&auto=format&fit=crop",
    genres: ["Adventure", "Comedy", "Fantasy"]
  },
  {
    id: "3",
    title: "Everything Everywhere All at Once",
    year: 2022,
    director: "Daniel Kwan, Daniel Scheinert",
    poster: "https://images.unsplash.com/photo-1681264879488-652ded60e462?q=80&w=500&auto=format&fit=crop",
    genres: ["Action", "Adventure", "Comedy"]
  },
  {
    id: "4",
    title: "Parasite",
    year: 2019,
    director: "Bong Joon Ho",
    poster: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=500&auto=format&fit=crop",
    genres: ["Drama", "Thriller"]
  },
  {
    id: "5",
    title: "Dune",
    year: 2021,
    director: "Denis Villeneuve",
    poster: "https://images.unsplash.com/photo-1635766054434-102d470ab84a?q=80&w=500&auto=format&fit=crop",
    genres: ["Action", "Adventure", "Drama"]
  }
];

export const criticReviews: CriticReview[] = [
  // Oppenheimer
  {
    criticId: "1", // Roger Ebert
    criticName: "Roger Ebert",
    publication: "Chicago Sun-Times",
    movieId: "1",
    rating: 9.0,
    snippet: "Christopher Nolan's Oppenheimer is a towering achievement, a movie that demands to be seen on the biggest screen possible. The filmmaker's first biopic is an appropriately complex portrait of J. Robert Oppenheimer, father of the atomic bomb.",
    date: "July 19, 2023"
  },
  {
    criticId: "2", // A.O. Scott
    criticName: "A.O. Scott",
    publication: "The New York Times",
    movieId: "1",
    rating: 9.0,
    snippet: "With 'Oppenheimer,' Christopher Nolan has made a three-hour film about guilt. The production of the first nuclear weapon is the backdrop for a study of a brilliant man's moral introspection.",
    date: "July 19, 2023"
  },
  {
    criticId: "5", // Mark Kermode
    criticName: "Mark Kermode",
    publication: "The Guardian/BBC",
    movieId: "1",
    rating: 8.0,
    snippet: "Christopher Nolan's film about the 'father of the atomic bomb' is a monumental achievement that combines majestic spectacle with gut-wrenching intimacy.",
    date: "July 21, 2023"
  },

  // Barbie
  {
    criticId: "1", // Roger Ebert
    criticName: "Roger Ebert",
    publication: "Chicago Sun-Times",
    movieId: "2",
    rating: 8.0,
    snippet: "This film is a candy-colored, glitter-bombed, hot pink feminist manifesto. It's a film about gender roles and identity and conformity, but it's also a film about female friendships, love, and acceptance.",
    date: "July 20, 2023"
  },
  {
    criticId: "3", // Pauline Kael
    criticName: "Pauline Kael",
    publication: "The New Yorker",
    movieId: "2",
    rating: 6.5,
    snippet: "Barbie is visually dazzling but intellectually confused. Its feminist messaging is muddled, simultaneously celebrating and critiquing the doll it's based on without fully committing to either perspective.",
    date: "July 21, 2023"
  },
  {
    criticId: "4", // Manohla Dargis
    criticName: "Manohla Dargis",
    publication: "The New York Times",
    movieId: "2",
    rating: 8.5,
    snippet: "Smart, funny and warmly humanist, 'Barbie' uses the familiar plastic doll to tell a story of self-discovery, critique consumer culture and deliver a heartfelt message about living authentically.",
    date: "July 19, 2023"
  },

  // Everything Everywhere All at Once
  {
    criticId: "2", // A.O. Scott
    criticName: "A.O. Scott",
    publication: "The New York Times",
    movieId: "3",
    rating: 8.0,
    snippet: "A hyperkinetic, maximalist work of cinema that somehow manages to tell an emotionally resonant story about family bonds while incorporating elements of martial arts films, science fiction, fantasy, animation and whatever else suits its fancy.",
    date: "March 24, 2022"
  },
  {
    criticId: "5", // Mark Kermode
    criticName: "Mark Kermode",
    publication: "The Guardian/BBC",
    movieId: "3",
    rating: 9.5,
    snippet: "A hectic, heartfelt, headlong dive into a multidimensional universe serves up a profound metaphor for the immigrant experience – and the experience of simply being alive.",
    date: "March 11, 2022"
  },
  {
    criticId: "7", // David Ehrlich
    criticName: "David Ehrlich",
    publication: "IndieWire",
    movieId: "3",
    rating: 10.0,
    snippet: "A kaleidoscopic, maximalist masterpiece that will change the landscape of American cinema. The Daniels have created a genre-defying work that explores the meaning of existence through the lens of the multiverse.",
    date: "March 25, 2022"
  },

  // Parasite
  {
    criticId: "1", // Roger Ebert
    criticName: "Roger Ebert",
    publication: "Chicago Sun-Times",
    movieId: "4",
    rating: 9.5,
    snippet: "Bong Joon Ho's 'Parasite' begins in a grimy basement apartment and ends in a poolside mansion, but the journey between those two extremes isn't as simple as a gesture of upward mobility. It's more like a cruel rebuke of bootstrap economics.",
    date: "October 11, 2019"
  },
  {
    criticId: "4", // Manohla Dargis
    criticName: "Manohla Dargis",
    publication: "The New York Times",
    movieId: "4",
    rating: 10.0,
    snippet: "A perfectly calibrated machine of class terror that builds to a shattering conclusion. Bong has created a complex, layered allegory that manages to be both universal in its themes and specifically Korean in its details.",
    date: "October 10, 2019"
  },
  {
    criticId: "9", // K. Austin Collins
    criticName: "K. Austin Collins",
    publication: "Vanity Fair",
    movieId: "4",
    rating: 9.0,
    snippet: "A social satire, a horror-comedy, a dystopian thriller, and a straightforward class critique all in one—and it's a triumph in each mode. A masterful excavation of class anxiety that manages to be both wildly entertaining and deeply unsettling.",
    date: "October 11, 2019"
  },

  // Dune
  {
    criticId: "2", // A.O. Scott
    criticName: "A.O. Scott",
    publication: "The New York Times",
    movieId: "5",
    rating: 7.5,
    snippet: "Villeneuve has made a big, serious sci-fi spectacle without cheating on the scope and sweep — the grandeur, if you want to call it that — of Herbert's vision. At the same time, this 'Dune' can feel curiously unengaged.",
    date: "October 21, 2021"
  },
  {
    criticId: "5", // Mark Kermode
    criticName: "Mark Kermode",
    publication: "The Guardian/BBC",
    movieId: "5",
    rating: 8.5,
    snippet: "Denis Villeneuve's slow-burn space opera fuses the arthouse and the multiplex to create an epic of otherworldly brilliance. A screen story with a genuinely mythic quality.",
    date: "October 17, 2021"
  },
  {
    criticId: "6", // Amy Nicholson
    criticName: "Amy Nicholson",
    publication: "Variety/The Guardian",
    movieId: "5",
    rating: 6.5,
    snippet: "Villeneuve's 'Dune' adaptation values aesthetics over storytelling, resulting in a visually stunning but emotionally hollow experience. The film is a technical achievement but lacks the depth and complexity of Herbert's novel.",
    date: "October 22, 2021"
  }
];

// Function to get all reviews for a specific movie
export function getReviewsForMovie(movieId: string): CriticReview[] {
  return criticReviews.filter(review => review.movieId === movieId);
}

// Function to get reviews by a specific critic
export function getReviewsByCritic(criticId: string): CriticReview[] {
  return criticReviews.filter(review => review.criticId === criticId);
}

// Function to get all critics who have reviewed a specific movie
export function getCriticsForMovie(movieId: string): string[] {
  return [...new Set(criticReviews
    .filter(review => review.movieId === movieId)
    .map(review => review.criticId))];
}

// Function to get average rating for a movie
export function getAverageRating(movieId: string): number {
  const reviews = getReviewsForMovie(movieId);
  if (reviews.length === 0) return 0;

  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10; // Round to 1 decimal place
}

// Function to get rating distribution
export function getRatingDistribution(movieId: string): Record<number, number> {
  const reviews = getReviewsForMovie(movieId);
  const distribution: Record<number, number> = {};

  // Initialize distribution with 0s
  for (let i = 1; i <= 10; i++) {
    distribution[i] = 0;
  }

  // Count ratings
  reviews.forEach(review => {
    const roundedRating = Math.round(review.rating);
    distribution[roundedRating] += 1;
  });

  return distribution;
}
