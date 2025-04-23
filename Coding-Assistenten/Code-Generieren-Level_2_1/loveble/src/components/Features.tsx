
import { BoomBox, Headphones, MusicIcon } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: "pink" | "blue" | "purple";
}

function Feature({ title, description, icon, color }: FeatureProps) {
  const colorClass = 
    color === "pink" ? "text-neon-pink text-glow-pink border-neon-pink shadow-neon-pink" : 
    color === "blue" ? "text-neon-blue text-glow-blue border-neon-blue shadow-neon-blue" : 
    "text-neon-purple text-glow border-neon-purple shadow-neon-purple";
    
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className={`w-16 h-16 rounded-full border-2 ${colorClass} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className={`font-vt text-xl mb-2 ${color === "pink" ? "text-neon-pink text-glow-pink" : color === "blue" ? "text-neon-blue text-glow-blue" : "text-neon-purple text-glow"}`}>
        {title}
      </h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-retro text-3xl text-white text-center mb-12">
          <span className="text-neon-blue text-glow-blue">RETRO</span>{" "}
          <span className="text-white">FEATURES</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature 
            title="MUSICAL MATCH"
            description="Find your perfect partner based on your favorite 80s music taste. Synth lovers unite!"
            icon={<MusicIcon size={28} />}
            color="pink"
          />
          <Feature 
            title="MIXTAPE MESSAGES"
            description="Send personalized mixtapes to your matches with curated 80s classics."
            icon={<BoomBox size={28} />}
            color="blue"
          />
          <Feature 
            title="RETRO RADIO"
            description="Listen to synthwave together in real-time while you chat and get to know each other."
            icon={<Headphones size={28} />}
            color="purple"
          />
        </div>
      </div>
    </section>
  );
}
