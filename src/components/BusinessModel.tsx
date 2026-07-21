import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, DollarSign, Wallet, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';

export default function BusinessModel() {
  const [orderValue, setOrderValue] = useState<number>(300);
  const [flowDirection, setFlowDirection] = useState<boolean>(false);

  // Math variables
  const flatFee = 18;
  const customerPlatformFee = orderValue > 500 ? 10 : (orderValue < 200 ? 5 : 7);
  
  // Traditional aggregator fees
  const aggregatorMarkup = Math.round(orderValue * 0.20);
  const aggregatorComm = Math.round(orderValue * 0.28);
  const aggregatorDeliv = 45;
  const customerPaysAggregator = orderValue + aggregatorMarkup + aggregatorDeliv;
  const restaurantEarnsAggregator = orderValue - aggregatorComm;

  // PICK fees
  const customerPaysPick = orderValue + customerPlatformFee;
  const restaurantEarnsPick = orderValue - flatFee;

  const handleSimulateFlow = () => {
    setFlowDirection(true);
    setTimeout(() => setFlowDirection(false), 2000);
  };

  return (
    <section id="business-model" className="relative py-32 bg-[#0B1220] overflow-hidden border-t border-white/5">
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-brand-teal/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-cyan tracking-widest uppercase mb-3">Unit Economics</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none mb-6">
            Dual Income Source Model
          </h3>
          <p className="text-gray-400 text-lg">
            Our platform operates on a highly profitable dual-revenue system: restaurants pay a flat ₹18 merchant fee, while customers pay a variable ₹5 - ₹10 platform fee.
          </p>
        </div>

        {/* Interactive Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Interactive Slider and Math */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Simulate Transaction Value</h4>
              <p className="text-xs text-gray-400">Drag the slider to compare cash splits for different order baskets.</p>
            </div>

            {/* Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-gray-500">Order Basket Value</span>
                <span className="text-2xl font-black text-brand-cyan">₹{orderValue}</span>
              </div>
              <input 
                type="range" 
                min="100" 
                max="1500" 
                step="50"
                value={orderValue}
                onChange={(e) => setOrderValue(Number(e.target.value))}
                className="w-full h-2 bg-[#111827] rounded-lg appearance-none cursor-pointer accent-brand-cyan"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-bold">
                <span>₹100 (Snack)</span>
                <span>₹800 (Family Dinner)</span>
                <span>₹1,500 (Party Basket)</span>
              </div>
            </div>

            {/* Comparison Details */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              
              {/* Aggregator */}
              <div className="p-4 rounded-2xl bg-red-950/15 border border-red-900/25">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-extrabold text-red-400 uppercase tracking-wider">Traditional Aggregators</span>
                  <span className="text-xs font-black text-white">25-30% Commissions</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-gray-500 block font-bold">Customer Pays</span>
                    <span className="text-base font-black text-white">₹{customerPaysAggregator}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block font-bold">Restaurant Earns</span>
                    <span className="text-base font-black text-red-400">₹{restaurantEarnsAggregator}</span>
                  </div>
                </div>
              </div>

              {/* PICK */}
              <div className="p-4 rounded-2xl bg-emerald-950/15 border border-emerald-900/25">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-extrabold text-brand-teal uppercase tracking-wider">PICK Pre-Ordering</span>
                  <span className="text-xs font-black text-brand-teal">Flat ₹18 + Variable Customer Fee</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-gray-500 block font-bold">Customer Pays (Basket + Fee)</span>
                    <span className="text-base font-black text-brand-teal">₹{customerPaysPick} <span className="text-[10px] text-gray-400">(Includes ₹{customerPlatformFee} Platform Fee)</span></span>
                  </div>
                  <div>
                    <span className="text-gray-500 block font-bold">Restaurant Earns</span>
                    <span className="text-base font-black text-white">₹{restaurantEarnsPick} <span className="text-[10px] text-gray-400">(Flat ₹{flatFee} Merchant Fee)</span></span>
                  </div>
                </div>
              </div>

            </div>

            <button
              onClick={handleSimulateFlow}
              disabled={flowDirection}
              className="w-full py-3 bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-bold rounded-xl shadow-lg hover:shadow-brand-blue/30 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Simulate Value Flow Animation
            </button>
          </div>

          {/* Right Column: Node Flowchart Animation */}
          <div className="lg:col-span-7 h-[420px] bg-[#0a0f1d] border border-white/5 rounded-3xl p-6 relative flex flex-col justify-between items-center shadow-2xl overflow-hidden">
            
            <div className="absolute top-4 left-6 text-xs text-gray-500 font-bold uppercase tracking-wider">
              💸 Money Flow Path
            </div>

            {/* Nodes */}
            <div className="flex-1 w-full flex flex-col justify-around items-center relative py-6">
              
              {/* Customer Node */}
              <div className="relative z-10 p-4 w-40 glass-card rounded-2xl border-white/10 text-center shadow-lg">
                <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue mx-auto mb-2">
                  <Wallet className="w-4 h-4" />
                </div>
                <span className="text-[10px] text-gray-400 block font-semibold">Customer Pays</span>
                <span className="text-sm font-extrabold text-white">₹{customerPaysPick}</span>
              </div>

              {/* Animated Flow Arrow */}
              <div className="relative w-full h-8 flex justify-center items-center">
                <div className="absolute w-0.5 h-16 bg-white/5" />
                {flowDirection && (
                  <motion.div 
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 30, opacity: 1 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-2.5 h-2.5 rounded-full bg-brand-cyan shadow-[0_0_10px_#06B6D4] absolute"
                  />
                )}
              </div>

              {/* Split Middle Container */}
              <div className="flex gap-16 justify-between items-center z-10 w-full px-6">
                
                {/* Platform Fee Node (Left/Center branch) */}
                <div className="p-3 w-36 glass-card rounded-2xl border-brand-cyan/20 text-center relative shadow-lg">
                  <span className="text-[9px] text-brand-cyan uppercase tracking-widest font-extrabold block mb-1">Platform Revenue</span>
                  <span className="text-base font-black text-brand-cyan">₹{flatFee + customerPlatformFee}</span>
                  <span className="text-[8px] text-gray-500 block mt-0.5">₹{flatFee} Merchant + ₹{customerPlatformFee} User Fee</span>
                </div>

                {/* Restaurant Node (Right branch) */}
                <div className="p-4 w-40 glass-card rounded-2xl border-brand-teal/20 text-center shadow-lg">
                  <span className="text-[10px] text-brand-teal uppercase font-bold block mb-1">Restaurant Payout</span>
                  <span className="text-base font-black text-white">₹{restaurantEarnsPick}</span>
                  <span className="text-[8px] text-gray-400 block mt-0.5">Retains 90%+ margins</span>
                </div>

              </div>

            </div>

            <div className="w-full text-center text-[10px] text-gray-500 font-bold border-t border-white/5 pt-3">
              💡 Drag basket size on left to see live profit splits recalculate.
            </div>

          </div>

        </div>

        {/* Merchant Payback & Retention Card */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-[#0a0f1d] to-brand-blue/10 border border-emerald-500/20 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-black text-xl shrink-0">
              ⚡
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-0.5">Merchant Payback & Retention</span>
              <h4 className="text-lg font-extrabold text-white">Merchant Breakeven within 4 Days</h4>
              <p className="text-xs text-gray-400 mt-1 max-w-2xl">
                Because of our low flat fee model instead of 25–30% delivery commissions, partner restaurants recover their onboarding and platform setup costs in just 4 days of takeaway volume, driving a 98% merchant retention rate.
              </p>
            </div>
          </div>
          <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black shrink-0">
            98% Merchant Retention
          </div>
        </div>

      </div>
    </section>
  );
}
