
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./contexts/ProductContext";

// Pages
import HomePage from "./pages/HomePage";
import RecommendationsPage from "./pages/RecommendationsPage";
import TopProductsPage from "./pages/TopProductsPage";
import SearchPage from "./pages/SearchPage";
import ScanPage from "./pages/ScanPage";
import HistoryPage from "./pages/HistoryPage";
import MembershipPage from "./pages/MembershipPage";
import FoodPreferencesPage from "./pages/FoodPreferencesPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ProductProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recommendations" element={<RecommendationsPage />} />
            <Route path="/top-products" element={<TopProductsPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/scan" element={<ScanPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/food-preferences" element={<FoodPreferencesPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ProductProvider>
  </QueryClientProvider>
);

export default App;
