
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import CarrotMascot from "@/components/ui/CarrotMascot";
import { useProducts } from "@/contexts/ProductContext";
import { toast } from "sonner";

const MembershipPage: React.FC = () => {
  const navigate = useNavigate();
  const { setIsMember } = useProducts();
  const [billingType, setBillingType] = useState<'yearly' | 'monthly'>('yearly');
  
  const handleBecomeMember = () => {
    setIsMember(true);
    toast.success("You're now a premium member!");
    navigate('/search');
  };
  
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center p-4 border-b border-gray-200">
        <button onClick={() => navigate(-1)}>
          <X size={24} />
        </button>
      </header>
      
      <div className="flex-1 overflow-auto p-4">
        <h2 className="text-yuka-green text-center text-xl font-medium mt-4">
          Learn more
        </h2>
        
        <div className="flex items-start mt-8 mb-8">
          <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-4">
            <span className="text-xl">🌴</span>
          </div>
          <div>
            <h3 className="text-xl font-bold">Food preferences</h3>
            <p className="text-gray-500 mt-1">
              Detect the presence of palm oil, gluten, lactose, etc.
            </p>
            <p className="text-yuka-green mt-2">Learn more</p>
          </div>
        </div>
        
        <h2 className="text-4xl font-bold mt-8">Pay what you want</h2>
        <p className="text-gray-500 uppercase my-2">NO COMMITMENT</p>
        
        <div className="flex justify-center my-8">
          <div className="bg-gray-100 rounded-full w-32 h-32 flex items-center justify-center">
            <CarrotMascot size="medium" />
          </div>
        </div>
        
        <div className="flex justify-center space-x-4 mb-4">
          <button 
            className={`px-4 py-2 rounded ${billingType === 'yearly' ? 'bg-yuka-green text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setBillingType('yearly')}
          >
            Yearly
          </button>
          <button 
            className={`px-4 py-2 rounded ${billingType === 'monthly' ? 'bg-yuka-green text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setBillingType('monthly')}
          >
            Monthly
          </button>
        </div>
        
        <h3 className="text-center text-5xl font-bold text-yuka-green">
          {billingType === 'yearly' ? '₹299/year' : '₹49/month'}
        </h3>
        
        <Button 
          className="bg-yuka-green hover:bg-yuka-green/90 text-white w-full py-6 text-xl mt-6"
          onClick={handleBecomeMember}
        >
          Become a member
        </Button>
        
        <p className="text-gray-400 text-xs text-center mt-6 px-4">
          Payment will be charged to your account upon purchase confirmation. The subscription will be automatically renewed after 1 year, at the same price, unless it is canceled 24 hours before the renewal at the latest. Your account will be charged for renewal 24 hours before the end of the current period. You can cancel your subscription at any time.
        </p>
        
        <div className="flex justify-center space-x-2 mt-4 mb-8">
          <button className="text-blue-500">Privacy policy</button>
          <span className="text-gray-400">•</span>
          <button className="text-blue-500">Restore purchase</button>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
