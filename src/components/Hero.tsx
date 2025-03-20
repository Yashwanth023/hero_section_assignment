
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import ServiceModal from './ServiceModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-16 pb-20 px-6">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="mb-3 animate-fade-in">
          <span className="inline-block py-1 px-3 text-xs rounded-full bg-light/10 text-light/80 backdrop-blur-xs">
            Innovative Design Solutions
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-light mb-6 animate-fade-in">
          <span className="block">Elegance Through</span>
          <span className="block">Simplicity</span>
        </h1>
        
        <p className="text-light/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-delayed">
          We create thoughtfully crafted digital experiences that prioritize user needs through clean, functional design.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-longer">
          <button
            onClick={() => setIsModalOpen(true)}
            className="glass-card-hover px-6 py-3 rounded-lg text-light font-medium flex items-center gap-2 group"
          >
            Learn More
            <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          
          <a
            href="#features"
            className="px-6 py-3 rounded-lg border border-light/20 text-light/80 hover:text-light hover:border-light/40 transition-colors duration-300 font-medium"
          >
            Explore Features
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-light/5 rounded-full blur-3xl -z-10 animate-blur-in"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-light/5 rounded-full blur-3xl -z-10 animate-blur-in"></div>
      
      {/* Modal */}
      <ServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
