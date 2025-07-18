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
         "We build comprehensive SaaS products from concept to deployment, focusing on scalability, security, and user experience. Our solutions include multi-tenant architecture, subscription management, and seamless third-party integrations. We ensure your SaaS product is built with the latest technologies for maximum performance and reliability.",
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
         "We create responsive, high-performance websites and mobile applications using modern frameworks. Our development process focuses on user-centric design, cross-platform compatibility, and optimal performance across all devices. From simple landing pages to complex web applications, we deliver solutions that drive engagement and conversions.",
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
         "Reach customers on any device with responsive designs",
         "Native-like experiences with Progressive Web App technology",
         "Faster time-to-market with modern development frameworks",
         "Seamless updates without app store approvals",
         "Reduced development costs with cross-platform solutions",
      ],
      strengths: [
         {
            title: "Modern Frameworks",
            description:
               "We use React, Next.js, and Flutter to build performant applications with excellent developer experience",
         },
         {
            title: "Performance Focused",
            description: "Every application is optimized for speed, accessibility, and SEO from the ground up",
         },
         {
            title: "Cross-Platform",
            description: "Single codebase solutions that work seamlessly across web, iOS, and Android platforms",
         },
         {
            title: "User-Centric Design",
            description: "Applications designed around user needs with intuitive navigation and workflows",
         },
         {
            title: "Agile Development",
            description: "Iterative development process with continuous feedback and improvement cycles",
         },
      ],
      partnerDescription:
         "As your digital development partner, HIST ensures your website or app not only looks great but performs exceptionally. We handle everything from initial concept to post-launch optimization, providing continuous support and updates. Our team becomes an extension of yours, dedicated to creating digital experiences that drive business results.",
   },
   {
      id: "custom-software",
      icon: Settings,
      title: "Custom Software Solutions",
      shortDescription: "Tailored software applications designed to solve specific business challenges.",
      longDescription:
         "We develop custom software solutions that address your unique business requirements, from workflow automation to specialized enterprise systems. Our team works closely with you to understand your processes and build software that enhances productivity, reduces costs, and gives you a competitive edge.",
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
         "Solutions designed specifically for your business needs",
         "Automation of repetitive tasks to boost productivity",
         "Seamless integration with existing systems",
         "Competitive advantage through proprietary technology",
         "Scalable solutions that grow with your business",
      ],
      strengths: [
         {
            title: "Business Analysis",
            description: "Deep understanding of your workflows to identify optimization opportunities",
         },
         {
            title: "Custom Development",
            description: "Tailor-made solutions that precisely fit your operational requirements",
         },
         {
            title: "Integration Expertise",
            description: "Seamless connection between new solutions and existing infrastructure",
         },
         {
            title: "Workflow Automation",
            description: "Automation of repetitive tasks to increase efficiency and reduce errors",
         },
         {
            title: "Long-term Support",
            description: "Ongoing maintenance and evolution of your custom solutions",
         },
      ],
      partnerDescription:
         "HIST becomes your technology partner, developing custom solutions that transform how you work. We don't just deliver software - we deliver competitive advantages. From initial consultation through development and ongoing support, we ensure your custom solution evolves with your business needs.",
   },
   {
      id: "it-consulting",
      icon: Briefcase,
      title: "IT Consulting",
      shortDescription: "Strategic technology consulting to optimize your IT infrastructure and processes.",
      longDescription:
         "Our IT consulting services help you make informed technology decisions, optimize your infrastructure, and align IT strategy with business goals. We provide expertise in digital transformation, cloud adoption, security assessments, and technology roadmapping.",
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
         "Expert guidance on technology investments",
         "Optimized IT infrastructure costs",
         "Enhanced security and compliance",
         "Strategic roadmap for digital transformation",
         "Improved alignment between IT and business goals",
      ],
      strengths: [
         {
            title: "Strategic Planning",
            description: "Technology roadmaps aligned with your business objectives",
         },
         {
            title: "Cost Optimization",
            description: "Identifying savings opportunities without compromising performance",
         },
         {
            title: "Security Expertise",
            description: "Comprehensive security assessments and hardening strategies",
         },
         {
            title: "Cloud Strategy",
            description: "Migration planning and optimization for cloud environments",
         },
         {
            title: "Digital Transformation",
            description: "Guidance through your organization's digital evolution",
         },
      ],
      partnerDescription:
         "As your strategic IT partner, HIST provides the expertise and guidance to navigate complex technology decisions. We work closely with your leadership team to develop and execute technology strategies that drive business growth, reduce costs, and mitigate risks.",
   },
   {
      id: "ai-ml-development",
      icon: Star,
      title: "AI/ML Development",
      shortDescription: "Intelligent solutions powered by artificial intelligence and machine learning.",
      longDescription:
         "We build AI-powered solutions that transform your business operations and customer experiences. From predictive analytics to computer vision and natural language processing, we implement machine learning models that deliver real business value.",
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
         "Automated decision-making processes",
         "Enhanced customer experiences through personalization",
         "Improved operational efficiency with predictive maintenance",
         "Data-driven insights for strategic decisions",
         "Competitive advantage through innovative AI applications",
      ],
      strengths: [
         {
            title: "Data Science Expertise",
            description: "Experienced team with deep knowledge in machine learning algorithms",
         },
         {
            title: "Custom AI Solutions",
            description: "Tailored AI models that address your specific business challenges",
         },
         {
            title: "Ethical AI Practices",
            description: "Responsible AI development with fairness and transparency",
         },
         {
            title: "End-to-End Implementation",
            description: "From data preparation to model deployment and monitoring",
         },
         {
            title: "Industry Specialization",
            description: "Domain-specific AI solutions for your industry vertical",
         },
      ],
      partnerDescription:
         "HIST guides you through the AI journey, from identifying opportunities to implementing and maintaining solutions. We become your AI innovation partner, helping you leverage cutting-edge technologies to solve complex problems and create new business value.",
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
