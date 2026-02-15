
import React from 'react';
import { Product } from '../types';
import { PINTEREST_LINK } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <a 
      href={PINTEREST_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="group cursor-pointer flex flex-col space-y-4 outline-none block"
    >
      <div className="relative overflow-hidden bg-gray-100 dark:bg-black/20 aspect-[3/4] rounded-sm">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
          <p className="text-[10px] uppercase tracking-widest font-bold text-[#D4AF37]">View Style on Pinterest</p>
        </div>
      </div>
      
      <div className="text-center px-2">
        <h3 className="text-sm uppercase tracking-widest font-semibold mb-1 group-hover:text-[#D4AF37] dark:text-white transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 italic font-serif">
          {product.description}
        </p>
      </div>
    </a>
  );
};

export default ProductCard;
