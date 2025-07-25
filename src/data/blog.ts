interface BlogAuthor {
   name: string;
   role: string;
   avatar: string;
   bio: string;
   social: {
      twitter?: string;
      linkedin?: string;
      github?: string;
   };
}

interface BlogComment {
   id: string;
   author: string;
   avatar: string;
   content: string;
   date: string;
   likes: number;
   replies?: BlogComment[];
}

export interface BlogArticle {
   id: string;
   title: string;
   category: string;
   image: string;
   excerpt: string;
   content: string;
   readTime: string;
   date: string;
   author: BlogAuthor;
   tags: string[];
   comments: BlogComment[];
}

export const blogArticles: BlogArticle[] = [
   {
      id: "future-of-ai",
      title: "The Future of AI in Modern Business",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      excerpt:
         "Exploring how artificial intelligence is transforming business operations and creating new opportunities.",
      content: `
      <p>Artificial Intelligence (AI) has evolved from a futuristic concept to a business imperative. Companies across industries are leveraging AI to drive innovation, efficiency, and competitive advantage.</p>
      
      <h2>The Current Landscape</h2>
      <p>Today's AI applications range from chatbots and recommendation engines to predictive analytics and autonomous systems. The technology is becoming more accessible, with cloud-based AI services lowering the barrier to entry.</p>
      
      <h3>Key Business Applications</h3>
      <ul>
        <li><strong>Customer Service:</strong> AI-powered chatbots handle routine inquiries, freeing human agents for complex issues.</li>
        <li><strong>Data Analysis:</strong> Machine learning algorithms uncover patterns in vast datasets that humans might miss.</li>
        <li><strong>Process Automation:</strong> Robotic Process Automation (RPA) streamlines repetitive tasks.</li>
      </ul>
      
      <h2>Future Trends</h2>
      <p>As AI continues to evolve, we expect to see:</p>
      <ol>
        <li>More sophisticated natural language processing</li>
        <li>Increased focus on ethical AI development</li>
        <li>Greater integration with IoT devices</li>
        <li>Democratization of AI tools</li>
      </ol>
      
      <p>The businesses that will thrive are those that strategically implement AI to enhance human capabilities rather than replace them.</p>
    `,
      readTime: "5 min read",
      date: "June 15, 2023",
      author: {
         name: "Alex Johnson",
         role: "AI Researcher",
         avatar: "https://randomuser.me/api/portraits/men/32.jpg",
         bio: "Alex has over 10 years of experience in AI research and implementation, working with Fortune 500 companies to integrate AI solutions.",
         social: {
            twitter: "alexj_ai",
            linkedin: "alexjohnson",
         },
      },
      tags: ["AI", "Machine Learning", "Business"],
      comments: [
         {
            id: "comment1",
            author: "Sarah Miller",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            content:
               "Great insights! We've been implementing AI in our customer service and the results have been impressive.",
            date: "June 16, 2023",
            likes: 8,
            replies: [
               {
                  id: "reply1",
                  author: "Alex Johnson",
                  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                  content: "Thanks Sarah! Customer service is one of the most impactful areas for AI implementation.",
                  date: "June 17, 2023",
                  likes: 3,
               },
            ],
         },
      ],
   },
   {
      id: "sustainable-web",
      title: "Building Sustainable Web Applications",
      category: "Development",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      excerpt: "How developers can reduce the environmental impact of their web applications.",
      content: `<p>Content about sustainable web development...</p>`,
      readTime: "4 min read",
      date: "May 28, 2023",
      author: {
         name: "Emma Wilson",
         role: "Senior Developer",
         avatar: "https://randomuser.me/api/portraits/women/65.jpg",
         bio: "Emma specializes in sustainable web development practices and green hosting solutions.",
         social: {
            twitter: "emmagreen",
            linkedin: "emmawilson",
         },
      },
      tags: ["Sustainability", "Web Development"],
      comments: [],
   },
   {
      id: "react-optimization",
      title: "Advanced React Performance Optimization",
      category: "Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      excerpt: "Techniques to significantly improve your React application's performance.",
      content: `<p>Content about React optimization...</p>`,
      readTime: "6 min read",
      date: "April 12, 2023",
      author: {
         name: "David Chen",
         role: "React Expert",
         avatar: "https://randomuser.me/api/portraits/men/22.jpg",
         bio: "David has been working with React since its early days and specializes in performance optimization.",
         social: {
            twitter: "davidreact",
            github: "davidchen",
         },
      },
      tags: ["React", "Performance", "JavaScript"],
      comments: [],
   },
];
