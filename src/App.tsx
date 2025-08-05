
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Treatments from "./pages/Treatments";
import Destinations from "./pages/Destinations";
import PatientJourney from "./pages/PatientJourney";
import Testimonials from "./pages/Testimonials";
import Connect from "./pages/Connect";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/patient-journey" element={<PatientJourney />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/connect-me" element={<Connect />} />
            <Route path="/privacy" element={<Index />} />
            <Route path="/terms" element={<Index />} />
            <Route path="/disclaimer" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
