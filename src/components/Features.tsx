import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  QrCode, 
  Map, 
  MapPin,
  Bell, 
  Calendar, 
  ShieldCheck, 
  Award,
  Users,
  Smartphone,
  ChevronRight,
  Car,
  ShoppingCart,
  Lock,
  Shield
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

export default function Features() {
  // Simulator states
  const [activeOrders, setActiveOrders] = useState(14);
  const [showNotification, setShowNotification] = useState(false);
  const [scannedQR, setScannedQR] = useState(false);
  const [valetStatus, setValetStatus] = useState<'idle' | 'requested' | 'assigned' | 'ready'>('idle');

  // Fake chart data
  const data = [
    { hour: '12:00', orders: 12 },
    { hour: '13:00', orders: 25 },
    { hour: '14:00', orders: 18 },
    { hour: '15:00', orders: 15 },
    { hour: '16:00', orders: 22 },
    { hour: '17:00', orders: 38 },
    { hour: '18:00', orders: 48 },
    { hour: '19:00', orders: 55 }
  ];

  // Simulator interval loop
  useEffect(() => {
    const interval = setInterval(() => {
      // Fluctuate active orders
      setActiveOrders(prev => Math.max(10, Math.min(25, prev + (Math.random() > 0.5 ? 1 : -1))));
      // Occasionally trigger a fake notification
      if (Math.random() > 0.7) {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="relative py-32 bg-[#0B1220] overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-cyan tracking-widest uppercase mb-3">Feature Ecosystem</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none mb-6">
            The Bento Grid of Innovation
          </h3>
          <p className="text-gray-400 text-lg">
            A comprehensive, high-performance technology suite engineered to give restaurants total control and customers a premium checkout flow.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
          
          {/* Card 1: Live Analytics & Restaurant Dashboard (Span 2x2) */}
          <div className="md:col-span-2 md:row-span-2 glass-card rounded-3xl p-6 border border-white/5 flex flex-col justify-between overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/10 blur-3xl rounded-full" />
            
            <div className="flex justify-between items-center z-10">
              <div>
                <span className="text-[9px] text-brand-cyan uppercase tracking-widest font-extrabold block">Live Merchant Console</span>
                <h4 className="text-xl font-bold text-white mt-1">Restaurant Analytics & Orders</h4>
              </div>
              <div className="flex gap-4">
                <div className="text-right">
                  <span className="text-[9px] text-gray-500 block uppercase font-bold">Active Orders</span>
                  <span className="text-lg font-black text-brand-cyan">{activeOrders}</span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] text-gray-500 block uppercase font-bold">Today's Revenue</span>
                  <span className="text-lg font-black text-white">₹54,200</span>
                </div>
              </div>
            </div>

            {/* Recharts Area Graph */}
            <div className="h-44 w-full z-10 mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="hour" stroke="#4b5563" fontSize={10} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px' }}
                    labelStyle={{ color: '#fff', fontSize: '11px', fontWeight: 'bold' }}
                    itemStyle={{ color: '#2563EB', fontSize: '11px' }}
                  />
                  <Area type="monotone" dataKey="orders" stroke="#2563EB" strokeWidth={3} fillOpacity={1} fill="url(#colorOrders)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="text-[10px] text-emerald-400 font-bold z-10 border-t border-white/5 pt-3 flex items-center justify-between">
              <span>📊 Real-time hourly order pacing & sales reporting console</span>
              <span className="text-gray-400 font-normal text-[9px]">🔒 100% Direct Customer Data Ownership</span>
            </div>
          </div>

          {/* Card 2: QR Ordering Scanner (Span 1x1) */}
          <div className="glass-card rounded-3xl p-6 border border-white/5 flex flex-col justify-between relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/5 to-transparent pointer-events-none" />
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                <QrCode className="w-5 h-5" />
              </div>
              <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded-full">QR Engine</span>
            </div>

            <div>
              <h5 className="text-sm font-bold text-white mb-1">Interactive QR Table Ordering</h5>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Scan, check-in, order, and split checks directly from the table.
              </p>
            </div>

            <button 
              onClick={() => {
                setScannedQR(true);
                setTimeout(() => setScannedQR(false), 2000);
              }}
              className="w-full py-2 bg-white/5 hover:bg-white/10 rounded-xl text-[10px] text-white font-bold transition-all border border-white/5 flex items-center justify-center gap-1.5"
            >
              {scannedQR ? '✅ Table #12 Booked!' : 'Simulate Scanning Table QR'}
            </button>
          </div>

          {/* Card 3: Route Search Map (Span 1x1) */}
          <div className="glass-card rounded-3xl p-6 border border-white/5 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent pointer-events-none" />
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                <Map className="w-5 h-5" />
              </div>
              <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded-full">Route GPS</span>
            </div>

            <div>
              <h5 className="text-sm font-bold text-white mb-1">X to Y Commute Search</h5>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Aggregates every restaurant, cafe, and food center along your travel route. Pre-order 20 mins early and pick up without waiting.
              </p>
            </div>

            <div className="text-[10px] text-brand-cyan font-bold flex items-center gap-1">
              Active Route Path mapping <ChevronRight className="w-3 h-3" />
            </div>
          </div>

          {/* Card 4: Radius-Based Discovery (Span 1x1) */}
          <div className="glass-card rounded-3xl p-6 border border-white/5 flex flex-col justify-between relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded-full">Range Finder</span>
            </div>

            <div>
              <h5 className="text-sm font-bold text-white mb-1">Custom Radius Pre-Order</h5>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Select your radius (e.g. 3 km) around your home, office, or PG to pre-order and eat-in or takeaway instantly.
              </p>
            </div>

            <div className="text-[10px] text-brand-teal font-bold flex items-center gap-1">
              Active Geolocation Radius querying <ChevronRight className="w-3 h-3" />
            </div>
          </div>

          {/* Card 5: Smart Valet Parking Feature (Span 1x1) */}
          <div className="glass-card rounded-3xl p-6 border border-white/5 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 to-transparent pointer-events-none" />
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Car className="w-5 h-5 animate-pulse" />
              </div>
              <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded-full">Automated Valet</span>
            </div>

            <div>
              <h5 className="text-sm font-bold text-white mb-1">Automatic Valet Parking</h5>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Seamless valet request matched with your restaurant booking. Drop your car, skip the search, and enter right away.
              </p>
            </div>

            <button 
              onClick={() => {
                if (valetStatus === 'idle') {
                  setValetStatus('requested');
                  setTimeout(() => setValetStatus('assigned'), 1500);
                  setTimeout(() => setValetStatus('ready'), 3500);
                  setTimeout(() => setValetStatus('idle'), 6000);
                }
              }}
              className="w-full py-2 bg-indigo-950/20 hover:bg-indigo-900/30 rounded-xl text-[10px] text-indigo-400 font-bold transition-all border border-indigo-500/20 flex items-center justify-center gap-1.5"
            >
              {valetStatus === 'idle' && 'Simulate Valet Booking'}
              {valetStatus === 'requested' && '⏳ Dispatching Valet Driver...'}
              {valetStatus === 'assigned' && '🚗 Driver assigned (ETA 3 mins)'}
              {valetStatus === 'ready' && '✅ Driver Waiting at Restaurant!'}
            </button>
          </div>

          {/* Card 6: Super & Hyper Market Grocery Takeaway (Span 1x1) */}
          <div className="glass-card rounded-3xl p-6 border border-white/5 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/5 to-transparent pointer-events-none" />
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded-full">Grocery Hub</span>
            </div>

            <div>
              <h5 className="text-sm font-bold text-white mb-1">Super & Hypermarket Pre-order</h5>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Don't waste 45 minutes standing in long checkout lines. Order groceries before you arrive and collect at the drive-through counter.
              </p>
            </div>

            <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
              Active counter pick-up ready <ChevronRight className="w-3 h-3" />
            </div>
          </div>

          {/* Card 7: Real-time Notifications (Span 3x1 on large screen, 2x1 md) */}
          <div className="md:col-span-3 glass-card rounded-3xl p-6 border border-white/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 blur-3xl rounded-full" />
            
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                  <Bell className="w-5 h-5 animate-bounce" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white">Real-Time Kitchen Notifications</h5>
                  <p className="text-[11px] text-gray-400">Zero latency communication using WebSockets.</p>
                </div>
              </div>
              <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded-full">Socket.io</span>
            </div>

            {/* Notification Drawer Simulation */}
            <div className="relative h-14 bg-[#0a0f1d] rounded-xl border border-white/5 px-4 flex items-center justify-between overflow-hidden">
              <AnimatePresence mode="wait">
                {showNotification ? (
                  <motion.div 
                    key="notif-1"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs text-white font-semibold">"Cafe Niloufer" accepted order #2441 (Pickup in 12 mins)</span>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="notif-2"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                    <span className="text-xs text-gray-400">Listening for incoming live order broadcasts...</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                onClick={() => setShowNotification(!showNotification)}
                className="text-[9px] font-bold text-brand-cyan uppercase hover:underline"
              >
                Trigger
              </button>
            </div>
          </div>

        </div>

        {/* Moat & Barrier to Entry Section */}
        <div className="mt-20 border-t border-white/5 pt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-sm font-bold text-indigo-400 tracking-widest uppercase mb-3">Defensibility Matrix</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Can't Delivery Giants Copy This Tomorrow?
            </h3>
            <p className="text-gray-400 text-sm mt-3">
              Delivery aggregators are operationally optimized for gig-driver hubs, not direct commute paths. Our architecture creates three distinct moats:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Proprietary Routing Engine",
                desc: "Unlike standard point-to-point map routing, our engine matches transit acceleration vectors and vehicle trajectory coordinates to queue orders automatically.",
                badge: "Tech Moat"
              },
              {
                title: "Dynamic GPS Kitchen Sync",
                desc: "Synchronizes the kitchen preparation cycle directly with the driver's real-time ETA. If the driver hits a traffic delay, the system stalls cooking prep to ensure food is fresh at pickup.",
                badge: "Operations Moat"
              },
              {
                title: "100% Data Transparency",
                desc: "Aggregators hide customer data profiles to guard their monopoly. PICK gives partner merchants complete, unfiltered customer CRM access and dashboard analytics.",
                badge: "Data Moat"
              }
            ].map((moat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-gradient-to-b from-[#111827]/60 to-[#0a0f1d] border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/5 blur-xl rounded-full" />
                <span className="inline-flex px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[9px] font-extrabold uppercase tracking-wider mb-4">
                  {moat.badge}
                </span>
                <h4 className="text-base font-bold text-white mb-2">{moat.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{moat.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
