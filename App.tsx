
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
      <Chatbot />
    </div>
  );
};

export default App;
