import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ArrowUpDown, 
  MapPin, 
  Globe, 
  Info, 
  BarChart2, 
  Table, 
  Map, 
  CircleDot, 
  HelpCircle,
  TrendingUp,
  Target
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Cell, 
  ScatterChart, 
  Scatter, 
  ZAxis 
} from 'recharts';

interface CityOpportunity {
  rank: number;
  city: string;
  outlets?: number;
  dailyOrders: number;
  monthlyOrders: string;
  yearlyOrders: string;
  ordersRaw: number; 
  bubbleSize: number; // For bubble chart Z-axis
}

export default function Market() {
  const [activeSegment, setActiveSegment] = useState<'telugu' | 'india'>('telugu');
  
  // View Modes: 'map' | 'bar' | 'bubble' | 'table'
  const [viewMode, setViewMode] = useState<'map' | 'bar' | 'bubble' | 'table'>('map');

  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<'rank' | 'city' | 'ordersRaw'>('rank');
  const [sortAsc, setSortAsc] = useState(true);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  // AP & Telangana SOM Data
  const teluguData: CityOpportunity[] = [
    { rank: 1, city: 'Hyderabad', outlets: 1250, dailyOrders: 90000, monthlyOrders: '27.0 Lakh', yearlyOrders: '3.29 Crore', ordersRaw: 90000, bubbleSize: 900 },
    { rank: 2, city: 'Visakhapatnam', outlets: 1250, dailyOrders: 35000, monthlyOrders: '10.5 Lakh', yearlyOrders: '1.28 Crore', ordersRaw: 35000, bubbleSize: 350 },
    { rank: 3, city: 'Vijayawada', outlets: 1250, dailyOrders: 30000, monthlyOrders: '9.0 Lakh', yearlyOrders: '1.10 Crore', ordersRaw: 30000, bubbleSize: 300 },
    { rank: 4, city: 'Guntur', outlets: 1250, dailyOrders: 18000, monthlyOrders: '5.4 Lakh', yearlyOrders: '65.7 Lakh', ordersRaw: 18000, bubbleSize: 180 },
    { rank: 5, city: 'Warangal', outlets: 1250, dailyOrders: 15000, monthlyOrders: '4.5 Lakh', yearlyOrders: '54.8 Lakh', ordersRaw: 15000, bubbleSize: 150 },
    { rank: 6, city: 'Tirupati', outlets: 1250, dailyOrders: 15000, monthlyOrders: '4.5 Lakh', yearlyOrders: '54.8 Lakh', ordersRaw: 15000, bubbleSize: 150 },
    { rank: 7, city: 'Kakinada', outlets: 1250, dailyOrders: 10000, monthlyOrders: '3.0 Lakh', yearlyOrders: '36.5 Lakh', ordersRaw: 10000, bubbleSize: 100 },
    { rank: 8, city: 'Rajamahendravaram', outlets: 1250, dailyOrders: 10000, monthlyOrders: '3.0 Lakh', yearlyOrders: '36.5 Lakh', ordersRaw: 10000, bubbleSize: 100 },
    { rank: 9, city: 'Karimnagar', outlets: 1250, dailyOrders: 9000, monthlyOrders: '2.7 Lakh', yearlyOrders: '32.9 Lakh', ordersRaw: 9000, bubbleSize: 90 },
    { rank: 10, city: 'Khammam', outlets: 1250, dailyOrders: 8000, monthlyOrders: '2.4 Lakh', yearlyOrders: '29.2 Lakh', ordersRaw: 8000, bubbleSize: 80 },
  ];

  // India Tier-1 TAM Data
  const indiaData: CityOpportunity[] = [
    { rank: 1, city: 'Bengaluru', dailyOrders: 280000, monthlyOrders: '84.0 Lakh', yearlyOrders: '10.22 Crore', ordersRaw: 280000, bubbleSize: 2800 },
    { rank: 2, city: 'Mumbai', dailyOrders: 260000, monthlyOrders: '78.0 Lakh', yearlyOrders: '9.49 Crore', ordersRaw: 260000, bubbleSize: 2600 },
    { rank: 3, city: 'Delhi NCR', dailyOrders: 250000, monthlyOrders: '75.0 Lakh', yearlyOrders: '9.13 Crore', ordersRaw: 250000, bubbleSize: 2500 },
    { rank: 4, city: 'Hyderabad', dailyOrders: 180000, monthlyOrders: '54.0 Lakh', yearlyOrders: '6.57 Crore', ordersRaw: 180000, bubbleSize: 1800 },
    { rank: 5, city: 'Chennai', dailyOrders: 140000, monthlyOrders: '42.0 Lakh', yearlyOrders: '5.11 Crore', ordersRaw: 140000, bubbleSize: 1400 },
    { rank: 6, city: 'Pune', dailyOrders: 110000, monthlyOrders: '33.0 Lakh', yearlyOrders: '4.02 Crore', ordersRaw: 110000, bubbleSize: 1100 },
    { rank: 7, city: 'Kolkata', dailyOrders: 100000, monthlyOrders: '30.0 Lakh', yearlyOrders: '3.65 Crore', ordersRaw: 100000, bubbleSize: 1000 },
    { rank: 8, city: 'Ahmedabad', dailyOrders: 90000, monthlyOrders: '27.0 Lakh', yearlyOrders: '3.29 Crore', ordersRaw: 90000, bubbleSize: 900 },
    { rank: 9, city: 'Jaipur', dailyOrders: 60000, monthlyOrders: '18.0 Lakh', yearlyOrders: '2.19 Crore', ordersRaw: 60000, bubbleSize: 600 },
    { rank: 10, city: 'Chandigarh Tricity', dailyOrders: 50000, monthlyOrders: '15.0 Lakh', yearlyOrders: '1.83 Crore', ordersRaw: 50000, bubbleSize: 500 },
  ];

  const activeDataset = useMemo(() => {
    return activeSegment === 'telugu' ? teluguData : indiaData;
  }, [activeSegment]);

  const processedData = useMemo(() => {
    let result = activeDataset.filter(item => 
      item.city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    result.sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];

      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sortAsc ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      return sortAsc 
        ? (aVal as number) - (bVal as number) 
        : (bVal as number) - (aVal as number);
    });

    return result;
  }, [activeDataset, searchTerm, sortField, sortAsc]);

  const handleSort = (field: 'rank' | 'city' | 'ordersRaw') => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  // Map Coordinates
  const apMapNodes = [
    { name: 'Hyderabad', x: 38, y: 35, orders: '90K/day' },
    { name: 'Warangal', x: 50, y: 28, orders: '15K/day' },
    { name: 'Karimnagar', x: 48, y: 18, orders: '9K/day' },
    { name: 'Khammam', x: 56, y: 42, orders: '8K/day' },
    { name: 'Vijayawada', x: 62, y: 55, orders: '30K/day' },
    { name: 'Guntur', x: 58, y: 64, orders: '18K/day' },
    { name: 'Rajamahendravaram', x: 74, y: 48, orders: '10K/day' },
    { name: 'Kakinada', x: 82, y: 46, orders: '10K/day' },
    { name: 'Visakhapatnam', x: 88, y: 32, orders: '35K/day' },
    { name: 'Tirupati', x: 44, y: 88, orders: '15K/day' },
  ];

  const indiaMapNodes = [
    { name: 'Bengaluru', x: 42, y: 78, orders: '2.8L/day' },
    { name: 'Mumbai', x: 26, y: 56, orders: '2.6L/day' },
    { name: 'Delhi NCR', x: 38, y: 22, orders: '2.5L/day' },
    { name: 'Hyderabad', x: 44, y: 60, orders: '1.8L/day' },
    { name: 'Chennai', x: 50, y: 80, orders: '1.4L/day' },
    { name: 'Pune', x: 29, y: 61, orders: '1.1L/day' },
    { name: 'Kolkata', x: 78, y: 44, orders: '1.0L/day' },
    { name: 'Ahmedabad', x: 22, y: 42, orders: '90K/day' },
    { name: 'Jaipur', x: 31, y: 30, orders: '60K/day' },
    { name: 'Chandigarh Tricity', x: 37, y: 14, orders: '50K/day' },
  ];

  // Colors for bubbles/bars
  const colors = ['#2563EB', '#3B82F6', '#06B6D4', '#0EA5E9', '#14B8A6', '#2DD4BF', '#F59E0B', '#10B981', '#6366F1', '#8B5CF6'];

  return (
    <section id="market" className="relative py-32 bg-[#0B1220] overflow-hidden border-t border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-blue/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[550px] h-[550px] bg-brand-cyan/5 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Toggle Segment */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-xl">
            <button
              onClick={() => { setActiveSegment('telugu'); setSearchTerm(''); }}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeSegment === 'telugu' 
                  ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Andhra Pradesh & TelanganaSOM
            </button>
            <button
              onClick={() => { setActiveSegment('india'); setSearchTerm(''); }}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeSegment === 'india' 
                  ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              India Tier-1 Expansion TAM
            </button>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            {activeSegment === 'telugu' ? (
              <motion.div
                key="telugu-head"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
              >
                <h2 className="text-sm font-bold text-brand-cyan tracking-widest uppercase mb-3">Serviceable Market</h2>
                <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                  Market Opportunity in Andhra Pradesh & Telangana
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  Our initial expansion focuses only on the top 1,000 restaurants and 250 cafés (1,250 outlets) in each city, providing a realistic and serviceable market rather than the entire restaurant industry.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="india-head"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
              >
                <h2 className="text-sm font-bold text-brand-cyan tracking-widest uppercase mb-3">Geographic Scale</h2>
                <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
                  Expansion Opportunity Across India's Tier-1 Cities
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">
                  After establishing market leadership in Hyderabad, the company plans to expand into India's largest organized food-service markets.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Controls and Dashboard Switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Visual Workspace (Span 8) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 p-4 bg-[#111827]/40 border border-white/5 rounded-2xl backdrop-blur-xl">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-3" />
                <input 
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search city datasets..."
                  className="w-full pl-10 pr-4 py-2 bg-[#0a0f1d] border border-white/5 rounded-xl text-white text-xs focus:outline-none focus:border-brand-blue transition-colors"
                />
              </div>

              {/* View Switches */}
              <div className="flex gap-2 overflow-x-auto">
                {[
                  { id: 'map', label: 'Network Map', icon: <Map className="w-3.5 h-3.5" /> },
                  { id: 'bar', label: 'Bar Chart', icon: <BarChart2 className="w-3.5 h-3.5" /> },
                  { id: 'bubble', label: 'Bubble Chart', icon: <CircleDot className="w-3.5 h-3.5" /> },
                  { id: 'table', label: 'Data Table', icon: <Table className="w-3.5 h-3.5" /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setViewMode(tab.id as any)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1 shrink-0 ${
                      viewMode === tab.id 
                        ? 'bg-brand-blue text-white border-brand-blue/30 shadow-lg' 
                        : 'bg-white/5 text-gray-400 border-white/5 hover:text-white'
                    }`}
                  >
                    {tab.icon} {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Display Visual Area */}
            <div className="glass-card rounded-3xl border border-white/5 p-6 min-h-[460px] flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 blur-2xl rounded-full" />

              <AnimatePresence mode="wait">
                
                {/* 1. Map Layout */}
                {viewMode === 'map' && (
                  <motion.div
                    key="map-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col justify-between relative"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Glow Heat Nodes</h4>
                      <p className="text-[11px] text-gray-400 mb-6">Visual mapping of targeted outlet densities and geographic nodes.</p>
                    </div>

                    <div className="h-80 w-full relative flex items-center justify-center">
                      {activeSegment === 'telugu' ? (
                        <svg className="w-full h-full text-gray-800" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Telangana Region Outline Shape */}
                          <path 
                            d="M 80 50 L 170 30 L 220 80 L 230 140 L 160 170 L 110 160 L 70 120 Z" 
                            fill="rgba(37, 99, 235, 0.05)" 
                            stroke="rgba(37, 99, 235, 0.3)" 
                            strokeWidth="1.5" 
                            className="transition-all duration-500 hover:fill-brand-blue/10"
                          />
                          <text x="120" y="80" fill="rgba(37, 99, 235, 0.4)" className="text-[10px] font-black uppercase tracking-widest pointer-events-none">Telangana SOM</text>

                          {/* Andhra Pradesh Region Outline Shape */}
                          <path 
                            d="M 230 140 L 290 120 L 350 160 L 360 210 L 260 270 L 160 280 L 130 220 L 160 170 Z" 
                            fill="rgba(6, 182, 212, 0.04)" 
                            stroke="rgba(6, 182, 212, 0.3)" 
                            strokeWidth="1.5" 
                            className="transition-all duration-500 hover:fill-brand-cyan/10"
                          />
                          <text x="210" y="220" fill="rgba(6, 182, 212, 0.4)" className="text-[10px] font-black uppercase tracking-widest pointer-events-none">Andhra Pradesh SOM</text>

                          {/* Connecting Network Grid Corridors */}
                          {/* Hyderabad -> Warangal -> Karimnagar -> Khammam */}
                          <path d="M 152 105 L 200 84 L 192 54 M 200 84 L 224 126" stroke="rgba(37, 99, 235, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
                          
                          {/* Visakhapatnam -> Kakinada -> Rajahmundry -> Vijayawada -> Guntur -> Tirupati */}
                          <path d="M 352 96 L 328 138 L 296 144 L 248 165 L 232 192 L 176 264" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="1" strokeDasharray="3 3" />

                          {apMapNodes.map((node) => (
                            <g 
                              key={node.name}
                              onMouseEnter={() => setHoveredCity(node.name)}
                              onMouseLeave={() => setHoveredCity(null)}
                              className="cursor-pointer"
                            >
                              {/* Pulse wave around active node */}
                              <circle 
                                cx={node.x * 4} 
                                cy={node.y * 3} 
                                r={hoveredCity === node.name ? 14 : 8} 
                                stroke={node.name === 'Hyderabad' ? '#14B8A6' : '#2563EB'} 
                                strokeWidth="1" 
                                fill="none" 
                                opacity={hoveredCity === node.name ? 1 : 0.2}
                                className="transition-all duration-300"
                              />
                              <circle 
                                cx={node.x * 4} 
                                cy={node.y * 3} 
                                r={hoveredCity === node.name ? 7 : 4} 
                                fill={node.name === 'Hyderabad' ? '#14B8A6' : (hoveredCity === node.name ? "#06B6D4" : "#2563EB")} 
                                className="transition-all duration-300 shadow-lg" 
                              />
                              {hoveredCity === node.name && (
                                <circle 
                                  cx={node.x * 4} 
                                  cy={node.y * 3} 
                                  r="22" 
                                  stroke="#06B6D4" 
                                  strokeWidth="1.5" 
                                  fill="none" 
                                  className="animate-ping" 
                                />
                              )}
                            </g>
                          ))}
                        </svg>
                      ) : (
                        <svg className="w-full h-full text-gray-800" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* India Map Outline */}
                          <path 
                            d="M 200 20 L 250 50 L 260 95 L 290 110 L 320 150 L 280 190 L 240 250 L 205 300 L 195 300 L 170 250 L 120 190 L 100 150 L 110 95 L 130 60 Z" 
                            fill="rgba(255, 255, 255, 0.02)" 
                            stroke="rgba(255, 255, 255, 0.08)" 
                            strokeWidth="1.5" 
                            strokeDasharray="4 4" 
                          />
                          <text x="160" y="140" fill="rgba(255, 255, 255, 0.04)" className="text-[12px] font-black uppercase tracking-[0.2em] pointer-events-none">India TAM Expansion</text>

                          {/* Animated paths out from Hyderabad node */}
                          {indiaMapNodes.map((node) => {
                            if (node.name === 'Hyderabad') return null;
                            return (
                              <g key={`path-${node.name}`}>
                                <line 
                                  x1="176" 
                                  y1="180" 
                                  x2={`${node.x * 4}`} 
                                  y2={`${node.y * 3}`} 
                                  stroke="rgba(6, 182, 212, 0.25)" 
                                  strokeWidth="1.5" 
                                  className="animate-pulse"
                                />
                              </g>
                            );
                          })}
                          {indiaMapNodes.map((node) => (
                            <g 
                              key={node.name}
                              onMouseEnter={() => setHoveredCity(node.name)}
                              onMouseLeave={() => setHoveredCity(null)}
                              className="cursor-pointer"
                            >
                              <circle 
                                cx={node.x * 4} 
                                cy={node.y * 3} 
                                r={hoveredCity === node.name ? 14 : 8} 
                                stroke={node.name === 'Hyderabad' ? '#14B8A6' : '#2563EB'} 
                                strokeWidth="1" 
                                fill="none" 
                                opacity={hoveredCity === node.name ? 1 : 0.2}
                                className="transition-all duration-300"
                              />
                              <circle 
                                cx={node.x * 4} 
                                cy={node.y * 3} 
                                r={hoveredCity === node.name ? 7 : 4} 
                                fill={node.name === 'Hyderabad' ? '#14B8A6' : (hoveredCity === node.name ? "#06B6D4" : "#2563EB")} 
                                className="transition-all duration-300" 
                              />
                              {hoveredCity === node.name && (
                                <circle 
                                  cx={node.x * 4} 
                                  cy={node.y * 3} 
                                  r="22" 
                                  stroke="#06B6D4" 
                                  strokeWidth="1.5" 
                                  fill="none" 
                                  className="animate-ping" 
                                />
                              )}
                            </g>
                          ))}
                        </svg>
                      )}
                      
                      {/* Interactive Float Tooltip */}
                      {hoveredCity && (
                        <div className="absolute bottom-4 bg-[#111827]/95 border border-brand-cyan/20 p-3 rounded-xl shadow-xl w-44 text-left backdrop-blur-xl">
                          <span className="text-xs font-bold text-white block">{hoveredCity}</span>
                          <span className="text-[10px] text-brand-cyan font-bold block mt-0.5">
                            Target: {activeDataset.find(item => item.city === hoveredCity)?.dailyOrders.toLocaleString()} / day
                          </span>
                          <span className="text-[9px] text-gray-400 block mt-0.5">
                            Yearly: {activeDataset.find(item => item.city === hoveredCity)?.yearlyOrders}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* 2. Bar Chart Pacing */}
                {viewMode === 'bar' && (
                  <motion.div
                    key="bar-view"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Daily Volume Distribution</h4>
                      <p className="text-[11px] text-gray-400 mb-6">Bar comparison chart measuring potential daily pre-orders per city.</p>
                    </div>

                    <div className="h-72 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={processedData} margin={{ left: -10, right: 10 }}>
                          <XAxis dataKey="city" stroke="#4b5563" fontSize={9} tickLine={false} />
                          <YAxis stroke="#4b5563" fontSize={9} tickLine={false} />
                          <Tooltip 
                            formatter={(value) => [`${(Number(value) / 1000).toFixed(0)}k orders`, 'Daily Volume']}
                            contentStyle={{ backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px' }}
                            labelStyle={{ color: '#fff', fontSize: '11px', fontWeight: 'bold' }}
                          />
                          <Bar dataKey="ordersRaw" fill="#2563EB" radius={[4, 4, 0, 0]}>
                            {processedData.map((entry, index) => (
                              <Cell 
                                key={`cell-${index}`} 
                                fill={colors[index % colors.length]} 
                                opacity={hoveredCity === entry.city ? 1 : 0.75}
                                onMouseEnter={() => setHoveredCity(entry.city)}
                                onMouseLeave={() => setHoveredCity(null)}
                              />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </motion.div>
                )}

                {/* 3. Bubble Chart Opportunity */}
                {viewMode === 'bubble' && (
                  <motion.div
                    key="bubble-view"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Market Opportunity Bubble Matrix</h4>
                      <p className="text-[11px] text-gray-400 mb-6">Visual matrix comparing City Rank (X), Daily Volume (Y), and Relative Basket Size (Z).</p>
                    </div>

                    <div className="h-72 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
                          <XAxis type="number" dataKey="rank" name="Rank" stroke="#4b5563" fontSize={9} tickLine={false} label={{ value: 'Market Rank', position: 'bottom', fill: '#4b5563', fontSize: 10 }} />
                          <YAxis type="number" dataKey="ordersRaw" name="Daily Orders" stroke="#4b5563" fontSize={9} tickLine={false} label={{ value: 'Daily Orders', angle: -90, position: 'insideLeft', fill: '#4b5563', fontSize: 10 }} />
                          <ZAxis type="number" dataKey="bubbleSize" range={[50, 450]} />
                          <Tooltip 
                            cursor={{ strokeDasharray: '3 3' }}
                            contentStyle={{ backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px' }}
                            labelStyle={{ color: '#fff', fontSize: '11px', fontWeight: 'bold' }}
                          />
                          <Scatter name="Opportunity Mapping" data={processedData} fill="#06B6D4">
                            {processedData.map((entry, index) => (
                              <Cell 
                                key={`cell-${index}`} 
                                fill={colors[index % colors.length]} 
                                opacity={hoveredCity === entry.city ? 1 : 0.8}
                                onMouseEnter={() => setHoveredCity(entry.city)}
                                onMouseLeave={() => setHoveredCity(null)}
                              />
                            ))}
                          </Scatter>
                        </ScatterChart>
                      </ResponsiveContainer>
                    </div>
                  </motion.div>
                )}

                {/* 4. Data Table */}
                {viewMode === 'table' && (
                  <motion.div
                    key="table-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="overflow-x-auto w-full"
                  >
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-white/10 text-gray-400 font-bold uppercase tracking-wider text-[9px] bg-white/5">
                          <th className="py-3 px-4 cursor-pointer" onClick={() => handleSort('rank')}>
                            <span className="flex items-center gap-1">Rank <ArrowUpDown className="w-3 h-3" /></span>
                          </th>
                          <th className="py-3 px-4 cursor-pointer" onClick={() => handleSort('city')}>
                            <span className="flex items-center gap-1">City <ArrowUpDown className="w-3 h-3" /></span>
                          </th>
                          {activeSegment === 'telugu' && <th className="py-3 px-4">Target Outlets</th>}
                          <th className="py-3 px-4 cursor-pointer text-right" onClick={() => handleSort('ordersRaw')}>
                            <span className="flex items-center gap-1 justify-end">Orders / Day <ArrowUpDown className="w-3 h-3" /></span>
                          </th>
                          <th className="py-3 px-4 text-right">Orders / Month</th>
                          <th className="py-3 px-4 text-right">Orders / Year</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {processedData.map((row) => (
                          <tr 
                            key={row.city}
                            onMouseEnter={() => setHoveredCity(row.city)}
                            onMouseLeave={() => setHoveredCity(null)}
                            className={`transition-colors duration-200 cursor-pointer ${
                              row.city === hoveredCity ? 'bg-brand-blue/10 text-white' : 'hover:bg-white/5 text-gray-300'
                            }`}
                          >
                            <td className="py-3.5 px-4 font-bold">{row.rank}</td>
                            <td className="py-3.5 px-4 font-bold flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-brand-cyan" /> {row.city}
                            </td>
                            {activeSegment === 'telugu' && <td className="py-3.5 px-4 text-gray-500">{row.outlets}</td>}
                            <td className="py-3.5 px-4 text-right font-extrabold text-white">
                              {row.dailyOrders.toLocaleString()}
                            </td>
                            <td className="py-3.5 px-4 text-right font-semibold text-brand-teal">{row.monthlyOrders}</td>
                            <td className="py-3.5 px-4 text-right font-semibold text-brand-cyan">{row.yearlyOrders}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

          {/* Right Column: Key metrics summaries & cards (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            
            <AnimatePresence mode="wait">
              {activeSegment === 'telugu' ? (
                <motion.div
                  key="telugu-right"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {/* KPI card stack */}
                  <div className="p-5 rounded-2xl glass-card border-white/5 relative overflow-hidden group hover:border-brand-blue/30 transition-all duration-300">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mb-1">Daily Orders SOM</span>
                    <div className="text-3xl font-black text-white">2.40 Lakh+</div>
                  </div>

                  <div className="p-5 rounded-2xl glass-card border-white/5 relative overflow-hidden group hover:border-brand-cyan/30 transition-all duration-300">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mb-1">Monthly Orders SOM</span>
                    <div className="text-3xl font-black text-white">72 Lakh+</div>
                  </div>

                  <div className="p-5 rounded-2xl glass-card border-white/5 relative overflow-hidden group hover:border-brand-teal/30 transition-all duration-300">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mb-1">Yearly Orders SOM</span>
                    <div className="text-3xl font-black text-white">8.77 Crore+</div>
                  </div>

                  {/* Sizing Assumptions Box */}
                  <div className="p-5 rounded-3xl bg-[#111827]/40 border border-white/5 text-left flex gap-3.5 backdrop-blur-xl">
                    <div className="w-9 h-9 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0 mt-0.5">
                      <Info className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white mb-1">Market Sizing Assumption</h5>
                      <p className="text-[10.5px] text-gray-400 leading-relaxed">
                        The estimates are based on targeting only the top 1,000 restaurants and 250 cafés in each city. These figures represent the organized takeaway and dine-in market that can realistically be served during expansion and intentionally avoid overstating the market size.
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="india-right"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="p-5 rounded-2xl glass-card border-white/5 relative overflow-hidden group hover:border-brand-blue/30 transition-all duration-300">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mb-1">Daily TAM Orders</span>
                    <div className="text-3xl font-black text-white">15.2 Lakh+</div>
                  </div>

                  <div className="p-5 rounded-2xl glass-card border-white/5 relative overflow-hidden group hover:border-brand-cyan/30 transition-all duration-300">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mb-1">Monthly TAM Orders</span>
                    <div className="text-3xl font-black text-white">4.56 Crore+</div>
                  </div>

                  <div className="p-5 rounded-2xl glass-card border-white/5 relative overflow-hidden group hover:border-brand-teal/30 transition-all duration-300">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mb-1">Yearly TAM Orders</span>
                    <div className="text-3xl font-black text-white">55.5 Crore+</div>
                  </div>

                  <div className="p-5 rounded-2xl glass-card border-white/5 relative overflow-hidden group hover:border-brand-blue/30 transition-all duration-300">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mb-1">Expansion Focus</span>
                    <div className="text-3xl font-black text-white">10 Major Cities</div>
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
