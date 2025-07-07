// import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { 
//   Code, 
//   Briefcase, 
//   Settings, 
//   Star, 
//   Grid2x2,
//   Image,
//   Calendar,
//   Heart,
//   X
// } from 'lucide-react';

// const ServiceDetail = () => {
//   const [expandedService, setExpandedService] = useState(null);

//   const services = [
//     {
//       icon: Code,
//       title: 'SaaS Product Development',
//       description: 'End-to-end SaaS solutions with scalable architecture, user management, and modern UI/UX design.',
//       features: ['Multi-tenant Architecture', 'API Development', 'Cloud Integration'],
//       detailedContent: (
//         <div className="space-y-6">
//           <h3 className="text-2xl font-bold text-hist-blue">Comprehensive SaaS Development Services</h3>
//           <p className="text-gray-700 leading-relaxed">
//             Our SaaS development process begins with a thorough discovery phase where we analyze your business requirements, 
//             target audience, and technical constraints. We then architect a solution that balances scalability, performance, 
//             and cost-effectiveness while ensuring security and compliance with industry standards.
//           </p>
          
//           <div className="bg-hist-blue-50 p-6 rounded-lg">
//             <h4 className="text-xl font-semibold text-hist-blue mb-4">Key Offerings:</h4>
//             <ul className="list-disc pl-6 space-y-3">
//               <li className="text-gray-700">
//                 <strong>Multi-tenant Architecture:</strong> Build scalable SaaS platforms that serve multiple customers 
//                 from a single instance while maintaining complete data isolation and security between tenants.
//               </li>
//               <li className="text-gray-700">
//                 <strong>Subscription Management:</strong> Implement flexible billing systems with support for tiered pricing, 
//                 free trials, promotional discounts, and usage-based billing with Stripe, PayPal, or custom payment gateways.
//               </li>
//               <li className="text-gray-700">
//                 <strong>API-First Development:</strong> Create robust RESTful and GraphQL APIs that enable third-party 
//                 integrations and future extensibility with comprehensive documentation using Swagger/OpenAPI.
//               </li>
//               <li className="text-gray-700">
//                 <strong>Cloud-Native Solutions:</strong> Leverage AWS, Azure, or Google Cloud for optimal performance, 
//                 reliability, and scalability with auto-scaling, load balancing, and serverless components.
//               </li>
//               <li className="text-gray-700">
//                 <strong>Data Analytics Integration:</strong> Built-in analytics to track user behavior, feature adoption, 
//                 and business metrics with integrations to tools like Mixpanel, Amplitude, or custom dashboards.
//               </li>
//             </ul>
//           </div>
          
//           <div className="mt-6">
//             <h4 className="text-xl font-semibold text-hist-blue mb-3">Our Technology Stack:</h4>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <h5 className="font-medium text-gray-800 mb-2">Frontend:</h5>
//                 <ul className="space-y-1 text-gray-700">
//                   <li>React.js with TypeScript</li>
//                   <li>Next.js for SSR/SSG</li>
//                   <li>Tailwind CSS or Material-UI</li>
//                   <li>State management (Redux/Zustand)</li>
//                 </ul>
//               </div>
//               <div>
//                 <h5 className="font-medium text-gray-800 mb-2">Backend:</h5>
//                 <ul className="space-y-1 text-gray-700">
//                   <li>Node.js (Express/NestJS)</li>
//                   <li>Python (Django/FastAPI)</li>
//                   <li>.NET Core for enterprise solutions</li>
//                   <li>PostgreSQL/MongoDB databases</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-6 bg-hist-blue-50 p-6 rounded-lg">
//             <h4 className="text-xl font-semibold text-hist-blue mb-3">Implementation Process:</h4>
//             <ol className="list-decimal pl-6 space-y-3 text-gray-700">
//               <li><strong>Discovery Phase:</strong> Requirements gathering, user stories, and technical feasibility analysis (2-4 weeks)</li>
//               <li><strong>Architecture Design:</strong> System diagrams, data models, and API specifications (1-2 weeks)</li>
//               <li><strong>MVP Development:</strong> Core functionality implementation with iterative feedback (8-12 weeks)</li>
//               <li><strong>Testing & QA:</strong> Automated testing, security audits, and performance optimization (2-4 weeks)</li>
//               <li><strong>Deployment & Launch:</strong> CI/CD pipeline setup, staging environment, and production rollout (1-2 weeks)</li>
//             </ol>
//           </div>
//         </div>
//       )
//     },
//     {
//       icon: Grid2x2,
//       title: 'Website & App Development',
//       description: 'Responsive websites and mobile applications built with cutting-edge technologies.',
//       features: ['React/Next.js', 'Flutter Apps', 'PWA Development'],
//       detailedContent: (
//         <div className="space-y-6">
//           <h3 className="text-2xl font-bold text-hist-blue">Full-Cycle Web & Mobile Development</h3>
//           <p className="text-gray-700 leading-relaxed">
//             We create digital experiences that engage users and drive business results. Our development process combines 
//             technical excellence with creative design thinking to deliver solutions that perform flawlessly across all 
//             devices and platforms.
//           </p>
          
//           <div className="grid md:grid-cols-2 gap-6 mt-6">
//             <div className="bg-hist-blue-50 p-6 rounded-lg">
//               <h4 className="text-xl font-semibold text-hist-blue mb-4">Web Development Expertise:</h4>
//               <ul className="list-disc pl-6 space-y-3">
//                 <li className="text-gray-700">
//                   <strong>Enterprise-Grade Websites:</strong> High-performance websites built with Next.js, TypeScript, 
//                   and modern CSS frameworks with perfect Lighthouse scores.
//                 </li>
//                 <li className="text-gray-700">
//                   <strong>E-Commerce Solutions:</strong> Custom Shopify, WooCommerce, and headless commerce implementations 
//                   with payment gateways and inventory management.
//                 </li>
//                 <li className="text-gray-700">
//                   <strong>Web Applications:</strong> Complex single-page applications with state management, real-time 
//                   features, and offline capabilities.
//                 </li>
//                 <li className="text-gray-700">
//                   <strong>CMS Integration:</strong> Contentful, Sanity, or WordPress headless CMS implementations with 
//                   custom content models.
//                 </li>
//               </ul>
//             </div>
            
//             <div className="bg-hist-blue-50 p-6 rounded-lg">
//               <h4 className="text-xl font-semibold text-hist-blue mb-4">Mobile Development Capabilities:</h4>
//               <ul className="list-disc pl-6 space-y-3">
//                 <li className="text-gray-700">
//                   <strong>Cross-Platform Apps:</strong> Flutter and React Native development for iOS and Android from 
//                   a single codebase with native performance.
//                 </li>
//                 <li className="text-gray-700">
//                   <strong>Native Development:</strong> Swift for iOS and Kotlin for Android when platform-specific 
//                   features are required.
//                 </li>
//                 <li className="text-gray-700">
//                   <strong>Progressive Web Apps:</strong> Web applications that deliver app-like experiences with 
//                   offline capabilities, push notifications, and home screen installation.
//                 </li>
//                 <li className="text-gray-700">
//                   <strong>App Store Optimization:</strong> Full support for publishing to Apple App Store and 
//                   Google Play Store with ASO best practices.
//                 </li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="mt-6">
//             <h4 className="text-xl font-semibold text-hist-blue mb-3">Technology Highlights:</h4>
//             <div className="grid md:grid-cols-3 gap-4">
//               <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
//                 <h5 className="font-medium text-gray-800 mb-2">Frontend</h5>
//                 <ul className="space-y-1 text-sm text-gray-700">
//                   <li>React.js/Next.js</li>
//                   <li>TypeScript</li>
//                   <li>Tailwind CSS</li>
//                   <li>GraphQL/Apollo</li>
//                 </ul>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
//                 <h5 className="font-medium text-gray-800 mb-2">Mobile</h5>
//                 <ul className="space-y-1 text-sm text-gray-700">
//                   <li>Flutter/Dart</li>
//                   <li>React Native</li>
//                   <li>Swift/Kotlin</li>
//                   <li>Firebase</li>
//                 </ul>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
//                 <h5 className="font-medium text-gray-800 mb-2">Backend</h5>
//                 <ul className="space-y-1 text-sm text-gray-700">
//                   <li>Node.js/Express</li>
//                   <li>Django/Python</li>
//                   <li>PostgreSQL</li>
//                   <li>Docker/K8s</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-6 bg-hist-blue-50 p-6 rounded-lg">
//             <h4 className="text-xl font-semibold text-hist-blue mb-3">Development Process:</h4>
//             <div className="grid md:grid-cols-5 gap-4 text-center">
//               <div className="p-3 bg-white rounded-lg">
//                 <div className="w-10 h-10 bg-hist-blue text-white rounded-full flex items-center justify-center mx-auto mb-2">1</div>
//                 <p className="text-sm font-medium">Discovery</p>
//               </div>
//               <div className="p-3 bg-white rounded-lg">
//                 <div className="w-10 h-10 bg-hist-blue text-white rounded-full flex items-center justify-center mx-auto mb-2">2</div>
//                 <p className="text-sm font-medium">Design</p>
//               </div>
//               <div className="p-3 bg-white rounded-lg">
//                 <div className="w-10 h-10 bg-hist-blue text-white rounded-full flex items-center justify-center mx-auto mb-2">3</div>
//                 <p className="text-sm font-medium">Development</p>
//               </div>
//               <div className="p-3 bg-white rounded-lg">
//                 <div className="w-10 h-10 bg-hist-blue text-white rounded-full flex items-center justify-center mx-auto mb-2">4</div>
//                 <p className="text-sm font-medium">Testing</p>
//               </div>
//               <div className="p-3 bg-white rounded-lg">
//                 <div className="w-10 h-10 bg-hist-blue text-white rounded-full flex items-center justify-center mx-auto mb-2">5</div>
//                 <p className="text-sm font-medium">Launch</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )
//     },
//     {
//       icon: Settings,
//       title: 'Custom Software Solutions',
//       description: 'Tailored software applications designed to solve specific business challenges.',
//       features: ['Business Automation', 'Custom CRM/ERP', 'Integration Solutions'],
//       detailedContent: (
//         <div className="space-y-6">
//           <h3 className="text-2xl font-bold text-hist-blue">Bespoke Software Engineering</h3>
//           <p className="text-gray-700 leading-relaxed">
//             We develop custom software solutions that align perfectly with your business processes rather than 
//             forcing you to adapt to off-the-shelf products. Our solutions are designed for your unique requirements 
//             with scalability and maintainability built in from the start.
//           </p>
          
//           <div className="mt-6">
//             <h4 className="text-xl font-semibold text-hist-blue mb-4">Solution Areas:</h4>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-3">Business Process Automation</h5>
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   <li>Workflow automation systems</li>
//                   <li>Document processing pipelines</li>
//                   <li>AI-powered decision support</li>
//                   <li>Robotic Process Automation (RPA)</li>
//                 </ul>
//               </div>
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-3">Custom Business Systems</h5>
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   <li>CRM/ERP solutions</li>
//                   <li>Inventory management</li>
//                   <li>Field service applications</li>
//                   <li>Reporting dashboards</li>
//                 </ul>
//               </div>
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-3">Data Management</h5>
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   <li>Custom database solutions</li>
//                   <li>Data visualization tools</li>
//                   <li>ETL pipelines</li>
//                   <li>Business intelligence systems</li>
//                 </ul>
//               </div>
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-3">Integration Solutions</h5>
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   <li>Legacy system modernization</li>
//                   <li>API gateways</li>
//                   <li>Middleware development</li>
//                   <li>Third-party service integration</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-6 bg-white p-6 rounded-lg border border-gray-200">
//             <h4 className="text-xl font-semibold text-hist-blue mb-3">Our Development Approach:</h4>
//             <div className="grid md:grid-cols-3 gap-6">
//               <div>
//                 <h5 className="font-medium text-gray-800 mb-2">Requirement Analysis</h5>
//                 <p className="text-sm text-gray-700">
//                   Detailed requirements documentation with user stories, acceptance criteria, and technical specifications.
//                 </p>
//               </div>
//               <div>
//                 <h5 className="font-medium text-gray-800 mb-2">Prototyping</h5>
//                 <p className="text-sm text-gray-700">
//                   Rapid prototyping to validate concepts before full development with Figma or coded prototypes.
//                 </p>
//               </div>
//               <div>
//                 <h5 className="font-medium text-gray-800 mb-2">Iterative Development</h5>
//                 <p className="text-sm text-gray-700">
//                   2-week sprints with demo sessions and continuous feedback integration.
//                 </p>
//               </div>
//               <div>
//                 <h5 className="font-medium text-gray-800 mb-2">User Acceptance Testing</h5>
//                 <p className="text-sm text-gray-700">
//                   Comprehensive testing with real users in production-like environments.
//                 </p>
//               </div>
//               <div>
//                 <h5 className="font-medium text-gray-800 mb-2">Documentation</h5>
//                 <p className="text-sm text-gray-700">
//                   Complete technical documentation and user manuals delivered with the solution.
//                 </p>
//               </div>
//               <div>
//                 <h5 className="font-medium text-gray-800 mb-2">Training & Handover</h5>
//                 <p className="text-sm text-gray-700">
//                   Detailed training sessions and knowledge transfer to your team.
//                 </p>
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-6">
//             <h4 className="text-xl font-semibold text-hist-blue mb-3">Technology Stack:</h4>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-2">Backend Technologies</h5>
//                 <ul className="space-y-1 text-gray-700">
//                   <li>Python (Django, Flask, FastAPI)</li>
//                   <li>Node.js (Express, NestJS)</li>
//                   <li>.NET Core (C#)</li>
//                   <li>Java Spring Boot</li>
//                   <li>PostgreSQL, MySQL, MongoDB</li>
//                 </ul>
//               </div>
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-2">Frontend Technologies</h5>
//                 <ul className="space-y-1 text-gray-700">
//                   <li>React.js with TypeScript</li>
//                   <li>Angular/Vue.js</li>
//                   <li>Electron for desktop apps</li>
//                   <li>Flutter for cross-platform</li>
//                   <li>Web Components</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       )
//     },
//     {
//       icon: Briefcase,
//       title: 'IT Consulting',
//       description: 'Strategic technology consulting to optimize your IT infrastructure and processes.',
//       features: ['Digital Strategy', 'System Architecture', 'Technology Audit'],
//       detailedContent: (
//         <div className="space-y-6">
//           <h3 className="text-2xl font-bold text-hist-blue">Strategic IT Advisory Services</h3>
//           <p className="text-gray-700 leading-relaxed">
//             Our consulting services help businesses align technology investments with strategic objectives 
//             and operational requirements. We provide objective, vendor-agnostic advice to help you make 
//             informed technology decisions that drive business value.
//           </p>
          
//           <div className="mt-6 bg-hist-blue-50 p-6 rounded-lg">
//             <h4 className="text-xl font-semibold text-hist-blue mb-4">Core Service Areas:</h4>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <h5 className="font-medium text-gray-800 mb-2">Digital Transformation Roadmapping</h5>
//                 <p className="text-gray-700 text-sm">
//                   Comprehensive assessment of current capabilities and phased implementation plan for digital transformation 
//                   with measurable KPIs and ROI analysis.
//                 </p>
//               </div>
//               <div>
//                 <h5 className="font-medium text-gray-800 mb-2">Technology Stack Evaluation</h5>
//                 <p className="text-gray-700 text-sm">
//                   Objective analysis of current and potential technologies with comparative analysis of options, 
//                   cost projections, and migration strategies.
//                 </p>
//               </div>
//               <div>
//                 <h5 className="font-medium text-gray-800 mb-2">IT Infrastructure Optimization</h5>
//                 <p className="text-gray-700 text-sm">
//                   Network, cloud, and security architecture reviews with recommendations for performance improvement, 
//                   cost reduction, and future-proofing.
//                 </p>
//               </div>
//               <div>
//                 <h5 className="font-medium text-gray-800 mb-2">Software Development Process Audit</h5>
//                 <p className="text-gray-700 text-sm">
//                   Assessment of development methodologies, tools, and team structure with recommendations for 
//                   improving quality, speed, and collaboration.
//                 </p>
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-6">
//             <h4 className="text-xl font-semibold text-hist-blue mb-3">Our Methodology:</h4>
//             <div className="grid md:grid-cols-4 gap-4">
//               <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
//                 <div className="w-12 h-12 bg-hist-blue text-white rounded-full flex items-center justify-center mx-auto mb-3">
//                   <span className="text-xl font-bold">1</span>
//                 </div>
//                 <h5 className="font-medium text-gray-800">Discovery</h5>
//                 <p className="text-xs text-gray-600 mt-1">Interviews & Data Collection</p>
//               </div>
//               <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
//                 <div className="w-12 h-12 bg-hist-blue text-white rounded-full flex items-center justify-center mx-auto mb-3">
//                   <span className="text-xl font-bold">2</span>
//                 </div>
//                 <h5 className="font-medium text-gray-800">Analysis</h5>
//                 <p className="text-xs text-gray-600 mt-1">Gap Identification</p>
//               </div>
//               <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
//                 <div className="w-12 h-12 bg-hist-blue text-white rounded-full flex items-center justify-center mx-auto mb-3">
//                   <span className="text-xl font-bold">3</span>
//                 </div>
//                 <h5 className="font-medium text-gray-800">Recommendation</h5>
//                 <p className="text-xs text-gray-600 mt-1">Solution Proposals</p>
//               </div>
//               <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
//                 <div className="w-12 h-12 bg-hist-blue text-white rounded-full flex items-center justify-center mx-auto mb-3">
//                   <span className="text-xl font-bold">4</span>
//                 </div>
//                 <h5 className="font-medium text-gray-800">Implementation</h5>
//                 <p className="text-xs text-gray-600 mt-1">Execution Support</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-6 bg-white p-6 rounded-lg border border-gray-200">
//             <h4 className="text-xl font-semibold text-hist-blue mb-3">Deliverables Include:</h4>
//             <ul className="list-disc pl-6 space-y-2 text-gray-700">
//               <li>Current state IT assessment reports with maturity scoring</li>
//               <li>Technology investment ROI analysis with 3-5 year projections</li>
//               <li>Detailed IT strategy roadmap with phase timelines</li>
//               <li>Vendor selection frameworks with evaluation criteria</li>
//               <li>Security and compliance gap analysis with remediation plan</li>
//               <li>Organizational capability assessment with team structure recommendations</li>
//               <li>Technology standards and policies documentation</li>
//             </ul>
//           </div>
          
//           <div className="mt-6">
//             <h4 className="text-xl font-semibold text-hist-blue mb-3">Industry Specializations:</h4>
//             <div className="flex flex-wrap gap-2">
//               <span className="px-3 py-1 bg-hist-blue-100 text-hist-blue rounded-full text-sm">Healthcare</span>
//               <span className="px-3 py-1 bg-hist-blue-100 text-hist-blue rounded-full text-sm">Financial Services</span>
//               <span className="px-3 py-1 bg-hist-blue-100 text-hist-blue rounded-full text-sm">Manufacturing</span>
//               <span className="px-3 py-1 bg-hist-blue-100 text-hist-blue rounded-full text-sm">Retail</span>
//               <span className="px-3 py-1 bg-hist-blue-100 text-hist-blue rounded-full text-sm">Education</span>
//               <span className="px-3 py-1 bg-hist-blue-100 text-hist-blue rounded-full text-sm">Logistics</span>
//               <span className="px-3 py-1 bg-hist-blue-100 text-hist-blue rounded-full text-sm">Government</span>
//             </div>
//           </div>
//         </div>
//       )
//     },
//     {
//       icon: Star,
//       title: 'AI/ML Development',
//       description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
//       features: ['Predictive Analytics', 'Chatbots', 'Data Processing'],
//       detailedContent: (
//         <div className="space-y-6">
//           <h3 className="text-2xl font-bold text-hist-blue">Artificial Intelligence Implementation</h3>
//           <p className="text-gray-700 leading-relaxed">
//             We build practical AI solutions that deliver measurable business value, not just technical novelty. 
//             Our approach focuses on solving real business problems with the right combination of machine learning 
//             techniques, data engineering, and user experience design.
//           </p>
          
//           <div className="mt-6">
//             <h4 className="text-xl font-semibold text-hist-blue mb-4">AI/ML Service Portfolio:</h4>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-3">Predictive Analytics</h5>
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   <li>Demand forecasting models</li>
//                   <li>Customer churn prediction</li>
//                   <li>Risk assessment algorithms</li>
//                   <li>Recommendation engines</li>
//                 </ul>
//               </div>
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-3">Natural Language Processing</h5>
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   <li>Text classification and sentiment analysis</li>
//                   <li>Document processing and extraction</li>
//                   <li>Conversational AI and chatbots</li>
//                   <li>Content generation and summarization</li>
//                 </ul>
//               </div>
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-3">Computer Vision</h5>
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   <li>Image recognition and classification</li>
//                   <li>Object detection and tracking</li>
//                   <li>Quality inspection systems</li>
//                   <li>Facial recognition (with ethics review)</li>
//                 </ul>
//               </div>
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-3">Process Automation</h5>
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   <li>Intelligent document processing</li>
//                   <li>Workflow automation with AI decision points</li>
//                   <li>Anomaly detection systems</li>
//                   <li>Predictive maintenance models</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-6 bg-white p-6 rounded-lg border border-gray-200">
//             <h4 className="text-xl font-semibold text-hist-blue mb-3">Implementation Process:</h4>
//             <ol className="list-decimal pl-6 space-y-3 text-gray-700">
//               <li>
//                 <strong>Business Problem Definition:</strong> Clearly articulate the business problem and success metrics 
//                 before considering technical solutions.
//               </li>
//               <li>
//                 <strong>Data Assessment:</strong> Evaluate data availability, quality, and relevance for the problem at hand.
//               </li>
//               <li>
//                 <strong>Proof of Concept:</strong> Develop a small-scale prototype to validate the approach before full implementation.
//               </li>
//               <li>
//                 <strong>Model Development:</strong> Iterative training and evaluation of models with continuous feedback.
//               </li>
//               <li>
//                 <strong>Integration:</strong> Deployment into production environment with monitoring and feedback loops.
//               </li>
//               <li>
//                 <strong>Continuous Improvement:</strong> Regular model retraining and performance optimization.
//               </li>
//             </ol>
//           </div>
          
//           <div className="mt-6">
//             <h4 className="text-xl font-semibold text-hist-blue mb-3">Technology Stack:</h4>
//             <div className="grid md:grid-cols-3 gap-4">
//               <div className="bg-hist-blue-50 p-4 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-2">Frameworks</h5>
//                 <ul className="space-y-1 text-sm text-gray-700">
//                   <li>TensorFlow/PyTorch</li>
//                   <li>scikit-learn</li>
//                   <li>Hugging Face</li>
//                   <li>OpenCV</li>
//                 </ul>
//               </div>
//               <div className="bg-hist-blue-50 p-4 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-2">Cloud Platforms</h5>
//                 <ul className="space-y-1 text-sm text-gray-700">
//                   <li>Azure ML</li>
//                   <li>AWS SageMaker</li>
//                   <li>Google Vertex AI</li>
//                   <li>IBM Watson</li>
//                 </ul>
//               </div>
//               <div className="bg-hist-blue-50 p-4 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-2">Data Tools</h5>
//                 <ul className="space-y-1 text-sm text-gray-700">
//                   <li>Pandas/NumPy</li>
//                   <li>Apache Spark</li>
//                   <li>Dask</li>
//                   <li>Ray</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-6 bg-hist-blue-50 p-6 rounded-lg">
//             <h4 className="text-xl font-semibold text-hist-blue mb-3">Ethical AI Considerations:</h4>
//             <p className="text-gray-700 mb-3">
//               We follow responsible AI practices including bias detection, explainability, and privacy protection:
//             </p>
//             <ul className="list-disc pl-6 space-y-2 text-gray-700">
//               <li>Bias assessment in training data and model outputs</li>
//               <li>Explainable AI techniques for model interpretability</li>
//               <li>Privacy-preserving techniques like federated learning</li>
//               <li>Compliance with AI ethics guidelines and regulations</li>
//             </ul>
//           </div>
//         </div>
//       )
//     },
//     {
//       icon: Image,
//       title: 'UI/UX Design',
//       description: 'User-centered design creating intuitive and engaging digital experiences.',
//       features: ['User Research', 'Prototyping', 'Design Systems'],
//       detailedContent: (
//         <div className="space-y-6">
//           <h3 className="text-2xl font-bold text-hist-blue">Human-Centered Design Services</h3>
//           <p className="text-gray-700 leading-relaxed">
//             We create digital experiences that users love and that drive business results through 
//             evidence-based design practices. Our process combines creative vision with user research 
//             and data to deliver interfaces that are both beautiful and functional.
//           </p>
          
//           <div className="mt-6">
//             <h4 className="text-xl font-semibold text-hist-blue mb-4">Design Process:</h4>
//             <div className="grid md:grid-cols-5 gap-4">
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-hist-blue text-white rounded-full flex items-center justify-center mx-auto mb-3">
//                   <span className="text-xl font-bold">1</span>
//                 </div>
//                 <h5 className="font-medium text-gray-800">Research</h5>
//                 <p className="text-xs text-gray-600 mt-1">User interviews, surveys, analytics</p>
//               </div>
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-hist-blue text-white rounded-full flex items-center justify-center mx-auto mb-3">
//                   <span className="text-xl font-bold">2</span>
//                 </div>
//                 <h5 className="font-medium text-gray-800">Analyze</h5>
//                 <p className="text-xs text-gray-600 mt-1">Personas, journey maps</p>
//               </div>
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-hist-blue text-white rounded-full flex items-center justify-center mx-auto mb-3">
//                   <span className="text-xl font-bold">3</span>
//                 </div>
//                 <h5 className="font-medium text-gray-800">Design</h5>
//                 <p className="text-xs text-gray-600 mt-1">Wireframes, prototypes</p>
//               </div>
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-hist-blue text-white rounded-full flex items-center justify-center mx-auto mb-3">
//                   <span className="text-xl font-bold">4</span>
//                 </div>
//                 <h5 className="font-medium text-gray-800">Test</h5>
//                 <p className="text-xs text-gray-600 mt-1">Usability testing</p>
//               </div>
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-hist-blue text-white rounded-full flex items-center justify-center mx-auto mb-3">
//                   <span className="text-xl font-bold">5</span>
//                 </div>
//                 <h5 className="font-medium text-gray-800">Refine</h5>
//                 <p className="text-xs text-gray-600 mt-1">Iterate based on feedback</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-6">
//             <h4 className="text-xl font-semibold text-hist-blue mb-3">Service Offerings:</h4>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-3">User Research</h5>
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   <li>User interviews and contextual inquiry</li>
//                   <li>Competitive analysis and benchmarking</li>
//                   <li>Analytics and heatmap analysis</li>
//                   <li>Accessibility audits (WCAG 2.1)</li>
//                 </ul>
//               </div>
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-3">Information Architecture</h5>
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   <li>Content strategy and taxonomy</li>
//                   <li>Site mapping and navigation design</li>
//                   <li>Card sorting exercises</li>
//                   <li>Search system design</li>
//                 </ul>
//               </div>
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-3">Interaction Design</h5>
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   <li>Task flows and user journeys</li>
//                   <li>Low and high-fidelity prototyping</li>
//                   <li>Micro-interaction design</li>
//                   <li>Design system creation</li>
//                 </ul>
//               </div>
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-3">Visual Design</h5>
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   <li>Brand-aligned interface design</li>
//                   <li>Iconography and illustration</li>
//                   <li>Motion design principles</li>
//                   <li>Design handoff documentation</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-6 bg-white p-6 rounded-lg border border-gray-200">
//             <h4 className="text-xl font-semibold text-hist-blue mb-3">Deliverables Include:</h4>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   <li>User personas with behavioral insights</li>
//                   <li>Customer journey maps with pain points</li>
//                   <li>Interactive prototypes for user testing</li>
//                   <li>UI component libraries and style guides</li>
//                 </ul>
//               </div>
//               <div>
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   <li>Accessibility compliance reports</li>
//                   <li>Annotated design specifications</li>
//                   <li>UX metrics and KPIs framework</li>
//                   <li>Design system documentation</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-6">
//             <h4 className="text-xl font-semibold text-hist-blue mb-3">Design Tools We Use:</h4>
//             <div className="flex flex-wrap gap-4">
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm border border-gray-200">
//                   <span className="text-xs font-bold">Figma</span>
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm border border-gray-200">
//                   <span className="text-xs font-bold">Adobe XD</span>
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm border border-gray-200">
//                   <span className="text-xs font-bold">Sketch</span>
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm border border-gray-200">
//                   <span className="text-xs font-bold">InVision</span>
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm border border-gray-200">
//                   <span className="text-xs font-bold">Miro</span>
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm border border-gray-200">
//                   <span className="text-xs font-bold">Hotjar</span>
//                 </div>
//               </div>
//               <div className="text-center">
//                 <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm border border-gray-200">
//                   <span className="text-xs font-bold">Optimal</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )
//     },
//     {
//       icon: Heart,
//       title: 'Maintenance & Support',
//       description: '24/7 technical support and maintenance services for your digital assets.',
//       features: ['Bug Fixes', 'Performance Optimization', 'Security Updates'],
//       detailedContent: (
//         <div className="space-y-6">
//           <h3 className="text-2xl font-bold text-hist-blue">Comprehensive Support Services</h3>
//           <p className="text-gray-700 leading-relaxed">
//             We provide ongoing care for your digital products to ensure they remain secure, performant, 
//             and up-to-date. Our maintenance services extend the lifespan of your software investments 
//             and prevent costly downtime or security breaches.
//           </p>
          
//           <div className="mt-6 bg-hist-blue-50 p-6 rounded-lg">
//             <h4 className="text-xl font-semibold text-hist-blue mb-4">Service Tiers:</h4>
//             <div className="grid md:grid-cols-3 gap-6">
//               <div className="bg-white p-6 rounded-lg border border-gray-200">
//                 <h5 className="font-medium text-gray-800 mb-3 text-center">Basic Support</h5>
//                 <ul className="space-y-2 text-gray-700">
//                   <li className="flex items-start">
//                     <span className="text-hist-blue mr-2">✓</span>
//                     <span>9-5 coverage (business hours)</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-hist-blue mr-2">✓</span>
//                     <span>SLA response within 24 hours</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-hist-blue mr-2">✓</span>
//                     <span>Monthly health checks</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-hist-blue mr-2">✓</span>
//                     <span>Critical bug fixes</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-hist-blue mr-2">✓</span>
//                     <span>Security patches</span>
//                   </li>
//                 </ul>
//               </div>
//               <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
//                 <div className="bg-hist-blue text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">MOST POPULAR</div>
//                 <h5 className="font-medium text-gray-800 mb-3 text-center">Business Critical</h5>
//                 <ul className="space-y-2 text-gray-700">
//                   <li className="flex items-start">
//                     <span className="text-hist-blue mr-2">✓</span>
//                     <span>24/7 coverage</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-hist-blue mr-2">✓</span>
//                     <span>SLA response within 4 hours</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-hist-blue mr-2">✓</span>
//                     <span>Weekly health checks</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-hist-blue mr-2">✓</span>
//                     <span>All bug fixes</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-hist-blue mr-2">✓</span>
//                     <span>Performance optimization</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-hist-blue mr-2">✓</span>
//                     <span>Monthly reports</span>
//                   </li>
//                 </ul>
//               </div>
//               <div className="bg-white p-6 rounded-lg border border-gray-200">
//                 <h5 className="font-medium text-gray-800 mb-3 text-center">Enterprise</h5>
//                 <ul className="space-y-2 text-gray-700">
//                   <li className="flex items-start">
//                     <span className="text-hist-blue mr-2">✓</span>
//                     <span>Dedicated support team</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-hist-blue mr-2">✓</span>
//                     <span>SLA response within 1 hour</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-hist-blue mr-2">✓</span>
//                     <span>Daily monitoring</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-hist-blue mr-2">✓</span>
//                     <span>All bug fixes + enhancements</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-hist-blue mr-2">✓</span>
//                     <span>Quarterly architecture reviews</span>
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-hist-blue mr-2">✓</span>
//                     <span>Weekly reports + on-demand</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-6">
//             <h4 className="text-xl font-semibold text-hist-blue mb-3">Maintenance Services:</h4>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-2">Preventive Maintenance</h5>
//                 <p className="text-gray-700 text-sm">
//                   Regular health checks, dependency updates, and proactive optimizations to prevent issues before they occur.
//                 </p>
//               </div>
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-2">Corrective Maintenance</h5>
//                 <p className="text-gray-700 text-sm">
//                   Bug fixes, error resolution, and troubleshooting for reported issues with root cause analysis.
//                 </p>
//               </div>
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-2">Adaptive Maintenance</h5>
//                 <p className="text-gray-700 text-sm">
//                   Updates for OS/browser compatibility, third-party API changes, and regulatory requirements.
//                 </p>
//               </div>
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-2">Perfective Maintenance</h5>
//                 <p className="text-gray-700 text-sm">
//                   Performance optimization, UX improvements, and feature enhancements based on user feedback.
//                 </p>
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-6 bg-white p-6 rounded-lg border border-gray-200">
//             <h4 className="text-xl font-semibold text-hist-blue mb-3">Our Approach:</h4>
//             <ul className="list-disc pl-6 space-y-2 text-gray-700">
//               <li>Detailed documentation and knowledge transfer during development phase</li>
//               <li>Version control and change management processes</li>
//               <li>Monitoring tools to proactively identify issues (New Relic, Sentry, etc.)</li>
//               <li>Dedicated support portal with ticket tracking</li>
//               <li>Regular security audits and penetration testing</li>
//               <li>Performance benchmarking and optimization cycles</li>
//             </ul>
//           </div>
          
//           <div className="mt-6">
//             <h4 className="text-xl font-semibold text-hist-blue mb-3">Response Time SLAs:</h4>
//             <div className="overflow-x-auto">
//               <table className="min-w-full bg-white border border-gray-200">
//                 <thead>
//                   <tr className="bg-hist-blue-50">
//                     <th className="py-3 px-4 text-left text-gray-700 font-medium">Priority Level</th>
//                     <th className="py-3 px-4 text-left text-gray-700 font-medium">Response Time</th>
//                     <th className="py-3 px-4 text-left text-gray-700 font-medium">Resolution Time</th>
//                     <th className="py-3 px-4 text-left text-gray-700 font-medium">Examples</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   <tr>
//                     <td className="py-3 px-4 text-gray-700 font-medium">Critical</td>
//                     <td className="py-3 px-4 text-gray-700">1 hour</td>
//                     <td className="py-3 px-4 text-gray-700">4 hours</td>
//                     <td className="py-3 px-4 text-gray-700">System downtime, security breach</td>
//                   </tr>
//                   <tr>
//                     <td className="py-3 px-4 text-gray-700 font-medium">High</td>
//                     <td className="py-3 px-4 text-gray-700">4 hours</td>
//                     <td className="py-3 px-4 text-gray-700">24 hours</td>
//                     <td className="py-3 px-4 text-gray-700">Major functionality impaired</td>
//                   </tr>
//                   <tr>
//                     <td className="py-3 px-4 text-gray-700 font-medium">Medium</td>
//                     <td className="py-3 px-4 text-gray-700">8 hours</td>
//                     <td className="py-3 px-4 text-gray-700">3 days</td>
//                     <td className="py-3 px-4 text-gray-700">Minor functionality issues</td>
//                   </tr>
//                   <tr>
//                     <td className="py-3 px-4 text-gray-700 font-medium">Low</td>
//                     <td className="py-3 px-4 text-gray-700">24 hours</td>
//                     <td className="py-3 px-4 text-gray-700">1 week</td>
//                     <td className="py-3 px-4 text-gray-700">Cosmetic issues, minor bugs</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       )
//     },
//     {
//       icon: Calendar,
//       title: 'Cloud Services',
//       description: 'Cloud migration, deployment, and management services for modern infrastructure.',
//       features: ['AWS/Azure Setup', 'DevOps', 'Cloud Security'],
//       detailedContent: (
//         <div className="space-y-6">
//           <h3 className="text-2xl font-bold text-hist-blue">End-to-End Cloud Solutions</h3>
//           <p className="text-gray-700 leading-relaxed">
//             We help businesses leverage cloud computing to achieve scalability, reliability, and cost efficiency. 
//             Our certified cloud architects design and implement solutions tailored to your workload requirements, 
//             security needs, and budget constraints.
//           </p>
          
//           <div className="mt-6">
//             <h4 className="text-xl font-semibold text-hist-blue mb-4">Service Offerings:</h4>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-3">Cloud Strategy & Migration</h5>
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   <li>Cloud readiness assessment</li>
//                   <li>Migration planning and execution</li>
//                   <li>Cost optimization analysis</li>
//                   <li>Multi-cloud/hybrid strategies</li>
//                 </ul>
//               </div>
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-3">Infrastructure as Code</h5>
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   <li>Terraform and CloudFormation</li>
//                   <li>Automated provisioning</li>
//                   <li>Environment management</li>
//                   <li>Disaster recovery setup</li>
//                 </ul>
//               </div>
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-3">Containerization & Orchestration</h5>
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   <li>Docker containerization</li>
//                   <li>Kubernetes implementation</li>
//                   <li>Service mesh (Istio/Linkerd)</li>
//                   <li>Serverless architectures</li>
//                 </ul>
//               </div>
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-3">Cloud Security</h5>
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   <li>Identity and access management</li>
//                   <li>Data encryption strategies</li>
//                   <li>Compliance frameworks (SOC2, HIPAA)</li>
//                   <li>Security monitoring and SIEM</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-6 bg-white p-6 rounded-lg border border-gray-200">
//             <h4 className="text-xl font-semibold text-hist-blue mb-3">Cloud Platforms:</h4>
//             <div className="grid md:grid-cols-3 gap-6">
//               <div className="text-center">
//                 <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm border border-gray-200 p-4">
//                   <img src="https://cdn.worldvectorlogo.com/logos/aws-2.svg" alt="AWS" className="h-full w-full object-contain" />
//                 </div>
//                 <h5 className="font-medium text-gray-800">Amazon Web Services</h5>
//                 <p className="text-sm text-gray-600 mt-1">Certified Solutions Architects</p>
//               </div>
//               <div className="text-center">
//                 <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm border border-gray-200 p-4">
//                   <img src="https://cdn.worldvectorlogo.com/logos/microsoft-azure-1.svg" alt="Azure" className="h-full w-full object-contain" />
//                 </div>
//                 <h5 className="font-medium text-gray-800">Microsoft Azure</h5>
//                 <p className="text-sm text-gray-600 mt-1">Azure Certified Experts</p>
//               </div>
//               <div className="text-center">
//                 <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm border border-gray-200 p-4">
//                   <img src="https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" alt="Google Cloud" className="h-full w-full object-contain" />
//                 </div>
//                 <h5 className="font-medium text-gray-800">Google Cloud Platform</h5>
//                 <p className="text-sm text-gray-600 mt-1">Google Cloud Certified</p>
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-6">
//             <h4 className="text-xl font-semibold text-hist-blue mb-3">DevOps Implementation:</h4>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-2">CI/CD Pipelines</h5>
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   <li>GitHub Actions, GitLab CI/CD</li>
//                   <li>Jenkins pipeline setup</li>
//                   <li>Automated testing integration</li>
//                   <li>Blue-green deployments</li>
//                 </ul>
//               </div>
//               <div className="bg-hist-blue-50 p-6 rounded-lg">
//                 <h5 className="font-medium text-gray-800 mb-2">Monitoring & Logging</h5>
//                 <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                   <li>Prometheus/Grafana dashboards</li>
//                   <li>ELK stack for logging</li>
//                   <li>Application Performance Monitoring</li>
//                   <li>Alerting and notification systems</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-6 bg-hist-blue-50 p-6 rounded-lg">
//             <h4 className="text-xl font-semibold text-hist-blue mb-3">Cloud Cost Optimization:</h4>
//             <ul className="list-disc pl-6 space-y-2 text-gray-700">
//               <li>Right-sizing recommendations</li>
//               <li>Reserved instance planning</li>
//               <li>Spot instance strategies</li>
//               <li>Storage tier optimization</li>
//               <li>Cost allocation tagging</li>
//               <li>Budget alerts and guardrails</li>
//             </ul>
//           </div>
//         </div>
//       )
//     }
//   ];

//   return (
//     <section id="services" className="py-20 bg-gradient-to-br from-hist-blue-50 to-white">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center px-4 py-2 bg-hist-yellow rounded-full text-hist-blue text-sm font-semibold mb-6">
//             Our Services
//           </div>
          
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-allstar">
//             Comprehensive 
//             <span className="text-gradient"> IT Solutions</span>
//           </h2>
          
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             From custom software development to AI-powered solutions, we offer a complete suite 
//             of IT services designed to accelerate your digital transformation journey.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
//           {services.map((service, index) => (
//             <Card 
//               key={index} 
//               className="group hover:shadow-xl transition-all duration-300 border-0 hist-shadow hover:hist-glow cursor-pointer"
//               onClick={() => setExpandedService(index)}
//             >
//               <CardContent className="p-6">
//                 <div className="w-12 h-12 bg-hist-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-hist-yellow transition-colors">
//                   {typeof service.icon === 'string' ? (
//                     <span className="text-2xl">{service.icon}</span>
//                   ) : (
//                     <service.icon className="w-6 h-6 text-hist-blue group-hover:text-hist-blue-dark" />
//                   )}
//                 </div>
                
//                 <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                   {service.title}
//                 </h3>
                
//                 <p className="text-gray-600 mb-4 text-sm leading-relaxed">
//                   {service.description}
//                 </p>
                
//                 <ul className="space-y-1">
//                   {service.features.map((feature, idx) => (
//                     <li key={idx} className="text-xs text-hist-blue flex items-center">
//                       <div className="w-1 h-1 bg-hist-yellow rounded-full mr-2"></div>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Expanded Service Modal */}
//         {expandedService !== null && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//             <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
//               <button 
//                 onClick={() => setExpandedService(null)}
//                 className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
//               >
//                 <X className="w-6 h-6 text-gray-600" />
//               </button>
              
//               <div className="p-8">
//                 <div className="flex items-center mb-6">
//                   <div className="w-16 h-16 bg-hist-blue-100 rounded-lg flex items-center justify-center mr-6">
//                     {typeof services[expandedService].icon === 'string' ? (
//                       <span className="text-3xl">{services[expandedService].icon}</span>
//                     ) : (
//                       <services[expandedService].icon className="w-8 h-8 text-hist-blue" />
//                     )}
//                   </div>
//                   <h2 className="text-3xl font-bold text-hist-blue">
//                     {services[expandedService].title}
//                   </h2>
//                 </div>
                
//                 <div className="prose max-w-none">
//                   {services[expandedService].detailedContent}
//                 </div>
                
//                 <div className="mt-8">
//                   <Button 
//                     size="lg" 
//                     className="bg-hist-gradient hover:shadow-lg transition-all duration-300 px-8 py-3 text-white font-semibold"
//                   >
//                     Request This Service
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* CTA */}
//         <div className="text-center">
//           <Button size="lg" className="bg-hist-gradient hover:shadow-lg transition-all duration-300 px-8 py-3 text-white font-semibold">
//             View All Services
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceDetail;