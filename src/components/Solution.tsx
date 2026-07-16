import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Navigation, 
  MapPin, 
  ShoppingBag, 
  Clock, 
  ChevronRight, 
  Sparkles, 
  Store,
  Compass,
  ArrowRight,
  Gauge
} from 'lucide-react';

interface RouteOption {
  id: string;
  label: string;
  start: string;
  end: string;
  pathD: string;
  restaurants: {
    name: string;
    cuisine: string;
    eta: string;
    x: number; // percentage
    y: number; // percentage
    status: string;
  }[];
}

export default function Solution() {
  const [activeTab, setActiveTab] = useState<'route' | 'nearby' | 'direct'>('route');
  
  // Routes dataset
  const routes: RouteOption[] = [
    {
      id: 'it-corridor',
      label: 'IT Corridor Commute',
      start: 'Gachibowli',
      end: 'Hitech City',
      pathD: 'M 40 160 Q 140 80, 240 180 T 360 100',
      restaurants: [
        { name: 'Cafe Niloufer', cuisine: 'Irani Chai & Bun Maska', eta: '5 mins away', x: 26, y: 39, status: 'Chai Brewed & Sealed ☕' },
        { name: 'Subway Drive-By', cuisine: 'Healthy Subs & Salads', eta: '9 mins away', x: 55, y: 55, status: 'Sub Wrap Prepared 🌯' },
        { name: 'Chutneys Express', cuisine: 'South Indian Breakfast', eta: '14 mins away', x: 80, y: 36, status: 'Idli Packaged & Hot 🍲' }
      ]
    },
    {
      id: 'central-loop',
      label: 'Central Core Route',
      start: 'Secunderabad',
      end: 'Begumpet',
      pathD: 'M 40 100 C 120 180, 260 60, 360 160',
      restaurants: [
        { name: 'Pista House Haleem', cuisine: 'Traditional Haleem & Biryani', eta: '6 mins away', x: 30, y: 44, status: 'Haleem Packaged 🍲' },
        { name: 'Paradise Takeaway', cuisine: 'Hyderabadi Chicken Biryani', eta: '11 mins away', x: 62, y: 32, status: 'Biryani Sealed & Warm 🥘' },
        { name: 'Imperial Café', cuisine: 'Mughlai Snacks & Desserts', eta: '16 mins away', x: 82, y: 49, status: 'Snacks Assembled 🥯' }
      ]
    },
    {
      id: 'west-end',
      label: 'West End Commute',
      start: 'Jubilee Hills',
      end: 'Madhapur',
      pathD: 'M 40 60 Q 180 200, 360 120',
      restaurants: [
        { name: 'Roast 247 Coffee', cuisine: 'Gourmet Espressos & Croissants', eta: '4 mins away', x: 28, y: 34, status: 'Cold Brew Bottled ☕' },
        { name: 'Third Wave Roasters', cuisine: 'Premium Filter Coffee', eta: '8 mins away', x: 58, y: 48, status: 'Latte Poured 🥤' },
        { name: 'Starbucks Drive-Thru', cuisine: 'Frappuccinos & Muffins', eta: '12 mins away', x: 85, y: 36, status: 'Frappe Blended 🧁' }
      ]
    }
  ];

  const [activeRouteId, setActiveRouteId] = useState('it-corridor');
  const [isSimulatingRoute, setIsSimulatingRoute] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0); 
  const [selectedRest, setSelectedRest] = useState<string | null>(null);

  const activeRoute = routes.find(r => r.id === activeRouteId) || routes[0];

  // Simulation timeline loop
  useEffect(() => {
    let timer: any;
    if (isSimulatingRoute) {
      setSimulationStep(1);
      setSelectedRest(null);
      
      // Step 2: reached first restaurant
      timer = setTimeout(() => {
        setSimulationStep(2);
        setSelectedRest(activeRoute.restaurants[0].name);
        
        // Step 3: reached second restaurant
        timer = setTimeout(() => {
          setSimulationStep(3);
          setSelectedRest(activeRoute.restaurants[1].name);
          
          // Step 4: reached third restaurant
          timer = setTimeout(() => {
            setSimulationStep(4);
            setSelectedRest(activeRoute.restaurants[2].name);
            
            // Step 5: completed
            timer = setTimeout(() => {
              setSimulationStep(5);
              setIsSimulatingRoute(false);
            }, 2500);
          }, 2500);
        }, 2500);
      }, 2000);
    } else {
      setSimulationStep(0);
    }
    return () => clearTimeout(timer);
  }, [isSimulatingRoute, activeRouteId]);

  const handleSimulate = () => {
    setIsSimulatingRoute(true);
  };

  return (
    <section id="solution" className="relative py-32 bg-[#0B1220] overflow-hidden border-t border-white/5">
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-brand-cyan/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-cyan tracking-widest uppercase mb-3">Our Platform Solution</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none mb-6">
            Direct Pre-Ordering & Routing
          </h3>
          <p className="text-gray-400 text-lg">
            PICK connects you directly to local kitchens. Order meals on your path or near your desk, ready exactly when you walk in.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Solution Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <button
              onClick={() => setActiveTab('route')}
              className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                activeTab === 'route' 
                  ? 'border-brand-blue/40 bg-[#111827]/80 shadow-lg shadow-brand-blue/5' 
                  : 'border-white/5 bg-[#111827]/30 hover:border-white/10'
              }`}
            >
              <div className="flex gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  activeTab === 'route' ? 'bg-brand-blue text-white' : 'bg-brand-blue/10 text-brand-blue'
                }`}>
                  <Navigation className="w-6 h-6 animate-pulse" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest block mb-1">Feature Spotlight</span>
                  <h4 className="text-lg font-bold text-white mb-2">Route-Based Discovery</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Map your morning commute or road trip. Discover kitchens directly on your path to order ahead.
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('nearby')}
              className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                activeTab === 'nearby' 
                  ? 'border-brand-cyan/40 bg-[#111827]/80 shadow-lg shadow-brand-cyan/5' 
                  : 'border-white/5 bg-[#111827]/30 hover:border-white/10'
              }`}
            >
              <div className="flex gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  activeTab === 'nearby' ? 'bg-brand-cyan text-white' : 'bg-brand-cyan/10 text-brand-cyan'
                }`}>
                  <Compass className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest block mb-1">Dine-in / Pickup</span>
                  <h4 className="text-lg font-bold text-white mb-2">Nearby Discovery</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Explore restaurants in a 2km radius around your office or PG. Lock in your order to avoid canteen rush hours.
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('direct')}
              className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                activeTab === 'direct' 
                  ? 'border-brand-teal/40 bg-[#111827]/80 shadow-lg shadow-brand-teal/5' 
                  : 'border-white/5 bg-[#111827]/30 hover:border-white/10'
              }`}
            >
              <div className="flex gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  activeTab === 'direct' ? 'bg-brand-teal text-white' : 'bg-brand-teal/10 text-brand-teal'
                }`}>
                  <Store className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-brand-cyan uppercase tracking-widest block mb-1">Direct-to-Kitchen</span>
                  <h4 className="text-lg font-bold text-white mb-2">Direct Restaurant Ordering</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Zero delivery company interference. Secure menu pricing and direct merchant payouts on purchase.
                  </p>
                </div>
              </div>
            </button>

          </div>

          {/* Right Column: Workstations */}
          <div className="lg:col-span-7 h-[480px] glass-card rounded-3xl border border-white/5 overflow-hidden p-6 relative flex flex-col justify-between shadow-2xl">
            
            <AnimatePresence mode="wait">
              {activeTab === 'route' && (
                <motion.div
                  key="route-sim"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="flex-1 flex flex-col justify-between"
                >
                  {/* Preset Route Selectors */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center bg-[#0a0f1d] p-3 rounded-2xl border border-white/5">
                    <div className="flex gap-2 overflow-x-auto w-full sm:w-auto">
                      {routes.map(r => (
                        <button
                          key={r.id}
                          disabled={isSimulatingRoute}
                          onClick={() => { setActiveRouteId(r.id); setSelectedRest(null); }}
                          className={`px-3 py-1.5 rounded-xl text-[10px] font-bold border transition-colors ${
                            activeRouteId === r.id 
                              ? 'bg-brand-blue border-brand-blue/30 text-white' 
                              : 'bg-white/5 border-white/5 text-gray-400 hover:text-white'
                          }`}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>

                    <button 
                      onClick={handleSimulate}
                      disabled={isSimulatingRoute}
                      className="px-4 py-2 bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-bold rounded-xl shadow-lg hover:shadow-brand-blue/30 shrink-0 w-full sm:w-auto"
                    >
                      {isSimulatingRoute ? 'Simulating Commute...' : 'Start Drive Simulation'}
                    </button>
                  </div>

                  {/* Route Map Canvas */}
                  <div className="flex-1 min-h-[220px] bg-[#0a0f1d] rounded-2xl border border-white/5 my-4 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1.5px,transparent_1.5px)] bg-[size:16px_16px]" />
                    
                    {/* Path line drawing */}
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d={activeRoute.pathD} 
                        fill="none" 
                        stroke={isSimulatingRoute ? '#06B6D4' : '#2563EB'} 
                        strokeWidth="3.5" 
                        strokeLinecap="round"
                        className={isSimulatingRoute ? 'stroke-dashoffset-animate' : ''}
                        style={{
                          strokeDasharray: '400',
                          strokeDashoffset: isSimulatingRoute ? '400' : '0',
                          transition: 'stroke-dashoffset 9s linear'
                        }}
                      />
                    </svg>

                    {/* Nodes along route */}
                    {activeRoute.restaurants.map((rest, index) => {
                      const isActiveNode = selectedRest === rest.name;
                      return (
                        <div 
                          key={rest.name}
                          onClick={() => setSelectedRest(rest.name)}
                          className="absolute cursor-pointer group"
                          style={{ left: `${rest.x}%`, top: `${rest.y}%` }}
                        >
                          <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                            isActiveNode 
                              ? 'bg-brand-cyan/20 border-brand-cyan scale-125 shadow-[0_0_15px_#06B6D4]' 
                              : 'bg-brand-blue/10 border-brand-blue/30 group-hover:scale-110'
                          }`}>
                            <MapPin className={`w-4.5 h-4.5 ${isActiveNode ? 'text-brand-cyan animate-bounce' : 'text-brand-blue'}`} />
                          </div>
                          
                          {/* Floating status badge */}
                          <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 bg-brand-dark/95 border px-3 py-1.5 rounded-xl shadow-xl w-40 pointer-events-none transition-all duration-300 ${
                            isActiveNode ? 'opacity-100 scale-100 border-brand-cyan/40' : 'opacity-0 scale-95 border-white/10'
                          }`}>
                            <span className="text-[10px] font-bold text-white block truncate">{rest.name}</span>
                            <span className="text-[8.5px] text-brand-cyan font-bold block mt-0.5">{rest.status}</span>
                            <span className="text-[8px] text-gray-500 block">{rest.eta}</span>
                          </div>
                        </div>
                      );
                    })}

                    {/* Active drive logs */}
                    <div className="absolute left-6 bottom-4 bg-[#0d1527]/90 border border-white/5 px-3 py-1.5 rounded-xl text-left w-56 backdrop-blur-xl">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Gauge className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                        <span className="text-[9px] font-bold text-white uppercase tracking-wider">Live Commute Log</span>
                      </div>
                      <p className="text-[9px] text-gray-400 leading-tight">
                        {simulationStep === 0 && 'Select a route and press simulation to map.'}
                        {simulationStep === 1 && `Leaving ${activeRoute.start}... heading to ${activeRoute.end}`}
                        {simulationStep === 2 && `Passed Cafe. ${activeRoute.restaurants[0].status}`}
                        {simulationStep === 3 && `Passed Drive-By. ${activeRoute.restaurants[1].status}`}
                        {simulationStep === 4 && `Passed Restaurant. ${activeRoute.restaurants[2].status}`}
                        {simulationStep === 5 && `Arrived at ${activeRoute.end}! Time saved: 15 Mins.`}
                      </p>
                    </div>
                  </div>

                  {/* Booking details drawer */}
                  <div className="h-16 flex items-center justify-between border-t border-white/5 pt-2">
                    {selectedRest ? (
                      <div className="flex items-center justify-between w-full">
                        <div>
                          <span className="text-[9px] text-brand-cyan uppercase tracking-widest font-extrabold">Active Target Selection</span>
                          <div className="text-xs font-bold text-white">
                            {selectedRest} (
                            {activeRoute.restaurants.find(r => r.name === selectedRest)?.cuisine}
                            )
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-3.5 py-1.5 rounded-lg bg-brand-blue/15 border border-brand-blue/30 text-brand-blue text-[10px] font-bold">
                            View Menu
                          </button>
                          <button className="px-3.5 py-1.5 rounded-lg bg-brand-cyan text-brand-dark text-[10px] font-extrabold shadow-lg">
                            Instant Pre-Order
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="text-xs text-gray-400">
                        {isSimulatingRoute ? 'Calculating optimal drive-by pre-order kitchens...' : 'Select a route and tap any glowing restaurant pin to checkout.'}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === 'nearby' && (
                <motion.div
                  key="nearby-sim"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="flex-1 flex flex-col justify-between"
                >
                  <div className="bg-[#0a0f1d] p-4 rounded-2xl border border-white/5 text-center flex-1 flex flex-col justify-center items-center">
                    <div className="w-16 h-16 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-4 animate-pulse">
                      <Compass className="w-8 h-8" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">Pre-Order Radius Search</h4>
                    <p className="text-xs text-gray-400 max-w-sm mb-6">
                      Locate every restaurant within a 2-kilometer radius of your current location. Place direct kitchen takeaway orders and pick them up as you arrive.
                    </p>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="text-center">
                        <div className="text-xl font-black text-brand-cyan">1.8 KM</div>
                        <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Search Radius</span>
                      </div>
                      <div className="w-px h-8 bg-white/10" />
                      <div className="text-center">
                        <div className="text-xl font-black text-brand-cyan">18</div>
                        <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Partner Cafes</span>
                      </div>
                      <div className="w-px h-8 bg-white/10" />
                      <div className="text-center">
                        <div className="text-xl font-black text-brand-cyan">&lt; 10 Mins</div>
                        <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Avg Prep Time</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'direct' && (
                <motion.div
                  key="direct-sim"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="flex-1 flex flex-col justify-between"
                >
                  <div className="bg-[#0a0f1d] p-4 rounded-2xl border border-white/5 text-center flex-1 flex flex-col justify-center items-center">
                    <div className="w-16 h-16 rounded-full bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center text-brand-teal mb-4 animate-pulse">
                      <Store className="w-8 h-8" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">Eliminating Aggregator Middleware</h4>
                    <p className="text-xs text-gray-400 max-w-sm mb-6">
                      PICK enables direct customer-to-merchant relationship billing. We do not markup food or force hidden commissions.
                    </p>
                    <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                      <div className="p-3.5 rounded-xl border border-white/5 bg-brand-dark text-left">
                        <span className="text-[9px] text-brand-teal font-extrabold uppercase tracking-widest block mb-1">For Customers</span>
                        <div className="text-sm font-bold text-white">Save ₹50 - ₹120 per meal</div>
                      </div>
                      <div className="p-3.5 rounded-xl border border-white/5 bg-brand-dark text-left">
                        <span className="text-[9px] text-brand-teal font-extrabold uppercase tracking-widest block mb-1">For Restaurants</span>
                        <div className="text-sm font-bold text-white">Retain 90% higher profits</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
