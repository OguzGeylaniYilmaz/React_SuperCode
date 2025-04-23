
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-neon-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-retro text-neon-pink text-lg text-glow-pink">NEON</span>
          <span className="font-retro text-neon-blue text-lg text-glow-blue">LOVE</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a>
          <a href="#testimonials" className="text-white/70 hover:text-white transition-colors">Love Stories</a>
          <a href="#join" className="text-white/70 hover:text-white transition-colors">Join</a>
        </nav>
        <Button 
          className="bg-neon-pink text-white border-2 border-neon-pink shadow-neon-pink hover:bg-neon-pink/80 font-vt" 
          size="sm"
        >
          Sign Up
        </Button>
      </div>
    </header>
  );
}
