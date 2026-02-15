
import React from 'react';

const LegalLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white py-24 px-6 min-h-screen">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif mb-12 border-b border-gray-100 pb-8">{title}</h1>
      <div className="prose prose-sm font-light text-gray-600 leading-relaxed space-y-6">
        {children}
      </div>
    </div>
  </div>
);

export const Privacy: React.FC = () => (
  <LegalLayout title="Privacy Policy">
    <p>Last Updated: October 2024</p>
    <h3 className="text-black font-semibold uppercase tracking-widest text-xs mt-8">1. Information Collection</h3>
    <p>At GIC, we respect your privacy. We collect minimal information primarily focused on improving your user experience. This may include email addresses for newsletter subscriptions and technical data for site optimization.</p>
    <h3 className="text-black font-semibold uppercase tracking-widest text-xs mt-8">2. Use of Information</h3>
    <p>We use the information we collect to curate personalized fashion inspiration, provide customer support, and maintain the security of our platform.</p>
    <h3 className="text-black font-semibold uppercase tracking-widest text-xs mt-8">3. Data Protection</h3>
    <p>We implement industry-standard security measures to protect your information. We do not sell or share your personal data with third parties for marketing purposes.</p>
  </LegalLayout>
);

export const Terms: React.FC = () => (
  <LegalLayout title="Terms & Conditions">
    <p>Welcome to GIC. By accessing our website, you agree to the following terms.</p>
    <h3 className="text-black font-semibold uppercase tracking-widest text-xs mt-8">1. Content Ownership</h3>
    <p>All content on GIC, including text, images, and logos, is the property of GIC Fashion Ltd or our partners. Unauthorized use or reproduction is strictly prohibited.</p>
    <h3 className="text-black font-semibold uppercase tracking-widest text-xs mt-8">2. Pinterest Redirection</h3>
    <p>Our product inspirations link to Pinterest. GIC is not responsible for content on external sites. Use of Pinterest is subject to their specific terms and conditions.</p>
    <h3 className="text-black font-semibold uppercase tracking-widest text-xs mt-8">3. Disclaimer</h3>
    <p>GIC provides fashion inspiration "as is". While we strive for accuracy, we make no guarantees regarding trend availability or pricing of items seen in inspirations.</p>
  </LegalLayout>
);
