
import React from 'react';
import { Home, Map, Search, Menu, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <main className="flex-1 overflow-hidden">{children}</main>
      
      {/* Bottom Navigation Bar */}
      <div className="bg-white border-t border-gray-200 py-2 px-4">
        <div className="flex justify-around items-center">
          <Link 
            to="/" 
            className={cn(
              "flex flex-col items-center text-xs px-4 py-2 rounded-full", 
              isActive('/') ? "text-campus-blue" : "text-gray-500"
            )}
          >
            <Map className="h-5 w-5 mb-1" />
            <span>Mapa</span>
          </Link>
          
          <Link 
            to="/buildings" 
            className={cn(
              "flex flex-col items-center text-xs px-4 py-2 rounded-full", 
              isActive('/buildings') ? "text-campus-blue" : "text-gray-500"
            )}
          >
            <Search className="h-5 w-5 mb-1" />
            <span>Buscar</span>
          </Link>
          
          <Link 
            to="/guide" 
            className={cn(
              "flex flex-col items-center text-xs px-4 py-2 rounded-full", 
              isActive('/guide') ? "text-campus-blue" : "text-gray-500"
            )}
          >
            <Home className="h-5 w-5 mb-1" />
            <span>Guía</span>
          </Link>
          
          <Link 
            to="/menu" 
            className={cn(
              "flex flex-col items-center text-xs px-4 py-2 rounded-full", 
              isActive('/menu') ? "text-campus-blue" : "text-gray-500"
            )}
          >
            <Menu className="h-5 w-5 mb-1" />
            <span>Menú</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
