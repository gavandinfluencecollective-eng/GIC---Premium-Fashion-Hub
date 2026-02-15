
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
        // More robust check for external script object to avoid "Script error"
        // if the third-party pinit.js fails to load or encounters CORS issues.
        const globalWindow = window as any;
        if (globalWindow.PinUtils && typeof globalWindow.PinUtils.build === 'function') {
          globalWindow.PinUtils.build();
        }
      } catch (e) {
        // Silently handle third-party script errors to prevent them from bubbling up
        // and appearing as generic "Script error" in the main application context.
        console.debug('Pinterest widget initialization deferred:', e);
      }
    };

    // Delay initialization to accommodate async defer loading of the external script
    const timer = setTimeout(reBuildWidget, 1200);
    
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="pinterest-feed-section"
      className={`py-[120px] bg-[#faf9f7] transition-all duration-[1500ms] ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-5">
        {/* Editorial Header Section */}
        <div className="text-center mb-[60px]">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight text-[#1A1A1A] leading-tight">
            Discover Trending Styles
          </h2>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#D4AF37] font-bold">
            Curated Fashion Picks from GIC
          </p>
          <div className="h-[1px] w-20 bg-[#D4AF37]/40 mx-auto mt-10 shadow-sm"></div>
        </div>

        {/* Premium Pinterest Card Container */}
        <div className="bg-white rounded-[12px] p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] border border-gray-100/50 transition-all duration-700">
          <div className="flex justify-center w-full">
            {/* 
              Standardizing the container with precise Pinterest data attributes.
              Centered layout with sufficient padding for an airy, luxurious feel.
            */}
            <div className="w-full max-w-[900px] flex justify-center text-center overflow-hidden">
              <a 
                data-pin-do="embedUser" 
                data-pin-board-width="900" 
                data-pin-scale-height="320" 
                data-pin-scale-width="100" 
                href="https://www.pinterest.com/gavandinfluencecollective/"
                className="block min-h-[320px] w-full"
              >
                {/* Minimalist loading state */}
                <div className="py-24 flex flex-col items-center">
                  <div className="w-8 h-8 border-[1px] border-[#D4AF37] border-t-transparent rounded-full animate-spin mb-4"></div>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-gray-300">Aesthetic Curation...</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Subtle Brand Signature */}
        <div className="mt-16 text-center">
          <a 
            href="https://www.pinterest.com/gavandinfluencecollective/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-4 text-[10px] uppercase tracking-[0.4em] font-semibold text-gray-400 hover:text-[#D4AF37] transition-all duration-300"
          >
            <span className="border-b border-transparent group-hover:border-[#D4AF37] pb-1">See all trends</span>
            <svg 
              className="w-4 h-4 opacity-40 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PinterestFeed;
