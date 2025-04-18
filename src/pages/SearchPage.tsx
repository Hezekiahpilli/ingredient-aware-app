
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useProducts } from "@/contexts/ProductContext";

const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  const { isMember } = useProducts();
  
  return (
    <MainLayout title="Search" showInfoButton>
      <div className="p-4">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input 
            placeholder="All the products" 
            className="pl-10 bg-gray-100 border-0"
            disabled={!isMember}
          />
        </div>
        
        {!isMember && (
          <div className="mt-10 bg-gray-100 rounded-lg p-6 text-center">
            <p className="text-yuka-green font-medium uppercase">Member Access</p>
            <h2 className="text-3xl font-bold mt-2 mb-2">Search for any product</h2>
            <p className="text-gray-500 mb-6">
              4 million food & cosmetic products available.
            </p>
            
            <Button 
              className="bg-yuka-green hover:bg-yuka-green/90 text-white w-full"
              onClick={() => navigate('/membership')}
            >
              BECOME A MEMBER
            </Button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default SearchPage;
