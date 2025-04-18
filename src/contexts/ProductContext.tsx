
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define product types
export interface Product {
  id: string;
  name: string;
  category: string;
  image?: string;
  score?: number; // Nutritional score
  ingredients?: string[];
  allergens?: string[];
  nutritionalInfo?: {
    calories?: number;
    fat?: number;
    carbs?: number;
    protein?: number;
    sugar?: number;
    salt?: number;
  };
  locked?: boolean; // If true, requires membership to see details
}

// Sample products data
const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Ice Cream",
    category: "Food",
    image: "/placeholder.svg",
    score: 65,
    locked: false
  },
  {
    id: "2",
    name: "Peanut Butter",
    category: "Food",
    image: "/placeholder.svg",
    score: 82,
    locked: false
  },
  {
    id: "3",
    name: "Muesli & Granolas",
    category: "Food",
    image: "/placeholder.svg",
    score: 75,
    locked: false
  },
  {
    id: "4",
    name: "Cereal Bars",
    category: "Food",
    image: "/placeholder.svg",
    score: 45,
    locked: true
  },
  {
    id: "5",
    name: "Dark Chocolate Bars",
    category: "Food",
    image: "/placeholder.svg",
    score: 58,
    locked: true
  },
  {
    id: "6",
    name: "Candies",
    category: "Food",
    image: "/placeholder.svg",
    score: 30,
    locked: true
  },
  {
    id: "7",
    name: "Fruit Snacks",
    category: "Food",
    image: "/placeholder.svg",
    score: 70,
    locked: true
  },
  {
    id: "8",
    name: "Iced Teas",
    category: "Food",
    image: "/placeholder.svg",
    score: 42,
    locked: true
  },
  {
    id: "9",
    name: "Popcorn",
    category: "Food",
    image: "/placeholder.svg",
    score: 55,
    locked: true
  },
  {
    id: "10",
    name: "Tortilla Chips",
    category: "Food",
    image: "/placeholder.svg",
    score: 38,
    locked: true
  },
  {
    id: "11",
    name: "Pretzels and Breadsticks",
    category: "Food",
    image: "/placeholder.svg",
    score: 50,
    locked: true
  },
  {
    id: "12",
    name: "Puffed Snacks",
    category: "Food",
    image: "/placeholder.svg",
    score: 35,
    locked: true
  },
  {
    id: "13",
    name: "Crackers",
    category: "Food",
    image: "/placeholder.svg",
    score: 48,
    locked: true
  }
];

// Beauty products
const beautyProducts: Product[] = [
  {
    id: "b1",
    name: "Shampoo",
    category: "Beauty",
    image: "/placeholder.svg",
    score: 75,
    locked: true
  },
  {
    id: "b2",
    name: "Face Cream",
    category: "Beauty",
    image: "/placeholder.svg",
    score: 82,
    locked: true
  },
  {
    id: "b3",
    name: "Shower Gel",
    category: "Beauty",
    image: "/placeholder.svg",
    score: 68,
    locked: true
  }
];

// Context type definition
interface ProductContextType {
  products: Product[];
  beautyProducts: Product[];
  historyProducts: Product[];
  addToHistory: (product: Product) => void;
  isMember: boolean;
  setIsMember: (value: boolean) => void;
  preferences: string[];
  togglePreference: (preference: string) => void;
}

// Create context
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Context provider component
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(sampleProducts);
  const [historyProducts, setHistoryProducts] = useState<Product[]>([]);
  const [isMember, setIsMember] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<string[]>([]);

  const addToHistory = (product: Product) => {
    // Add product to history if not already there
    if (!historyProducts.some(p => p.id === product.id)) {
      setHistoryProducts(prev => [product, ...prev]);
    }
  };

  const togglePreference = (preference: string) => {
    setPreferences(prev => 
      prev.includes(preference) 
        ? prev.filter(p => p !== preference) 
        : [...prev, preference]
    );
  };

  // Context value
  const value = {
    products,
    beautyProducts,
    historyProducts,
    addToHistory,
    isMember,
    setIsMember,
    preferences,
    togglePreference
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook for using the product context
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
