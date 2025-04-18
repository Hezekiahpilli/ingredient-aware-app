
import React from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";
import { Product } from "@/contexts/ProductContext";

interface ProductCardProps {
  product: Product;
  showScore?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  showScore = false 
}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  // Function to get color based on score
  const getScoreColor = (score?: number) => {
    if (!score) return "bg-gray-300";
    if (score >= 70) return "bg-green-500";
    if (score >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div 
      className="flex items-center justify-between p-4 border-b border-gray-200 bg-white"
      onClick={handleClick}
    >
      <div className="flex items-center">
        {/* Product icon/emoji */}
        <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center mr-3">
          {product.category === "Food" ? (
            <span className="text-xl">🍽️</span>
          ) : (
            <span className="text-xl">💄</span>
          )}
        </div>
        
        <div>
          <h3 className="font-medium">{product.name}</h3>
          {showScore && product.score && !product.locked && (
            <div className={`w-6 h-6 mt-1 rounded-full ${getScoreColor(product.score)} flex items-center justify-center text-white text-xs`}>
              {product.score}
            </div>
          )}
        </div>
      </div>
      
      <div className="flex items-center">
        {product.locked && <Lock size={16} className="text-gray-400 mr-2" />}
        <div className="text-gray-400">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
