
import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // In a real app, you'd send this data to your backend
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    
    // Reset the submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 text-xs rounded-full bg-light/10 text-light/80 mb-3">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Start Your Journey
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's discuss how we can help you achieve your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="glass-card rounded-xl p-6 md:p-8">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="mb-4 text-light/90">
                  <CheckCircle size={60} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-light">Message Sent!</h3>
                <p className="text-light/70 mb-6">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-light/70 hover:text-light underline flex items-center gap-1"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-light/80 mb-2 text-left">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-200 border border-light/10 text-light focus:border-light/30 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-light/80 mb-2 text-left">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-200 border border-light/10 text-light focus:border-light/30 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-light/80 mb-2 text-left">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-dark-200 border border-light/10 text-light focus:border-light/30 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="glass-card-hover px-6 py-3 rounded-lg text-light font-medium w-full flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
          
          {/* Contact info */}
          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-light text-left">
                  Contact Information
                </h3>
                <p className="text-light/70 mb-6 text-left">
                  Have questions or want to discuss your project? Reach out to us through any of these channels.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-light/10">
                    <Mail size={20} className="text-light" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-light mb-1">Email</h4>
                    <a href="mailto:yashwanth@gmail.com" className="text-light/70 hover:text-light transition-colors">
                      yashwanth@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-light/10">
                    <Phone size={20} className="text-light" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-light mb-1">Phone</h4>
                    <a href="tel:+919009009009" className="text-light/70 hover:text-light transition-colors">
                      +91 9009009009
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-light/10">
                    <MapPin size={20} className="text-light" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-light mb-1">Location</h4>
                    <p className="text-light/70">
                      Bangalore, Karnataka<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 glass-card p-6 rounded-xl text-left">
              <h4 className="font-semibold text-light mb-3">Office Hours</h4>
              <p className="text-light/70">
                Monday - Friday: 9AM - 6PM (IST)<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-light/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Contact;
