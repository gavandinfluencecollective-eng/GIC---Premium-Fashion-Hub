
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold block mb-4">Inquiries</span>
          <h1 className="text-5xl md:text-7xl font-serif">Contact Us</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-4">General Support</h3>
              <p className="font-serif text-lg md:text-2xl italic break-all">gavandinfluencecollective@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-4">Press & Media</h3>
              <p className="font-serif text-lg md:text-2xl italic break-all">gavandinfluencecollective@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-4">Follow Our Journey</h3>
              <div className="flex space-x-6 mt-4">
                <a href="#" className="text-[#1A1A1A] hover:text-[#D4AF37] transition-colors uppercase text-[10px] tracking-widest font-bold">Pinterest</a>
                <a href="#" className="text-[#1A1A1A] hover:text-[#D4AF37] transition-colors uppercase text-[10px] tracking-widest font-bold">Instagram</a>
                <a href="#" className="text-[#1A1A1A] hover:text-[#D4AF37] transition-colors uppercase text-[10px] tracking-widest font-bold">Twitter</a>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 shadow-sm border border-gray-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                <div className="w-16 h-16 rounded-full bg-[#FDFBF7] flex items-center justify-center border border-[#D4AF37]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-3xl font-serif italic">Message Received</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">Thank you for reaching out to GIC. Our team will review your message and respond within 48 business hours.</p>
                <button onClick={() => setSubmitted(false)} className="text-[10px] uppercase tracking-widest border-b border-[#1A1A1A] pb-1">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                  <input required type="text" className="w-full border-b border-gray-200 py-2 outline-none focus:border-[#D4AF37] transition-colors font-light bg-transparent" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email Address</label>
                  <input required type="email" className="w-full border-b border-gray-200 py-2 outline-none focus:border-[#D4AF37] transition-colors font-light bg-transparent" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Your Message</label>
                  <textarea required rows={4} className="w-full border-b border-gray-200 py-2 outline-none focus:border-[#D4AF37] transition-colors font-light bg-transparent resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-[#1A1A1A] text-white text-[10px] uppercase tracking-[0.3em] hover:bg-[#D4AF37] transition-all duration-500">
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
