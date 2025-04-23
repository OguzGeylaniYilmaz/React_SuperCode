import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative grid-background pt-10 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-neon-pink opacity-20 blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-60 h-60 rounded-full bg-neon-blue opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-0">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display mb-6 neon-text-pink neon-flicker">
            Find Your <span className="neon-text-blue">Radical</span> Match
          </h1>
          
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            The most bodacious dating experience with that totally tubular 80s vibe. 
            Connect with other rad singles who appreciate the golden era of neon, synth, and big hair!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="neon-button py-3 px-8 rounded-full font-bold text-white text-lg">
              Get Started Now
            </button>
            <button className="py-3 px-8 rounded-full font-bold text-white border-2 border-white hover:neon-border-blue transition-all duration-300">
              Learn More
            </button>
          </div>
          
          <div className="relative">
            <div className="w-full h-64 md:h-96 bg-gradient-to-b from-black-purple to-dark-purple rounded-t-3xl neon-border-pink overflow-hidden">
              <div className="absolute inset-0 opacity-60 bg-[url('https://images.pexels.com/photos/3052360/pexels-photo-3052360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black-purple via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center">
                <p className="text-lg font-semibold mb-2">Explore More</p>
                <ChevronDown size={24} className="animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;