
import { Testimonial } from "./Testimonial";

const TESTIMONIALS = [
  {
    name: "SynthSandra",
    quote: "Found my neon soulmate here! Our first date was at an arcade, now we're married!",
    variant: "pink" as const
  },
  {
    name: "RadicalRandy",
    quote: "The mixtape feature helped me connect with someone who loves Duran Duran as much as I do!",
    variant: "blue" as const
  },
  {
    name: "NeonNancy",
    quote: "After striking out at the roller disco, NeonLove helped me find my perfect match!",
    variant: "purple" as const
  },
  {
    name: "DiscoDave",
    quote: "The 80s aesthetic brought me back to my glory days. Met my girlfriend within a week!",
    variant: "pink" as const
  },
  {
    name: "VHSVicky",
    quote: "We bonded over our love for VHS movie nights. Now we have the best collection in town!",
    variant: "blue" as const
  },
  {
    name: "BoomboxBarry",
    quote: "The musical match algorithm is spot on! Found someone who appreciates my mixtapes.",
    variant: "purple" as const
  },
  {
    name: "RetroRita",
    quote: "Never thought I'd find someone who loves neon as much as I do. Thank you NeonLove!",
    variant: "pink" as const
  },
  {
    name: "ArcadeAlex",
    quote: "We challenge each other at Pac-Man every weekend now. Love and high scores!",
    variant: "blue" as const
  },
  {
    name: "CassetteCarl",
    quote: "The mixtape messages feature is pure genius. Nothing says love like a curated playlist!",
    variant: "purple" as const
  },
  {
    name: "PinkPam",
    quote: "Met my husband here three years ago. Our wedding had a full 80s theme!",
    variant: "pink" as const
  },
  {
    name: "WalkmanWill",
    quote: "Found someone who appreciates my vintage tech collection. We're totally rad together!",
    variant: "blue" as const
  },
  {
    name: "GlitterGloria",
    quote: "The neon aesthetic drew me in, but the amazing matches made me stay. Found my forever person!",
    variant: "purple" as const
  },
  {
    name: "JazzerciseJeff",
    quote: "We both love 80s fitness and synthwave. Now we work out together every morning!",
    variant: "pink" as const
  },
  {
    name: "LaserLinda",
    quote: "Our first conversation was about laser tag, and now we run a league together!",
    variant: "blue" as const
  },
  {
    name: "MoonboothMike",
    quote: "Never thought I'd find someone who loves space and retro style. It's been cosmic!",
    variant: "purple" as const
  },
];

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="py-20 grid-pattern overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="font-retro text-3xl text-white text-center mb-4">
          <span className="text-neon-pink text-glow-pink">LOVE</span>{" "}
          <span className="text-white">STORIES</span>
        </h2>
        
        <p className="text-white/70 text-center mb-12 max-w-xl mx-auto font-vt">
          Real people finding real connections in our neon-lit digital universe.
          Your perfect match could be just a profile away!
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              quote={testimonial.quote}
              variant={testimonial.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
