import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, TrendingDown, HelpCircle, ArrowRight, ShieldCheck, Landmark } from 'lucide-react';

export default function SavingsComparison() {
  const [ordersPerMonth, setOrdersPerMonth] = useState<number>(12);
  const [avgBasketSize, setAvgBasketSize] = useState<number>(250);

  // Calculations
  const deliveryCosts = useMemo(() => {
    const markup = avgBasketSize * 0.20; // 20% menu inflation markup
    const deliveryFee = 45;
    const platformFee = 20; // ₹20 Platform fee on left side (Delivery App)
    const packingFee = 15;
    const perOrderCost = avgBasketSize + markup + deliveryFee + platformFee + packingFee;
    const monthlyTotal = perOrderCost * ordersPerMonth;
    return { perOrderCost: Math.round(perOrderCost), monthlyTotal: Math.round(monthlyTotal) };
  }, [avgBasketSize, ordersPerMonth]);

  const pickCosts = useMemo(() => {
    const customerPlatformFee = 10; // ₹10 Platform fee for pick-up order
    const merchantCommission = avgBasketSize * 0.05; // 5% commission for pick-up order
    const perOrderCost = avgBasketSize + customerPlatformFee;
    const monthlyTotal = perOrderCost * ordersPerMonth;
    return { perOrderCost: Math.round(perOrderCost), monthlyTotal: Math.round(monthlyTotal), merchantCommission: Math.round(merchantCommission) };
  }, [avgBasketSize, ordersPerMonth]);

  const monthlySavings = deliveryCosts.monthlyTotal - pickCosts.monthlyTotal;
  const yearlySavings = monthlySavings * 12;

  // Creative equivalent representation
  const savingsEquivalent = useMemo(() => {
    if (monthlySavings < 500) return '2 premium filter coffees ☕';
    if (monthlySavings < 1200) return '15 cups of Cafe Niloufer Irani Chai ☕';
    if (monthlySavings < 2500) return 'A premium buffet dinner for two 🍕';
    return 'A brand new premium mechanical keyboard ⌨️';
  }, [monthlySavings]);

  return (
    <section id="savings-comparison" className="relative py-32 bg-[#0B1220] overflow-hidden border-t border-white/5">
      {/* Ambient Radial Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-cyan tracking-widest uppercase mb-3">Consumer Value Proximity</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none mb-6">
            Delivery vs. PICK Pre-Ordering
          </h3>
          <p className="text-gray-400 text-lg">
            Stop paying delivery markups. Compare how a direct takeaway pre-order system matches against traditional delivery aggregators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Comparison Matrix (Span 7) */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            
            {/* The side-by-side comparison boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
              
              {/* Delivery App Card */}
              <div className="p-6 rounded-3xl bg-red-950/10 border border-red-900/20 flex flex-col justify-between relative overflow-hidden group hover:border-red-900/45 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 blur-xl rounded-full" />
                <div>
                  <div className="inline-flex px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-wider mb-4">
                    Delivery App
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">High Friction Markup</h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-6">
                    Food delivery apps inflate original merchant menu prices, add delivery distances charges, platform taxes, and packaging fees.
                  </p>
                </div>

                <div className="space-y-2 border-t border-white/5 pt-4">
                  <div className="flex justify-between text-[11px] text-gray-500">
                    <span>Menu Price Inflated</span>
                    <span className="text-white">+20%</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-gray-500">
                    <span>Delivery Fees</span>
                    <span className="text-white">₹35 - ₹60</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-gray-500">
                    <span>Aggregator Platform Fee</span>
                    <span className="text-red-400 font-semibold">₹20</span>
                  </div>
                  <div className="h-px bg-white/5 my-2" />
                  <div className="flex justify-between text-sm font-bold text-red-400">
                    <span>Estimated Total</span>
                    <span>₹{deliveryCosts.perOrderCost}</span>
                  </div>
                </div>
              </div>

              {/* PICK Pre-Ordering Card */}
              <div className="p-6 rounded-3xl bg-emerald-950/10 border border-emerald-900/20 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-900/45 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-xl rounded-full" />
                <div>
                  <div className="inline-flex px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-4">
                    PICK Takeaway App
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Direct Value Efficiency</h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-6">
                    Customers pay the direct, authentic restaurant menu pricing. Since you pick up on your route, delivery fees are entirely eliminated.
                  </p>
                </div>

                <div className="space-y-2 border-t border-white/5 pt-4">
                  <div className="flex justify-between text-[11px] text-gray-500">
                    <span>True Menu Price</span>
                    <span className="text-white">Original Price</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-gray-500">
                    <span>Delivery Fees</span>
                    <span className="text-emerald-400">₹0 (Self Pickup)</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-gray-500">
                    <span>PICK Customer Fee</span>
                    <span className="text-emerald-400 font-semibold">₹10</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-gray-500">
                    <span>Merchant Commission</span>
                    <span className="text-emerald-400 font-semibold">5%</span>
                  </div>
                  <div className="h-px bg-white/5 my-2" />
                  <div className="flex justify-between text-sm font-bold text-emerald-400">
                    <span>Estimated Total</span>
                    <span>₹{pickCosts.perOrderCost}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Platform Comparison Row banner */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-xl flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4.5 h-4.5 text-brand-cyan" /> Secure Checkout</span>
              <span>•</span>
              <span>No Driver Delay Anxieties</span>
              <span>•</span>
              <span>Meals Hot at pickup</span>
            </div>

          </div>

          {/* Right Column: Interactive Savings Calculator (Span 5) */}
          <div className="lg:col-span-5 p-6 rounded-3xl glass-card border-white/5 relative overflow-hidden flex flex-col justify-between shadow-2xl">
            
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Commute Savings Calculator</h4>
              <p className="text-[11px] text-gray-400">Adjust the inputs to see your total monthly and yearly compounding cash savings.</p>
            </div>

            {/* Sliders Container */}
            <div className="space-y-6 my-8">
              
              {/* Slider 1: Orders per month */}
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold text-white">
                  <span className="text-gray-400">Orders Per Month</span>
                  <span className="text-brand-cyan font-black">{ordersPerMonth} orders</span>
                </div>
                <input 
                  type="range"
                  min="2"
                  max="30"
                  value={ordersPerMonth}
                  onChange={(e) => setOrdersPerMonth(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#0a0f1d] rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                />
              </div>

              {/* Slider 2: Basket value */}
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold text-white">
                  <span className="text-gray-400">Avg. Order Value</span>
                  <span className="text-brand-cyan font-black">₹{avgBasketSize}</span>
                </div>
                <input 
                  type="range"
                  min="100"
                  max="800"
                  step="25"
                  value={avgBasketSize}
                  onChange={(e) => setAvgBasketSize(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#0a0f1d] rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                />
              </div>

            </div>

            {/* Output Visuals */}
            <div className="space-y-4 p-5 rounded-2xl bg-[#0a0f1d] border border-white/5 text-left">
              <div>
                <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider block">Monthly Savings</span>
                <div className="text-3xl font-black text-white">₹{monthlySavings.toLocaleString()}</div>
                <span className="text-[10px] text-brand-cyan block mt-0.5 font-bold">
                  ({savingsEquivalent})
                </span>
              </div>

              <div className="h-px bg-white/5 my-2" />

              <div>
                <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider block">Yearly Savings</span>
                <div className="text-2xl font-black text-brand-teal">₹{yearlySavings.toLocaleString()}</div>
                <span className="text-[9px] text-gray-400 block mt-0.5 leading-relaxed">
                  Direct pre-ordering routes save thousands of rupees of markup and delivery commissions annually.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
