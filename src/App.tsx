
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BuildingDetails from "./pages/BuildingDetails";
import BuildingsPage from "./pages/BuildingsPage";
import GuidePage from "./pages/GuidePage";
import MenuPage from "./pages/MenuPage";
import NotFound from "./pages/NotFound";
import AcademicPage from "./pages/AcademicPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/building/:id" element={<BuildingDetails />} />
          <Route path="/buildings" element={<BuildingsPage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/academic" element={<AcademicPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
