import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-4">
        <h2 className="text-3xl font-serif text-white">Produto não encontrado</h2>
        <p className="text-slate-400">O produto que você está procurando não existe ou foi removido.</p>
        <Link to="/catalog" className="text-primary hover:underline">Voltar para o catálogo</Link>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de saber mais sobre o produto: ${product.name} (SKU: ${product.sku})`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-12 md:py-20">
       <div className="flex flex-col items-start gap-4 mb-8">
         <Link to="/catalog" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
           <span className="material-symbols-outlined text-sm">arrow_back</span>
           Voltar para Loja
         </Link>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
         {/* Image Section */}
         <div className="bg-surface-dark rounded-[2.5rem] border border-[#29382f] p-8 md:p-16 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
            <img src={product.image} alt={product.name} className="w-full h-auto object-contain max-h-[500px] z-10 drop-shadow-2xl" />
            
            {/* Zoom Hint */}
            <div className="absolute bottom-6 right-6 bg-black/40 backdrop-blur rounded-full p-2 text-white/50">
              <span className="material-symbols-outlined">zoom_in</span>
            </div>
         </div>

         {/* Info Section */}
         <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
                {product.category}
              </span>
              {product.status === 'Em Estoque' && (
                <span className="flex items-center gap-1 text-green-500 text-xs font-bold uppercase tracking-wider">
                  <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                  Disponível
                </span>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">{product.name}</h1>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed border-l-2 border-primary/50 pl-4">
              {product.description}
            </p>

            <div className="flex items-end gap-4 mb-8">
               <span className="text-4xl font-bold text-white">R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
               <span className="text-slate-500 text-sm mb-1.5">à vista ou 10x sem juros</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={handleWhatsApp}
                className="flex-1 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
              >
                <span className="material-symbols-outlined">chat</span>
                Comprar pelo WhatsApp
              </button>
              <button className="flex-1 h-14 bg-surface-dark border border-[#29382f] hover:border-white text-white font-bold rounded-full flex items-center justify-center gap-2 transition-all">
                <span className="material-symbols-outlined">shopping_cart</span>
                Adicionar à Sacola
              </button>
            </div>

            <div className="bg-[#151f19] rounded-2xl p-6 border border-[#29382f]">
               <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                 <span className="material-symbols-outlined text-primary">verified_user</span>
                 Segurança e Garantia
               </h3>
               <ul className="space-y-3">
                 <li className="flex items-start gap-3 text-sm text-slate-300">
                   <span className="material-symbols-outlined text-green-500 text-base mt-0.5">check_circle</span>
                   Produto 100% original com Nota Fiscal
                 </li>
                 <li className="flex items-start gap-3 text-sm text-slate-300">
                   <span className="material-symbols-outlined text-green-500 text-base mt-0.5">check_circle</span>
                   Garantia oficial do fabricante
                 </li>
                 <li className="flex items-start gap-3 text-sm text-slate-300">
                   <span className="material-symbols-outlined text-green-500 text-base mt-0.5">check_circle</span>
                   Envio segurado para todo Brasil
                 </li>
               </ul>
            </div>
         </div>
       </div>
    </div>
  );
};

export default ProductDetails;