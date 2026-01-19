
import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4 text-white'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <span className="text-white font-black text-2xl">W</span>
          </div>
          <span className={`text-xl font-bold uppercase tracking-widest ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
            Préstamos
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          <a href="#features" className="hover:text-blue-500 transition-colors">Beneficios</a>
          <a href="#collateral" className="hover:text-blue-500 transition-colors">Garantías</a>
          <a href="#calculator" className="hover:text-blue-500 transition-colors">Simulador</a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg">
            Solicitar ahora
          </button>
        </nav>
        
        <button className="md:hidden text-2xl">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
