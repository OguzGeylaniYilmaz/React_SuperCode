
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TestimonialProps {
  name: string;
  quote: string;
  image?: string;
  variant?: "pink" | "blue" | "purple";
  className?: string;
}

export function Testimonial({ name, quote, image, variant = "pink", className }: TestimonialProps) {
  const borderColorClass = 
    variant === "pink" ? "neon-border-pink" : 
    variant === "blue" ? "neon-border-blue" : 
    "neon-border-purple";

  const glowAnimationClass = 
    variant === "pink" ? "animate-pulse-glow" : 
    variant === "blue" ? "animate-pulse-blue-glow" : 
    "animate-pulse-glow";

  return (
    <div 
      className={cn(
        "p-4 rounded-lg border-2 glass-card backdrop-blur-md",
        borderColorClass,
        glowAnimationClass,
        "flex flex-col h-full transition-transform duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div className="mb-4">
        {image ? (
          <div className="w-14 h-14 rounded-full overflow-hidden mx-auto border-2 border-white/20">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-14 h-14 rounded-full mx-auto bg-gradient-to-br from-neon-pink/50 to-neon-blue/50 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">{name.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="flex-grow">
        <p className="text-white/80 italic mb-3 text-sm">&ldquo;{quote}&rdquo;</p>
        <p className={cn(
          "font-vt text-xl font-bold",
          variant === "pink" ? "text-neon-pink text-glow-pink" : 
          variant === "blue" ? "text-neon-blue text-glow-blue" : 
          "text-neon-purple text-glow"
        )}>
          {name}
        </p>
      </div>
    </div>
  );
}
