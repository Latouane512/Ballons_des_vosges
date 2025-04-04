import React, { useState } from 'react';
import { Menu, MapPin, Trees as Tree, Mountain, Building, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.FC<{ className?: string }>;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuItems: MenuItem[] = [
    { id: 'introduction', label: 'Introduction', icon: Menu },
    { id: 'geography', label: 'Géographie', icon: Mountain },
    { id: 'culture', label: 'Patrimoine Culturel', icon: MapPin },
    { id: 'nature', label: 'Patrimoine Naturel', icon: Tree },
    { id: 'planning', label: 'Aménagement', icon: Building },
  ];

  return (
    <nav className="bg-green-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">PNR Ballons des Vosges</span>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              aria-expanded={isOpen}
              aria-haspopup="true"
            >
              <span>Menu</span>
              <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
              <div 
                className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
              >
                <div className="py-1">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCurrentPage(item.id);
                        setIsOpen(false);
                      }}
                      className={`${
                        currentPage === item.id ? 'bg-green-100 text-green-900' : 'text-gray-700'
                      } group flex items-center w-full px-4 py-2 text-sm hover:bg-green-50`}
                      role="menuitem"
                    >
                      <item.icon className="mr-3 h-5 w-5" aria-hidden="true" />
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;