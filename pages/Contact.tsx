import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Fale Conosco</h1>
        <p className="text-slate-400 max-w-xl mx-auto">Estamos à disposição para tirar suas dúvidas sobre produtos, pedidos ou garantias. Resposta em até 24h úteis.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-surface-dark p-8 md:p-10 rounded-3xl border border-[#29382f]">
          <h2 className="text-2xl font-serif text-white mb-6">Envie uma mensagem</h2>
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="flex flex-col gap-2">
                 <label className="text-sm font-bold text-slate-300">Nome</label>
                 <input type="text" className="h-12 rounded-lg bg-[#111714] border border-[#29382f] px-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Seu nome" />
               </div>
               <div className="flex flex-col gap-2">
                 <label className="text-sm font-bold text-slate-300">Sobrenome</label>
                 <input type="text" className="h-12 rounded-lg bg-[#111714] border border-[#29382f] px-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Sobrenome" />
               </div>
            </div>
            
            <div className="flex flex-col gap-2">
               <label className="text-sm font-bold text-slate-300">E-mail</label>
               <input type="email" className="h-12 rounded-lg bg-[#111714] border border-[#29382f] px-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="exemplo@email.com" />
            </div>

            <div className="flex flex-col gap-2">
               <label className="text-sm font-bold text-slate-300">Mensagem</label>
               <textarea className="h-32 rounded-lg bg-[#111714] border border-[#29382f] p-4 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none" placeholder="Como podemos ajudar?"></textarea>
            </div>

            <button className="h-14 bg-primary text-[#111714] font-bold rounded-lg hover:bg-[#2fd16f] transition-colors mt-2">
              Enviar Mensagem
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-8">
           <div className="bg-[#151f19] p-8 rounded-3xl border border-[#29382f] flex items-start gap-6">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">chat</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">WhatsApp VIP</h3>
                <p className="text-slate-400 mb-4">Atendimento exclusivo e em tempo real para vendas e suporte.</p>
                <a href="#" className="text-primary font-bold hover:underline flex items-center gap-2">
                  Iniciar conversa <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
           </div>

           <div className="bg-[#151f19] p-8 rounded-3xl border border-[#29382f] flex items-start gap-6">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">E-mail</h3>
                <p className="text-slate-400 mb-4">contato@citizenegold.com.br</p>
              </div>
           </div>

           <div className="bg-[#151f19] p-8 rounded-3xl border border-[#29382f] flex items-start gap-6">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Showroom</h3>
                <p className="text-slate-400">Av. Paulista, 1000 - Bela Vista<br/>São Paulo - SP, 01310-100</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;