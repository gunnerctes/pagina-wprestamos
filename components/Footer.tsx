
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <span className="text-white font-black text-2xl">W</span>
              </div>
              <span className="text-xl font-bold uppercase tracking-widest">Préstamos</span>
            </div>
            <p className="text-blue-100 opacity-70 mb-6">
              Tu aliado financiero rápido y confiable. Especialistas en empeños y soluciones inmediatas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400 transition-colors"><i className="fab fa-facebook-f text-xl"></i></a>
              <a href="#" className="hover:text-yellow-400 transition-colors"><i className="fab fa-instagram text-xl"></i></a>
              <a href="#" className="hover:text-yellow-400 transition-colors"><i className="fab fa-whatsapp text-xl"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-blue-100 opacity-70">
              <li><a href="#features" className="hover:text-white transition-colors">Beneficios</a></li>
              <li><a href="#collateral" className="hover:text-white transition-colors">Garantías Aceptadas</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Simulador Online</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Nuestra Oficina</h4>
            <ul className="space-y-4 text-blue-100 opacity-70">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                <span>Av. Principal 1234, Centro Financiero</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-3"></i>
                <span>+54 11 4444-5555</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3"></i>
                <span>contacto@wprestamos.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Horarios</h4>
            <ul className="space-y-4 text-blue-100 opacity-70">
              <li>Lunes a Viernes: 09:00 - 18:00</li>
              <li>Sábados: 09:00 - 13:00</li>
              <li className="pt-4">
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase">Abierto Ahora</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-16 pt-8 flex flex-col md:row justify-between items-center text-sm text-blue-300">
          <p>© 2024 W PRESTAMOS. Todos los derechos reservados.</p>
          <p className="mt-4 md:mt-0">Desarrollado con ❤️ para tu crecimiento financiero.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
