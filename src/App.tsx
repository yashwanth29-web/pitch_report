import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import SavingsComparison from './components/SavingsComparison';
import Features from './components/Features';
import BusinessModel from './components/BusinessModel';
import Market from './components/Market';
import Financials from './components/Financials';
import Funding from './components/Funding';
import Investors from './components/Investors';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Loading animation simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Mouse move tracker for ambient background glow light
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty('--mouse-x', `${x}px`);
    containerRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0B1220] z-50 flex flex-col items-center justify-center font-sans">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center shadow-2xl mx-auto animate-pulse">
            <span className="font-extrabold text-white text-3xl tracking-tighter">P</span>
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-bold text-white tracking-wider">PICK PLATFORM</h1>
            <p className="text-xs text-brand-cyan uppercase font-bold tracking-widest">Securing Pitch Dataroom...</p>
          </div>
          <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden mx-auto relative">
            <div 
              className="h-full bg-gradient-to-r from-brand-blue to-brand-cyan transition-all duration-100 rounded-full" 
              style={{ width: `${Math.min(loadProgress, 100)}%` }}
            />
          </div>
          <span className="text-[10px] text-gray-500 font-bold block">{Math.min(loadProgress, 100)}% Loaded</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[#0B1220] text-gray-300 font-sans mouse-light-bg overflow-x-hidden relative"
    >
      <Navbar onInvestClick={() => scrollToSection('funding')} />
      
      <main>
        <Hero 
          onInvestClick={() => scrollToSection('funding')} 
          onWatchDemoClick={() => scrollToSection('solution')} 
        />
        <Problem />
        <Solution />
        <SavingsComparison />
        <Market />
        <Features />
        <BusinessModel />
        <Financials />
        <Funding />
        <Investors />
      </main>

      <Footer />
    </div>
  );
}
