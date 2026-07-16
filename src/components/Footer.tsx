import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] py-12 border-t border-white/5 relative z-10 text-xs text-gray-500 font-medium">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center font-extrabold text-white text-xs">
            P
          </div>
          <span className="font-extrabold text-white text-sm tracking-tight">PICK PRE-ORDER</span>
        </div>

        <div className="flex gap-6 text-[11px] text-gray-400">
          <a href="#problem" className="hover:text-white transition-colors">Problem</a>
          <a href="#solution" className="hover:text-white transition-colors">Solution</a>
          <a href="#financials" className="hover:text-white transition-colors">Financials</a>
          <a href="#funding" className="hover:text-white transition-colors text-brand-cyan font-bold">Invest</a>
        </div>

        <div>
          © {new Date().getFullYear()} PICK Technologies Private Limited. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
