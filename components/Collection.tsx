
import React from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../constants';

interface CollectionProps {
  isPreview?: boolean;
}

const Collection: React.FC<CollectionProps> = ({ isPreview }) => {
  const displayProducts = isPreview ? PRODUCTS.slice(0, 3) : PRODUCTS;

  return (
    <section id="collection" className={`py-24 px-6 transition-colors duration-500 ${isPreview ? 'bg-[#FDFBF7] dark:bg-gic-dark' : 'bg-white dark:bg-gic-dark'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold mb-2 block">
              {isPreview ? 'Featured Preview' : 'Curated Gallery'}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif">
              {isPreview ? 'The Seasonal Edit' : 'All Inspirations'}
            </h2>
          </div>
          <p className="max-w-md text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-light">
            Each piece in our collection is meticulously curated to embody the effortless sophistication that GIC represents. Minimalist forms meet artisanal craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {displayProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {!isPreview && (
          <div className="mt-20 pt-10 border-t border-gray-100 dark:border-gray-800 text-center">
            <p className="text-[10px] uppercase tracking-widest text-gray-300 dark:text-gray-600">
              * Add new products to constants.ts to expand this collection.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Collection;
