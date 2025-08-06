export const blogArticles = [
   {
      id: "1",
      category: "Web Development",
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
         "Explore the latest trends shaping the future of web development, from AI integration to new frameworks.",
      content: `
      <p>Web development continues to evolve at a rapid pace, with new technologies and methodologies emerging constantly. As we look ahead to 2024, several key trends are shaping the landscape of how we build and interact with web applications.</p>
      
      <h2>AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing how developers write code. From intelligent code completion to automated testing, AI tools are becoming indispensable in the modern developer's toolkit.</p>
      
      <h2>The Rise of Edge Computing</h2>
      <p>Edge computing is bringing computation closer to users, reducing latency and improving performance. This trend is particularly important for applications requiring real-time interactions.</p>
      
      <h2>Sustainable Web Development</h2>
      <p>Environmental consciousness is driving developers to create more efficient, sustainable web applications that consume less energy and resources.</p>
      
      <p>These trends represent just the beginning of what promises to be an exciting year for web development innovation.</p>
    `,
      image: "/modern-web-dev-workspace.png",
      author: {
         name: "Sarah Johnson",
         role: "Senior Frontend Developer",
         avatar: "/professional-woman-developer.png",
         bio: "Sarah is a passionate frontend developer with over 8 years of experience building scalable web applications. She specializes in React, TypeScript, and modern web technologies.",
         social: {
            twitter: "sarahdev",
            linkedin: "sarah-johnson-dev",
            github: "sarahj-dev",
         },
      },
      date: "March 15, 2024",
      readTime: "8 min read",
      tags: ["Web Development", "AI", "Edge Computing", "Sustainability", "Frontend"],
      comments: [
         {
            id: "1",
            author: "Mike Chen",
            avatar: "/asian-male-developer.png",
            content:
               "Great insights on AI-powered development tools! I've been using GitHub Copilot and it's been a game-changer for my productivity.",
            date: "2 hours ago",
            likes: 12,
            replies: [
               {
                  id: "1-1",
                  author: "Sarah Johnson",
                  avatar: "/professional-woman-developer.png",
                  content:
                     "Thanks Mike! GitHub Copilot is indeed amazing. Have you tried any other AI coding assistants?",
                  date: "1 hour ago",
                  likes: 5,
               },
            ],
         },
         {
            id: "2",
            author: "Emma Rodriguez",
            avatar: "/latina-developer.png",
            content:
               "The section on sustainable web development really resonates with me. We need to be more conscious about the environmental impact of our applications.",
            date: "4 hours ago",
            likes: 8,
         },
      ],
   },
   {
      id: "2",
      category: "React Development",
      title: "Building Scalable React Applications: Best Practices",
      excerpt:
         "Learn essential patterns and practices for building React applications that can grow with your business needs.",
      content: `
      <p>Building scalable React applications requires careful planning and adherence to best practices. In this comprehensive guide, we'll explore the key strategies that will help your React applications grow efficiently.</p>
      
      <h2>Component Architecture</h2>
      <p>A well-structured component architecture is the foundation of any scalable React application. Focus on creating reusable, composable components that follow the single responsibility principle.</p>
      
      <h2>State Management</h2>
      <p>Choosing the right state management solution is crucial. Whether you opt for Redux, Zustand, or React's built-in state, consistency and predictability should be your guiding principles.</p>
      
      <h2>Performance Optimization</h2>
      <p>Performance optimization should be built into your development process from the start. Utilize React's built-in optimization features and consider implementing code splitting and lazy loading.</p>
    `,
      image: "/react-code-editor.png",
      author: {
         name: "David Kim",
         role: "React Specialist",
         avatar: "/asian-male-developer-glasses.png",
         bio: "David is a React specialist with 6 years of experience building large-scale applications. He's passionate about performance optimization and developer experience.",
         social: {
            twitter: "davidkim_dev",
            linkedin: "david-kim-react",
            github: "davidkim-react",
         },
      },
      date: "March 12, 2024",
      readTime: "12 min read",
      tags: ["React", "JavaScript", "Architecture", "Performance", "Best Practices"],
      comments: [],
   },
];

