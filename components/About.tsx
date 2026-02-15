
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" 
                alt="About GIC" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-80 hidden md:block border-8 border-white shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600&auto=format&fit=crop" 
                alt="Fashion Detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold block">Our Story</span>
            <h1 className="text-5xl md:text-6xl font-serif leading-tight">GIC: Minimalist Fashion Inspiration</h1>
            <p className="text-gray-600 font-light leading-relaxed">
              Founded on the principles of aesthetic purity and modern elegance, GIC serves as a digital sanctuary for those who appreciate high-end fashion inspiration. We curate the trends that matter, focusing on silhouettes that transcend seasons.
            </p>
            <p className="text-gray-600 font-light leading-relaxed">
              Our mission is to bridge the gap between runway luxury and wearable everyday style. Whether it's the perfect oversized blazer or the most delicate silk slip, GIC provides the vision for your next sartorial evolution.
            </p>
            <div className="pt-8 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif text-2xl mb-2">Curated</h4>
                <p className="text-xs text-gray-400 tracking-wider uppercase">Hand-selected inspirations</p>
              </div>
              <div>
                <h4 className="font-serif text-2xl mb-2">Timeless</h4>
                <p className="text-xs text-gray-400 tracking-wider uppercase">Style over fashion</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-[#1A1A1A] py-24 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 italic">"Style is a way to say who you are without having to speak."</h2>
          <p className="text-gray-400 uppercase tracking-widest text-xs">— The GIC Ethos</p>
        </div>
      </section>
    </div>
  );
};

export default About;
