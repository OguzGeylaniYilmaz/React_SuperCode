
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TestimonialSection from "@/components/TestimonialSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import "../App.css";

const Index = () => {
  return (
    <div className="min-h-screen bg-neon-black text-white overflow-x-hidden">
      <div className="stars"></div>
      <div className="scanlines"></div>
      <Header />
      <main>
        <Hero />
        <Features />
        <TestimonialSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
