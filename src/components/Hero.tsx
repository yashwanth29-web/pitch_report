import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  MapPin, 
  Clock, 
  ShoppingBag, 
  CheckCircle2, 
  Navigation, 
  ChevronRight, 
  DollarSign, 
  UtensilsCrossed, 
  Flame,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroProps {
  onInvestClick: () => void;
  onWatchDemoClick: () => void;
}

export default function Hero({ onInvestClick, onWatchDemoClick }: HeroProps) {
  // Mobile demo flow state: 'route' | 'menu' | 'time' | 'checkout' | 'success'
  const [demoState, setDemoState] = useState<'route' | 'menu' | 'time' | 'checkout' | 'success'>('route');
  const [selectedRoute, setSelectedRoute] = useState<'office' | 'college' | 'gym' | null>(null);
  const [selectedDish, setSelectedDish] = useState<string | null>(null);
  const [prepTime, setPrepTime] = useState<string>('15 mins');
  const [isSimulating, setIsSimulating] = useState(false);

  const startConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#2563EB', '#06B6D4', '#14B8A6']
    });
  };

  const resetSimulator = () => {
    setSelectedRoute(null);
    setSelectedDish(null);
    setDemoState('route');
    setIsSimulating(false);
  };

  useEffect(() => {
    if (demoState === 'success') {
      startConfetti();
      const timer = setTimeout(() => {
        // Auto reset after 10s to keep animation looping
        resetSimulator();
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [demoState]);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden hero-grid-pattern">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-blue/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[550px] h-[550px] rounded-full bg-brand-teal/10 blur-[130px] pointer-events-none" />
      
      {/* Subtle Grid Animation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,18,32,0)_0%,#0B1220_80%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Investor Messaging */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Tagline Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-brand-cyan/20 w-fit mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-xs font-semibold text-brand-cyan uppercase tracking-wider">₹100 Crore Startup Funding Pitch</span>
            <ChevronRight className="w-3.5 h-3.5 text-brand-cyan/70" />
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none mb-8"
          >
            The Future of <br />
            <span className="bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-teal bg-clip-text text-transparent">
              Restaurant Ordering
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed"
          >
            Skip the wait. Pay true restaurant menu prices. Pre-order and pick up your meal or reserve a table before you arrive. No delivery fees, no markup.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <button 
              onClick={onInvestClick}
              className="relative group px-8 py-4 rounded-2xl font-bold text-white text-base overflow-hidden shadow-2xl shadow-brand-blue/30 hover:shadow-brand-blue/50 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-teal" />
              <span className="absolute -inset-px rounded-2xl bg-gradient-to-r from-brand-blue to-brand-teal opacity-0 group-hover:opacity-60 blur-md transition-all duration-500" />
              <span className="relative flex items-center justify-center gap-2">
                Request Pitch Deck <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <button 
              onClick={onWatchDemoClick}
              className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 font-bold text-white flex items-center justify-center gap-2 group"
            >
              <Play className="w-5 h-5 fill-white text-white group-hover:scale-110 transition-transform" />
              Watch Demo Video
            </button>
          </motion.div>

          {/* Floating Key Metrics */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5"
          >
            <div>
              <div className="text-3xl font-extrabold text-white">₹1.71 Cr</div>
              <div className="text-xs text-brand-cyan font-bold uppercase tracking-wider mt-1">Year 1 Projected ARR</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white">1,500+</div>
              <div className="text-xs text-brand-cyan font-bold uppercase tracking-wider mt-1">Acquired Restaurants</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white">₹0</div>
              <div className="text-xs text-brand-cyan font-bold uppercase tracking-wider mt-1">Customer Delivery Fee</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D phone mockup & interactive ordering flow */}
        <div className="lg:col-span-5 flex justify-center relative">
          {/* Decorative glowing background elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-brand-cyan/20 blur-[80px] rounded-full pointer-events-none z-0" />
          
          {/* Main phone container wrapper */}
          <div className="relative w-[340px] h-[680px] rounded-[50px] border-4 border-gray-800 bg-[#070b13] shadow-2xl p-3.5 z-10 flex flex-col overflow-hidden ring-1 ring-white/10">
            {/* Phone Speaker/Camera Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-50 flex items-center justify-center">
              <div className="w-12 h-1 bg-gray-800 rounded-full" />
            </div>

            {/* Live Ordering App Interface */}
            <div className="w-full h-full rounded-[38px] overflow-hidden bg-[#0a0f1d] relative flex flex-col pt-6 font-sans">
              
              {/* App Header */}
              <div className="px-4 py-3 bg-[#0d1527] border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center">
                    <span className="text-[10px] font-black text-white">P</span>
                  </div>
                  <span className="text-xs font-extrabold text-white tracking-wider">PICK APP</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-bold text-emerald-400">12 RESTAURANTS ALONG ROUTE</span>
                </div>
              </div>

              {/* Dynamic Content Body based on state */}
              <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {demoState === 'route' && (
                    <motion.div 
                      key="route"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex-1 flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1">Where are you heading?</h4>
                        <p className="text-[10px] text-gray-400 mb-4">We will discover takeaways right along your travel path.</p>
                        
                        <div className="flex flex-col gap-2.5">
                          <button 
                            onClick={() => { setSelectedRoute('office'); setDemoState('menu'); }}
                            className="w-full p-3 rounded-xl border border-white/5 bg-[#0e1628] hover:border-brand-blue/40 transition-colors flex items-center justify-between text-left group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                                <Navigation className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-xs font-bold text-white">Office to Home</div>
                                <div className="text-[9px] text-gray-400">Via Madhapur Outer Ring Rd</div>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white" />
                          </button>

                          <button 
                            onClick={() => { setSelectedRoute('college'); setDemoState('menu'); }}
                            className="w-full p-3 rounded-xl border border-white/5 bg-[#0e1628] hover:border-brand-cyan/40 transition-colors flex items-center justify-between text-left group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                                <Navigation className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-xs font-bold text-white">College to PG</div>
                                <div className="text-[9px] text-gray-400">Via Jubilee Hills Rd</div>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white" />
                          </button>

                          <button 
                            onClick={() => { setSelectedRoute('gym'); setDemoState('menu'); }}
                            className="w-full p-3 rounded-xl border border-white/5 bg-[#0e1628] hover:border-brand-teal/40 transition-colors flex items-center justify-between text-left group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                                <Navigation className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-xs font-bold text-white">Gym to Apartment</div>
                                <div className="text-[9px] text-gray-400">Via Gachibowli Circle</div>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white" />
                          </button>
                        </div>
                      </div>

                      {/* Map Animation */}
                      <div className="h-28 rounded-xl bg-[#0e1628] border border-white/5 relative overflow-hidden flex items-center justify-center mt-4">
                        {/* Fake map drawing */}
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:10px_10px]" />
                        <div className="absolute w-2 h-2 rounded-full bg-brand-cyan top-10 left-10 animate-ping" />
                        <div className="absolute w-2 h-2 rounded-full bg-brand-cyan top-10 left-10" />
                        
                        <div className="absolute w-2.5 h-2.5 rounded-full bg-brand-blue bottom-8 right-12 animate-pulse" />
                        
                        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                          <path d="M 40 40 Q 150 20 180 80 Q 200 120 280 80" fill="none" stroke="#2563EB" strokeWidth="2" strokeDasharray="4 4" />
                        </svg>
                        
                        <div className="absolute bg-brand-dark/95 border border-white/10 px-2.5 py-1 rounded-lg top-3 right-3 shadow-lg flex items-center gap-1.5">
                          <MapPin className="w-3 h-3 text-brand-cyan" />
                          <span className="text-[8px] font-bold text-white">Smart Routing Map</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {demoState === 'menu' && (
                    <motion.div 
                      key="menu"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex-1 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                            <UtensilsCrossed className="w-3 h-3" />
                          </div>
                          <span className="text-xs font-bold text-white">Punjab Grill Express</span>
                        </div>

                        <div className="flex flex-col gap-2">
                          <div 
                            onClick={() => { setSelectedDish('Paneer Wrap'); setDemoState('time'); }}
                            className="p-2.5 rounded-xl bg-[#0e1628] border border-white/5 hover:border-brand-blue/30 cursor-pointer flex items-center justify-between"
                          >
                            <div className="flex gap-2.5 items-center">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center font-bold text-white text-xs">🌯</div>
                              <div>
                                <div className="text-xs font-bold text-white">Spicy Paneer Tikka Wrap</div>
                                <div className="text-[9px] text-gray-400">Classic Tandoori spices</div>
                              </div>
                            </div>
                            <span className="text-xs font-extrabold text-brand-cyan">₹180</span>
                          </div>

                          <div 
                            onClick={() => { setSelectedDish('Burger'); setDemoState('time'); }}
                            className="p-2.5 rounded-xl bg-[#0e1628] border border-white/5 hover:border-brand-blue/30 cursor-pointer flex items-center justify-between"
                          >
                            <div className="flex gap-2.5 items-center">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-red-600 flex items-center justify-center font-bold text-white text-xs">🍔</div>
                              <div>
                                <div className="text-xs font-bold text-white">Double Cheese Grill Burger</div>
                                <div className="text-[9px] text-gray-400">Direct-to-kitchen fresh patty</div>
                              </div>
                            </div>
                            <span className="text-xs font-extrabold text-brand-cyan">₹160</span>
                          </div>

                          <div 
                            onClick={() => { setSelectedDish('Biryani'); setDemoState('time'); }}
                            className="p-2.5 rounded-xl bg-[#0e1628] border border-white/5 hover:border-brand-blue/30 cursor-pointer flex items-center justify-between"
                          >
                            <div className="flex gap-2.5 items-center">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center font-bold text-white text-xs">🍲</div>
                              <div>
                                <div className="text-xs font-bold text-white">Nizami Chicken Biryani</div>
                                <div className="text-[9px] text-gray-400">Authentic Hyderabadi flavor</div>
                              </div>
                            </div>
                            <span className="text-xs font-extrabold text-brand-cyan">₹220</span>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => setDemoState('route')}
                        className="text-[10px] text-center text-gray-500 hover:text-white mt-4"
                      >
                        ← Back to Route Selection
                      </button>
                    </motion.div>
                  )}

                  {demoState === 'time' && (
                    <motion.div 
                      key="time"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex-1 flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-1">
                          <Clock className="w-4 h-4 text-brand-cyan" /> Select Pickup Time
                        </h4>
                        <p className="text-[10px] text-gray-400 mb-4">When will you reach Punjab Grill Express?</p>

                        <div className="grid grid-cols-2 gap-2">
                          {['10 mins', '15 mins', '20 mins', '30 mins'].map((time) => (
                            <button
                              key={time}
                              onClick={() => { setPrepTime(time); setDemoState('checkout'); }}
                              className={`p-3 rounded-xl border text-center transition-colors font-bold text-xs ${
                                prepTime === time 
                                  ? 'border-brand-blue bg-brand-blue/10 text-white' 
                                  : 'border-white/5 bg-[#0e1628] text-gray-400 hover:border-white/20'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                      <button 
                        onClick={() => setDemoState('menu')}
                        className="text-[10px] text-center text-gray-500 hover:text-white mt-4"
                      >
                        ← Back to Menu
                      </button>
                    </motion.div>
                  )}

                  {demoState === 'checkout' && (
                    <motion.div 
                      key="checkout"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex-1 flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="text-sm font-bold text-white mb-3">Confirm Pre-Order</h4>
                        
                        {/* Compare billing visualizer */}
                        <div className="space-y-2 mb-4">
                          <div className="p-3 rounded-xl bg-red-950/20 border border-red-900/30">
                            <div className="flex justify-between items-center text-[10px] text-red-400 font-bold mb-1">
                              <span>Traditional Food Apps</span>
                              <span className="line-through">₹255</span>
                            </div>
                            <div className="text-[9px] text-red-400/80 leading-tight">
                              Includes inflated menu prices (+20%), ₹45 delivery fee, and platform charges.
                            </div>
                          </div>

                          <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-900/30">
                            <div className="flex justify-between items-center text-[10px] text-emerald-400 font-bold mb-1">
                              <span>PICK Billing</span>
                              <span>₹187</span>
                            </div>
                            <div className="text-[9px] text-emerald-400/80 leading-tight">
                              True menu pricing. Direct-to-restaurant. Zero delivery. ₹7 customer platform fee.
                            </div>
                          </div>
                        </div>

                        {/* Bill Breakdown */}
                        <div className="space-y-1.5 p-3 rounded-xl bg-[#0e1628] border border-white/5 text-[10px]">
                          <div className="flex justify-between text-gray-400">
                            <span>Item Total</span>
                            <span className="text-white">₹180</span>
                          </div>
                          <div className="flex justify-between text-gray-400">
                            <span>Delivery Fee</span>
                            <span className="text-emerald-400">₹0</span>
                          </div>
                          <div className="flex justify-between text-gray-400">
                            <span>Platform fee</span>
                            <span className="text-brand-cyan">₹7 (varies ₹5-10)</span>
                          </div>
                          <div className="h-px bg-white/5 my-1" />
                          <div className="flex justify-between text-xs font-bold text-white">
                            <span>Total Bill</span>
                            <span className="text-brand-cyan">₹187</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setIsSimulating(true);
                          setTimeout(() => {
                            setDemoState('success');
                          }, 1500);
                        }}
                        disabled={isSimulating}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-bold transition-all shadow-lg hover:shadow-brand-blue/30 flex items-center justify-center gap-1.5"
                      >
                        {isSimulating ? (
                          <>
                            <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending to Kitchen...
                          </>
                        ) : (
                          <>
                            <span>Place Pre-Order (₹187)</span>
                            <ChevronRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </motion.div>
                  )}

                  {demoState === 'success' && (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex-1 flex flex-col justify-between items-center text-center py-4"
                    >
                      <div className="flex-1 flex flex-col justify-center items-center">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h4 className="text-base font-bold text-white mb-1">Pre-Order Confirmed!</h4>
                        <p className="text-[10px] text-gray-400 max-w-[200px] mb-6">
                          Punjab Grill has accepted. Food will be ready in <span className="text-brand-cyan font-bold">{prepTime}</span> when you arrive.
                        </p>

                        {/* Tracker timeline */}
                        <div className="w-full max-w-[220px] space-y-4 text-left">
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[8px] font-bold">✓</div>
                            <span className="text-[10px] font-semibold text-white">Order Accepted (12:02 PM)</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full bg-brand-cyan animate-pulse flex items-center justify-center text-white text-[8px] font-bold"></div>
                            <span className="text-[10px] font-semibold text-white">Preparing Food (In Progress)</span>
                          </div>
                          <div className="flex items-center gap-3 opacity-40">
                            <div className="w-4 h-4 rounded-full bg-gray-700" />
                            <span className="text-[10px] font-semibold text-gray-400">Ready for Pickup (12:17 PM)</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={resetSimulator}
                        className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-[10px] font-bold transition-all border border-white/5"
                      >
                        Run Live Demo Again
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
