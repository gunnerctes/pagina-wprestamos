
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Dinero al instante, <br />
            <span className="text-yellow-400">sin complicaciones.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 font-light leading-relaxed">
            Obtén tu préstamo en efectivo o transferencia bancaria hoy mismo. 
            Especialistas en préstamos con garantía prendaria (empeños). 
            Tu confianza es nuestro respaldo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#calculator" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-xl font-bold text-lg text-center transition-transform hover:scale-105 shadow-xl">
              Simular mi Préstamo
            </a>
            <a href="#collateral" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg text-center transition-transform hover:scale-105">
              ¿Qué puedo empeñar?
            </a>
          </div>
          
          <div className="mt-12 flex items-center space-x-8 text-sm font-medium">
            <div className="flex items-center">
              <i className="fas fa-check-circle text-green-400 mr-2"></i>
              <span>Sin requisitos de crédito</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-check-circle text-green-400 mr-2"></i>
              <span>Dinero en 15 minutos</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-check-circle text-green-400 mr-2"></i>
              <span>Máxima tasación</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
};

export default Hero;
