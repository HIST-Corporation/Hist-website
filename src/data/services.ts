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
}

export const services: Service[] = [
   {
      id: "saas-product-development",
      icon: Code,
      title: "SaaS Product Development",
      shortDescription:
         "End-to-end SaaS solutions with scalable architecture, user management, and modern UI/UX design.",
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
   },
   {
      id: "website-app-development",
      icon: Grid2x2,
      title: "Website & App Development",
      shortDescription: "Responsive websites and mobile applications built with cutting-edge technologies.",
      longDescription:
         "We create responsive, high-performance websites and mobile applications using modern frameworks like React, Next.js, and Flutter. Our development process focuses on user-centric design, cross-platform compatibility, and optimal performance across all devices. From simple landing pages to complex web applications, we deliver solutions that drive engagement and conversions.",
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
   },
   {
      id: "custom-software",
      icon: Settings,
      title: "Custom Software Solutions",
      shortDescription: "Tailored software applications designed to solve specific business challenges.",
      longDescription:
         "We develop custom software solutions that address your unique business requirements, from workflow automation to specialized enterprise systems. Our team works closely with you to understand your processes and build software that enhances productivity, reduces costs, and gives you a competitive edge. We specialize in custom CRM, ERP, and business automation tools.",
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
   },
   {
      id: "it-consulting",
      icon: Briefcase,
      title: "IT Consulting",
      shortDescription: "Strategic technology consulting to optimize your IT infrastructure and processes.",
      longDescription:
         "Our IT consulting services help you make informed technology decisions, optimize your infrastructure, and align IT strategy with business goals. We provide expertise in digital transformation, cloud adoption, security assessments, and technology roadmapping. Our consultants bring years of experience across industries to help you navigate complex technology challenges.",
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
   },
   {
      id: "ai-ml-development",
      icon: Star,
      title: "AI/ML Development",
      shortDescription: "Intelligent solutions powered by artificial intelligence and machine learning.",
      longDescription:
         "We build AI-powered solutions that transform your business operations and customer experiences. From predictive analytics to computer vision and natural language processing, we implement machine learning models that deliver real business value. Our team handles everything from data preparation to model deployment and ongoing optimization.",
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
   },
   {
      id: "ui-ux-design",
      icon: ImageIcon,
      title: "UI/UX Design",
      shortDescription: "User-centered design creating intuitive and engaging digital experiences.",
      longDescription:
         "Our design team creates beautiful, functional interfaces that delight users and drive conversions. We follow a user-centered design process that includes research, prototyping, testing, and iteration. From wireframes to design systems, we ensure your digital products provide exceptional user experiences across all platforms and devices.",
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
   },
   {
      id: "maintenance-support",
      icon: Heart,
      title: "Maintenance & Support",
      shortDescription: "24/7 technical support and maintenance services for your digital assets.",
      longDescription:
         "We provide comprehensive maintenance and support services to keep your digital products running smoothly. Our team handles everything from bug fixes and security updates to performance optimization and feature enhancements. With SLAs tailored to your needs, we ensure maximum uptime and rapid response to any issues that arise.",
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
   },
   {
      id: "cloud-services",
      icon: Calendar,
      title: "Cloud Services",
      shortDescription: "Cloud migration, deployment, and management services for modern infrastructure.",
      longDescription:
         "We help businesses leverage cloud computing to improve scalability, reduce costs, and enhance security. Our cloud services include migration strategy, implementation, and ongoing management across AWS, Azure, and Google Cloud platforms. We optimize your cloud infrastructure for performance, cost-efficiency, and reliability.",
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
   },
];
