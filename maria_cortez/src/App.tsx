import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import TreatmentsPage from "@/pages/TreatmentsPage";
import TechnologiesPage from "@/pages/TechnologiesPage";
import NotFound from "@/pages/NotFound";
import RouteChangeTracker from "@/components/RouteChangeTracker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <RouteChangeTracker /> 
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tratamentos" element={<TreatmentsPage />} />
          <Route path="/tecnologias" element={<TechnologiesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
