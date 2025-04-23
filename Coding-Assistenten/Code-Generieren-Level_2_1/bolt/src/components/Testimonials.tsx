import React, { useState } from 'react';
import { testimonials } from '../data/testimonials';
import { ChevronLeft, ChevronRight, UserCircle2 } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 6;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section id="testimonials" className="py-20 bg-black-purple grid-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display mb-6 neon-text-pink">
            Radical Reviews
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Check out what these totally tubular dudes and dudettes are saying about their 
            gnarly experience with NeonHearts!
          </p>
        </div>
        
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {currentTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card p-6 rounded-xl border border-white bg-dark-purple bg-opacity-80 hover:neon-border-pink"
            >
              <UserCircle2 size={48} className={testimonial.gender === 'female' ? 'text-neon-pink mb-4' : 'text-neon-blue mb-4'} />
              <h3 className="text-xl font-display mb-2">{testimonial.name}</h3>
              <div className="flex items-center text-sm text-gray-300 mb-4">
                <span>{testimonial.age}</span>
                <span className="mx-2">•</span>
                <span>{testimonial.location}</span>
              </div>
              <p className="italic">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </div>
        
        {/* Mobile testimonial carousel */}
        <div className="md:hidden relative">
          {currentTestimonials.slice(0, 1).map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card p-6 rounded-xl border border-white bg-dark-purple bg-opacity-80 mb-8"
            >
              <UserCircle2 size={48} className={testimonial.gender === 'female' ? 'text-neon-pink mb-4' : 'text-neon-blue mb-4'} />
              <h3 className="text-xl font-display mb-2">{testimonial.name}</h3>
              <div className="flex items-center text-sm text-gray-300 mb-4">
                <span>{testimonial.age}</span>
                <span className="mx-2">•</span>
                <span>{testimonial.location}</span>
              </div>
              <p className="italic">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center items-center space-x-4">
          <button 
            onClick={goToPrevPage}
            className="p-2 rounded-full border border-white hover:neon-border-blue"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="text-sm">
            {currentPage + 1} / {totalPages}
          </div>
          <button 
            onClick={goToNextPage}
            className="p-2 rounded-full border border-white hover:neon-border-blue"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;