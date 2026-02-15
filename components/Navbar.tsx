
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled || currentPage !== 'home' ? 'bg-gic-light/95 dark:bg-gic-dark/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-gic-charcoal dark:text-white">
        <div className="flex space-x-8 text-xs font-semibold uppercase tracking-[0.2em] hidden lg:flex">
          <button onClick={() => setPage('home')} className={navClass('home')}>Home</button>
          <button onClick={() => setPage('products')} className={navClass('products')}>Products</button>
        </div>
        
        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <button onClick={() => setPage('home')} className="text-2xl md:text-3xl font-serif tracking-widest font-bold">GIC</button>
        </div>

        <div className="flex items-center space-x-8">
          <div className="hidden lg:flex space-x-8 text-xs font-semibold uppercase tracking-[0.2em]">
            <button onClick={() => setPage('about')} className={navClass('about')}>Journal</button>
            <button onClick={() => setPage('contact')} className={navClass('contact')}>Contact</button>
          </div>
          
          <button 
            onClick={onMenuOpen}
            className="p-2 hover:text-gic-gold transition-colors"
            aria-label="Open Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
