
import { Button } from "@/components/ui/button";
import { Heart, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-10 flex items-center px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-4 inline-block">
            <Heart className="inline-block text-neon-pink animate-pulse mr-2" size={40} />
            <Zap className="inline-block text-neon-blue animate-flicker" size={40} />
          </div>
          
          <h1 className="font-retro text-white text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
            <span className="text-neon-pink text-glow-pink">FIND YOUR</span> <br />
            <span className="text-neon-blue text-glow-blue">PERFECT MATCH</span> <br />
            <span className="text-white">IN THE RETRO DIMENSION</span>
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl mb-8 font-vt max-w-xl mx-auto">
            Step into the neon-lit world of 80s romance where synthwave meets soulmates. 
            Join thousands finding love in our retro digital paradise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-neon-pink text-white border-2 border-neon-pink shadow-neon-pink hover:bg-neon-pink/80 animate-pulse-glow font-vt text-lg"
            >
              START YOUR JOURNEY
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-neon-blue text-neon-blue shadow-neon-blue hover:bg-neon-blue/20 font-vt text-lg"
            >
              EXPLORE PROFILES
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
