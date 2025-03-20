
import React, { useEffect, useRef } from 'react';
import { Dialog } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/90 backdrop-blur-md transition-opacity animate-fade-in">
      <div 
        ref={modalRef}
        className="glass-card relative rounded-xl w-full max-w-xl p-6 md:p-8 animate-blur-in"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-light/60 hover:text-light transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        
        <h3 className="text-2xl font-semibold mb-4 text-light">Our Design Philosophy</h3>
        
        <div className="space-y-4 text-left">
          <p className="text-light/80">
            We draw inspiration from the design principles that have shaped the world's most iconic products:
          </p>
          
          <ul className="space-y-3 text-light/70">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-light/60 mt-2 mr-2"></span>
              <span><strong className="text-light">Simplicity:</strong> Good design is as little design as possible, focusing on the essential aspects.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-light/60 mt-2 mr-2"></span>
              <span><strong className="text-light">Usability:</strong> Design should make a product useful, prioritizing function while considering psychological and aesthetic aspects.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-light/60 mt-2 mr-2"></span>
              <span><strong className="text-light">Longevity:</strong> We avoid trendy design that quickly becomes outdated, focusing on what will endure.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-light/60 mt-2 mr-2"></span>
              <span><strong className="text-light">Thoroughness:</strong> Nothing must be arbitrary or left to chance. Care and accuracy show respect towards the user.</span>
            </li>
          </ul>
          
          <p className="text-light/80 pt-2">
            These principles guide our approach to creating digital experiences that not only look beautiful but serve their purpose elegantly.
          </p>
        </div>
        
        <div className="mt-6 pt-6 border-t border-light/10 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-light text-dark-200 font-medium hover:bg-light/90 transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
