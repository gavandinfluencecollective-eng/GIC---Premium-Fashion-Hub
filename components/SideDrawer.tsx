
import React from 'react';
import { Page } from '../App';
import { PINTEREST_LINK } from '../constants';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onThemeToggle: () => void;
  currentTheme: 'light' | 'dark';
  setPage: (page: Page) => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen, onClose, onThemeToggle, currentTheme, setPage }) => {
  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[320px] md:w-[420px] bg-gic-light dark:bg-gic-charcoal z-[101] shadow-2xl transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        {/* Header - Premium Branding Style */}
        <div className="p-8 pt-12 flex flex-col border-b border-gray-100 dark:border-gray-800 relative">
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 p-2 hover:rotate-90 transition-transform duration-300 text-gic-charcoal dark:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          <div className="flex flex-col space-y-1">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-gic-gold font-bold">
              Gavand Influence
            </span>
            <h2 className="text-2xl md:text-3xl font-serif tracking-tight font-light italic leading-tight dark:text-white">
              Collective Studio
            </h2>
          </div>
          <div className="mt-4 w-12 h-[1px] bg-gic-gold/40"></div>
        </div>

        {/* Links */}
        <div className="flex-1 p-8 space-y-8 overflow-y-auto no-scrollbar">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gic-gold/60 font-bold block mb-6">Explore</span>
            {[
              { id: 'home', label: 'Home' },
              { id: 'products', label: 'Collections' },
              { id: 'trending', label: 'Trending Styles' },
              { id: 'about', label: 'The Journal' },
              { id: 'contact', label: 'Get in Touch' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  if (link.id === 'trending') {
                    document.getElementById('pinterest-feed-section')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setPage(link.id as Page);
                  }
                  onClose();
                }}
                className="block text-xl md:text-2xl font-serif hover:italic hover:pl-4 transition-all duration-300 text-left w-full dark:text-white group"
              >
                <span className="relative inline-block">
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gic-gold transition-all duration-300 group-hover:w-full"></span>
                </span>
              </button>
            ))}
          </div>

          <div className="pt-8 border-t border-gray-100 dark:border-gray-800">
             <span className="text-[10px] uppercase tracking-[0.4em] text-gic-gold/60 font-bold block mb-6">Interface</span>
             <div className="flex items-center justify-between bg-gray-50 dark:bg-black/20 p-4 rounded-xl">
               <span className="text-[10px] uppercase tracking-widest dark:text-gray-400">{currentTheme === 'light' ? 'Day Aesthetic' : 'Night Aesthetic'}</span>
               <button 
                onClick={onThemeToggle}
                className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${currentTheme === 'dark' ? 'bg-gic-gold' : 'bg-gray-200'}`}
               >
                 <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-300 ${currentTheme === 'dark' ? 'translate-x-6' : ''}`} />
               </button>
             </div>
          </div>

          <div className="pt-4">
            <a 
              href={PINTEREST_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 border border-gic-charcoal/20 dark:border-white/10 text-center block text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-gic-charcoal hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 rounded-full dark:text-white"
            >
              Follow Our Curation
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 bg-gray-50/50 dark:bg-black/10">
          <p className="text-[9px] text-gray-400 dark:text-gray-500 leading-relaxed tracking-[0.2em] uppercase text-center">
            Timeless Luxury for the Contemporary Soul<br/>
            &copy; 2024 GIC Studio
          </p>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
