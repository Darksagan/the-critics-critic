export interface ReviewType {
  id: string;
  criticId: string;
  user: {
    name: string;
    avatar?: string;
  };
  date: string;
  rating: number;
  content: string;
  likes: number;
  replies: number;
}

export const reviews: ReviewType[] = [
  {
    id: "1",
    criticId: "1",
    user: {
      name: "Michael Taylor",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    date: "March 16, 2025",
    rating: 4,
    content: "This critic has excellent insights on indie films but sometimes misses the mark on mainstream blockbusters. Their analysis of cinematography is particularly insightful.",
    likes: 24,
    replies: 5
  },
  {
    id: "2",
    criticId: "1",
    user: {
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    date: "March 14, 2025",
    rating: 5,
    content: "By far my favorite film critic. Their reviews are always well-reasoned and they aren't afraid to go against popular opinion when necessary. Very consistent in their criteria.",
    likes: 42,
    replies: 8
  },
  {
    id: "3",
    criticId: "2",
    user: {
      name: "David Wong",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    date: "March 12, 2025",
    rating: 3,
    content: "This critic has strong opinions on sci-fi films that I often disagree with. However, their writing style is engaging and they make interesting points even when I don't agree.",
    likes: 18,
    replies: 10
  },
  {
    id: "4",
    criticId: "2",
    user: {
      name: "Emily Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=10"
    },
    date: "March 10, 2025",
    rating: 4,
    content: "I appreciate how this critic contextualizes each film within the director's broader filmography. Their knowledge of film history really enhances their reviews.",
    likes: 31,
    replies: 4
  },
  {
    id: "5",
    criticId: "3",
    user: {
      name: "James Wilson",
      avatar: "https://i.pravatar.cc/150?img=8"
    },
    date: "March 8, 2025",
    rating: 2,
    content: "Too pretentious for my taste. Always seems to favor arthouse films while dismissing popular cinema without giving it a fair chance.",
    likes: 12,
    replies: 15
  },
  {
    id: "6",
    criticId: "3",
    user: {
      name: "Lisa Chen",
      avatar: "https://i.pravatar.cc/150?img=9"
    },
    date: "March 5, 2025",
    rating: 5,
    content: "The most insightful film critic working today. Their analysis of narrative structure and thematic elements is unmatched. I make sure to read their reviews after watching any film.",
    likes: 56,
    replies: 7
  }
];
