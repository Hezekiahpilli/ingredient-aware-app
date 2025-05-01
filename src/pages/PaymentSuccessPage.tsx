
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/contexts/ProductContext";

const PaymentSuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const { setIsMember } = useProducts();
  
  useEffect(() => {
    // Set user as member when they reach this page
    setIsMember(true);
  }, [setIsMember]);
  
  return (
    <div className="flex flex-col items-center justify-center h-screen p-6 bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Payment Successful!
        </h1>
        
        <p className="text-gray-600 mb-8">
          Thank you for becoming a member! You now have access to all premium features.
        </p>
        
        <Button 
          className="bg-yuka-green hover:bg-yuka-green/90 text-white w-full"
          onClick={() => navigate('/search')}
        >
          Start Exploring
        </Button>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
