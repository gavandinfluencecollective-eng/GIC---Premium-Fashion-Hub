
import React, { useState, useEffect } from 'react';
import { Page } from '../App';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
  onMenuOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage, onMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = (page: Page) => 
    `hover:text-[#D4AF37] transition-colors ${currentPage === page ? 'text-[#D4AF37]' : ''}`;

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
      scrolled || currentPage !== 'home' 
      ? 'bg-gic-light/90 dark:bg-gic-dark/90 backdrop-blur-xl py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' 
      : 'bg-transparent py-10'
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center text-gic-charcoal dark:text-white">
        <div className="flex space-x-10 text-[10px] font-bold uppercase tracking-[0.3em] hidden lg:flex">
          <button onClick={() => setPage('home')} className={navClass('home')}>Home</button>
          <button onClick={() => setPage('products')} className={navClass('products')}>Collections</button>
        </div>
        
        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <button 
            onClick={() => setPage('home')} 
            className="text-2xl md:text-4xl font-serif tracking-[0.2em] font-bold transition-transform hover:scale-105 duration-500"
          >
            GIC
          </button>
        </div>

        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex space-x-10 text-[10px] font-bold uppercase tracking-[0.3em]">
            <button onClick={() => setPage('about')} className={navClass('about')}>Journal</button>
            <button onClick={() => setPage('contact')} className={navClass('contact')}>Contact</button>
          </div>
          
          <button 
            onClick={onMenuOpen}
            className="relative group p-2 flex flex-col items-end space-y-1.5 focus:outline-none"
            aria-label="Open Menu"
          >
            <span className="w-6 h-[1px] bg-gic-charcoal dark:bg-white transition-all duration-500 group-hover:w-8 group-hover:bg-gic-gold"></span>
            <span className="w-8 h-[1px] bg-gic-charcoal dark:bg-white transition-all duration-500 group-hover:w-5 group-hover:bg-gic-gold"></span>
            <span className="w-4 h-[1px] bg-gic-charcoal dark:bg-white transition-all duration-500 group-hover:w-8 group-hover:bg-gic-gold"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
