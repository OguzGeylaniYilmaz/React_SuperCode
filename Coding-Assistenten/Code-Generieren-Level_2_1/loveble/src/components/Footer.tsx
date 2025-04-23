
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Heart className="text-neon-pink" size={18} />
            <span className="font-retro text-neon-pink text-sm text-glow-pink">NEON</span>
            <span className="font-retro text-neon-blue text-sm text-glow-blue">LOVE</span>
          </div>
          
          <div className="flex gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} NeonLove. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
