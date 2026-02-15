
import React, { useState, useEffect } from 'react';
import { INSPIRATION_PINS } from '../constants.ts';

const categories = ['All', 'Men Fashion', 'Women Fashion', 'Streetwear', 'Minimal Style'] as const;

const TrendingLooks: React.FC = () => {
  const [filter, setFilter] = useState<typeof categories[number]>('All');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById('trending-looks-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const filteredPins = filter === 'All' 
    ? INSPIRATION_PINS 
    : INSPIRATION_PINS.filter(pin => pin.category === filter);

  return (
    <section 
      id="trending-looks-section" 
      className={`py-24 px-6 bg-[#FDFBF7] transition-all duration-1000 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold mb-4 block">GIC Social</span>
          <h2 className="text-5xl md:text-6xl font-serif mb-8">Trending Looks</h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] uppercase tracking-[0.2em] pb-1 border-b-2 transition-all duration-300 ${
                  filter === cat ? 'border-[#D4AF37] text-black font-bold' : 'border-transparent text-gray-400 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredPins.map((pin) => (
            <a
              key={pin.id}
              href={pin.pinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden aspect-[3/4] bg-white shadow-sm"
            >
              <img
                src={pin.imageUrl}
                alt={pin.category}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.5 4.21L12 7l4.5-2.79a2.22 2.22 0 0 1 3.2 2.7l-4.5 12.82a2.22 2.22 0 0 1-4.4 0L4.3 7.12a2.22 2.22 0 0 1 3.2-2.91z"></path></svg>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[8px] uppercase tracking-widest text-white/80 font-bold bg-black/40 px-2 py-1 inline-block backdrop-blur-sm">
                  {pin.category}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingLooks;
