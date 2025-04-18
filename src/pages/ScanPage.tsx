
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Flashlight, Volume2 } from "lucide-react";
import MainLayout from "@/components/layouts/MainLayout";
import ScanFrame from "@/components/ui/ScanFrame";
import { useProducts } from "@/contexts/ProductContext";
import { toast } from "sonner";

const ScanPage: React.FC = () => {
  const navigate = useNavigate();
  const [flashOn, setFlashOn] = useState(false);
  const { products, addToHistory } = useProducts();
  
  // Simulate scanning a product
  const simulateScan = () => {
    toast.loading("Scanning product...");
    
    // Simulate time to scan
    setTimeout(() => {
      const randomProduct = products[Math.floor(Math.random() * 3)]; // Get one of first 3 products
      addToHistory(randomProduct);
      toast.dismiss();
      navigate(`/product/${randomProduct.id}`);
    }, 1500);
  };
  
  return (
    <MainLayout>
      <div 
        className="relative flex flex-col h-full bg-black"
        onClick={simulateScan}
      >
        {/* Camera view */}
        <div className="flex-1 flex items-center justify-center">
          <ScanFrame />
        </div>
        
        {/* Controls */}
        <div className="p-4 flex justify-between">
          <button 
            className="text-white p-2"
            onClick={(e) => {
              e.stopPropagation();
              setFlashOn(!flashOn);
            }}
          >
            <Flashlight size={24} className={flashOn ? "text-yuka-green" : "text-white"} />
          </button>
          
          <button className="text-white p-2">
            <Volume2 size={24} />
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default ScanPage;
