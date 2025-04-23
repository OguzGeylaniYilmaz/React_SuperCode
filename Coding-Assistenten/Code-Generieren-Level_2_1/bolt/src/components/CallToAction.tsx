import React from 'react';
import { Download, SmartphoneNfc } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-b from-dark-purple to-black-purple relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-neon-pink opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-neon-blue opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-black-purple p-8 md:p-12 rounded-3xl neon-border-blue">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-display mb-6 neon-text-pink">
              Ready to Get <span className="neon-text-blue">Rad?</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Download NeonHearts now and start your totally tubular dating adventure!
              Find your perfect match in the most righteous dating app of 2025!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="neon-button py-3 px-8 rounded-full font-bold text-white text-lg flex items-center justify-center">
                <Download size={20} className="mr-2" />
                App Store
              </button>
              <button className="neon-button py-3 px-8 rounded-full font-bold text-white text-lg flex items-center justify-center">
                <SmartphoneNfc size={20} className="mr-2" />
                Google Play
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-radial from-neon-pink/10 to-transparent p-6 rounded-2xl">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-display mb-4">Join 100,000+ Rad Singles Today!</h3>
              <p className="text-lg">
                Limited time offer: Get 1 month of premium features for <span className="line-through">$9.99</span> <span className="font-bold neon-text-blue">FREE</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;