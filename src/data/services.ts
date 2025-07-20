// services.ts
import { Code, Briefcase, Settings, Star, Grid2x2, Image as ImageIcon, Calendar, Heart } from "lucide-react";

export interface Service {
   id: string;
   icon: React.ComponentType<any>;
   title: string;
   headerImage: string;
   strengthsImage: string;
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
      headerImage: "/images/services/saas-product.jpg",
      strengthsImage: "/images/services/saas-strengths.jpg",
      longDescription:
         "We build comprehensive SaaS products from concept to deployment, focusing on scalability, security, and user experience. Our solutions include multi-tenant architecture, subscription management, and seamless third-party integrations to ensure your product stands out in the competitive market.",
      features: [
         "Multi-tenant Architecture",
         "Subscription Billing",
         "API Ecosystem",
         "Cloud Integration",
         "User Management",
      ],
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
            title: "Security First",
            description: "Enterprise-grade security with SOC 2 compliance and data encryption",
         },
      ],
      benefits: [
         "Reduce time-to-market with our proven development framework",
         "Scale effortlessly with cloud-native architecture",
         "Increase revenue with flexible subscription models",
         "Enhance security with enterprise-grade protections",
         "Improve user experience with intuitive interfaces",
      ],
      strengths: [
         {
            title: "Proven Methodology",
            description: "We follow our established SaaS development framework honed over 50+ successful projects",
         },
         {
            title: "Vertical Expertise",
            description: "Deep experience in healthcare, fintech, e-commerce, and enterprise SaaS solutions",
         },
         {
            title: "Full Lifecycle Support",
            description: "From MVP to enterprise-scale deployment with continuous optimization",
         },
      ],
      partnerDescription:
         "As your SaaS development partner, we become an extension of your team, providing not just technical expertise but strategic guidance to ensure your product achieves market success. Our end-to-end approach covers everything from initial concept validation to post-launch optimization and scaling.",
   },
   {
      id: "website-app-development",
      icon: Grid2x2,
      title: "Website & App Development",
      headerImage: "/images/services/web-development.jpg",
      strengthsImage: "/images/services/web-strengths.jpg",
      longDescription:
         "We create high-performance, responsive websites and cross-platform mobile applications using modern technologies like React, Next.js, and Flutter. Our solutions are optimized for speed, accessibility, and conversion across all devices and platforms.",
      features: [
         "Responsive Design",
         "Progressive Web Apps",
         "Cross-Platform Mobile",
         "Performance Optimization",
         "Accessibility Compliance",
      ],
      detailedFeatures: [
         {
            title: "Lightning Fast",
            description: "90+ Lighthouse scores with optimized assets and efficient code",
         },
         {
            title: "Future-Proof",
            description: "Built with modern frameworks that are maintainable and extensible",
         },
         {
            title: "Conversion Focused",
            description: "UX designed to maximize user engagement and conversions",
         },
      ],
      benefits: [
         "Single codebase for iOS, Android and web with Flutter",
         "Offline-capable PWAs with native app features",
         "SEO-optimized for maximum visibility",
         "ADA/WCAG compliant accessibility",
         "Continuous performance monitoring",
      ],
      strengths: [
         {
            title: "Cross-Platform Experts",
            description: "Specialists in building unified experiences across web and mobile platforms",
         },
         {
            title: "Performance Obsessed",
            description: "Rigorous performance testing and optimization at every stage",
         },
         {
            title: "Design-Dev Alignment",
            description: "Seamless collaboration between our design and development teams",
         },
      ],
      partnerDescription:
         "Our web and app development team combines technical excellence with creative design to build digital experiences that users love and that drive real business results. We handle everything from initial concepts to post-launch optimizations.",
   },
   {
      id: "custom-software",
      icon: Settings,
      title: "Custom Software Solutions",
      headerImage: "/images/services/custom-software.jpg",
      strengthsImage: "/images/services/custom-strengths.jpg",
      longDescription:
         "Tailored software solutions designed specifically for your unique business requirements. We analyze your workflows and build systems that enhance productivity, reduce costs, and provide competitive advantages.",
      features: [
         "Process Automation",
         "Custom Business Logic",
         "Legacy System Integration",
         "Workflow Optimization",
         "Data Visualization",
      ],
      detailedFeatures: [
         {
            title: "Business Process Analysis",
            description: "Deep dive into your operations to identify optimization opportunities",
         },
         {
            title: "Tailored Solutions",
            description: "Software designed specifically for your business needs",
         },
         {
            title: "Seamless Integration",
            description: "Connect with your existing systems and databases",
         },
      ],
      benefits: [
         "Eliminate manual processes with automation",
         "Get exactly the features you need",
         "Integrate with your existing tools",
         "Real-time data and reporting",
         "Scalable as your business grows",
      ],
      strengths: [
         {
            title: "Domain Expertise",
            description: "Experience across healthcare, manufacturing, logistics and more",
         },
         {
            title: "Full-Cycle Development",
            description: "From requirements gathering to deployment and training",
         },
         {
            title: "Ongoing Evolution",
            description: "Continuous improvement based on user feedback",
         },
      ],
      partnerDescription:
         "We don't just build software - we solve business problems. Our team becomes your partner, working closely to understand your challenges and deliver solutions that transform how you work.",
   },
   {
      id: "it-consulting",
      icon: Briefcase,
      title: "IT Consulting",
      headerImage: "/images/services/it-consulting.jpg",
      strengthsImage: "/images/services/consulting-strengths.jpg",
      longDescription:
         "Strategic technology consulting to align your IT infrastructure with business goals. We provide expert guidance on digital transformation, cloud adoption, security, and technology roadmapping to optimize your operations.",
      features: [
         "Digital Strategy",
         "Cloud Adoption",
         "Security Assessment",
         "Technology Roadmap",
         "Cost Optimization",
      ],
      detailedFeatures: [
         {
            title: "Strategic Planning",
            description: "3-5 year technology roadmap aligned with business objectives",
         },
         {
            title: "Cost Analysis",
            description: "Identify inefficiencies and optimize IT spending",
         },
         {
            title: "Security Hardening",
            description: "Comprehensive security assessments and remediation plans",
         },
      ],
      benefits: [
         "Expert guidance on technology investments",
         "Optimized IT infrastructure costs",
         "Enhanced security and compliance",
         "Clear roadmap for digital transformation",
         "Improved operational efficiency",
      ],
      strengths: [
         {
            title: "Holistic Approach",
            description: "We consider people, processes and technology in our recommendations",
         },
         {
            title: "Vendor Neutral",
            description: "Objective advice not tied to any specific technology provider",
         },
         {
            title: "Practical Implementation",
            description: "Recommendations that consider your team's capabilities and constraints",
         },
      ],
      partnerDescription:
         "As your trusted IT consultants, we provide unbiased, strategic advice to help you navigate complex technology decisions. We work closely with your leadership team to develop and execute technology strategies that drive business growth while managing risk and cost.",
   },
   {
      id: "ai-ml-development",
      icon: Star,
      title: "AI/ML Development",
      headerImage: "/images/services/ai-development.jpg",
      strengthsImage: "/images/services/ai-strengths.jpg",
      longDescription:
         "Transform your business with intelligent solutions powered by artificial intelligence and machine learning. From predictive analytics to computer vision, we implement AI that delivers measurable business value.",
      features: [
         "Predictive Analytics",
         "Natural Language Processing",
         "Computer Vision",
         "Recommendation Engines",
         "Process Automation",
      ],
      detailedFeatures: [
         {
            title: "Custom AI Models",
            description: "Tailored machine learning models for your specific use cases",
         },
         {
            title: "Data Pipeline",
            description: "End-to-end data collection, processing and model training",
         },
         {
            title: "Ethical AI",
            description: "Responsible AI development with fairness and transparency",
         },
      ],
      benefits: [
         "Automate complex decision-making processes",
         "Enhance customer experiences through personalization",
         "Improve operational efficiency with predictive maintenance",
         "Gain competitive advantage through data insights",
         "Reduce costs through intelligent automation",
      ],
      strengths: [
         {
            title: "Applied AI",
            description: "Focus on practical business applications rather than theoretical models",
         },
         {
            title: "Full Stack AI",
            description: "From data engineering to model deployment and monitoring",
         },
         {
            title: "Industry Specialization",
            description: "Domain-specific solutions for healthcare, retail, manufacturing etc.",
         },
      ],
      partnerDescription:
         "We guide you through the complete AI journey - from identifying high-value use cases to implementing production-ready solutions. Our team combines deep technical expertise with business acumen to deliver AI solutions that create real impact.",
   },
   {
      id: "ui-ux-design",
      icon: ImageIcon,
      title: "UI/UX Design",
      headerImage: "/images/services/ui-ux-design.jpg",
      strengthsImage: "/images/services/design-strengths.jpg",
      longDescription:
         "Beautiful, intuitive interfaces designed to delight users and drive business results. Our user-centered design process combines research, prototyping, and testing to create exceptional digital experiences.",
      features: [
         "User Research",
         "Interactive Prototypes",
         "Design Systems",
         "Usability Testing",
         "Accessibility Audits",
      ],
      detailedFeatures: [
         {
            title: "User-Centered",
            description: "Designs grounded in real user needs and behaviors",
         },
         {
            title: "Conversion Optimized",
            description: "Data-driven designs that improve key metrics",
         },
         {
            title: "Design Systems",
            description: "Scalable component libraries for consistent experiences",
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
            title: "Research-Driven",
            description: "Deep user understanding through interviews, surveys and analytics",
         },
         {
            title: "Business-Aligned",
            description: "Designs that balance user needs with business objectives",
         },
         {
            title: "Technical Feasibility",
            description: "Practical designs that developers can efficiently implement",
         },
      ],
      partnerDescription:
         "We don't just make things look good - we create experiences that work. Our design team becomes your partner, collaborating closely to understand your users and business goals, then delivering designs that are both beautiful and effective.",
   },
   {
      id: "maintenance-support",
      icon: Heart,
      title: "Maintenance & Support",
      headerImage: "/images/services/support.jpg",
      strengthsImage: "/images/services/support-strengths.jpg",
      longDescription:
         "Comprehensive maintenance and support services to keep your digital products running smoothly. We handle everything from bug fixes and security updates to performance optimization and feature enhancements.",
      features: [
         "Proactive Monitoring",
         "Scheduled Maintenance",
         "Emergency Support",
         "Performance Optimization",
         "Security Updates",
      ],
      detailedFeatures: [
         {
            title: "24/7 Monitoring",
            description: "Real-time monitoring with immediate alerting for issues",
         },
         {
            title: "Preventive Maintenance",
            description: "Regular updates and optimizations to prevent problems",
         },
         {
            title: "Rapid Response",
            description: "Quick resolution of critical issues with SLAs",
         },
      ],
      benefits: [
         "Minimize downtime with proactive monitoring",
         "Enhanced security through regular updates",
         "Improved performance with ongoing optimization",
         "Extended product lifespan with continuous improvements",
         "Peace of mind with expert support",
      ],
      strengths: [
         {
            title: "Proactive Approach",
            description: "We prevent issues before they impact your business",
         },
         {
            title: "Technical Depth",
            description: "Deep understanding of complex systems for effective troubleshooting",
         },
         {
            title: "Business Awareness",
            description: "Support that considers your operational needs and priorities",
         },
      ],
      partnerDescription:
         "As your long-term technology partner, we ensure your digital products remain secure, performant, and valuable. We provide peace of mind through reliable support and continuous improvement, allowing you to focus on your core business.",
   },
   {
      id: "cloud-services",
      icon: Calendar,
      title: "Cloud Services",
      headerImage: "/images/services/cloud.jpg",
      strengthsImage: "/images/services/cloud-strengths.jpg",
      longDescription:
         "End-to-end cloud solutions including migration, deployment, and management across AWS, Azure, and Google Cloud. We help you leverage cloud computing to improve scalability, reduce costs, and enhance security.",
      features: [
         "Cloud Migration",
         "Infrastructure as Code",
         "Cost Optimization",
         "DevOps Automation",
         "Security & Compliance",
      ],
      detailedFeatures: [
         {
            title: "Multi-Cloud",
            description: "Expertise across AWS, Azure and Google Cloud platforms",
         },
         {
            title: "Migration Strategy",
            description: "Risk-minimized cloud transitions with proven methodologies",
         },
         {
            title: "Cost Management",
            description: "Continuous monitoring and optimization of cloud spending",
         },
      ],
      benefits: [
         "Reduce infrastructure costs with pay-as-you-go models",
         "Improve scalability to handle traffic fluctuations",
         "Enhance reliability with geographically distributed systems",
         "Faster deployment of new services and features",
         "Enterprise-grade security with cloud provider capabilities",
      ],
      strengths: [
         {
            title: "Certified Experts",
            description: "AWS, Azure and Google Cloud certified professionals",
         },
         {
            title: "FinOps Practice",
            description: "Cloud financial management to optimize spending",
         },
         {
            title: "Security Focus",
            description: "Secure configurations meeting industry compliance standards",
         },
      ],
      partnerDescription:
         "We become your cloud partner, guiding you through migration and managing your cloud environment for optimal performance, security, and cost efficiency. Our team provides end-to-end cloud services that transform how you deploy and manage your infrastructure.",
   },
];
