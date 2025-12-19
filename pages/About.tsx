import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header Image */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img src="https://images.unsplash.com/photo-1617317376997-8748e6862c01?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover" alt="Luxury Store" />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <span className="text-primary font-bold tracking-widest uppercase mb-4">Sobre Nós</span>
          <h1 className="text-4xl md:text-6xl font-serif text-white">Tradição & Excelência</h1>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="prose prose-invert">
            <h2 className="text-3xl font-serif text-white mb-6">Nossa História</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Fundada em 2010, a Nathan Citizen & Ouro nasceu da paixão pela alta relojoaria e pela ourivesaria tradicional. Começamos como uma pequena boutique familiar e hoje somos referência nacional em vendas online de artigos de luxo.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Nossa missão é proporcionar acesso a peças exclusivas com a garantia de autenticidade que apenas um revendedor autorizado pode oferecer. Cada relógio Citizen e cada joia em Ouro 18k que vendemos carrega consigo nosso compromisso com a qualidade.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl transform rotate-3"></div>
            <img src="https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=2574&auto=format&fit=crop" className="relative rounded-2xl shadow-2xl w-full h-auto" alt="Joalheiro trabalhando" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-surface-dark p-8 rounded-2xl border border-[#29382f] text-center">
            <span className="text-4xl font-serif text-primary mb-2 block">14</span>
            <p className="text-slate-400 uppercase text-sm tracking-wider">Anos de Mercado</p>
          </div>
          <div className="bg-surface-dark p-8 rounded-2xl border border-[#29382f] text-center">
            <span className="text-4xl font-serif text-primary mb-2 block">5k+</span>
            <p className="text-slate-400 uppercase text-sm tracking-wider">Pedidos Enviados</p>
          </div>
          <div className="bg-surface-dark p-8 rounded-2xl border border-[#29382f] text-center">
            <span className="text-4xl font-serif text-primary mb-2 block">4.9</span>
            <p className="text-slate-400 uppercase text-sm tracking-wider">Avaliação Média</p>
          </div>
        </div>

        <div className="text-center bg-[#151f19] rounded-3xl p-12 border border-[#29382f]">
          <h2 className="text-3xl font-serif text-white mb-6">Visite Nossa Loja Física</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Se preferir um atendimento presencial, teremos o prazer em recebê-lo em nosso showroom exclusivo. Agende seu horário e venha tomar um café conosco.
          </p>
          <Link to="/contact" className="inline-flex h-12 items-center justify-center px-8 rounded-full bg-white text-[#111714] font-bold hover:bg-slate-200 transition-colors">
            Agendar Visita
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;