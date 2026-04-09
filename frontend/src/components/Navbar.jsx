import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Case Laws', path: '/case-laws' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-bold text-blue-900">
              Vinod Gandhi & Associates
            </span>
            <span className="text-sm text-gray-600">
              Chartered Accountants
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-blue-900 text-white'
                    : 'text-gray-700 hover:text-blue-900 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              className="ml-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold"
              onClick={() => window.location.href = '/contact'}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-3 rounded-md font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-blue-900 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Button 
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.location.href = '/contact';
                }}
              >
                Book Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;