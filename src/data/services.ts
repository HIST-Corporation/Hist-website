// services.ts
import { Code, Briefcase, Settings, Star, Grid2x2, Image as ImageIcon, Calendar, Heart } from "lucide-react";

export interface Service {
   id: string;
   icon: React.ComponentType<any>;
   title: string;
   shortDescription: string;
   longDescription: string;
   features: string[];
   detailedFeatures: {
      title: string;
      description: string;
   }[];
   benefits: string[];
   strengths: {
      title: string;
      description: string;
   }[];
   partnerDescription: string;
}

export const services: Service[] = [
   {
      id: "saas-product-development",
      icon: Code,
      title: "SaaS Product Development",
      shortDescription: "End-to-end SaaS solutions with scalable architecture and modern UI/UX design.",
      longDescription:
         "Software as a Service (SaaS) is a smarter way to use software — fast, flexible, and cloud-based. It removes the need for installations, updates, and storage worries. SaaS empowers startups and growing businesses to work efficiently from anywhere. At HIST – House of Information Science and Technology, we craft complete SaaS solutions that scale with your growth, safeguard data, and deliver a seamless user experience — helping you move forward in today’s digital world.",
      features: ["Multi-tenant Architecture", "API Development", "Cloud Integration"],
      detailedFeatures: [
         {
            title: "Scalable Infrastructure",
            description: "Cloud-native architecture built for high availability and elastic scaling to handle growth",
         },
         {
            title: "Subscription Management",
            description: "Flexible billing systems supporting multiple pricing models and payment gateways",
         },
         {
            title: "API Ecosystem",
            description: "Comprehensive API development with documentation and developer portals",
         },
      ],
      benefits: [
         "Work from anywhere – All you need is an internet connection",
         "No big setup costs – You don't have to buy expensive hardware or servers",
         "Always updated – Your software stays current with the latest features",
         "Grows with you – Add more users or features as your business expands",
         "Easy to use – Simple designs and user-friendly systems for everyone",
      ],
      strengths: [
         {
            title: "Scalable Architecture",
            description:
               "We build SaaS products with robust, scalable multi-tenant architecture. This means a single software instance efficiently serves multiple customers, ensuring data isolation, security, and cost efficiency while allowing seamless growth.",
         },
         {
            title: "User Management",
            description:
               "Advanced user management features, including authentication and role-based access control (RBAC), ensure that only authorized users can access specific resources.",
         },
         {
            title: "Modern UI/UX Design",
            description:
               "We prioritize user experience, implementing the latest trends in UI/UX such as AI-powered personalization that tailors the interface to each user's needs.",
         },
         {
            title: "API Development",
            description:
               "Our SaaS products are built with robust APIs at their core, enabling seamless integration with other applications and cloud services.",
         },
         {
            title: "Cloud Integration",
            description:
               "We leverage leading cloud platforms, ensuring your SaaS product benefits from real-time data processing, workflow automation, and unified functionality.",
         },
      ],
      partnerDescription:
         "When you work with HIST, you're not just getting a development team — you're getting a full tech partner. We help you every step of the way, including planning your idea, designing the software, developing and testing the product, launching it to the public, and providing ongoing support and updates. We make sure your SaaS product works perfectly for your business today — and can grow with you tomorrow.",
   },
   {
      id: "website-app-development",
      icon: Grid2x2,
      title: "Website & App Development",
      shortDescription: "Responsive websites and mobile applications built with cutting-edge technologies.",
      longDescription:
         "Nowadays, the digital environment demands that businesses possess responsive, quick, and device-friendly web sites and apps. At HIST – House of Information Science and Technology, we create advanced web and mobile apps that save you time and money by doing all the technical work behind the scenes. Whether launching or expanding, our solutions allow you to engage customers anytime and anywhere. We don't just create websites or apps — we offer secure, reliable digital solutions that grow with you and ensure a seamless user experience.",
      features: ["React/Next.js", "Flutter Apps", "PWA Development"],
      detailedFeatures: [
         {
            title: "Progressive Web Apps",
            description: "Offline-capable web applications with native-like experience and push notifications",
         },
         {
            title: "Cross-Platform Mobile",
            description: "Single codebase solutions for iOS and Android with Flutter for cost efficiency",
         },
         {
            title: "Performance Optimization",
            description: "Lighthouse scores of 90+ for all core web vitals and fast loading times",
         },
      ],
      benefits: [
         "Reach more customers – Your site and app look great on phones, tablets, and computers.",
         "No big setup costs – No need to buy expensive hardware or worry about technical details.",
         "Always current – Your site and app stay updated with the latest features.",
         "Grows with you – Easily add new features as your business gets bigger.",
         "Simple and friendly – Clean designs and easy navigation for everyone.",
      ],
      strengths: [
         {
            title: "Cutting-Edge Technologies",
            description:
               "We use the latest and best tools like React, Next.js, Flutter, and Progressive Web App (PWA) development. This means your website or app is fast, secure, and packed with modern features.",
         },
         {
            title: "Responsive Design",
            description: "We make sure your website and app look and work perfectly on any device, so your users always have a great experience.",
         },
         {
            title: "Easy to Update and Manage",
            description: "Our solutions are easy to manage, so you can make changes, add new features, or update information with little effort.",
         },
         {
            title: "Secure and Scalable",
            description: "We build your website and app to be safe and ready to grow as your business grows, so you don’t have to worry about security or slowdowns.",
         },
         {
            title: "User-focused",
            description: "We focus on simple, friendly designs that are easy for both you and your customers to use.",
         },
      ],
      partnerDescription:
         "When you choose HIST, you get more than a development team — you gain a full digital partner. We support your journey from concept to launch and beyond, from Planning your website or app idea. Designing intuitive and user-friendly interfaces, Building and testing with cutting-edge technologies like React/Next.js, Flutter, and PWAs, Launching your site or app to the public, to Providing ongoing support and updates . We ensure your digital solutions are future-ready, secure, and built to grow with your business.",
   },
   {
      id: "custom-software",
      icon: Settings,
      title: "Custom Software Solutions",
      shortDescription: "Tailored software applications designed to solve specific business challenges.",
      longDescription:
         "Custom software provides organisations with the precise tools they require in the current fast-paced digital environment, suited to their own workflow rather than that of other companies.  We at HIST, the House of Information Science and Technology, develop unique software solutions that address pressing problems, optimise processes, and expand with the company.  We create intelligent, safe tools that align with your objectives, whether they are team or customer management or operational efficiency.  We create dependable digital products that support the success of your company, not just software.",
      features: ["Business Automation", "Custom CRM/ERP", "Integration Solutions"],
      detailedFeatures: [
         {
            title: "Process Automation",
            description: "Streamline operations by automating repetitive tasks and workflows",
         },
         {
            title: "Custom Business Logic",
            description: "Tailored solutions that match your exact operational requirements",
         },
         {
            title: "Legacy System Integration",
            description: "Seamless connection between new and existing systems",
         },
      ],
      benefits: [
         "Solves your real problems – Get software that matches your exact needs.",
         "Improves workflow – Automates manual tasks to save you time and money.",
         "Easy to use – Simple designs and tools built around how your business works.",
         "Grows with you – Easily add features or users as your business expands.",
         "Connects everything – Integrates with other systems you already use.",
      ],
      strengths: [
         {
            title: "Tailored Design",
            description: "We create software specifically for your processes, industry, and business challenges. Every feature is chosen and built for you.",
         },
         {
            title: "Business Automation",
            description: "We help you automate regular tasks so you can focus on what matters most. From sales to inventory, we streamline the way you work.",
         },
         {
            title: "Custom CRM/ERP",
            description: "If you need to handle customers, sales, inventory, or accounting, we build custom CRM and ERP systems that are simple, powerful, and do exactly what you want.",
         },
         {
            title: "Integration Solutions",
            description: "Our software connects smoothly with your other tools and platforms. This means information moves easily between your systems, reducing errors and double work.",
         },
         {
            title: "Data Security & Scalability",
            description: "We use strong security practices to protect your information. Plus, your custom software can grow easily as your business gets bigger.",
         },
      ],
      partnerDescription:
         "With HIST, you get more than a software developer — you get a full partner in technology. We support you every step of the way, including; Planning your idea, Designing a user-friendly system, Building and testing your solution,Launching it for you and your team, Offering support and updates as you grow. We make sure your custom software fits perfectly for your business today and can easily adapt for tomorrow.",
   },
   {
      id: "it-consulting",
      icon: Briefcase,
      title: "IT Consulting",
      shortDescription: "Strategic technology consulting to optimize your IT infrastructure and processes.",
      longDescription:
         "In the rapidly evolving digital world of today, astute IT consulting enables companies to maximise technology.  At the House of Information Science and Technology (HIST), we offer professional advice on how to select the best technologies, resolve problems, and create scalable digital strategy.  We assist you in maintaining your competitiveness, reducing expenses, and creating a safe digital foundation, whether you're updating systems or tackling difficult problems.  We provide customised solutions to improve the speed, security, and future-readiness of your technology rather than only offering advice.",
      features: ["Digital Strategy", "System Architecture", "Technology Audit"],
      detailedFeatures: [
         {
            title: "Technology Roadmap",
            description: "3-5 year strategic planning for your digital transformation journey",
         },
         {
            title: "Cost Optimization",
            description: "Identify savings in your IT operations without compromising quality",
         },
         {
            title: "Security Assessment",
            description: "Comprehensive evaluation of your security posture and vulnerabilities",
         },
      ],
      benefits: [
         "Work smarter – Get expert help to choose the right technology.",
         "Save money – Avoid costly mistakes and only pay for what you really need.",
         "Stay secure – Make sure your systems are safe and protected.",
         "Plan for growth – Build a digital plan that can grow with your business.",
         "Easy to understand – Simple, clear advice with no confusing jargon.",
      ],
      strengths: [
         {
            title: "Digital Strategy",
            description: "We help you create a smart plan to use digital tools and technology that support your business goals and make work easier.",
         },
         {
            title: "System Architecture",
            description: "Our experts design the best structure for your systems, helping everything run smoothly and work together with no trouble.",
         },
         {
            title: "Technology Audit",
            description: "We review your current technology—looking for risks, weak spots, and areas for improvement—so you know exactly where to focus your efforts.",
         },
         {
            title: "Custom Solutions",
            description: "Every business is different. That’s why our advice and plans are made just for you, based on your needs and size.",
         },
         {
            title: "Security and Efficency",
            description: "We always keep your data safe and help you get more done with less time and effort.",
         },
      ],
      partnerDescription:
         "With HIST, you’re getting more than just recommendations — you get a partner who supports you at every step, including; Understanding your business and goals, Planning the right digital strategy, Designing and improving IT systems, Reviewing and upgrading your technology. Giving ongoing guidance and updates. We make sure your IT setup works perfectly today and is ready for tomorrow’s challenges.",
   },
   {
      id: "ai-ml-development",
      icon: Star,
      title: "AI/ML Development",
      shortDescription: "Intelligent solutions powered by artificial intelligence and machine learning.",
      longDescription:
         "At HIST – House of Information Science and Technology, we create end-to-end AI and ML solutions to help companies grow, save time, and get intelligent at work. Artificial Intelligence and Machine Learning turn your data into smart insights, simplify processes, and enhance customer service with easy-to-use solutions. You don't need to be an IT specialist — our smart systems keep you ahead in today's world of competition. With HIST, you get successful digital tactics for attaining effectiveness and wiser decision-making.",
      features: ["Predictive Analytics", "Chatbots", "Data Processing"],
      detailedFeatures: [
         {
            title: "Predictive Modeling",
            description: "Forecast trends and behaviors using historical data patterns",
         },
         {
            title: "Natural Language Processing",
            description: "Implement chatbots and text analysis for customer interactions",
         },
         {
            title: "Computer Vision",
            description: "Image and video analysis for quality control and automation",
         },
      ],
      benefits: [
         "Make better decisions – Use predictive analytics to see trends before they happen.",
         "Save time with automation – Chatbots and smart systems handle routine tasks for you.",
         "Work faster – Process a lot of data in seconds, not hours.",
         "Stay ahead of the curve – Use advanced technology that grows with your business.",
         "Easy to use – Our AI tools are made for everyone, not just engineers.",
      ],
      strengths: [
         {
            title: "Powerful Analytics",
            description: "Our AI solutions can look at past data, spot patterns, and help you predict what’s next for your business. That means you can plan better and make smarter choices.",
         },
         {
            title: "Smart Chatbots",
            description: "We build chatbots that can answer customer questions, process requests, and work 24/7. Your customers get quick help — and your team saves time for important work.",
         },
         {
            title: "Fast Data Processing",
            description: "Our systems sort and analyze large sets of data in real time, giving you clear insights when you need them most.",
         },
         {
            title: "flexible and Secure",
            description: "We use secure, scalable technology so your solution works for any size business and keeps your data safe as you grow.",
         },
         {
            title: "User-friendly Experience",
            description: "We make sure all our AI/ML solutions are easy to use, no matter your background or company size.",
         },
      ],
      partnerDescription:
         "When you choose HIST, you're not only investing in intelligent technology — you're aligning with a dedicated team dedicated to your success. We're there for you every step of the way such as Planning your objectives with care and clarity, Designing and constructing solutions particularly to your requirements, Testing to ensure flawless performance, Launching your product and offering ongoing support. We make certain your smart solution is built to tackle today's challenges — and ready to scale with you tomorrow.",
   },
   {
      id: "ui-ux-design",
      icon: ImageIcon,
      title: "UI/UX Design",
      shortDescription: "User-centered design creating intuitive and engaging digital experiences.",
      longDescription:
         "Our design team creates beautiful, functional interfaces that delight users and drive conversions. We follow a user-centered design process that includes research, prototyping, testing, and iteration to ensure your digital products provide exceptional experiences.",
      features: ["User Research", "Prototyping", "Design Systems"],
      detailedFeatures: [
         {
            title: "User Research",
            description: "In-depth analysis of user needs, behaviors, and pain points",
         },
         {
            title: "Interactive Prototypes",
            description: "High-fidelity prototypes for testing and stakeholder approval",
         },
         {
            title: "Design Systems",
            description: "Consistent component libraries for unified brand experiences",
         },
      ],
      benefits: [
         "Increased user engagement and satisfaction",
         "Higher conversion rates through optimized flows",
         "Reduced development costs with clear specifications",
         "Consistent brand experience across all touchpoints",
         "Accessibility compliance for all users",
      ],
      strengths: [
         {
            title: "User-Centered Approach",
            description: "Designs grounded in research and user testing",
         },
         {
            title: "Conversion Optimization",
            description: "Data-driven designs that improve key business metrics",
         },
         {
            title: "Design Systems",
            description: "Scalable component libraries for consistent experiences",
         },
         {
            title: "Accessibility Focus",
            description: "Inclusive designs that work for all users",
         },
         {
            title: "Collaborative Process",
            description: "Close partnership throughout the design journey",
         },
      ],
      partnerDescription:
         "HIST becomes your design partner, creating experiences that users love and that drive business results. We collaborate closely with your team to understand your users and business goals, delivering designs that are both beautiful and effective.",
   },
   {
      id: "maintenance-support",
      icon: Heart,
      title: "Maintenance & Support",
      shortDescription: "24/7 technical support and maintenance services for your digital assets.",
      longDescription:
         "We provide comprehensive maintenance and support services to keep your digital products running smoothly. Our team handles everything from bug fixes and security updates to performance optimization and feature enhancements.",
      features: ["Bug Fixes", "Performance Optimization", "Security Updates"],
      detailedFeatures: [
         {
            title: "Proactive Monitoring",
            description: "24/7 system monitoring with immediate alerting for issues",
         },
         {
            title: "Scheduled Maintenance",
            description: "Regular updates and optimizations to prevent problems",
         },
         {
            title: "Emergency Support",
            description: "Rapid response team for critical system issues",
         },
      ],
      benefits: [
         "Reduced downtime with proactive monitoring",
         "Enhanced security through regular updates",
         "Improved performance with ongoing optimization",
         "Extended product lifespan with continuous improvements",
         "Peace of mind with expert support",
      ],
      strengths: [
         {
            title: "Proactive Maintenance",
            description: "Prevent issues before they impact your business",
         },
         {
            title: "Rapid Response",
            description: "Quick resolution of critical issues with SLAs",
         },
         {
            title: "Performance Optimization",
            description: "Continuous improvements to keep systems running smoothly",
         },
         {
            title: "Security Vigilance",
            description: "Timely updates and patches to protect against vulnerabilities",
         },
         {
            title: "Evolutionary Development",
            description: "Gradual improvements and feature additions over time",
         },
      ],
      partnerDescription:
         "As your long-term technology partner, HIST ensures your digital products remain secure, performant, and valuable. We provide peace of mind through reliable support and continuous improvement, allowing you to focus on your core business.",
   },
   {
      id: "cloud-services",
      icon: Calendar,
      title: "Cloud Services",
      shortDescription: "Cloud migration, deployment, and management services for modern infrastructure.",
      longDescription:
         "We help businesses leverage cloud computing to improve scalability, reduce costs, and enhance security. Our cloud services include migration strategy, implementation, and ongoing management across AWS, Azure, and Google Cloud platforms.",
      features: ["AWS/Azure Setup", "DevOps", "Cloud Security"],
      detailedFeatures: [
         {
            title: "Cloud Migration",
            description: "Seamless transition of applications and data to the cloud",
         },
         {
            title: "Infrastructure as Code",
            description: "Automated, reproducible cloud environments using Terraform",
         },
         {
            title: "Cost Management",
            description: "Monitoring and optimization of cloud spending",
         },
      ],
      benefits: [
         "Reduced infrastructure costs with pay-as-you-go models",
         "Improved scalability to handle traffic fluctuations",
         "Enhanced reliability with geographically distributed systems",
         "Faster deployment of new services and features",
         "Enterprise-grade security with cloud provider capabilities",
      ],
      strengths: [
         {
            title: "Multi-Cloud Expertise",
            description: "Experience across AWS, Azure, and Google Cloud platforms",
         },
         {
            title: "Migration Strategy",
            description: "Risk-minimized cloud transitions with proven methodologies",
         },
         {
            title: "Cost Optimization",
            description: "Continuous monitoring and optimization of cloud spending",
         },
         {
            title: "Security & Compliance",
            description: "Secure configurations meeting industry compliance standards",
         },
         {
            title: "DevOps Automation",
            description: "CI/CD pipelines and infrastructure as code implementations",
         },
      ],
      partnerDescription:
         "HIST becomes your cloud partner, guiding you through migration and managing your cloud environment for optimal performance, security, and cost efficiency. We provide end-to-end cloud services that transform how you deploy and manage your infrastructure.",
   },
];
