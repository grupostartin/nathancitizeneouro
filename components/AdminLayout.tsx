import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-admin font-display text-slate-900 dark:text-white overflow-hidden theme-gold">
      {/* SideNavBar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-[#393528] bg-[#181611]">
        <div className="flex flex-col h-full p-4">
          {/* Brand */}
          <div className="flex items-center gap-3 mb-8 px-2">
            <div className="flex items-center justify-center size-10 rounded-full border border-[#393528] bg-primary-gold/10 text-primary-gold">
              <span className="material-symbols-outlined text-[24px] filled">diamond</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-white text-base font-bold leading-normal tracking-wide">Nathan Citizen & Ouro</h1>
              <p className="text-primary-gold text-xs font-normal uppercase tracking-wider">Admin Panel</p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-2 flex-1">
            <Link
              to="/admin"
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${isActive('/admin') ? 'bg-primary-gold/10 border-l-4 border-primary-gold' : 'text-[#bab29c] hover:bg-[#393528]/50 hover:text-white'}`}
            >
              <span className={`material-symbols-outlined ${isActive('/admin') ? 'text-primary-gold' : ''}`}>dashboard</span>
              <p className={`text-sm font-medium leading-normal ${isActive('/admin') ? 'text-primary-gold' : ''}`}>Dashboard</p>
            </Link>

            <Link
              to="/admin/products"
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${isActive('/admin/products') ? 'bg-primary-gold/10 border-l-4 border-primary-gold' : 'text-[#bab29c] hover:bg-[#393528]/50 hover:text-white'}`}
            >
              <span className={`material-symbols-outlined ${isActive('/admin/products') ? 'text-primary-gold' : ''}`}>watch</span>
              <p className={`text-sm font-medium leading-normal ${isActive('/admin/products') ? 'text-primary-gold' : ''}`}>Produtos</p>
            </Link>

            <Link to="/" className="flex items-center gap-3 px-3 py-3 rounded-lg text-[#bab29c] hover:bg-[#393528]/50 hover:text-white transition-colors">
              <span className="material-symbols-outlined">storefront</span>
              <p className="text-sm font-medium leading-normal">Ver Loja</p>
            </Link>
          </nav>

          {/* Settings */}
          <div className="mt-auto">
            <div className="flex items-center gap-3 px-3 py-4 mt-auto rounded-xl bg-surface-admin border border-[#393528]">
              <div className="w-10 h-10 rounded-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxIRF4TUCDJNU1HHUQk8CzvlQboUEahrEk19ROXcnfgVYNkrxdaNk4ve68z89MDiTqDZW3w6OX1ts8iAHg7NkFl8FKQVn1RrSpXxpOJRj247mmw9FEY3aeG-YyQPaOwmuoq9FCG1eLfZvODwPH4VRrD31VWqD9i-4m_JV5IvDpWDJdUs2G6_GJ1wl0fWP1RgmkF-Kli4ttoOtt1Ecm_3QCDQ-fwof6AfXsPrMyUXCW-iPr7Qxawh1pOHgwOAT55DL0mRCnc1gm2Abp')" }}></div>
              <div className="flex flex-col">
                <p className="text-white text-sm font-bold">Carlos Silva</p>
                <p className="text-[#bab29c] text-xs">Gerente Geral</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative admin-scroll">
        {/* Top Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#393528] bg-[#181611]/95 backdrop-blur-sm px-8 py-4 z-10">
          <div className="flex items-center gap-8 w-full max-w-2xl">
            <div className="md:hidden text-white cursor-pointer">
              <span className="material-symbols-outlined">menu</span>
            </div>
            <div className="hidden md:flex flex-col">
              <h2 className="text-white text-lg font-bold leading-tight tracking-tight">
                {isActive('/admin') ? 'Visão Geral' : 'Gerenciamento'}
              </h2>
              <p className="text-[#bab29c] text-sm">Bem-vindo de volta, Admin</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative flex items-center justify-center size-10 rounded-full hover:bg-[#393528] text-[#bab29c] hover:text-white transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-primary-gold rounded-full"></span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-surface-admin/50">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
