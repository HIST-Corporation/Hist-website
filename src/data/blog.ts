export const blogArticles = [
   {
      id: "1",
      category: "Better website",
      title: "Website structure and SEO",
      excerpt:
         "The website structure is a fundamentally crucial element for the site's proper functioning and usability. It is also a significant factor affecting the search engine positioning process.",
      content: `
      <p>The website structure is a fundamentally crucial element for the site's proper functioning and usability. It is also a significant factor affecting the search engine positioning process.<br/>
A properly structured and organized website is easier to position than the poorly laid out and ill-considered one. That's why it's so important to develop the correct website structure in the initial stage of development.</p>
      
      <div class="mt-6"></div>
      
      <h2><strong>What is a website's structure?</strong></h2>
      <div class="mt-4"></div>
      <p>In its simplest terms, a website structure provides a way of organizing content on a site. Depending on the type of site, the structure can be simple or more complex – with either only a couple of layers or multilayered.<br/>
The structure should be logical, facilitating the most efficient navigation within the site.</p>
      
      <p><img src="https://develtio.com/app/uploads/2022/09/web_structure_seo.jpg" alt="Website structure and SEO" /></p>
      
      <p>In the image above, we can see a simple, adequately composed structure.<br/>
The site's structure serves as a guide for Google's subpage indexing bot. The bot, when landing on a website, follows the links (both internal and external) and determines the relationship between specific subpages.<br/>
The correct page hierarchy is also crucial ńfor UX (user experience). It should be clear and simple so that the user can find the information he is looking for in the shortest possible time, without unnecessary site browsing.</p>
      
      <div class="mt-6"></div>
      
      <h2><strong>How to properly create a website structure?</strong></h2>
      <div class="mt-4"></div>
      <p>When planning the site's structure, we first divide the subpages according to the theme. All the content treating similar topics must fall into the same category. Then, for each subpage, you should determine the most important key phrases related to the respective issues. These will come in handy later when internal linking is done, among other things.</p>
      
      <p>In planning the structure of the site, you should follow several rules:</p>
      
      <ul>
        <li>Do not overdo it when deciding on the number of main categories – in the case of a simple service site, a few are enough. Of course, it's different if you run an online store with a broad, diverse range of products.</li>
        <li>You should build the site according to the "three-click rule" – try to make subpages accessible to the user with no more than three clicks.</li>
        <li>Use bread crumbs (crumb navigation) – thanks to crumbs, both users and Google's indexing robots can navigate the site efficiently and quickly.</li>
        <li>Monitor link validity – ensure that links on your site are up-to-date and working – both internal and external ones.</li>
      </ul>
      
      <div class="mt-6"></div>
      
      <h2><strong>Friendly URLs</strong></h2>
      <div class="mt-4"></div>
      <p>Structured URLs also back up the hierarchy of the site. A properly constructed URL should look like this:</p>
      
      <p>YourPage.com/category/subpage/</p>
      
      <div class="mt-6"></div>
      
      <h2><strong>Internal linking</strong></h2>
      <div class="mt-4"></div>
      <p>Links should connect subpages of a given website. In addition to implementing the correct menu linking to specific categories, it is worth implementing internal linking between thematically related subpages. For example, we can link blog entries to related posts. We can also use links with anchors in the content. Anchors are the key phrases that should align with the topic of the linked subpage.</p>
      
      <div class="mt-6"></div>
      
      <h2><strong>Crawl Budget</strong></h2>
      <div class="mt-4"></div>
      <p>The Crawl Budget is the so-called site indexing budget, which determines the number of subpages that Google's robot can index during one visit to a website. The time it takes to index subpages depends on the site's size. If the robot encounters any problems while crawling the site, the chances of the site not being wholly and correctly indexed increase. This is especially important in the case of extensive websites such as online stores, where many subpages are created dynamically through sort mode, category filters, links with parameters, etc.</p>
      
      <p>In order not to "waste" the indexing budget of the site, it is worth indexing out unnecessary subpages (e.g., login pages, internal search pages) and using canonical links (e.g., for pagination). Also, remember not to allow duplicate pages to be indexed.</p>
      
      <div class="mt-6"></div>
      
      <h2><strong>Site map</strong></h2>
      <div class="mt-4"></div>
      <p>A site map is a collection of all subpage addresses within a particular website. It makes the site easier for the robots to index – especially in the case of large portals. Most popular CMS systems allow for the automatic creation of a site map, which, once ready, should be submitted via Google Search Console.</p>
      
      <div class="mt-6"></div>
      
      <h2><strong>Content</strong></h2>
      <div class="mt-4"></div>
      <p>When creating content for your website, make sure it's unique for each subpage. Remember that pages with duplicate content may be removed from Google's index.</p>
      
      <div class="mt-6"></div>
      
      <h2><strong>Page loading time</strong></h2>
      <div class="mt-4"></div>
      <p>When creating an SEO-friendly site, pay attention to its loading speed. A site that takes too long to load will discourage users from visiting. In addition, slow-loading sites may suffer from indexing issues. You can check your site's loading speed using Google's PageSpeed Insights tool. After reviewing the site's loading time, you will be shown tips to improve your results.</p>
    `,
      image: "https://develtio.com/app/uploads/2022/09/web_structure_seo.jpg",
      author: {
         name: "Anna Byczek",
         role: "Team Leader SEO",
         avatar: "/Anna-Byczek.png",
         bio: "Anna is an experienced SEO specialist with over 7 years of experience in search engine optimization. She specializes in technical SEO, content strategy, and website architecture.",
         social: {
            twitter: "annaseo",
            linkedin: "anna-byczek-seo",
            github: "annaseo",
         },
      },
      date: "06.09.2022",
      readTime: "4 min read",
      tags: ["Better website", "Knowledge", "SEO", "Website structure"],
      comments: [
         {
            id: "1",
            author: "John Smith",
            avatar: "/john-smith.png",
            content:
               "Great article! The section on crawl budget was particularly insightful. I've been struggling with indexing issues on my e-commerce site and this gives me some clear direction.",
            date: "2 days ago",
            likes: 15,
            replies: [
               {
                  id: "1-1",
                  author: "Anna Byczek",
                  avatar: "/Anna-Byczek.png",
                  content:
                     "Thanks John! I'm glad you found it helpful. For e-commerce sites, I'd also recommend focusing on your category structure and implementing proper pagination. Feel free to reach out if you have specific questions!",
                  date: "1 day ago",
                  likes: 8,
               },
            ],
         },
         {
            id: "2",
            author: "Maria Garcia",
            avatar: "/maria-garcia.png",
            content:
               "The three-click rule is something we've been trying to implement. Do you have any recommendations for tools that can help audit site structure?",
            date: "1 week ago",
            likes: 7,
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
      
      <div class="mt-6"></div>
      
      <h2><strong>Component Architecture</strong></h2>
      <div class="mt-4"></div>
      <p>A well-structured component architecture is the foundation of any scalable React application. Focus on creating reusable, composable components that follow the single responsibility principle.</p>
      
      <div class="mt-6"></div>
      
      <h2><strong>State Management</strong></h2>
      <div class="mt-4"></div>
      <p>Choosing the right state management solution is crucial. Whether you opt for Redux, Zustand, or React's built-in state, consistency and predictability should be your guiding principles.</p>
      
      <div class="mt-6"></div>
      
      <h2><strong>Performance Optimization</strong></h2>
      <div class="mt-4"></div>
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