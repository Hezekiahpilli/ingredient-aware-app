
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { X, AlertTriangle, Check } from "lucide-react";
import { useProducts } from "@/contexts/ProductContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ProductDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { products, beautyProducts, isMember } = useProducts();
  
  // Find the product
  const allProducts = [...products, ...beautyProducts];
  const product = allProducts.find(p => p.id === id);
  
  useEffect(() => {
    if (!product) {
      toast.error("Product not found");
      navigate('/scan');
    }
  }, [product, navigate]);
  
  if (!product) return null;
  
  // Score display
  const getScoreColor = (score?: number) => {
    if (!score) return "bg-gray-300";
    if (score >= 70) return "bg-green-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };
  
  // Quality assessment
  const getQualityMessage = (score?: number) => {
    if (!score) return "Unknown";
    if (score >= 70) return "Excellent";
    if (score >= 50) return "Good";
    return "Poor";
  };
  
  const isLocked = product.locked && !isMember;
  
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-200">
        <button onClick={() => navigate(-1)}>
          <X size={24} />
        </button>
        <div>
          {product.score && !isLocked && (
            <div className={`w-10 h-10 rounded-full ${getScoreColor(product.score)} flex items-center justify-center text-white font-bold`}>
              {product.score}
            </div>
          )}
        </div>
      </header>
      
      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-1">{product.name}</h1>
          <p className="text-gray-500">{product.category}</p>
          
          {isLocked ? (
            <div className="mt-8 text-center">
              <div className="bg-gray-100 p-8 rounded-lg mb-6">
                <AlertTriangle size={48} className="text-yuka-green mx-auto mb-4" />
                <h2 className="text-xl font-bold mb-2">Premium Content</h2>
                <p className="text-gray-500">
                  Become a member to unlock detailed product information and health assessments.
                </p>
              </div>
              
              <Button 
                className="bg-yuka-green hover:bg-yuka-green/90 text-white w-full"
                onClick={() => navigate('/membership')}
              >
                Become a Member
              </Button>
            </div>
          ) : (
            <>
              <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
                <h2 className="font-bold mb-2">Quality Assessment</h2>
                <div className={`p-3 rounded-md ${
                  product.score && product.score >= 70 ? "bg-green-100" : 
                  product.score && product.score >= 50 ? "bg-yellow-100" : 
                  "bg-red-100"
                }`}>
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                      product.score && product.score >= 70 ? "bg-green-500" : 
                      product.score && product.score >= 50 ? "bg-yellow-500" : 
                      "bg-red-500"
                    }`}>
                      {product.score && product.score >= 50 ? (
                        <Check size={16} className="text-white" />
                      ) : (
                        <AlertTriangle size={16} className="text-white" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">
                        {getQualityMessage(product.score)}
                      </p>
                      <p className="text-sm text-gray-600">
                        {product.score && product.score >= 70 
                          ? "This product has excellent nutritional quality" 
                          : product.score && product.score >= 50 
                            ? "This product has good nutritional quality" 
                            : "This product has poor nutritional quality"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
                <h2 className="font-bold mb-4">Ingredients</h2>
                <p className="text-gray-600">
                  Simulated ingredients for {product.name}. In the real app, this would display actual product ingredients and highlight any that conflict with preferences.
                </p>
              </div>
              
              <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
                <h2 className="font-bold mb-4">Nutritional Values</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Energy</span>
                    <span className="font-medium">250 kcal</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fat</span>
                    <span className="font-medium">10g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Carbohydrates</span>
                    <span className="font-medium">30g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Protein</span>
                    <span className="font-medium">5g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Salt</span>
                    <span className="font-medium">0.5g</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
