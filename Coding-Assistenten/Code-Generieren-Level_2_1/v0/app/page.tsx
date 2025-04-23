import Link from "next/link"
import Image from "next/image"
import { Heart, ChevronRight, Star, Users, MessageCircle, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-8 w-8 text-pink-500 animate-pulse" />
          <span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            NEON<span className="text-white">LOVE</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm hover:text-pink-400 transition-colors">
            Features
          </Link>
          <Link href="#testimonials" className="text-sm hover:text-pink-400 transition-colors">
            Testimonials
          </Link>
          <Link href="#" className="text-sm hover:text-pink-400 transition-colors">
            About
          </Link>
          <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-500/10">
            Log in
          </Button>
        </nav>
        <Button className="md:hidden bg-gradient-to-r from-pink-500 to-blue-500 border-0">Menu</Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 relative">
        {/* Glow effects */}
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="block bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
              Find Your Rad Match
            </span>
            <span className="block">In The Digital Age</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Experience dating like it's 1985. Totally tubular connections with righteous people.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="text-lg px-8 py-6 bg-gradient-to-r from-pink-500 to-blue-500 border-0 shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:shadow-[0_0_25px_rgba(236,72,153,0.7)] transition-shadow">
              Start Matching Now
            </Button>
            <Button
              variant="outline"
              className="text-lg px-8 py-6 border-blue-500 text-blue-400 hover:bg-blue-500/10 flex items-center gap-2"
            >
              Learn More <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
              Totally Rad Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our app is packed with gnarly features that'll make your dating life as bright as neon.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Star className="h-10 w-10 text-pink-500" />,
              title: "Perfect Matches",
              description: "Our radical algorithm finds your perfect match faster than a cassette rewinds.",
            },
            {
              icon: <Users className="h-10 w-10 text-blue-500" />,
              title: "Awesome Community",
              description: "Join thousands of bodacious singles looking for meaningful connections.",
            },
            {
              icon: <MessageCircle className="h-10 w-10 text-pink-500" />,
              title: "Instant Messaging",
              description: "Chat it up with your matches like you're on a neon-lit phone line.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-6 rounded-xl border border-pink-500/20 shadow-[0_0_15px_rgba(236,72,153,0.15)] hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container mx-auto px-4 py-20 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
              Righteous Reviews
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Check out what these totally tubular people are saying about their NeonLove experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "DiscoDebbie",
              review: "Found my radical soulmate in just two weeks! This app is, like, totally awesome!",
            },
            { name: "SynthwaveSteve", review: "The neon vibes of this app matched my energy. Met my girlfriend here!" },
            {
              name: "AerobicAnnie",
              review: "NeonLove is way cooler than any other dating app I've tried. Gnarly matches!",
            },
            {
              name: "BoomboxBobby",
              review: "This app is the max! Found someone who appreciates my mixtape collection.",
            },
            { name: "RetroRachel", review: "The 80s aesthetic spoke to my soul. So did my new boyfriend!" },
            { name: "NeonNick", review: "Finally, a dating app that's as rad as my wardrobe. Found my perfect match!" },
            {
              name: "CassetteCarl",
              review: "Met someone who loves vinyl as much as I do. This app is totally tubular!",
            },
            { name: "FluorescentFiona", review: "The glowing interface matches my personality. So do my matches!" },
            { name: "MulletMike", review: "Business in the front, party in the back - just like this awesome app!" },
            { name: "LegwarmersLisa", review: "Found someone who appreciates my aerobics skills. Totally worth it!" },
            { name: "KeytarKevin", review: "This app hits all the right notes, just like my keytar solos!" },
            { name: "PacManPaula", review: "High score in love thanks to NeonLove! Waka waka waka!" },
            { name: "VHSVictor", review: "No need to rewind this love story - it's playing perfectly from the start!" },
            { name: "RollerbladeRita", review: "Skated right into love with this bodacious app!" },
            { name: "WalkmanWally", review: "The soundtrack of my love life just got a major upgrade. Rad!" },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-6 rounded-xl border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center">
                  <Image
                    src={`/placeholder.svg?height=48&width=48`}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white">{testimonial.name}</h3>
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-pink-500 fill-pink-500" />
                      ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 relative">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink-500/10 to-blue-500/10 p-8 md:p-12 rounded-2xl border border-pink-500/30 relative overflow-hidden">
          {/* Glow effects */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500/5 to-blue-500/5 blur-xl"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Ready to Find Your{" "}
              <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
                Neon Love?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't be a space invader - join thousands of singles waiting to meet someone as awesome as you!
            </p>
            <Button className="text-lg px-8 py-6 bg-gradient-to-r from-pink-500 to-blue-500 border-0 shadow-[0_0_15px_rgba(236,72,153,0.5)] hover:shadow-[0_0_25px_rgba(236,72,153,0.7)] transition-shadow">
              <Zap className="mr-2 h-5 w-5" /> Start Your Radical Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-pink-500" />
                <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
                  NEONLOVE
                </span>
              </div>
              <p className="text-gray-400 text-sm">Finding love in the digital age, with a radical 80s twist.</p>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-white">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Safety Tips
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Community Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-white">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} NeonLove. All rights reserved. Stay rad!</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
