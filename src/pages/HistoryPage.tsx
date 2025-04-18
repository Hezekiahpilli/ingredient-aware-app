
import React from "react";
import MainLayout from "@/components/layouts/MainLayout";
import ProductCard from "@/components/ui/ProductCard";
import { useProducts } from "@/contexts/ProductContext";
import CarrotMascot from "@/components/ui/CarrotMascot";

const HistoryPage: React.FC = () => {
  const { historyProducts } = useProducts();
  
  return (
    <MainLayout title="History" showInfoButton>
      {historyProducts.length > 0 ? (
        <div>
          {historyProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              showScore
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-8 text-center h-[80vh]">
          <CarrotMascot size="large" className="mb-8" />
          <h2 className="text-2xl font-bold">No history yet</h2>
          <p className="text-gray-500 mt-2">
            Scan products to see them appear here
          </p>
        </div>
      )}
    </MainLayout>
  );
};

export default HistoryPage;
