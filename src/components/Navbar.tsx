import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, TrendingUp } from 'lucide-react';

interface NavbarProps {
  onInvestClick: () => void;
}

export default function Navbar({ onInvestClick }: NavbarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Problem', id: 'problem' },
    { label: 'Solution', id: 'solution' },
    { label: 'Market', id: 'market' },
    { label: 'Features', id: 'features' },
    { label: 'Business Model', id: 'business-model' },
    { label: 'Financials', id: 'financials' },
    { label: 'Roadmap', id: 'roadmap' },
    { label: 'Funding', id: 'funding' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Track active section
      const scrollPosition = window.scrollY + 200;
      const sections = ['hero', ...navItems.map(item => item.id)];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Scroll Progress Bar */}
      <div 
        className="h-[2px] bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-teal transition-all duration-100 origin-left"
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Glassmorphic Navbar Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="glass-card rounded-2xl border border-white/5 bg-[#0B1220]/75 backdrop-blur-xl px-6 py-4 flex items-center justify-between shadow-2xl">
          {/* Logo */}
          <div 
            onClick={() => scrollTo('hero')} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center shadow-lg shadow-brand-blue/20 group-hover:scale-105 transition-transform duration-300">
              <span className="font-extrabold text-white text-lg tracking-tighter">P</span>
            </div>
            <div>
              <span className="font-extrabold text-white text-xl tracking-tight">PICK</span>
              <span className="text-[10px] block text-brand-cyan font-bold tracking-widest -mt-1">PRE-ORDER</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-brand-cyan bg-white/5' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>



          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-24 left-4 right-4 z-40">
          <div className="glass-card rounded-2xl bg-[#0B1220]/95 backdrop-blur-2xl p-6 border border-white/5 shadow-2xl flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === item.id 
                    ? 'text-brand-cyan bg-white/5' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
