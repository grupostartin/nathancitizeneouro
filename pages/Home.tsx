import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PRODUCTS, TESTIMONIALS, FAQS } from '../constants';
import Preloader from '../components/Preloader';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const featuredProducts = PRODUCTS.slice(0, 4);

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <Preloader onLoadingComplete={() => setLoading(false)} />

      <div className={`w-full overflow-hidden transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center py-16 md:py-24 lg:py-32 px-4 md:px-10 min-h-[90vh]">
          {/* Abstract Background Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-accent/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

          <div className="max-w-[1280px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10">

            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={!loading ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-8 order-2 lg:order-1 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#29382f] bg-[#1c2620]/50 backdrop-blur w-fit mx-auto lg:mx-0">
                <span className="material-symbols-outlined text-primary text-sm filled">diamond</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Luxo & Exclusividade</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.05] tracking-tight text-white">
                O Tempo e o <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#DAA520] italic">Ouro</span> <br />Eternizados.
              </h1>

              <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                Descubra a fusão perfeita entre a tecnologia japonesa Citizen e a nobreza do Ouro 18k. Uma coleção curada para quem não aceita menos que a excelência.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Link to="/catalog" className="h-14 px-8 rounded-full bg-primary text-[#111714] font-bold text-base flex items-center justify-center gap-2 transition-all hover:bg-[#2fd16f] hover:shadow-[0_0_25px_rgba(54,226,123,0.3)] hover:-translate-y-1">
                  Ver Coleção
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <Link to="/about" className="h-14 px-8 rounded-full border border-slate-700 bg-transparent text-white font-bold text-base flex items-center justify-center hover:bg-white/5 transition-colors">
                  Nossa História
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-white/5 mt-4">
                <div>
                  <p className="text-2xl font-serif text-white">10k+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Clientes</p>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div>
                  <p className="text-2xl font-serif text-white">100%</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Autêntico</p>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div>
                  <p className="text-2xl font-serif text-white">24h</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Envio Rápido</p>
                </div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={!loading ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative order-1 lg:order-2 perspective-1000"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#111714] via-transparent to-transparent z-10 opacity-60"></div>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKy-59PhBxfgnSX6wq4hj4uaSfF1ASrbWz-EhvQcuNZm3E1nkAgKra9pOAPSDTrN3oNx2UPAM38_bMUkU7QtfUYEvayY3jZuGlVesd0MsEqQjzhDbDG1QmJFfjz4TtY3TGkKTo1diVXOGU_9rv44vZ6DAZVdAU4K5fhCZsj_E5nf4vlqc9tHJyu3kOfDX6eLy29R5lNaX1NZUOp4Y38HOEFIZu5WzSbXUdEdSrDXMlhOlCytonG_lDq7NYNNd7jdOKw3XFJ9yyjTwt"
                  alt="Hero Watch"
                  className="w-full h-auto object-cover transform transition-transform duration-[1.5s] group-hover:scale-105"
                />

                <div className="absolute bottom-8 left-8 z-20">
                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-4 rounded-2xl max-w-[240px]">
                    <div className="flex items-center gap-2 mb-1.5 text-gold-accent">
                      <span className="material-symbols-outlined filled text-[10px]">star</span>
                      <span className="text-[10px] font-bold tracking-wider uppercase">Destaque do Mês</span>
                    </div>
                    <p className="text-white font-serif text-lg mb-0.5">Citizen Promaster</p>
                    <p className="text-slate-300 text-xs mb-3 leading-relaxed">A escolha definitiva para mergulhadores profissionais.</p>
                    <Link to="/product/1" className="text-white text-xs font-bold border-b border-primary pb-0.5 hover:text-primary transition-colors">
                      Comprar Agora
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="py-20 bg-[#0c120e]"
        >
          <div className="max-w-[1280px] mx-auto px-4 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Nossas Coleções</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Navegue pelas nossas categorias exclusivas e encontre a peça perfeita que combina com seu estilo.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link to="/catalog" className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer">
                <img src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=2599&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Relógios" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-4xl font-serif text-white mb-2 transform group-hover:-translate-y-2 transition-transform">Relógios</h3>
                  <span className="text-primary font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Ver Modelos</span>
                </div>
              </Link>
              <Link to="/catalog" className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer">
                <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2669&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Joias" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-4xl font-serif text-white mb-2 transform group-hover:-translate-y-2 transition-transform">Joias em Ouro</h3>
                  <span className="text-gold-accent font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Ver Peças</span>
                </div>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Featured Products */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-20 bg-background-dark"
        >
          <div className="max-w-[1280px] mx-auto px-4 md:px-10">
            <motion.div variants={sectionVariants} className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-serif text-white mb-2">Mais Desejados</h2>
                <p className="text-slate-400">As peças favoritas dos nossos clientes exclusivos.</p>
              </div>
              <Link to="/catalog" className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">
                Ver Tudo <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map(product => (
                <motion.div key={product.id} variants={sectionVariants}>
                  <Link to={`/product/${product.id}`} className="group flex flex-col gap-4">
                    <div className="aspect-square rounded-2xl bg-surface-dark border border-[#29382f] p-4 flex items-center justify-center relative overflow-hidden group-hover:border-primary/30 transition-colors">
                      <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-3 right-3 bg-white text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                        {product.category}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-lg line-clamp-1 group-hover:text-primary transition-colors">{product.name}</h3>
                      <p className="text-slate-500 text-sm mb-2">{product.sku}</p>
                      <p className="text-white font-bold">R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div variants={sectionVariants} className="mt-8 flex justify-center md:hidden">
              <Link to="/catalog" className="btn-primary-outline">Ver Catálogo Completo</Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Trust Features */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-20 bg-[#151f19] border-y border-[#29382f]"
        >
          <div className="max-w-[1280px] mx-auto px-4 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={sectionVariants}>
                <FeatureCard
                  icon="verified"
                  title="Garantia Vitalícia no Ouro"
                  desc="Todas as nossas joias acompanham certificado de garantia eterna do teor do Ouro 18k (750)."
                />
              </motion.div>
              <motion.div variants={sectionVariants}>
                <FeatureCard
                  icon="local_shipping"
                  title="Entrega Segura e Rápida"
                  desc="Envios para todo Brasil via Sedex com seguro total. Receba sua joia com tranquilidade."
                />
              </motion.div>
              <motion.div variants={sectionVariants}>
                <FeatureCard
                  icon="support_agent"
                  title="Personal Shopper"
                  desc="Atendimento humanizado via WhatsApp para te ajudar a escolher a peça perfeita."
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-20 bg-background-dark"
        >
          <div className="max-w-[1280px] mx-auto px-4 md:px-10">
            <motion.h2 variants={sectionVariants} className="text-3xl font-serif text-white text-center mb-16">O Que Dizem Nossos Clientes</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map(t => (
                <motion.div key={t.id} variants={sectionVariants} className="bg-surface-dark p-8 rounded-3xl border border-[#29382f] relative">
                  <span className="material-symbols-outlined text-4xl text-primary/20 absolute top-6 right-6">format_quote</span>
                  <p className="text-slate-300 leading-relaxed mb-6 italic">"{t.content}"</p>
                  <div className="flex items-center gap-4">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border border-primary/30" />
                    <div>
                      <p className="text-white font-bold">{t.name}</p>
                      <p className="text-slate-500 text-xs uppercase tracking-wider">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-20 bg-[#0c120e]"
        >
          <div className="max-w-3xl mx-auto px-4 md:px-10">
            <motion.h2 variants={sectionVariants} className="text-3xl font-serif text-white text-center mb-12">Dúvidas Frequentes</motion.h2>
            <div className="flex flex-col gap-4">
              {FAQS.map((faq, idx) => (
                <motion.div key={idx} variants={sectionVariants} className="bg-surface-dark border border-[#29382f] rounded-xl p-6 hover:border-primary/30 transition-colors">
                  <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">help</span>
                    {faq.question}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Newsletter */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="py-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary/10"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <span className="material-symbols-outlined text-5xl text-primary mb-4">mail</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Entre para o Clube Exclusive</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">Receba ofertas antecipadas, lançamentos exclusivos e conteúdo sobre alta relojoaria diretamente no seu e-mail.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 h-14 px-6 rounded-full bg-background-dark border border-[#29382f] text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              />
              <button className="h-14 px-8 rounded-full bg-primary text-[#111714] font-bold hover:bg-[#2fd16f] transition-colors">
                Inscrever-se
              </button>
            </form>
          </div>
        </motion.section>
      </div>
    </>
  );
};

const FeatureCard = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="size-16 rounded-2xl bg-surface-dark border border-[#29382f] flex items-center justify-center text-primary mb-6">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{desc}</p>
  </div>
);

export default Home;