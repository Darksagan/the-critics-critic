export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Evolution of Film Criticism in the Digital Age",
    excerpt: "How online platforms have transformed the landscape of movie criticism and empowered new voices in the industry.",
    date: "March 15, 2025",
    readTime: "8 min read",
    author: "Alexandra Chen",
    category: "Industry Analysis",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1000&auto=format&fit=crop",
    content: `
      <p>The landscape of film criticism has undergone a dramatic transformation with the rise of digital platforms. Traditional print critics once held tremendous power in determining a film's reception, but today's ecosystem is far more diverse and democratized.</p>

      <p>Online platforms have empowered new voices from all backgrounds to share their perspectives on cinema. Amateur reviewers on YouTube, Letterboxd, and personal blogs have built substantial followings, sometimes rivaling the influence of established critics.</p>

      <h2>Key Shifts in Film Criticism</h2>

      <ul>
        <li><strong>Democratization:</strong> Anyone with internet access can now publish film criticism, creating a more diverse range of voices</li>
        <li><strong>Specialization:</strong> Critics can now focus on specific niches or genres, finding dedicated audiences</li>
        <li><strong>Multimediа:</strong> Video essays, podcasts, and interactive formats have expanded how criticism is delivered</li>
        <li><strong>Audience Participation:</strong> Reviews have become more conversational, with viewers engaging directly with critics</li>
      </ul>

      <p>Despite these changes, professional film criticism continues to play an important role. What's changed is the ecosystem in which these critics operate - one that values diverse perspectives and encourages dialogue between filmmakers, critics, and audiences.</p>
    `
  },
  {
    id: "2",
    title: "Understanding Critic Bias: The Science Behind Film Preferences",
    excerpt: "A deep dive into how personal experiences and psychological factors influence critics' judgments of films.",
    date: "March 10, 2025",
    readTime: "12 min read",
    author: "James Wilson",
    category: "Critic Psychology",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1000&auto=format&fit=crop",
    content: `
      <p>Every film critic brings their own unique perspective to their reviews, shaped by personal experiences, education, cultural background, and psychological preferences. Understanding these biases is crucial for audiences who rely on critics to guide their viewing choices.</p>

      <p>Recent research in cognitive psychology has revealed fascinating insights into how critics form judgments and why different critics can have drastically different reactions to the same film.</p>

      <h2>Psychological Factors Influencing Film Critics</h2>

      <p><strong>Confirmation Bias:</strong> Critics may unconsciously look for elements that confirm their pre-existing opinions about a director, genre, or actor.</p>

      <p><strong>Contrast Effect:</strong> A film may be judged more harshly if viewed immediately after an exceptional film, or more favorably if following a poor one.</p>

      <p><strong>Expertise Paradox:</strong> Highly knowledgeable critics sometimes struggle to view films from the perspective of general audiences, focusing on technical elements that casual viewers might not notice.</p>

      <p>By recognizing these biases, audiences can become more discerning consumers of film criticism, finding critics whose biases align with their own preferences.</p>
    `
  },
  {
    id: "3",
    title: "When Critics and Audiences Disagree: Examining the Disconnect",
    excerpt: "Analyzing notable cases where professional critics and general audiences had wildly different reactions to movies.",
    date: "March 5, 2025",
    readTime: "6 min read",
    author: "Olivia Martinez",
    category: "Review Analysis",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1000&auto=format&fit=crop",
    content: `
      <p>The divide between critical reception and audience enjoyment has existed since the earliest days of cinema, but the internet age has made these discrepancies more visible than ever before.</p>

      <p>Films like "The Last Jedi," "Joker," and "Don't Look Up" have highlighted significant gaps between professional critics' assessments and audience reactions. These disparities raise important questions about the nature of film criticism and its relationship to popular taste.</p>

      <h2>Recent Films with Major Critic-Audience Divides</h2>

      <ul>
        <li><strong>"Eternals" (2021)</strong> - Critics: 47% | Audiences: 78%</li>
        <li><strong>"Venom" (2018)</strong> - Critics: 30% | Audiences: 81%</li>
        <li><strong>"Star Wars: The Rise of Skywalker" (2019)</strong> - Critics: 52% | Audiences: 86%</li>
      </ul>

      <p>These disconnects often stem from different priorities. Critics typically evaluate technical achievements, thematic depth, and innovation, while general audiences may prioritize entertainment value, emotional engagement, and connection to beloved characters or franchises.</p>

      <p>Rather than viewing these divisions as problematic, they can be understood as reflections of the diverse ways people engage with and value cinema.</p>
    `
  },
  {
    id: "4",
    title: "The Rise of YouTube Film Critics: Changing The Landscape",
    excerpt: "How video essayists and YouTube reviewers are challenging traditional film criticism with new formats and perspectives.",
    date: "February 28, 2025",
    readTime: "10 min read",
    author: "Marcus Johnson",
    category: "Digital Media",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1000&auto=format&fit=crop",
    content: `
      <p>YouTube has revolutionized film criticism by giving rise to a new generation of video essayists and reviewers who combine visual analysis, entertainment, and critical insight in innovative ways.</p>

      <p>Channels like Every Frame a Painting, Lindsay Ellis, and Patrick (H) Willems have pioneered approaches to film analysis that go beyond traditional written reviews, using the visual medium to demonstrate cinematic techniques and storytelling principles.</p>

      <h2>Why YouTube Critics Are Gaining Influence</h2>

      <p><strong>Visual Demonstration:</strong> Video essays can directly show the cinematography, editing, and acting choices they're analyzing</p>

      <p><strong>Accessibility:</strong> Complex film theory concepts can be explained visually in ways that written criticism cannot match</p>

      <p><strong>Personality:</strong> YouTube critics develop personal connections with their audiences through their on-screen presence</p>

      <p><strong>Community:</strong> Comment sections foster discussion and debate among viewers, creating engaged communities</p>

      <p>Traditional film criticism outlets are increasingly adapting to this new landscape, with many established critics launching their own video content or collaborating with YouTube creators.</p>
    `
  }
];
