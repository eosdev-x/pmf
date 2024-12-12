import React, { useState } from 'react';
import { Menu, X, Heart, Mail, Home, Info, DollarSign } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const NavLink = ({ to, icon: Icon, children }: { to: string; icon: any; children: React.ReactNode }) => (
    <Link
      to={to}
      className="text-gray-600 hover:text-green-600 flex items-center gap-2 transition-colors"
    >
      <Icon className="h-4 w-4" />
      {children}
    </Link>
  );

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/src/assets/pmf-logo-full.svg" alt="PMF Logo" className="h-12 w-12" />
              <span className="ml-3 text-xl font-bold text-gray-800">Panama Mission Foundation</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" icon={Home}>Home</NavLink>
            <NavLink to="/about" icon={Info}>About</NavLink>
            <NavLink to="/donate" icon={Heart}>Give</NavLink>
            <NavLink to="/#contact" icon={Mail}>Contact</NavLink>
            <Link
              to="/donate"
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <DollarSign className="h-4 w-4" />
              Donate Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-green-600">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-green-600">About</Link>
            <Link to="/donate" className="block px-3 py-2 text-gray-600 hover:text-green-600">Give</Link>
            <Link to="/#contact" className="block px-3 py-2 text-gray-600 hover:text-green-600">Contact</Link>
            <Link
              to="/donate"
              className="block w-full text-center bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700"
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;