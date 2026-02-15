
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Trending from './components/Trending.tsx';
import Collection from './components/Collection.tsx';
import Footer from './components/Footer.tsx';
import StylistChat from './components/StylistChat.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import { Privacy, Terms } from './components/Legal.tsx';
import TrendingLooks from './components/TrendingLooks.tsx';
import PinterestFeed from './components/PinterestFeed.tsx';
import SideDrawer from './components/SideDrawer.tsx';

export type Page = 'home' | 'products' | 'about' | 'contact' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('gic-theme') as 'light' | 'dark') || 'light';
  });

  // Handle Theme switching
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('gic-theme', theme);
  }, [theme]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="animate-fade-in">
            <Hero onExplore={() => setCurrentPage('products')} />
            
            <PinterestFeed />

            <section className="py-24 px-6 bg-white dark:bg-gic-dark flex justify-center text-center">
              <div className="max-w-2xl">
                <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-6 block">Our Vision</span>
                <h2 className="text-3xl md:text-4xl font-serif italic mb-8 leading-relaxed">
                  "GIC exists at the intersection of trend and timelessness. We believe luxury is found in simplicity."
                </h2>
                <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto"></div>
              </div>
            </section>
            
            <Trending />
            <Collection isPreview={true} />
            <TrendingLooks />
            
            <div className="text-center pb-24 bg-[#FDFBF7] dark:bg-gic-dark">
              <button 
                onClick={() => setCurrentPage('products')}
                className="px-10 py-4 border border-[#1A1A1A] dark:border-white text-xs uppercase tracking-[0.3em] hover:bg-[#1A1A1A] hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500"
              >
                View All Inspirations
              </button>
            </div>
          </div>
        );
      case 'products':
        return <div className="pt-20 animate-fade-in"><Collection /></div>;
      case 'about':
        return <div className="pt-20 animate-fade-in"><About /></div>;
      case 'contact':
        return <div className="pt-20 animate-fade-in"><Contact /></div>;
      case 'privacy':
        return <div className="pt-20 animate-fade-in"><Privacy /></div>;
      case 'terms':
        return <div className="pt-20 animate-fade-in"><Terms /></div>;
      default:
        return <Hero onExplore={() => setCurrentPage('products')} />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-[#D4AF37] selection:text-white bg-gic-light dark:bg-gic-dark transition-colors duration-500">
      <Navbar 
        currentPage={currentPage} 
        setPage={setCurrentPage} 
        onMenuOpen={() => setIsDrawerOpen(true)}
      />
      
      <SideDrawer 
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onThemeToggle={toggleTheme}
        currentTheme={theme}
        setPage={setCurrentPage}
      />

      <main>
        {renderPage()}
      </main>

      <Footer setPage={setCurrentPage} />
      <StylistChat />

      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default App;
