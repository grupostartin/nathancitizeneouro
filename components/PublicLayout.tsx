import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const PublicLayout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen flex flex-col transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[#29382f]/50 bg-background-light/80 dark:bg-background-dark/90 backdrop-blur-md">
        <div className="px-4 md:px-10 py-4 max-w-[1280px] mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background-dark transition-all">
              <span className="material-symbols-outlined text-[24px]">diamond</span>
            </div>
            <h2 className="text-xl font-serif font-bold tracking-tight text-slate-900 dark:text-white">
              Nathan Citizen <span className="text-primary">&</span> Ouro
            </h2>
          </Link>

          <nav className="hidden md:flex flex-1 justify-center gap-8">
            <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-primary' : 'text-slate-600 dark:text-slate-300 hover:text-primary'}`}>Início</Link>
            <Link to="/catalog" className={`text-sm font-medium transition-colors ${isActive('/catalog') ? 'text-primary' : 'text-slate-600 dark:text-slate-300 hover:text-primary'}`}>Catálogo</Link>
            <Link to="/about" className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-primary' : 'text-slate-600 dark:text-slate-300 hover:text-primary'}`}>Sobre</Link>
            <Link to="/contact" className={`text-sm font-medium transition-colors ${isActive('/contact') ? 'text-primary' : 'text-slate-600 dark:text-slate-300 hover:text-primary'}`}>Contato</Link>
            <Link to="/admin" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-gold transition-colors">Admin</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden sm:flex group h-10 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-[#111714] transition-transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(54,226,123,0.3)]">
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Fale Conosco</span>
            </Link>
            <button
              className="flex md:hidden text-slate-900 dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#29382f]/50 bg-background-dark p-4 flex flex-col gap-4">
            <Link to="/" className="text-slate-300 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Início</Link>
            <Link to="/catalog" className="text-slate-300 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Catálogo</Link>
            <Link to="/about" className="text-slate-300 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Sobre Nós</Link>
            <Link to="/contact" className="text-slate-300 hover:text-primary" onClick={() => setIsMenuOpen(false)}>Contato</Link>
            <Link to="/admin" className="text-primary-gold hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>Área Admin</Link>
          </div>
        )}
      </header>

      {/* Content */}
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#0c1611] border-t border-[#29382f] text-center mt-auto">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 lg:px-40 py-12 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#29382f]">
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-primary">diamond</span>
              <span className="font-bold text-lg">Nathan Citizen & Ouro</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm font-normal">Sobre</Link>
              <Link to="/catalog" className="text-gray-400 hover:text-white transition-colors text-sm font-normal">Catálogo</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm font-normal">Contato</Link>
              <a className="text-gray-400 hover:text-white transition-colors text-sm font-normal" href="#">Política de Privacidade</a>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
            <p className="text-[#5c6e63] text-sm font-normal">© 2024 Nathan Citizen & Ouro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;