
import React, { useEffect, useRef } from 'react';
import { PencilRuler, Code, Monitor, Rocket } from 'lucide-react';

const steps = [
  {
    icon: PencilRuler,
    title: "Discovery & Design",
    description: "We start by understanding your needs and crafting wireframes and prototypes that align with your vision.",
    color: "from-light/30 to-light/5"
  },
  {
    icon: Code,
    title: "Development",
    description: "Our engineers transform designs into clean, efficient code with a focus on performance and scalability.",
    color: "from-light/40 to-light/5"
  },
  {
    icon: Monitor,
    title: "Testing & Refinement",
    description: "Rigorous testing across devices ensures your product works flawlessly for every user.",
    color: "from-light/50 to-light/5"
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "We handle deployment and provide ongoing support to help your product evolve and grow.",
    color: "from-light/60 to-light/5"
  }
];

const ProcessStep = ({ icon: Icon, title, description, color, index }) => {
  const stepRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }, index * 200);
        }
      });
    }, { threshold: 0.1 });

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={stepRef}
      className="relative opacity-0 translate-y-4 transition-all duration-700"
    >
      <div className={`glass-card-hover p-6 md:p-8 rounded-xl relative z-10 h-full`}>
        <div className={`mb-4 p-3 rounded-lg inline-block bg-gradient-to-br ${color}`}>
          <Icon size={24} className="text-light" />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-light">
          {index + 1}. {title}
        </h3>
        <p className="text-light/70">{description}</p>
      </div>
      
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute top-1/2 right-0 w-16 h-px bg-gradient-to-r from-light/20 to-transparent z-0 translate-x-8"></div>
      )}
    </div>
  );
};

const Process = () => {
  return (
    <section id="process" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 text-xs rounded-full bg-light/10 text-light/80 mb-3">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            How We Bring Ideas to Life
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Our proven methodology ensures every project moves smoothly from concept to launch.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <ProcessStep key={step.title} {...step} index={index} />
          ))}
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-light/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Process;
