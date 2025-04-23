import React from 'react';
import { features } from '../data/features';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-dark-purple relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/3 w-40 h-40 rounded-full bg-neon-purple opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-neon-pink opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display mb-6 neon-text-blue">
            Totally Rad Features
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Our dating app comes packed with the most gnarly features that'll make your 
            dating experience, like, totally awesome to the max!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-black-purple p-6 rounded-xl border border-neon-purple hover:neon-border-pink transition-all duration-300"
            >
              <div className="w-14 h-14 mb-6 rounded-full bg-gradient-to-br from-neon-pink to-neon-blue flex items-center justify-center">
                <feature.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-display mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;