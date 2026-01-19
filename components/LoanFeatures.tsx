
import React from 'react';

const LoanFeatures: React.FC = () => {
  const features = [
    {
      title: "Efectivo Inmediato",
      description: "Retira tu dinero en billetes al instante en nuestras oficinas una vez aprobada la garantía.",
      icon: "fa-money-bill-wave",
      color: "blue"
    },
    {
      title: "Transferencias Rápidas",
      description: "Si lo prefieres, enviamos el préstamo directamente a tu cuenta bancaria o billetera virtual.",
      icon: "fa-paper-plane",
      color: "blue"
    },
    {
      title: "Garantía Segura",
      description: "Tus bienes quedan resguardados con máxima seguridad. Tú tienes el dinero, nosotros cuidamos lo tuyo.",
      icon: "fa-shield-halved",
      color: "yellow"
    },
    {
      title: "Sin Papeleo",
      description: "Olvídate de trámites bancarios eternos. Con tu garantía prendaria, el proceso es ágil y directo.",
      icon: "fa-file-signature",
      color: "blue"
    }
  ];

  return (
    <div className="py-24 container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-blue-900 text-sm font-bold tracking-widest uppercase mb-4">¿Por qué elegir W?</h2>
        <p className="text-4xl font-bold text-gray-800">Soluciones financieras a tu medida y sin demoras.</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${f.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'}`}>
              <i className={`fas ${f.icon} text-2xl`}></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">{f.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanFeatures;
