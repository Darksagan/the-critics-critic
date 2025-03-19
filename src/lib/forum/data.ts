export interface ForumCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  topics: number;
  posts: number;
}

export interface ForumTopic {
  id: string;
  categoryId: string;
  title: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  createdAt: string;
  views: number;
  replies: number;
  lastReply?: {
    author: {
      id: string;
      name: string;
      avatar?: string;
    };
    at: string;
  };
  isPinned?: boolean;
  isLocked?: boolean;
}

export interface ForumPost {
  id: string;
  topicId: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
    joined: string;
    posts: number;
  };
  createdAt: string;
  likes: number;
  isEdited?: boolean;
}

export const forumCategories: ForumCategory[] = [
  {
    id: "general",
    name: "General Discussion",
    description: "Chat about anything related to film criticism",
    icon: "MessageSquare",
    topics: 45,
    posts: 358
  },
  {
    id: "critics",
    name: "Critics' Roundtable",
    description: "Discuss specific critics and their approaches",
    icon: "Users",
    topics: 28,
    posts: 214
  },
  {
    id: "movies",
    name: "Film Analysis",
    description: "Deep dives into specific movies and their reception",
    icon: "Film",
    topics: 52,
    posts: 412
  },
  {
    id: "trends",
    name: "Industry Trends",
    description: "How is film criticism evolving?",
    icon: "TrendingUp",
    topics: 18,
    posts: 97
  },
  {
    id: "beginner",
    name: "Beginner's Corner",
    description: "New to film analysis? Start here",
    icon: "HelpCircle",
    topics: 15,
    posts: 124
  },
  {
    id: "meta",
    name: "Site Feedback",
    description: "Suggestions and ideas for The Critics' Critic",
    icon: "Settings",
    topics: 8,
    posts: 42
  }
];

export const forumTopics: ForumTopic[] = [
  {
    id: "1",
    categoryId: "general",
    title: "What makes a great film critic in 2025?",
    author: {
      id: "user1",
      name: "FilmBuff42",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    createdAt: "2025-03-17T14:32:00Z",
    views: 542,
    replies: 24,
    lastReply: {
      author: {
        id: "user7",
        name: "CinemaSage",
        avatar: "https://i.pravatar.cc/150?img=17"
      },
      at: "2025-03-19T09:15:00Z"
    },
    isPinned: true
  },
  {
    id: "2",
    categoryId: "critics",
    title: "Is A.O. Scott's influence waning in digital era?",
    author: {
      id: "user3",
      name: "CriticObserver",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    createdAt: "2025-03-15T18:45:00Z",
    views: 378,
    replies: 19,
    lastReply: {
      author: {
        id: "user8",
        name: "FilmTheory101",
        avatar: "https://i.pravatar.cc/150?img=22"
      },
      at: "2025-03-18T22:30:00Z"
    }
  },
  {
    id: "3",
    categoryId: "movies",
    title: "Critics vs Audiences - Most divisive films of 2024",
    author: {
      id: "user5",
      name: "MovieManiac",
      avatar: "https://i.pravatar.cc/150?img=42"
    },
    createdAt: "2025-03-16T10:20:00Z",
    views: 612,
    replies: 37,
    lastReply: {
      author: {
        id: "user2",
        name: "DirectorsDream",
        avatar: "https://i.pravatar.cc/150?img=25"
      },
      at: "2025-03-19T12:05:00Z"
    }
  },
  {
    id: "4",
    categoryId: "trends",
    title: "How TikTok is changing film criticism",
    author: {
      id: "user4",
      name: "DigitalCinephile",
      avatar: "https://i.pravatar.cc/150?img=50"
    },
    createdAt: "2025-03-18T09:10:00Z",
    views: 289,
    replies: 21,
    lastReply: {
      author: {
        id: "user6",
        name: "ReelExpert",
        avatar: "https://i.pravatar.cc/150?img=28"
      },
      at: "2025-03-19T11:45:00Z"
    }
  },
  {
    id: "5",
    categoryId: "beginner",
    title: "Resources for aspiring film critics",
    author: {
      id: "user9",
      name: "NewReviewer",
      avatar: "https://i.pravatar.cc/150?img=63"
    },
    createdAt: "2025-03-14T15:30:00Z",
    views: 423,
    replies: 15,
    lastReply: {
      author: {
        id: "user10",
        name: "CriticMentor",
        avatar: "https://i.pravatar.cc/150?img=49"
      },
      at: "2025-03-18T19:20:00Z"
    },
    isPinned: true
  },
  {
    id: "6",
    categoryId: "meta",
    title: "Feature Request: Critic Comparison Tool",
    author: {
      id: "user11",
      name: "UXDesigner",
      avatar: "https://i.pravatar.cc/150?img=52"
    },
    createdAt: "2025-03-13T11:25:00Z",
    views: 156,
    replies: 12,
    lastReply: {
      author: {
        id: "user12",
        name: "SiteAdmin",
        avatar: "https://i.pravatar.cc/150?img=67"
      },
      at: "2025-03-17T14:10:00Z"
    }
  }
];

export const forumPosts: ForumPost[] = [
  {
    id: "post1",
    topicId: "1",
    content: "I've been thinking about what truly makes a great film critic in today's digital landscape. Is it still about deep film knowledge and eloquent writing, or has the game completely changed with social media and video essays? What qualities do you think are essential for film critics in 2025?",
    author: {
      id: "user1",
      name: "FilmBuff42",
      avatar: "https://i.pravatar.cc/150?img=12",
      joined: "January 2022",
      posts: 145
    },
    createdAt: "2025-03-17T14:32:00Z",
    likes: 18
  },
  {
    id: "post2",
    topicId: "1",
    content: "Great question! I think the fundamentals haven't changed - knowledge of film history, critical thinking, and clear communication are still essential. But today's critics definitely need to understand how to engage an audience across different platforms.\n\nThe best critics now need to be multimedia savvy. Being able to produce compelling video content or podcasts alongside written reviews gives critics a huge advantage. Also, specialization seems more important than ever - having a clear niche or perspective that differentiates you from the crowd.",
    author: {
      id: "user7",
      name: "CinemaSage",
      avatar: "https://i.pravatar.cc/150?img=17",
      joined: "March 2020",
      posts: 387
    },
    createdAt: "2025-03-17T15:05:00Z",
    likes: 24
  },
  {
    id: "post3",
    topicId: "1",
    content: "I'd add that accessibility is crucial now. The best critics can discuss complex films in ways that don't alienate casual viewers while still offering depth for cinephiles. That balance is rare but valuable.\n\nI also think transparency about biases is more important than ever. The pretense of objectivity has fallen away, and critics who are upfront about their preferences and perspectives tend to build more trust with their audiences.",
    author: {
      id: "user8",
      name: "FilmTheory101",
      avatar: "https://i.pravatar.cc/150?img=22",
      joined: "August 2021",
      posts: 256
    },
    createdAt: "2025-03-17T16:42:00Z",
    likes: 31,
    isEdited: true
  }
];

export function getTopicsByCategory(categoryId: string): ForumTopic[] {
  return forumTopics.filter(topic => topic.categoryId === categoryId);
}

export function getPostsByTopic(topicId: string): ForumPost[] {
  return forumPosts.filter(post => post.topicId === topicId);
}
