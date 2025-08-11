import { BookOpen, Heart, Briefcase, ShoppingBag, Calendar, MapPin } from "lucide-react";

export interface Industry {
   id: string;
   icon: React.ComponentType<any>;
   title: string;
   shortDescription: string;
   projects: string;
   iconColor: string;
   bgColor: string;
   ringColor: string;
   longDescription: string;
   solutions: {
      title: string;
      description: string;
   }[];
   benefits: string[];
   caseStudies: {
      title: string;
      description: string;
      result: string;
   }[];
   strengths: {
      title: string;
      description: string;
   }[];
   partnerDescription: string;
}

export const industries: Industry[] = [
   {
      id: "education",
      icon: BookOpen,
      title: "Education",
      projects: "+ Projects",
      iconColor: "text-purple-600 group-hover:text-purple-700",
      bgColor: "bg-purple-100 group-hover:bg-purple-200",
      ringColor: "ring-purple-500",
      shortDescription: "Learning management systems, student portals, and educational technology solutions.",
      longDescription:
         "We develop cutting-edge educational technology solutions that transform learning experiences. Our platforms enhance student engagement, streamline administrative tasks, and enable institutions to deliver personalized education at scale. From K-12 to higher education, we build systems that adapt to evolving pedagogical needs.",
      solutions: [
         {
            title: "Learning Management Systems",
            description: "Custom LMS platforms with interactive content delivery, assessment tools, and analytics",
         },
         {
            title: "Student Portals",
            description: "Unified platforms for course management, resource access, and communication",
         },
         {
            title: "Virtual Classrooms",
            description: "Real-time collaboration tools with video conferencing and interactive whiteboards",
         },
      ],
      benefits: [
         "30% increase in student engagement",
         "40% reduction in administrative workload",
         "Personalized learning paths for students",
         "Real-time performance analytics",
         "Seamless integration with existing systems",
      ],
      caseStudies: [
         {
            title: "University Learning Platform",
            description: "Centralized platform for 50,000+ students across 5 campuses",
            result: "Increased course completion rates by 25%",
         },
         {
            title: "K-12 Assessment System",
            description: "Automated grading and performance tracking for school district",
            result: "Saved 15+ hours weekly for teaching staff",
         },
      ],
      strengths: [
         {
            title: "Pedagogical Expertise",
            description: "Our team includes former educators who understand teaching methodologies",
         },
         {
            title: "Scalable Architecture",
            description: "Platforms designed for institutions of all sizes",
         },
         {
            title: "Accessibility Focus",
            description: "WCAG-compliant solutions for all learners",
         },
      ],
      partnerDescription:
         "Partner with us to build future-ready educational ecosystems. We combine technical excellence with pedagogical insight to create solutions that empower educators, engage students, and transform learning outcomes.",
   },
   {
      id: "healthcare",
      icon: Heart,
      title: "Healthcare",
      projects: "3+ Projects",
      iconColor: "text-red-600 group-hover:text-red-700",
      bgColor: "bg-red-100 group-hover:bg-red-200",
      ringColor: "ring-red-500",
      shortDescription: "Hospital management systems, patient portals, and telemedicine solutions.",
      longDescription:
         "Our healthcare solutions improve patient outcomes while optimizing operational efficiency. We develop HIPAA-compliant systems that streamline clinical workflows, enhance patient engagement, and enable data-driven decision making. From electronic health records to telemedicine platforms, we build technology that cares.",
      solutions: [
         {
            title: "Patient Management Systems",
            description: "End-to-end solutions for appointment scheduling, records management, and billing",
         },
         {
            title: "Telemedicine Platforms",
            description: "Secure video consultations and remote patient monitoring",
         },
         {
            title: "Clinical Analytics",
            description: "Data visualization tools for treatment outcomes and operational efficiency",
         },
      ],
      benefits: [
         "Reduced patient wait times by 35%",
         "Improved data accuracy and compliance",
         "Enhanced patient satisfaction scores",
         "Streamlined insurance claims processing",
         "Real-time health monitoring capabilities",
      ],
      caseStudies: [
         {
            title: "Multi-Specialty Hospital System",
            description: "Integrated EMR solution for 300+ physicians",
            result: "Reduced patient processing time by 40%",
         },
         {
            title: "Telehealth Network",
            description: "State-wide platform serving rural communities",
            result: "Increased access to specialists by 300%",
         },
      ],
      strengths: [
         {
            title: "Regulatory Compliance",
            description: "HIPAA, GDPR, and HITECH-compliant solutions",
         },
         {
            title: "Interoperability",
            description: "Seamless integration with medical devices and existing systems",
         },
         {
            title: "Clinical Workflow Optimization",
            description: "Designed with input from healthcare professionals",
         },
      ],
      partnerDescription:
         "We become your technology partner in healthcare innovation. Our solutions help you deliver better patient care while improving operational efficiency and maintaining the highest standards of data security and compliance.",
   },
   {
      id: "finance",
      icon: Briefcase,
      title: "Finance",
      projects: "5+ Projects",
      iconColor: "text-blue-600 group-hover:text-blue-700",
      bgColor: "bg-blue-100 group-hover:bg-blue-200",
      ringColor: "ring-blue-500",
      shortDescription: "Banking software, fintech solutions, and financial management systems.",
      longDescription:
         "We build secure, scalable financial systems that drive innovation while ensuring regulatory compliance. Our solutions range from core banking platforms to investment management tools and regulatory reporting systems. We help financial institutions navigate digital transformation with confidence.",
      solutions: [
         {
            title: "Digital Banking Platforms",
            description: "Mobile-first banking experiences with biometric security",
         },
         {
            title: "Wealth Management Tools",
            description: "Portfolio analytics and personalized investment recommendations",
         },
         {
            title: "RegTech Solutions",
            description: "Automated compliance reporting and risk management",
         },
      ],
      benefits: [
         "50% faster transaction processing",
         "Real-time fraud detection capabilities",
         "Automated regulatory compliance",
         "Enhanced customer onboarding experience",
         "Scalable infrastructure for growth",
      ],
      caseStudies: [
         {
            title: "Digital Banking Transformation",
            description: "Core banking replacement for regional bank",
            result: "Reduced operational costs by 28%",
         },
         {
            title: "Investment Platform",
            description: "Robo-advisor platform for retail investors",
            result: "$500M AUM within first year",
         },
      ],
      strengths: [
         {
            title: "Security First",
            description: "Bank-grade security with encryption and multi-factor authentication",
         },
         {
            title: "Regulatory Expertise",
            description: "Solutions designed for FINRA, SEC, and global compliance",
         },
         {
            title: "Real-time Processing",
            description: "High-performance transaction engines",
         },
      ],
      partnerDescription:
         "Partner with us to build the future of finance. We combine financial expertise with cutting-edge technology to deliver solutions that drive growth, ensure compliance, and create exceptional customer experiences in the digital economy.",
   },
   {
      id: "retail-ecommerce",
      icon: ShoppingBag,
      title: "Retail & E-commerce",
      projects: "5+ Projects",
      iconColor: "text-green-600 group-hover:text-green-700",
      bgColor: "bg-green-100 group-hover:bg-green-200",
      ringColor: "ring-green-500",
      shortDescription: "Online stores, inventory management, and customer relationship systems.",
      longDescription:
         "We create seamless omnichannel experiences that drive sales and customer loyalty. Our retail solutions unify online and in-store operations with intelligent inventory management, personalized marketing, and frictionless checkout experiences. We help retailers thrive in the digital marketplace.",
      solutions: [
         {
            title: "E-commerce Platforms",
            description: "Custom storefronts with AI-powered recommendations",
         },
         {
            title: "Inventory Optimization",
            description: "Real-time stock management across multiple locations",
         },
         {
            title: "Customer Data Platforms",
            description: "Unified customer profiles for personalized marketing",
         },
      ],
      benefits: [
         "20% increase in average order value",
         "30% reduction in cart abandonment",
         "Unified inventory visibility across channels",
         "Personalized customer experiences",
         "Real-time sales analytics",
      ],
      caseStudies: [
         {
            title: "Fashion Retailer Omnichannel",
            description: "Integrated POS, e-commerce and inventory system",
            result: "35% increase in online sales",
         },
         {
            title: "Global Electronics Marketplace",
            description: "Scalable platform handling 500k+ SKUs",
            result: "Handled 5x traffic surge during holiday season",
         },
      ],
      strengths: [
         {
            title: "Omnichannel Expertise",
            description: "Seamless integration of physical and digital experiences",
         },
         {
            title: "Personalization Engines",
            description: "AI-driven recommendations and marketing automation",
         },
         {
            title: "Scalable Infrastructure",
            description: "Platforms designed for seasonal traffic spikes",
         },
      ],
      partnerDescription:
         "We're your digital transformation partner for retail success. Our solutions help you deliver exceptional customer experiences while optimizing operations and driving growth across all sales channels.",
   },
   {
      id: "government",
      icon: Calendar,
      title: "Government",
      projects: "2+ Projects",
      iconColor: "text-yellow-600 group-hover:text-yellow-700",
      bgColor: "bg-yellow-100 group-hover:bg-yellow-200",
      ringColor: "ring-yellow-500",
      shortDescription: "Digital governance solutions, citizen services, and administrative systems.",
      longDescription:
         "We develop secure, accessible government solutions that improve citizen services while increasing operational efficiency. Our platforms transform bureaucratic processes into streamlined digital experiences while maintaining the highest standards of security and compliance.",
      solutions: [
         {
            title: "Citizen Service Portals",
            description: "Unified platforms for service requests and information access",
         },
         {
            title: "Permit & Licensing Systems",
            description: "Automated workflows for application processing",
         },
         {
            title: "Data Transparency Platforms",
            description: "Public-facing dashboards for government performance metrics",
         },
      ],
      benefits: [
         "60% reduction in service processing times",
         "24/7 citizen access to services",
         "Improved inter-departmental collaboration",
         "Enhanced data security and compliance",
         "Reduced operational costs",
      ],
      caseStudies: [
         {
            title: "State Licensing System",
            description: "Unified platform for 200+ license types",
            result: "Reduced processing time from weeks to days",
         },
         {
            title: "Municipal Service Portal",
            description: "Centralized access to 50+ city services",
            result: "Handled 10k+ monthly requests with 95% satisfaction",
         },
      ],
      strengths: [
         {
            title: "Security Compliance",
            description: "FISMA, FedRAMP, and CJIS compliant solutions",
         },
         {
            title: "Accessibility Focus",
            description: "Section 508 compliant interfaces for all citizens",
         },
         {
            title: "Process Automation",
            description: "Digitizing complex bureaucratic workflows",
         },
      ],
      partnerDescription:
         "Partner with us to build government for the digital age. We help public sector organizations deliver better services, increase transparency, and operate more efficiently while maintaining the highest standards of security and accessibility.",
   },
   {
      id: "logistics",
      icon: MapPin,
      title: "Logistics",
      projects: "2+ Projects",
      iconColor: "text-indigo-600 group-hover:text-indigo-700",
      bgColor: "bg-indigo-100 group-hover:bg-indigo-200",
      ringColor: "ring-indigo-500",
      shortDescription: "Supply chain management, tracking systems, and delivery optimization.",
      longDescription:
         "We build intelligent logistics solutions that optimize supply chain operations from warehouse to final delivery. Our platforms provide real-time visibility, predictive analytics, and automation to reduce costs and improve service reliability in complex distribution networks.",
      solutions: [
         {
            title: "Fleet Management Systems",
            description: "Real-time tracking and optimization for delivery vehicles",
         },
         {
            title: "Warehouse Automation",
            description: "Inventory management with IoT integration",
         },
         {
            title: "Route Optimization",
            description: "AI-powered planning for fuel efficiency and timely deliveries",
         },
      ],
      benefits: [
         "15% reduction in fuel costs",
         "20% improvement in on-time deliveries",
         "Real-time shipment tracking",
         "Automated inventory reconciliation",
         "Predictive maintenance capabilities",
      ],
      caseStudies: [
         {
            title: "National Distribution Network",
            description: "Optimization system for 500-vehicle fleet",
            result: "Reduced empty miles by 22%",
         },
         {
            title: "Cold Chain Monitoring",
            description: "IoT-enabled temperature tracking system",
            result: "Reduced spoilage by 18%",
         },
      ],
      strengths: [
         {
            title: "Real-time Visibility",
            description: "End-to-end tracking across the supply chain",
         },
         {
            title: "Predictive Analytics",
            description: "AI-driven insights for demand forecasting",
         },
         {
            title: "IoT Integration",
            description: "Sensor networks for condition monitoring",
         },
      ],
      partnerDescription:
         "We're your technology partner for supply chain excellence. Our logistics solutions help you optimize operations, reduce costs, and deliver exceptional service in an increasingly complex global supply chain environment.",
   },
];
