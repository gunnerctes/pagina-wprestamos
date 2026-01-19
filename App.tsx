
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LoanFeatures from './components/LoanFeatures';
import LoanCalculator from './components/LoanCalculator';
import CollateralInfo from './components/CollateralInfo';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <form name="solicitud-prestamo" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="solicitud-prestamo" />

  <input type="text" name="nombre" placeholder="Nombre y apellido" required />
  <input type="text" name="telefono" placeholder="WhatsApp" required />
  <input type="email" name="email" placeholder="Email" required />
  <input type="text" name="monto" placeholder="Monto solicitado" />

  <select name="modalidad">
    <option value="efectivo">Efectivo</option>
    <option value="transferencia">Transferencia</option>
  </select>

  <textarea name="mensaje" placeholder="Mensaje"></textarea>

  <button type="submit">Enviar solicitud</button>
</form>
    <div className="min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} />
      <main className="flex-grow">
        <Hero />
        <section id="features">
          <LoanFeatures />
        </section>
        <section id="collateral" className="bg-white">
          <CollateralInfo />
        </section>
        <section id="calculator" className="bg-gray-50">
          <LoanCalculator />
        </section>
      </main>
      <Footer />
    <a
  href="https://wa.me/549XXXXXXXXXX?text=Hola,%20quiero%20consultar%20por%20un%20préstamo"
  target="_blank"
>
  Contactar por WhatsApp
</a>
      <Chatbot />
    </div>
  );
};

export default App;
