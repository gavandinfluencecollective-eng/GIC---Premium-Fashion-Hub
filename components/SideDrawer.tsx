
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
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-[100] transition-opacity duration-700 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[320px] md:w-[450px] bg-gic-light dark:bg-gic-charcoal z-[101] shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.3)] transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        {/* Header - Premium Branding Style */}
        <div className="p-10 pt-16 flex flex-col border-b border-gray-100 dark:border-white/5 relative overflow-hidden">
          <button 
            onClick={onClose}
            className="absolute top-10 right-10 p-2 hover:rotate-90 transition-transform duration-500 text-gic-charcoal dark:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          <div className="flex flex-col space-y-1">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.7em] text-gic-gold font-bold mb-1 opacity-90">
              Gavand Influence
            </span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight font-light leading-none dark:text-white">
              Collective <span className="italic font-normal opacity-80">Studio</span>
            </h2>
          </div>
          <div className="mt-6 w-16 h-[1.5px] bg-gic-gold/40"></div>
          
          {/* Subtle background text for "catchy" feel */}
          <span className="absolute -bottom-4 -left-4 text-9xl font-serif opacity-[0.02] dark:opacity-[0.03] select-none pointer-events-none italic">GIC</span>
        </div>

        {/* Links */}
        <div className="flex-1 p-10 space-y-10 overflow-y-auto no-scrollbar">
          <div className="space-y-6">
            <span className="text-[9px] uppercase tracking-[0.5em] text-gray-400 font-bold block mb-4">Navigation</span>
            {[
              { id: 'home', label: 'Home' },
              { id: 'products', label: 'The Collections' },
              { id: 'trending', label: 'Trending Looks' },
              { id: 'about', label: 'Brand Journal' },
              { id: 'contact', label: 'Studio Contact' },
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
                className="block text-2xl md:text-3xl font-serif hover:italic hover:pl-6 transition-all duration-500 text-left w-full dark:text-white group"
              >
                <span className="relative inline-block">
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gic-gold transition-all duration-500 group-hover:w-full"></span>
                </span>
              </button>
            ))}
          </div>

          <div className="pt-10 border-t border-gray-100 dark:border-white/5">
             <span className="text-[9px] uppercase tracking-[0.5em] text-gray-400 font-bold block mb-6">Visual Mode</span>
             <div className="flex items-center justify-between bg-gray-50/50 dark:bg-black/40 p-5 rounded-2xl border border-gray-100 dark:border-white/5">
               <span className="text-[10px] uppercase tracking-widest font-bold dark:text-gray-300">
                 {currentTheme === 'light' ? 'Light Aesthetic' : 'Dark Aesthetic'}
               </span>
               <button 
                onClick={onThemeToggle}
                className={`relative w-14 h-7 rounded-full transition-all duration-500 ${currentTheme === 'dark' ? 'bg-gic-gold' : 'bg-gray-200 shadow-inner'}`}
               >
                 <div className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-lg transition-transform duration-500 flex items-center justify-center ${currentTheme === 'dark' ? 'translate-x-7' : ''}`}>
                   {currentTheme === 'dark' ? (
                     <div className="w-1 h-1 bg-gic-gold rounded-full"></div>
                   ) : (
                     <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                   )}
                 </div>
               </button>
             </div>
          </div>

          <div className="pt-2">
            <a 
              href={PINTEREST_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-5 bg-gic-charcoal dark:bg-white text-white dark:text-black text-center block text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-gic-gold dark:hover:bg-gic-gold dark:hover:text-white transition-all duration-500 rounded-full shadow-lg"
            >
              Explore Pinterest Profile
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="p-10 bg-gray-50/50 dark:bg-black/20 border-t border-gray-100 dark:border-white/5">
          <p className="text-[10px] text-gray-400 dark:text-gray-500 leading-relaxed tracking-[0.25em] uppercase text-center mb-4">
            Curating the future of minimal luxury.
          </p>
          <p className="text-[9px] text-gray-300 dark:text-gray-600 tracking-[0.1em] text-center">
            &copy; 2024 Gavand Influence Collective Studio
          </p>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
