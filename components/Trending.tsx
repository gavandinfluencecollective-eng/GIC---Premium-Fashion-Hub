
import React from 'react';
import { PINTEREST_LINK } from '../constants';

const Trending: React.FC = () => {
  return (
    <section id="trending" className="py-24 bg-white dark:bg-gic-dark overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1200&auto=format&fit=crop" 
                alt="Trending Look"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -right-6 md:right-10 bg-gic-charcoal dark:bg-black text-white p-8 md:p-12 max-w-xs shadow-2xl">
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-widest mb-4 block">New Arrival</span>
              <h3 className="text-2xl font-serif mb-4 italic">Essential Silk Blouse</h3>
              <p className="text-xs font-light text-gray-400 mb-6 leading-relaxed">
                A versatile staple for the refined wardrobe. Handcrafted from 100% mulberry silk.
              </p>
              <a 
                href={PINTEREST_LINK} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-widest border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors"
              >
                Shop the Look
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 lg:pl-12">
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Trending Collection</h2>
            <div className="space-y-8">
              <div className="pb-8 border-b border-gray-100 dark:border-gray-800">
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">01 / Modern Tailoring</span>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-light">Explore sharp silhouettes and relaxed structures designed for the metropolitan lifestyle.</p>
              </div>
              <div className="pb-8 border-b border-gray-100 dark:border-gray-800">
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">02 / Neutrals Reimagined</span>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-light">A symphony of beige, cream, and oat. Texture-rich fabrics that speak of quiet luxury.</p>
              </div>
              <div className="pb-8">
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">03 / Artisan Accessories</span>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-light">The finishing touch. Italian leather and minimal gold accents to elevate any ensemble.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
