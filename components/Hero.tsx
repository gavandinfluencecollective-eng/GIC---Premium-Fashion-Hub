
import React from 'react';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-60 grayscale-[30%]"
          alt="GIC Fashion Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <span className="block text-xs uppercase tracking-[0.5em] mb-6 opacity-90">Est. 2024</span>
        <h1 className="text-8xl md:text-[12rem] font-serif font-bold mb-4 tracking-tighter animate-fade-in">
          GIC
        </h1>
        <p className="text-lg md:text-2xl font-light tracking-[0.2em] italic font-serif">
          Trendy Styles for Men & Women
        </p>
        
        <div className="mt-12">
          <button 
            onClick={onExplore}
            className="inline-block px-10 py-4 border border-white text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500"
          >
            Explore Collection
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-16 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-line"></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scroll-line {
          animation: scroll-line 2s infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
