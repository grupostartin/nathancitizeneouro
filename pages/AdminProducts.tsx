import React from 'react';
import { PRODUCTS } from '../constants';

const AdminProducts: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-3xl font-black tracking-tight font-display">Gerenciamento de Produtos</h1>
          <p className="text-[#bab29c] text-base">Controle seu inventário de luxo, adicione novas peças e gerencie preços.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#393528] bg-surface-admin text-white text-sm font-bold hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined text-[20px]">file_upload</span>
            <span>Importar CSV</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary-gold text-background-admin text-sm font-bold hover:bg-[#d9ba0b] transition-colors shadow-[0_0_15px_rgba(242,208,13,0.2)]">
            <span className="material-symbols-outlined text-[20px]">add</span>
            <span>Novo Produto</span>
          </button>
        </div>
      </div>

      <div className="bg-surface-admin rounded-xl border border-[#393528] overflow-hidden flex flex-col h-full">
         <div className="p-4 border-b border-[#393528] flex flex-wrap items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <span className="material-symbols-outlined absolute left-2.5 top-2 text-[#bab29c] text-lg">search</span>
              <input 
                className="h-9 pl-9 pr-3 rounded-lg bg-background-admin border border-[#393528] text-sm text-white focus:border-primary-gold outline-none w-full" 
                placeholder="Buscar por nome, SKU..." 
                type="text"
              />
            </div>
            <div className="flex items-center gap-2">
                <button className="h-9 px-4 flex items-center gap-2 rounded-lg border border-[#393528] text-[#bab29c] hover:text-white hover:bg-white/5 text-sm">
                   <span className="material-symbols-outlined text-lg">filter_list</span> Filtros
                </button>
            </div>
         </div>

         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1e1c15] text-white text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-bold border-b border-[#393528]">Produto</th>
                  <th className="px-6 py-4 font-bold border-b border-[#393528] text-right">Preço</th>
                  <th className="px-6 py-4 font-bold border-b border-[#393528] text-center">Categoria</th>
                  <th className="px-6 py-4 font-bold border-b border-[#393528] text-center">Status</th>
                  <th className="px-6 py-4 font-bold border-b border-[#393528] text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#393528] text-sm">
                {PRODUCTS.map((product) => (
                  <tr key={product.id} className="group hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                         <div className="h-12 w-12 rounded-lg bg-white p-1 border border-[#393528] shrink-0">
                            <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                         </div>
                         <div className="flex flex-col">
                            <span className="text-white font-bold group-hover:text-primary-gold transition-colors">{product.name}</span>
                            <span className="text-[#bab29c] text-xs">SKU: {product.sku}</span>
                         </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right font-display font-medium text-white">
                      R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="px-6 py-4 text-center">
                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-background-admin border border-[#393528] text-[#bab29c]">
                         {product.category}
                       </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                       <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border
                         ${product.status === 'Em Estoque' ? 'bg-[#0bda20]/10 text-[#0bda20] border-[#0bda20]/20' : 
                           product.status === 'Baixo Estoque' ? 'bg-orange-500/10 text-orange-500 border-orange-500/20' : 
                           'bg-red-500/10 text-red-500 border-red-500/20'}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            product.status === 'Em Estoque' ? 'bg-[#0bda20]' : 
                            product.status === 'Baixo Estoque' ? 'bg-orange-500' : 'bg-red-500'
                          }`}></span>
                          {product.status}
                       </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                       <div className="flex items-center justify-end gap-2">
                          <button className="p-1.5 rounded hover:bg-white/10 text-[#bab29c] hover:text-white transition-colors">
                             <span className="material-symbols-outlined text-lg">edit</span>
                          </button>
                          <button className="p-1.5 rounded hover:bg-red-500/20 text-[#bab29c] hover:text-red-400 transition-colors">
                             <span className="material-symbols-outlined text-lg">delete</span>
                          </button>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
         </div>
      </div>
    </div>
  );
};

export default AdminProducts;
