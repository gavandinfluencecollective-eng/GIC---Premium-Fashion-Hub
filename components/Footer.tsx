
import React from 'react';
import { PINTEREST_LINK } from '../constants';
import { Page } from '../App';

interface FooterProps {
  setPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  return (
    <footer id="footer" className="bg-[#1A1A1A] text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-4xl font-serif font-bold mb-6 tracking-widest gold-gradient">GIC</h2>
            <p className="text-xs font-light text-gray-400 leading-relaxed tracking-wider">
              A philosophy of minimal luxury. We curate timeless aesthetics for the contemporary soul.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-[#D4AF37]">The Collections</h4>
            <ul className="space-y-4 text-xs font-light text-gray-400 tracking-wider">
              <li><button onClick={() => setPage('products')} className="hover:text-white transition-colors">Women's Ready-to-wear</button></li>
              <li><button onClick={() => setPage('products')} className="hover:text-white transition-colors">Men's Essentials</button></li>
              <li><button onClick={() => setPage('products')} className="hover:text-white transition-colors">The Accessories Edit</button></li>
              <li><button onClick={() => setPage('products')} className="hover:text-white transition-colors">Limited Series</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-[#D4AF37]">Company</h4>
            <ul className="space-y-4 text-xs font-light text-gray-400 tracking-wider">
              <li><button onClick={() => setPage('about')} className="hover:text-white transition-colors">Our Journal</button></li>
              <li><button onClick={() => setPage('contact')} className="hover:text-white transition-colors">Sustainability</button></li>
              <li><button onClick={() => setPage('privacy')} className="hover:text-white transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => setPage('terms')} className="hover:text-white transition-colors">Terms of Service</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-[#D4AF37]">Stay Inspired</h4>
            <p className="text-xs font-light text-gray-400 mb-6">Join our newsletter for curated looks and early access.</p>
            <div className="flex items-center border-b border-gray-700 pb-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent text-[10px] outline-none flex-1 tracking-widest placeholder:text-gray-600 uppercase"
              />
              <button className="text-[10px] uppercase tracking-widest text-[#D4AF37] hover:text-white">Join</button>
            </div>
            
            <div className="flex space-x-6 mt-10">
              <a href={PINTEREST_LINK} target="_blank" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="2" x2="22" y2="6"></line><path d="M7.5 4.21L12 7l4.5-2.79a2.22 2.22 0 0 1 3.2 2.7l-4.5 12.82a2.22 2.22 0 0 1-4.4 0L4.3 7.12a2.22 2.22 0 0 1 3.2-2.91z"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] text-gray-600 tracking-widest uppercase">&copy; 2024 GIC FASHION LTD. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 text-[10px] text-gray-600 tracking-widest uppercase">
            <button onClick={() => setPage('terms')} className="hover:text-white transition-colors">Terms</button>
            <button onClick={() => setPage('contact')} className="hover:text-white transition-colors">Shipping</button>
            <button onClick={() => setPage('privacy')} className="hover:text-white transition-colors">Privacy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
