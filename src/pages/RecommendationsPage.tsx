
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUp, ArrowDown } from "lucide-react";
import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import CarrotMascot from "@/components/ui/CarrotMascot";
import { useProducts } from "@/contexts/ProductContext";

const RecommendationsPage: React.FC = () => {
  const navigate = useNavigate();
  const { isMember } = useProducts();
  
  return (
    <MainLayout title="Recommendations" showInfoButton>
      <div className="flex flex-col items-center justify-center p-8 text-center h-full bg-gray-100">
        <CarrotMascot size="large" className="mb-8" />
        
        <h2 className="text-3xl font-bold uppercase">No Recommendations</h2>
        <p className="text-gray-500 mt-2 mb-8 flex items-center justify-center gap-2">
          NutriScan recommendations
          <span className="flex flex-col">
            <ArrowUp size={16} className="text-blue-500" />
            <ArrowDown size={16} className="text-green-500" />
          </span>
          will appear here
        </p>
        
        {!isMember && (
          <Button 
            className="bg-yuka-green hover:bg-yuka-green/90 text-white w-full"
            onClick={() => navigate('/membership')}
          >
            Become a Member
          </Button>
        )}
      </div>
    </MainLayout>
  );
};

export default RecommendationsPage;
