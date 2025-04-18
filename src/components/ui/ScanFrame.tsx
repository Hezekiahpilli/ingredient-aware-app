
import React from "react";

const ScanFrame: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white"></div>
      
      {/* Scandit logo - just a placeholder text */}
      <div className="absolute bottom-3 right-3 text-xs text-white opacity-50">
        SCANDIT
      </div>
    </div>
  );
};

export default ScanFrame;
