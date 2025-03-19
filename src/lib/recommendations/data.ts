export interface CriticProfile {
  id: string;
  name: string;
  avatar: string;
  publication: string;
  bio: string;
  expertiseLevel: "beginner" | "intermediate" | "expert";
  yearsActive: number;
  focus: string[];
  style: string[];
  filmPreferences: string[];
}

export interface UserPreference {
  id: string;
  name: string;
  options: string[];
  importance: "low" | "medium" | "high";
  description: string;
}

export const criticProfiles: CriticProfile[] = [
  {
    id: "1",
    name: "Roger Ebert",
    avatar: "https://i.pravatar.cc/150?img=68",
    publication: "Chicago Sun-Times",
    bio: "Renowned critic known for accessible writing and deep appreciation for storytelling.",
    expertiseLevel: "expert",
    yearsActive: 46,
    focus: ["mainstream", "arthouse", "independent"],
    style: ["accessible", "narrative-focused", "philosophical"],
    filmPreferences: ["drama", "character-driven", "social commentary"]
  },
  {
    id: "2",
    name: "A.O. Scott",
    avatar: "https://i.pravatar.cc/150?img=57",
    publication: "The New York Times",
    bio: "Thoughtful critic with academic background and intellectual approach.",
    expertiseLevel: "expert",
    yearsActive: 23,
    focus: ["arthouse", "independent", "international"],
    style: ["academic", "cultural context", "philosophical"],
    filmPreferences: ["complex narratives", "auteur films", "historical context"]
  },
  {
    id: "3",
    name: "Pauline Kael",
    avatar: "https://i.pravatar.cc/150?img=41",
    publication: "The New Yorker",
    bio: "Provocative and influential critic known for passionate, opinionated writing.",
    expertiseLevel: "expert",
    yearsActive: 24,
    focus: ["arthouse", "mainstream", "american cinema"],
    style: ["provocative", "passionate", "contrarian"],
    filmPreferences: ["visceral", "american film", "new hollywood"]
  },
  {
    id: "4",
    name: "Manohla Dargis",
    avatar: "https://i.pravatar.cc/150?img=43",
    publication: "The New York Times",
    bio: "Sharp-eyed critic with feminist perspective and attention to social context.",
    expertiseLevel: "expert",
    yearsActive: 27,
    focus: ["mainstream", "independent", "female directors"],
    style: ["socially conscious", "feminist perspective", "historical context"],
    filmPreferences: ["women's stories", "social issues", "innovative cinema"]
  },
  {
    id: "5",
    name: "Mark Kermode",
    avatar: "https://i.pravatar.cc/150?img=66",
    publication: "The Guardian/BBC",
    bio: "Passionate critic known for entertaining reviews and horror film expertise.",
    expertiseLevel: "expert",
    yearsActive: 30,
    focus: ["horror", "mainstream", "indie"],
    style: ["entertaining", "passionate", "personal"],
    filmPreferences: ["horror", "practical effects", "emotionally resonant"]
  },
  {
    id: "6",
    name: "Amy Nicholson",
    avatar: "https://i.pravatar.cc/150?img=33",
    publication: "Variety/The Guardian",
    bio: "Modern critic with focus on film's cultural impact and fresh perspective.",
    expertiseLevel: "intermediate",
    yearsActive: 15,
    focus: ["mainstream", "genre films", "streaming content"],
    style: ["cultural analysis", "accessible", "fresh perspective"],
    filmPreferences: ["genre films", "progressive themes", "pop culture"]
  },
  {
    id: "7",
    name: "David Ehrlich",
    avatar: "https://i.pravatar.cc/150?img=55",
    publication: "IndieWire",
    bio: "Contemporary critic known for creative writing and year-end video countdowns.",
    expertiseLevel: "intermediate",
    yearsActive: 12,
    focus: ["indie", "international", "arthouse"],
    style: ["creative writing", "visual analysis", "personal"],
    filmPreferences: ["visually striking", "emotionally complex", "arthouse"]
  },
  {
    id: "8",
    name: "Emily VanDerWerff",
    avatar: "https://i.pravatar.cc/150?img=14",
    publication: "Vox",
    bio: "Critic specializing in TV and film with focus on narrative structure and representation.",
    expertiseLevel: "intermediate",
    yearsActive: 10,
    focus: ["tv crossover", "streaming content", "representation"],
    style: ["analytical", "representation focus", "narrative structure"],
    filmPreferences: ["complex TV", "inclusive storytelling", "genre-bending"]
  },
  {
    id: "9",
    name: "K. Austin Collins",
    avatar: "https://i.pravatar.cc/150?img=59",
    publication: "Rolling Stone/Vanity Fair",
    bio: "Insightful critic with focus on racial and cultural analysis in film.",
    expertiseLevel: "intermediate",
    yearsActive: 8,
    focus: ["black cinema", "cultural analysis", "mainstream"],
    style: ["cultural context", "racial analysis", "academic"],
    filmPreferences: ["black filmmakers", "social commentary", "american culture"]
  },
  {
    id: "10",
    name: "Lindsay Ellis",
    avatar: "https://i.pravatar.cc/150?img=34",
    publication: "YouTube/Freelance",
    bio: "Video essayist and critic known for deep dives and academic approach to popular film.",
    expertiseLevel: "intermediate",
    yearsActive: 14,
    focus: ["video essays", "popular film", "film theory"],
    style: ["video format", "academic", "humorous"],
    filmPreferences: ["science fiction", "fantasy", "media criticism"]
  }
];

export const userPreferences: UserPreference[] = [
  {
    id: "genre",
    name: "Film Genres",
    options: ["Drama", "Comedy", "Science Fiction", "Horror", "Documentary", "Animation", "Thriller", "Action"],
    importance: "high",
    description: "What types of films do you enjoy most?"
  },
  {
    id: "critic-style",
    name: "Critical Approach",
    options: ["Academic/Intellectual", "Entertaining/Accessible", "Technical/Craft-focused", "Emotional/Personal"],
    importance: "high",
    description: "What style of film criticism do you prefer?"
  },
  {
    id: "film-aspects",
    name: "Film Aspects",
    options: ["Storytelling", "Visual Style", "Acting", "Social Commentary", "Technical Innovation", "Character Development"],
    importance: "medium",
    description: "Which aspects of film are most important to you?"
  },
  {
    id: "film-origin",
    name: "Film Origins",
    options: ["Hollywood/Mainstream", "Independent", "International/Foreign", "Arthouse/Experimental", "Streaming Platforms"],
    importance: "medium",
    description: "Where do your favorite films tend to come from?"
  },
  {
    id: "perspective",
    name: "Critical Perspective",
    options: ["Traditional", "Progressive", "Feminist", "Cultural", "Technical", "Industry-insider"],
    importance: "medium",
    description: "What critical perspectives do you value?"
  },
  {
    id: "engagement",
    name: "Media Format",
    options: ["Written Reviews", "Video Essays", "Podcasts", "Social Media", "Long-form Analysis"],
    importance: "low",
    description: "How do you prefer to engage with film criticism?"
  }
];

// Recommendation algorithm mock
export function getRecommendedCritics(preferences: Record<string, string[]>): CriticProfile[] {
  // This is a simplified matching algorithm that would be more sophisticated in a real app
  const recommendedCritics = criticProfiles.map(critic => {
    let score = 0;

    // Calculate score based on genre preferences
    if (preferences.genre) {
      const genreMatches = preferences.genre.filter(genre =>
        critic.filmPreferences.some(pref => pref.toLowerCase().includes(genre.toLowerCase()))
      ).length;
      score += genreMatches * 2; // Higher weight for genre matches
    }

    // Calculate score based on critic style
    if (preferences["critic-style"]) {
      const styleMatches = preferences["critic-style"].filter(style =>
        critic.style.some(s => s.toLowerCase().includes(style.toLowerCase()))
      ).length;
      score += styleMatches * 2;
    }

    // Calculate score based on film origin
    if (preferences["film-origin"]) {
      const originMatches = preferences["film-origin"].filter(origin =>
        critic.focus.some(f => f.toLowerCase().includes(origin.toLowerCase()))
      ).length;
      score += originMatches;
    }

    // Other preference matches would be calculated similarly

    return {
      critic,
      score
    };
  });

  // Sort by score and return top critics
  return recommendedCritics
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(item => item.critic);
}
