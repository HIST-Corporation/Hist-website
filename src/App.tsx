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
   </div>
);

export default App;

