
import React, { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import ProductCard from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/button";
import { User, Plus } from "lucide-react";
import { useProducts } from "@/contexts/ProductContext";
import { useNavigate } from "react-router-dom";

const TopProductsPage: React.FC = () => {
  const { products, beautyProducts, isMember } = useProducts();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"food" | "beauty">("food");
  
  const displayProducts = activeTab === "food" ? products : beautyProducts;
  
  return (
    <MainLayout title="Top Products">
      <div className="flex w-full mb-4">
        <button
          className={`flex-1 py-3 text-center font-medium ${activeTab === "food" 
            ? "bg-white text-black" 
            : "bg-gray-100 text-gray-500"}`}
          onClick={() => setActiveTab("food")}
        >
          Food
        </button>
        <button
          className={`flex-1 py-3 text-center font-medium ${activeTab === "beauty" 
            ? "bg-white text-black" 
            : "bg-gray-100 text-gray-500"}`}
          onClick={() => setActiveTab("beauty")}
        >
          Beauty
        </button>
      </div>
      
      <div className="bg-white p-4 mb-4 flex items-center">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
          <User size={20} className="text-gray-500" />
        </div>
        <div className="flex-1">
          <p className="font-medium">
            Invite a friend and access the full list of top products
          </p>
        </div>
        <div className="text-gray-400">
          <Plus size={20} />
        </div>
      </div>
      
      <div>
        {displayProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
          />
        ))}
      </div>
      
      {!isMember && (
        <div className="p-4 mt-4">
          <Button 
            className="bg-yuka-green hover:bg-yuka-green/90 text-white w-full"
            onClick={() => navigate('/membership')}
          >
            Become a Member to Unlock All Products
          </Button>
        </div>
      )}
    </MainLayout>
  );
};

export default TopProductsPage;
