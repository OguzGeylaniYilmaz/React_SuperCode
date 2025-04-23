import React from 'react';
import { Heart, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black-purple py-12 border-t border-neon-purple">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display neon-text-pink mb-4">NeonHearts</h3>
            <p className="text-gray-300 mb-4">
              The most radical dating app with that authentic 80s vibe.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-neon-pink transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-neon-pink transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-neon-pink transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-neon-blue transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-neon-blue transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">Dating Tips</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-neon-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-neon-blue transition-colors">Community Guidelines</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; 2025 NeonHearts. All rights reserved.
          </p>
          <p className="text-gray-400 flex items-center">
            Made with <Heart size={16} className="mx-1 text-neon-pink" /> in the spirit of the 80s
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;