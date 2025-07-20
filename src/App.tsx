import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./components/About";
import Header from "./components/Header";
import Services from "./components/Services";
import { LoginForm } from "./components/Login";
import BlogSection from "./components/Blog";
import { Car } from "lucide-react";
import { CareersSection } from "./components/Careers";
import Footer from "./components/Footer";
import ServiceDetail from "./components/ServiceDetail";
import Contact from "./components/Contact";
import Industries from "./components/Industries";



const queryClient = new QueryClient();

const App = () => (
   <QueryClientProvider client={queryClient}>
      <TooltipProvider>
         <Toaster />
         <Sonner />
         <BrowserRouter>
            <Routes>
               <Route element={<Layout />}>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/blog" element={<BlogSection />} />
                  <Route path="/services/:serviceId" element={<ServiceDetail />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/industries" element={<Industries />} />
                  <Route path="/careers" element={<CareersSection />} />
                  <Route path="/login" element={<LoginForm onLogin={(role) => console.log(role)} />} />
                  <Route path="*" element={<NotFound />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </TooltipProvider>
   </QueryClientProvider>
);

// Create new Layout component
const Layout = () => (
   <div className="min-h-screen">
      <Header />
      <Outlet /> {/* This renders nested routes */}
      <Footer />
   </div>
);

export default App;

