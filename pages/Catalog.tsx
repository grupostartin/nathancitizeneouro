import React from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

const Catalog: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-10 py-8 sm:py-12">
      {/* Intro */}
      <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2 text-gold-accent text-sm font-semibold tracking-wider uppercase mb-2">
             <span className="material-symbols-outlined text-base filled">stars</span>
             Catálogo Premium
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-white">
            Galeria de Joias & Relógios
          </h1>
          <p className="text-[#9eb7a8] text-lg max-w-xl leading-relaxed mt-2">
            Explore nossa coleção selecionada de peças em Ouro 18k e relógios Citizen.
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 text-sm font-bold text-white border border-[#29382f] bg-[#1a2c22] px-4 py-2 rounded-full hover:bg-[#29382f] transition-colors">
            <span className="material-symbols-outlined text-lg">filter_list</span>
            Filtros
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="w-full overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
        <div className="flex gap-3 min-w-max">
          <CategoryPill active label="Todos" />
          <CategoryPill label="Relógios Citizen" />
          <CategoryPill label="Correntes" />
          <CategoryPill label="Pulseiras" />
          <CategoryPill label="Anéis" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* CTA Bottom */}
      <div className="mt-12 flex justify-center">
        <button className="group flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-8 py-3 text-sm font-medium text-white transition-all hover:bg-white/5 hover:border-white/20">
          <span>Carregar mais peças</span>
          <span className="material-symbols-outlined transition-transform group-hover:translate-y-1">expand_more</span>
        </button>
      </div>
    </div>
  );
};

const CategoryPill: React.FC<{ label: string, active?: boolean }> = ({ label, active }) => (
  <button className={`flex h-10 items-center justify-center px-6 rounded-full font-bold text-sm transition-transform active:scale-95 ${active ? 'bg-primary text-background-dark shadow-[0_0_15px_rgba(54,226,123,0.3)]' : 'bg-surface-dark border border-[#29382f] text-white hover:border-primary/50 hover:text-primary'}`}>
    {label}
  </button>
);

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="group relative flex flex-col bg-surface-dark rounded-[2rem] p-4 border border-[#29382f] hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
    <div className="relative w-full aspect-square bg-gradient-to-br from-[#111714] to-[#1f2e25] rounded-[1.5rem] overflow-hidden mb-4 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-shadow">
      
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
         {product.tags?.map(tag => (
           <span key={tag} className="bg-[#111714]/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-gold-accent border border-gold-accent/20">
             {tag}
           </span>
         ))}
      </div>

      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" 
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
         <button className="bg-primary text-background-dark font-bold py-3 px-6 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
           <span className="material-symbols-outlined">chat</span>
           Consultar
         </button>
      </div>
    </div>
    
    <div className="flex flex-col gap-1 px-1">
      <h3 className="text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
      <p className="text-[#9eb7a8] text-sm line-clamp-1">{product.description}</p>
      
      <div className="mt-3 flex items-center justify-between">
        <span className={`text-white font-semibold text-xs px-2 py-1 rounded ${product.status === 'Em Estoque' ? 'bg-green-500/10 text-green-400' : 'bg-orange-500/10 text-orange-400'}`}>
          {product.status}
        </span>
        <span className="material-symbols-outlined text-[#9eb7a8] hover:text-white cursor-pointer transition-colors text-lg">favorite</span>
      </div>
      <p className="mt-2 text-white font-medium">R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
    </div>
  </div>
);

export default Catalog;