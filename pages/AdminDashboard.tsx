import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SALES_DATA, RECENT_ORDERS } from '../constants';
import { StatCardProps } from '../types';

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Receita Total" 
          value="R$ 125.450,00" 
          trend="+12% (30d)" 
          colorClass="text-[#0bda1d]" 
          icon="payments" 
        />
        <StatCard 
          title="Pedidos Hoje" 
          value="14" 
          trend="+2 vs ontem" 
          colorClass="text-[#0bda1d]" 
          icon="shopping_cart" 
        />
        <StatCard 
          title="Novos Clientes" 
          value="8" 
          trend="VIP Club Eligible" 
          colorClass="text-primary-gold" 
          icon="person_add" 
        />
        <StatCard 
          title="Envios Pendentes" 
          value="5" 
          trend="Ação necessária" 
          colorClass="text-[#fa4238]" 
          icon="pending_actions" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="lg:col-span-2 flex flex-col rounded-xl border border-[#393528] bg-surface-admin p-6 shadow-sm">
           <div className="flex justify-between items-center mb-6">
             <div>
               <h3 className="text-white text-lg font-bold">Desempenho de Vendas</h3>
               <p className="text-[#bab29c] text-sm">Últimos 30 dias</p>
             </div>
             <button className="text-primary-gold text-sm font-medium hover:underline flex items-center gap-1">
               Ver Relatório <span className="material-symbols-outlined text-sm">arrow_forward</span>
             </button>
           </div>
           
           <div className="h-[300px] w-full">
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={SALES_DATA}>
                 <defs>
                   <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#f2b90d" stopOpacity={0.3}/>
                     <stop offset="95%" stopColor="#f2b90d" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <CartesianGrid strokeDasharray="3 3" stroke="#393528" vertical={false} />
                 <XAxis dataKey="name" stroke="#bab29c" fontSize={12} tickLine={false} axisLine={false} />
                 <Tooltip 
                    contentStyle={{ backgroundColor: '#221e10', borderColor: '#393528', color: '#fff' }}
                    itemStyle={{ color: '#f2b90d' }}
                 />
                 <Area type="monotone" dataKey="value" stroke="#f2b90d" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
               </AreaChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* Top Products / Sidebar Widget */}
        <div className="flex flex-col rounded-xl border border-[#393528] bg-surface-admin p-6 shadow-sm">
           <h3 className="text-white text-lg font-bold mb-4">Mais Vendidos</h3>
           <div className="flex flex-col gap-4">
              <TopProductItem 
                name="Citizen Promaster" 
                sales="24 vendas" 
                price="R$ 2.4k" 
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuAMjJBwN9xkBZUdiJAvDRIxWkofKmW7hkOUeypZ-jrBgryUiwVaCFilqu8swq59I08l7GqRrDdLnPWokCDl_nrLT6-rssRddotgzQmqgbpU96CAFSukbFmiWzIVff-ZXZrW3CU-lZSLwu08RlXlgDYaalRffEKLtav0GBSiNjx8YvPO8Rhu0XqZ11zOinxCLjVpgTn15XOthCvrlkIWIp7lTBuqh_-logZ3GxJQn_2P8rroZ4ZNfDJrZdyCtiheOhAWSwzY9bLEKzYl"
              />
              <TopProductItem 
                name="Corrente Ouro 18k" 
                sales="18 vendas" 
                price="R$ 4.1k" 
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuAW_3Q2GhD_enHeiGQwZ782u0HtF_-eQzG9Ut2bLdc4JEXM7ZqvLbJEojgtOj5JJ4ur5-iEhj6qNS8lV_7_eoO2dOsf7HnnX4BJ3y6N6BDfO3IyzMKkmHlqc--rcQpI1-SM8sOXaTtjZ0O9vzB8dvzcu5J8HsB3kI_BxnWID-VYgcMHcPbm5nLPML38k5EQYX9rc8Z39weacE0BxYbGwfnAPNf2sjm4x0Nm_PVGmf4M33eZUXSiFsJ_Siv-9yIhycspRRG0w86b36Kj"
              />
              <TopProductItem 
                name="Eco-Drive Skyhawk" 
                sales="12 vendas" 
                price="R$ 3.1k" 
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuB_GQMVrzN3Y-3YvP0TWPO6ludgmnfWEua03cb89FBJ7RTI_A9MUbd5DvO-8TiFh_6OxRC4vEULAw9UDGdA_ramaEFuZ6oBgOvqDkeBmt8GYDjLX68qlIUCaNCZChXGVpqjYL2pvBOxy9PR_m8vSX0DQgLltVUKYsdvsnmW61lO2_aeU7snOv_1PGh4XbZ5ZM-D2LLqBO_c9IdLU6Qp5Sw10KBVzWcJ3BGoOquG4xkvLECR-fBhHdveEpB2iMBMifz-pS2dVulKgfK6"
              />
           </div>
           <button className="mt-auto w-full py-2.5 rounded-lg border border-[#393528] text-white text-sm font-medium hover:bg-[#393528] transition-colors mt-4">
              Ver Todos Produtos
           </button>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="flex flex-col rounded-xl border border-[#393528] bg-surface-admin p-6 shadow-sm overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-white text-lg font-bold">Pedidos Recentes</h3>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#393528] text-white text-sm hover:bg-[#544e3b] transition-colors">
              <span className="material-symbols-outlined text-sm">filter_list</span>
              Filtrar
            </button>
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-gold text-black text-sm font-bold hover:bg-yellow-400 transition-colors">
              <span className="material-symbols-outlined text-sm">download</span>
              Exportar
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#393528]">
                <th className="py-3 px-4 text-[#bab29c] font-medium text-sm">ID Pedido</th>
                <th className="py-3 px-4 text-[#bab29c] font-medium text-sm">Cliente</th>
                <th className="py-3 px-4 text-[#bab29c] font-medium text-sm">Produto</th>
                <th className="py-3 px-4 text-[#bab29c] font-medium text-sm">Data</th>
                <th className="py-3 px-4 text-[#bab29c] font-medium text-sm">Valor</th>
                <th className="py-3 px-4 text-[#bab29c] font-medium text-sm">Status</th>
                <th className="py-3 px-4 text-[#bab29c] font-medium text-sm"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#393528]">
              {RECENT_ORDERS.map((order) => (
                <tr key={order.id} className="group hover:bg-[#393528]/20 transition-colors">
                  <td className="py-4 px-4 text-white text-sm font-medium">{order.id}</td>
                  <td className="py-4 px-4 text-white text-sm">
                    <div className="flex items-center gap-2">
                       <img src={order.customerAvatar} alt={order.customerName} className="size-6 rounded-full bg-cover" />
                       {order.customerName}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-white text-sm">{order.productName}</td>
                  <td className="py-4 px-4 text-[#bab29c] text-sm">{order.date}</td>
                  <td className="py-4 px-4 text-white text-sm font-bold">
                    R$ {order.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                      ${order.status === 'Pago' ? 'bg-[#0bda1d]/10 text-[#0bda1d]' : 
                        order.status === 'Processando' ? 'bg-yellow-900/30 text-yellow-500' :
                        order.status === 'Enviado' ? 'bg-blue-900/30 text-blue-400' : 'bg-gray-800 text-gray-400'
                      }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button className="text-[#bab29c] hover:text-white"><span className="material-symbols-outlined">more_vert</span></button>
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

const StatCard: React.FC<StatCardProps> = ({ title, value, trend, colorClass, icon }) => (
  <div className="flex flex-col gap-2 rounded-xl p-6 bg-surface-admin border border-[#393528] hover:border-primary-gold/30 transition-all shadow-lg relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <span className="material-symbols-outlined text-white text-5xl">{icon}</span>
    </div>
    <p className="text-[#bab29c] text-sm font-medium">{title}</p>
    <div className="flex items-end gap-2">
      <p className="text-white text-2xl font-bold tracking-tight">{value}</p>
    </div>
    <div className={`flex items-center gap-1 text-xs font-medium mt-2 w-fit px-2 py-1 rounded bg-opacity-10 bg-white ${colorClass}`}>
       <span className="material-symbols-outlined text-sm">trending_up</span>
       <span>{trend}</span>
    </div>
  </div>
);

const TopProductItem = ({ name, sales, price, img }: { name: string, sales: string, price: string, img: string }) => (
  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#393528]/30 transition-colors">
     <div className="w-12 h-12 rounded bg-white p-1 flex items-center justify-center shrink-0">
        <img src={img} alt={name} className="object-contain h-full w-full rounded-sm" />
     </div>
     <div className="flex flex-col flex-1 min-w-0">
        <p className="text-white font-medium truncate">{name}</p>
        <p className="text-[#bab29c] text-xs">{sales}</p>
     </div>
     <p className="text-primary-gold font-bold text-sm">{price}</p>
  </div>
);

export default AdminDashboard;
