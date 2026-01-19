
import React, { useState } from 'react';

const LoanCalculator: React.FC = () => {
  const [amount, setAmount] = useState(10000);
  const [days, setDays] = useState(30);

  const interestRate = 0.05; // 5% flat fee example
  const totalInterest = amount * interestRate;
  const totalPayable = amount + totalInterest;

  return (
    <div className="py-24 container mx-auto px-4 max-w-4xl">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
        <div className="p-8 md:p-12 md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Calcula tu Préstamo</h2>
          
          <div className="mb-10">
            <div className="flex justify-between mb-4">
              <label className="font-semibold text-gray-700">Monto a solicitar</label>
              <span className="text-blue-600 font-bold text-lg">${amount.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="1000" 
              max="100000" 
              step="500"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between mt-2 text-xs text-gray-400">
              <span>$1.000</span>
              <span>$100.000</span>
            </div>
          </div>

          <div className="mb-10">
            <div className="flex justify-between mb-4">
              <label className="font-semibold text-gray-700">Plazo del préstamo</label>
              <span className="text-blue-600 font-bold text-lg">{days} días</span>
            </div>
            <input 
              type="range" 
              min="7" 
              max="90" 
              step="1"
              value={days}
              onChange={(e) => setDays(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between mt-2 text-xs text-gray-400">
              <span>7 días</span>
              <span>90 días</span>
            </div>
          </div>
          
          <p className="text-xs text-gray-400 mt-4 italic">
            * Sujeto a tasación de la garantía. Tasas informativas para el modelo prendario.
          </p>
        </div>
        
        <div className="bg-blue-600 p-8 md:p-12 md:w-1/2 text-white flex flex-col justify-center">
          <h3 className="text-xl font-medium mb-6 opacity-80">Resumen del Préstamo</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex justify-between border-b border-blue-400/30 pb-4">
              <span className="opacity-70">Capital</span>
              <span className="font-bold">${amount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between border-b border-blue-400/30 pb-4">
              <span className="opacity-70">Costo Gestión / Interés</span>
              <span className="font-bold">${totalInterest.toLocaleString()}</span>
            </div>
            <div className="flex justify-between pt-4">
              <span className="text-lg font-bold">Total a Devolver</span>
              <span className="text-3xl font-black text-yellow-400">${totalPayable.toLocaleString()}</span>
            </div>
          </div>
          
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 rounded-xl shadow-lg transition-transform hover:scale-[1.02] active:scale-95">
            ¡LO QUIERO YA!
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
