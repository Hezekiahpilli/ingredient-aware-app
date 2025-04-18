
import React from "react";
import { useNavigate } from "react-router-dom";
import { X, Check } from "lucide-react";
import { useProducts } from "@/contexts/ProductContext";
import { Switch } from "@/components/ui/switch";

const PreferenceItem = ({ 
  name, 
  description, 
  checked, 
  onChange 
}: { 
  name: string; 
  description: string; 
  checked: boolean; 
  onChange: () => void;
}) => (
  <div className="py-4 border-b border-gray-200">
    <div className="flex justify-between items-center">
      <div>
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
      </div>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  </div>
);

const FoodPreferencesPage: React.FC = () => {
  const navigate = useNavigate();
  const { preferences, togglePreference } = useProducts();
  
  const preferenceItems = [
    { 
      id: "vegan", 
      name: "Vegan", 
      description: "No animal products" 
    },
    { 
      id: "vegetarian", 
      name: "Vegetarian", 
      description: "No meat or fish" 
    },
    { 
      id: "gluten_free", 
      name: "Gluten-free", 
      description: "No wheat, barley, rye" 
    },
    { 
      id: "lactose_free", 
      name: "Lactose-free", 
      description: "No milk products containing lactose" 
    },
    { 
      id: "palm_oil_free", 
      name: "Palm oil free", 
      description: "No products with palm oil" 
    },
    { 
      id: "organic", 
      name: "Organic", 
      description: "Preference for organic products" 
    }
  ];
  
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-gray-200">
        <button onClick={() => navigate(-1)}>
          <X size={24} />
        </button>
        <h1 className="text-xl font-medium">Food Preferences</h1>
        <div className="w-6"></div> {/* For spacing */}
      </header>
      
      {/* Content */}
      <div className="flex-1 overflow-auto p-4">
        <p className="text-gray-500 mb-6">
          Select your dietary preferences to get personalized alerts when scanning products.
        </p>
        
        {preferenceItems.map(item => (
          <PreferenceItem 
            key={item.id}
            name={item.name}
            description={item.description}
            checked={preferences.includes(item.id)}
            onChange={() => togglePreference(item.id)}
          />
        ))}
        
        <div className="bg-yuka-lightGreen rounded-lg p-4 mt-6">
          <div className="flex">
            <div className="mr-3 bg-yuka-green rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
              <Check size={16} className="text-white" />
            </div>
            <p className="text-sm">
              Your preferences are automatically saved and will be used when analyzing products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPreferencesPage;
