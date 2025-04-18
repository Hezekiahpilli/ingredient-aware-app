
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import CarrotMascot from "@/components/ui/CarrotMascot";
import { Button } from "@/components/ui/button";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  
  // Automatically redirect to scan page after a brief welcome screen
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/scan');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="text-center p-6">
        <CarrotMascot size="large" className="mx-auto mb-8" />
        <h1 className="text-3xl font-bold mb-2">Ingredient Aware</h1>
        <p className="text-gray-600 mb-8">Scan products to make healthier choices</p>
        
        <Button 
          className="bg-yuka-green hover:bg-yuka-green/90 text-white w-full py-6"
          onClick={() => navigate('/scan')}
        >
          Start Scanning
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
