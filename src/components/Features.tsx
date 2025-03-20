
import React, { useEffect, useRef } from 'react';
import { Lightbulb, Layers, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: "Intuitive Design",
    description: "User interfaces that feel natural and effortless, reducing cognitive load and enhancing usability."
  },
  {
    icon: Layers,
    title: "Meticulous Craftsmanship",
    description: "Attention to every detail, from pixel-perfect layouts to smooth animations that delight users."
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description: "Blazing fast experiences that load quickly and respond instantly to user interactions."
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "Sustainable design principles that create enduring value through simplicity and quality."
  }
];

const FeatureCard = ({ icon: Icon, title, description, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }, index * 150); // Stagger the animations
        }
      });
    }, { threshold: 0.1 });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="glass-card-hover p-6 md:p-8 rounded-xl opacity-0 translate-y-4 transition-all duration-700"
    >
      <div className="mb-4 p-3 rounded-lg inline-block bg-light/10">
        <Icon size={24} className="text-light" />
      </div>
      <h3 className="text-xl md:text-2xl font-semibold mb-3 text-light">{title}</h3>
      <p className="text-light/70">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 text-xs rounded-full bg-light/10 text-light/80 mb-3">
            Our Approach
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Functionality Meets Elegance
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            We believe great design solves problems beautifully, combining purpose with aesthetic appeal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-40 bg-light/5 blur-3xl -z-10"></div>
    </section>
  );
};

export default Features;
