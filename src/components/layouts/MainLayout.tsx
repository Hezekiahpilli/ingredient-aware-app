
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { History, CircleDollarSign, Scan, List, Search, Info, ArrowUpDown } from "lucide-react";

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  showInfoButton?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  title, 
  showInfoButton = false 
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const navItems = [
    { path: "/history", label: "History", Icon: History },
    { path: "/recommendations", label: "Recs", Icon: ArrowUpDown },
    { path: "/scan", label: "Scan", Icon: Scan },
    { path: "/top-products", label: "Top", Icon: List },
    { path: "/search", label: "Search", Icon: Search }
  ];

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      {title && (
        <header className="flex justify-between items-center p-4">
          <h1 className="text-4xl font-bold">{title}</h1>
          {showInfoButton && (
            <button 
              className="rounded-full w-8 h-8 flex items-center justify-center border border-gray-200"
              onClick={() => navigate("/food-preferences")}
            >
              <Info size={18} className="text-yuka-green" />
            </button>
          )}
        </header>
      )}

      {/* Content area */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>

      {/* Bottom navigation */}
      <nav className="bg-white border-t border-gray-200 px-2 py-3 flex justify-between items-center">
        {navItems.map(({ path, label, Icon }) => (
          <button 
            key={path}
            onClick={() => navigate(path)}
            className={`bottom-nav-item ${currentPath === path ? 'active' : ''}`}
          >
            <Icon 
              size={24} 
              className={`${currentPath === path ? 'text-yuka-green' : 'text-gray-500'}`} 
            />
            <span className={`${currentPath === path ? 'text-yuka-green' : 'text-gray-500'}`}>
              {label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default MainLayout;
