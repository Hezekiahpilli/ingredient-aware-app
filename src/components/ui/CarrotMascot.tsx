
import React from "react";

interface CarrotMascotProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

const CarrotMascot: React.FC<CarrotMascotProps> = ({ 
  size = "medium", 
  className = "" 
}) => {
  // Size mappings
  const sizeClasses = {
    small: "w-12 h-12",
    medium: "w-24 h-24",
    large: "w-32 h-32"
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Carrot body - orange rounded rectangle */}
      <div className="absolute inset-0 bg-yuka-orange rounded-xl transform rotate-3 flex items-center justify-center">
        {/* Carrot face */}
        <div className="flex flex-col items-center justify-center">
          {/* Eyes */}
          <div className="flex space-x-2 mb-1">
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
          </div>
          {/* Smile */}
          <div className="w-3 h-1.5 border-b-2 border-black rounded-b-full"></div>
        </div>
      </div>
      {/* Carrot top - green leaf */}
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-yuka-green rounded-full -rotate-12"></div>
    </div>
  );
};

export default CarrotMascot;
