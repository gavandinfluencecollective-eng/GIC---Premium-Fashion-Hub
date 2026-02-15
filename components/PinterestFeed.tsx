
import React, { useEffect, useState } from 'react';

const PinterestFeed: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Intersection Observer for the smooth fade-in animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById('pinterest-feed-section');
    if (element) observer.observe(element);

    // Re-build Pinterest widgets when component mounts.
    const reBuildWidget = () => {
      try {
        const globalWindow = window as any;
        if (globalWindow.PinUtils && typeof globalWindow.PinUtils.build === 'function') {
          globalWindow.PinUtils.build();
        }
      } catch (e) {
        console.debug('Pinterest widget initialization deferred:', e);
      }
    };

    // Increased delay slightly to ensure the larger container is fully rendered
    const timer = setTimeout(reBuildWidget, 1500);
    
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="pinterest-feed-section"
      className={`py-[160px] bg-[#faf9f7] dark:bg-gic-dark transition-all duration-[1500ms] ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Header Section - Scaled Up */}
        <div className="text-center mb-20">
          <p className="text-[11px] md:text-xs uppercase tracking-[0.6em] text-[#D4AF37] font-bold mb-6">
            Global Style Inspiration
          </p>
          <h2 className="text-5xl md:text-7xl font-serif mb-8 tracking-tighter text-[#1A1A1A] dark:text-white leading-tight">
            The Digital <span className="italic font-normal">Moodboard</span>
          </h2>
          <div className="h-[1.5px] w-24 bg-[#D4AF37]/60 mx-auto mt-12 shadow-sm"></div>
        </div>

        {/* Expansive Pinterest Card Container */}
        <div className="bg-white dark:bg-gic-charcoal/50 rounded-[16px] p-6 md:p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] border border-gray-100/50 dark:border-white/5 transition-all duration-700">
          <div className="flex justify-center w-full">
            {/* 
              Standardizing the container with significantly larger Pinterest data attributes.
              Board width increased to 1200 and height to 600 for a massive grid look.
            */}
            <div className="w-full max-w-[1200px] flex justify-center text-center overflow-hidden rounded-lg">
              <a 
                data-pin-do="embedUser" 
                data-pin-board-width="1200" 
                data-pin-scale-height="600" 
                data-pin-scale-width="120" 
                href="https://www.pinterest.com/gavandinfluencecollective/"
                className="block min-h-[600px] w-full"
              >
                {/* Enhanced loading state for the larger container */}
                <div className="py-48 flex flex-col items-center bg-gray-50/30 dark:bg-black/10 rounded-xl">
                  <div className="w-12 h-12 border-[1.5px] border-[#D4AF37] border-t-transparent rounded-full animate-spin mb-6"></div>
                  <span className="text-[11px] uppercase tracking-[0.5em] text-gray-400 font-medium">Curating Aesthetic Trends...</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Prominent External Navigation Link */}
        <div className="mt-20 text-center">
          <a 
            href="https://www.pinterest.com/gavandinfluencecollective/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex flex-col items-center space-y-4"
          >
            <span className="text-[11px] uppercase tracking-[0.5em] font-bold text-gray-500 group-hover:text-[#D4AF37] transition-all duration-300 border-b border-gray-200 dark:border-gray-800 pb-2 group-hover:border-[#D4AF37]">
              Visit Full Studio Profile
            </span>
            <div className="w-10 h-10 rounded-full border border-gray-100 dark:border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-500">
               <svg 
                className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PinterestFeed;
