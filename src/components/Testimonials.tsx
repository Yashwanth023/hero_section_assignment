
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Precision's approach to design transformed our digital presence, resulting in a 40% increase in user engagement.",
    author: "Sarah Johnson",
    role: "CMO, TechVision",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 2,
    quote: "The team delivered a user interface that perfectly balances aesthetics and functionality. Our customers love it.",
    author: "Mark Rodriguez",
    role: "Product Lead, Innovate Inc",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 3,
    quote: "Working with Precision was seamless. They truly understand how to create digital experiences that feel intuitive and elegant.",
    author: "Emma Chen",
    role: "Director of UX, Velocity",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 7000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 text-xs rounded-full bg-light/10 text-light/80 mb-3">
            Client Success
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            What Our Clients Say
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Our commitment to excellence has earned the trust of companies across industries.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute top-0 left-10 md:left-4 text-light/30">
            <Quote size={60} strokeWidth={1} />
          </div>
          
          <div key={currentTestimonial.id} className="glass-card p-8 md:p-12 rounded-xl text-center relative z-10">
            <div className="animate-fade-in opacity-0" style={{ animationFillMode: 'forwards' }}>
              <p className="text-xl md:text-2xl text-light/90 italic mb-8 pt-10">
                "{currentTestimonial.quote}"
              </p>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-light/20">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-light">{currentTestimonial.author}</h4>
                <p className="text-light/70">{currentTestimonial.role}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-light/10 text-light hover:bg-light/20 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsTransitioning(true);
                    setActiveIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-light w-4' : 'bg-light/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-light/10 text-light hover:bg-light/20 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-1/3 left-1/4 w-60 h-60 bg-light/5 rounded-full blur-3xl -z-10 animate-blur-in"></div>
    </section>
  );
};

export default Testimonials;
