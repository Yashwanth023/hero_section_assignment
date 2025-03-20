
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-light/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="/" className="text-2xl font-bold tracking-tighter text-light inline-block mb-4">
              Precision
            </a>
            <p className="text-light/60 max-w-md">
              Crafting digital experiences that balance form and function through elegant, thoughtful design.
            </p>
          </div>
          
          <div>
            <h4 className="text-light font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Features', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-light/60 hover:text-light transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-light font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-light/60 hover:text-light transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-light/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light/60 text-sm">
            © {new Date().getFullYear()} Precision Design. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="text-light/60 hover:text-light transition-colors duration-300 text-sm">
              Twitter
            </a>
            <a href="#" className="text-light/60 hover:text-light transition-colors duration-300 text-sm">
              Instagram
            </a>
            <a href="#" className="text-light/60 hover:text-light transition-colors duration-300 text-sm">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
