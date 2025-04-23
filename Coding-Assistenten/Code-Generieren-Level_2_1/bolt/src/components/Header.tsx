import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-10">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-display neon-text-pink">
            NeonHearts
          </h1>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-white hover:neon-text-blue transition-all duration-300">Features</a>
          <a href="#testimonials" className="text-white hover:neon-text-blue transition-all duration-300">Testimonials</a>
          <a href="#download" className="text-white hover:neon-text-blue transition-all duration-300">Download</a>
          <button className="neon-button py-2 px-6 rounded-full font-bold text-white">
            Sign Up
          </button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-dark-purple neon-border-pink py-4">
          <div className="flex flex-col space-y-4 px-4">
            <a 
              href="#features" 
              className="text-white py-2 hover:neon-text-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-white py-2 hover:neon-text-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#download" 
              className="text-white py-2 hover:neon-text-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Download
            </a>
            <button className="neon-button py-2 px-6 rounded-full font-bold text-white self-start">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;