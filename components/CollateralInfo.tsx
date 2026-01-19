
import React from 'react';

const CollateralInfo: React.FC = () => {
  const items = [
    { name: "Joyas y Oro", icon: "fa-gem" },
    { name: "Electrónica", icon: "fa-laptop" },
    { name: "Vehículos", icon: "fa-car" },
    { name: "Herramientas", icon: "fa-tools" },
    { name: "Relojes de Lujo", icon: "fa-clock" },
    { name: "Instrumentos", icon: "fa-guitar" }
  ];

  return (
    <div className="py-24 container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1584433144859-1fc3ab84a9ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Garantía prendaria" 
              className="rounded-3xl shadow-2xl z-10 relative"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-yellow-400 rounded-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-600 rounded-3xl -z-10"></div>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-6">Tu garantía es tu respaldo.</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            En <strong>W PRESTAMOS</strong> entendemos que a veces necesitas liquidez inmediata. 
            Utilizamos tus bienes de valor como garantía real para otorgarte el crédito más alto del mercado de forma instantánea. 
            Sin consultas al Veraz, sin recibo de sueldo. Tu objeto es la llave a tu préstamo.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((item, i) => (
              <div key={i} className="flex flex-col items-center p-4 bg-gray-50 rounded-xl border border-gray-100 group hover:bg-blue-600 hover:text-white transition-all cursor-default">
                <i className={`fas ${item.icon} text-2xl mb-2 text-blue-600 group-hover:text-yellow-400`}></i>
                <span className="font-semibold text-sm">{item.name}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-10 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl">
            <h4 className="font-bold text-yellow-800 mb-2">Transparencia Total</h4>
            <p className="text-yellow-700 text-sm italic">
              "El monto del préstamo se basa en el valor de tasación actual del mercado de tu bien. Ofrecemos las tasas de interés más competitivas para que recuperar tu objeto sea sencillo."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollateralInfo;
