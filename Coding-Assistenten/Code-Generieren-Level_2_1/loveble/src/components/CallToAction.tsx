
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart } from "lucide-react";

export default function CallToAction() {
  return (
    <section id="join" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-neon-blue/20 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto glass-card p-8 sm:p-12 rounded-xl border-2 border-white/10">
          <div className="text-center mb-8">
            <Heart className="inline-block text-neon-pink animate-pulse" size={40} />
            <h2 className="font-retro text-3xl mt-4 mb-2">
              <span className="text-neon-pink text-glow-pink">JOIN</span>{" "}
              <span className="text-neon-blue text-glow-blue">TODAY</span>
            </h2>
            <p className="text-white/80 font-vt">
              Step into the neon wonderland and find your perfect match!
            </p>
          </div>
          
          <form className="space-y-4">
            <div>
              <Input 
                type="text" 
                placeholder="Your Name" 
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
            <div>
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
            <Button 
              className="w-full bg-neon-pink border-2 border-neon-pink shadow-neon-pink hover:bg-neon-pink/80 animate-pulse-glow text-white font-vt text-lg py-6"
            >
              START YOUR NEON JOURNEY
            </Button>
          </form>
          
          <p className="text-white/50 text-xs text-center mt-6">
            By signing up, you agree to our totally radical Terms & Privacy Policy.
            No spam, just love and neon vibes!
          </p>
        </div>
      </div>
    </section>
  );
}
