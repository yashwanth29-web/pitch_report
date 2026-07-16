import React, { useState } from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  Legend
} from 'recharts';
import { DollarSign, TrendingUp, Landmark, PieChart as PieIcon, Calculator } from 'lucide-react';

export default function Financials() {
  const [activeTab, setActiveTab] = useState<'projections' | 'monthly' | 'budget'>('projections');

  // 7-Year projections data
  const yearlyData = [
    { year: 'Year 1', revenue: 1.71, restaurants: 1500, label: '₹1.71 Cr' },
    { year: 'Year 2', revenue: 9.90, restaurants: 4000, label: '₹9.90 Cr' },
    { year: 'Year 3', revenue: 27.90, restaurants: 8000, label: '₹27.90 Cr' },
    { year: 'Year 4', revenue: 59.40, restaurants: 15000, label: '₹59.40 Cr' },
    { year: 'Year 5', revenue: 109.80, restaurants: 25000, label: '₹109.80 Cr' },
    { year: 'Year 6', revenue: 219.60, restaurants: 40000, label: '₹219.60 Cr' },
    { year: 'Year 7', revenue: 399.60, restaurants: 60000, label: '₹399.60 Cr' }
  ];

  const [selectedYear, setSelectedYear] = useState<number>(1);

  const monthlyProjectionsByYear: Record<number, {
    expenseLabel: string;
    description: string;
    data: { month: string; revenue: number; expense: number; burn: number }[];
  }> = {
    1: {
      expenseLabel: "Average Monthly Operating Expense: ₹53L",
      description: "Steady ₹53L monthly expense vs. monthly revenue growth. Burn reduces to ₹11L by Month 12.",
      data: [
        { month: 'Month 1', revenue: 0, expense: 53, burn: 53 },
        { month: 'Month 2', revenue: 0, expense: 53, burn: 53 },
        { month: 'Month 3', revenue: 0, expense: 53, burn: 53 },
        { month: 'Month 4', revenue: 2.5, expense: 53, burn: 50.5 },
        { month: 'Month 5', revenue: 5.0, expense: 53, burn: 48 },
        { month: 'Month 6', revenue: 8.0, expense: 53, burn: 45 },
        { month: 'Month 7', revenue: 12.0, expense: 53, burn: 41 },
        { month: 'Month 8', revenue: 17.0, expense: 53, burn: 36 },
        { month: 'Month 9', revenue: 22.0, expense: 53, burn: 31 },
        { month: 'Month 10', revenue: 28.0, expense: 53, burn: 25 },
        { month: 'Month 11', revenue: 34.0, expense: 53, burn: 19 },
        { month: 'Month 12', revenue: 42.0, expense: 53, burn: 11 }
      ]
    },
    2: {
      expenseLabel: "Average Monthly Operating Expense: ₹65L",
      description: "Scaling out Hyderabad sandbox operations. Platform hits positive cashflow margins around Month 8.",
      data: [
        { month: 'Month 1', revenue: 45, expense: 65, burn: 20 },
        { month: 'Month 2', revenue: 50, expense: 65, burn: 15 },
        { month: 'Month 3', revenue: 55, expense: 65, burn: 10 },
        { month: 'Month 4', revenue: 60, expense: 65, burn: 5 },
        { month: 'Month 5', revenue: 68, expense: 65, burn: -3 },
        { month: 'Month 6', revenue: 75, expense: 65, burn: -10 },
        { month: 'Month 7', revenue: 82, expense: 65, burn: -17 },
        { month: 'Month 8', revenue: 90, expense: 65, burn: -25 },
        { month: 'Month 9', revenue: 100, expense: 65, burn: -35 },
        { month: 'Month 10', revenue: 110, expense: 65, burn: -45 },
        { month: 'Month 11', revenue: 120, expense: 65, burn: -55 },
        { month: 'Month 12', revenue: 135, expense: 65, burn: -70 }
      ]
    },
    3: {
      expenseLabel: "Average Monthly Operating Expense: ₹1.2 Cr",
      description: "Regional scaling to 3 major cities. Large revenue margins supporting infrastructure.",
      data: [
        { month: 'Month 1', revenue: 150, expense: 120, burn: -30 },
        { month: 'Month 2', revenue: 165, expense: 120, burn: -45 },
        { month: 'Month 3', revenue: 180, expense: 120, burn: -60 },
        { month: 'Month 4', revenue: 195, expense: 120, burn: -75 },
        { month: 'Month 5', revenue: 210, expense: 120, burn: -90 },
        { month: 'Month 6', revenue: 225, expense: 120, burn: -105 },
        { month: 'Month 7', revenue: 240, expense: 120, burn: -120 },
        { month: 'Month 8', revenue: 255, expense: 120, burn: -135 },
        { month: 'Month 9', revenue: 270, expense: 120, burn: -150 },
        { month: 'Month 10', revenue: 285, expense: 120, burn: -165 },
        { month: 'Month 11', revenue: 300, expense: 120, burn: -180 },
        { month: 'Month 12', revenue: 310, expense: 120, burn: -190 }
      ]
    },
    4: {
      expenseLabel: "Average Monthly Operating Expense: ₹2.2 Cr",
      description: "Expanding regional density. Reaching massive cashflow velocity.",
      data: [
        { month: 'Month 1', revenue: 350, expense: 220, burn: -130 },
        { month: 'Month 2', revenue: 375, expense: 220, burn: -155 },
        { month: 'Month 3', revenue: 400, expense: 220, burn: -180 },
        { month: 'Month 4', revenue: 425, expense: 220, burn: -205 },
        { month: 'Month 5', revenue: 450, expense: 220, burn: -230 },
        { month: 'Month 6', revenue: 480, expense: 220, burn: -260 },
        { month: 'Month 7', revenue: 510, expense: 220, burn: -290 },
        { month: 'Month 8', revenue: 540, expense: 220, burn: -320 },
        { month: 'Month 9', revenue: 570, expense: 220, burn: -350 },
        { month: 'Month 10', revenue: 600, expense: 220, burn: -380 },
        { month: 'Month 11', revenue: 620, expense: 220, burn: -400 },
        { month: 'Month 12', revenue: 640, expense: 220, burn: -420 }
      ]
    },
    5: {
      expenseLabel: "Average Monthly Operating Expense: ₹3.8 Cr",
      description: "Strategic scaling across 8 cities in Telangana and Andhra Pradesh.",
      data: [
        { month: 'Month 1', revenue: 680, expense: 380, burn: -300 },
        { month: 'Month 2', revenue: 720, expense: 380, burn: -340 },
        { month: 'Month 3', revenue: 760, expense: 380, burn: -380 },
        { month: 'Month 4', revenue: 800, expense: 380, burn: -420 },
        { month: 'Month 5', revenue: 840, expense: 380, burn: -460 },
        { month: 'Month 6', revenue: 880, expense: 380, burn: -500 },
        { month: 'Month 7', revenue: 920, expense: 380, burn: -540 },
        { month: 'Month 8', revenue: 960, expense: 380, burn: -580 },
        { month: 'Month 9', revenue: 1000, expense: 380, burn: -620 },
        { month: 'Month 10', revenue: 1050, expense: 380, burn: -670 },
        { month: 'Month 11', revenue: 1100, expense: 380, burn: -720 },
        { month: 'Month 12', revenue: 1150, expense: 380, burn: -770 }
      ]
    },
    6: {
      expenseLabel: "Average Monthly Operating Expense: ₹7.0 Cr",
      description: "Tier-1 cities expansion active. Robust revenue growth covering operational cost lines.",
      data: [
        { month: 'Month 1', revenue: 1300, expense: 700, burn: -600 },
        { month: 'Month 2', revenue: 1400, expense: 700, burn: -700 },
        { month: 'Month 3', revenue: 1500, expense: 700, burn: -800 },
        { month: 'Month 4', revenue: 1600, expense: 700, burn: -900 },
        { month: 'Month 5', revenue: 1700, expense: 700, burn: -1000 },
        { month: 'Month 6', revenue: 1800, expense: 700, burn: -1100 },
        { month: 'Month 7', revenue: 1900, expense: 700, burn: -1200 },
        { month: 'Month 8', revenue: 2000, expense: 700, burn: -1300 },
        { month: 'Month 9', revenue: 2100, expense: 700, burn: -1400 },
        { month: 'Month 10', revenue: 2200, expense: 700, burn: -1500 },
        { month: 'Month 11', revenue: 2250, expense: 700, burn: -1550 },
        { month: 'Month 12', revenue: 2300, expense: 700, burn: -1600 }
      ]
    },
    7: {
      expenseLabel: "Average Monthly Operating Expense: ₹12.5 Cr",
      description: "Pan-India dominance across 10 major hubs. Clear path to high profitability yields.",
      data: [
        { month: 'Month 1', revenue: 2400, expense: 1250, burn: -1150 },
        { month: 'Month 2', revenue: 2600, expense: 1250, burn: -1350 },
        { month: 'Month 3', revenue: 2800, expense: 1250, burn: -1550 },
        { month: 'Month 4', revenue: 3000, expense: 1250, burn: -1750 },
        { month: 'Month 5', revenue: 3200, expense: 1250, burn: -1950 },
        { month: 'Month 6', revenue: 3400, expense: 1250, burn: -2150 },
        { month: 'Month 7', revenue: 3600, expense: 1250, burn: -2350 },
        { month: 'Month 8', revenue: 3800, expense: 1250, burn: -2550 },
        { month: 'Month 9', revenue: 3900, expense: 1250, burn: -2650 },
        { month: 'Month 10', revenue: 4000, expense: 1250, burn: -2750 },
        { month: 'Month 11', revenue: 4100, expense: 1250, burn: -2850 },
        { month: 'Month 12', revenue: 4200, expense: 1250, burn: -2950 }
      ]
    }
  };

  // Pre-seed Budget allocation (₹6.50 Crore)
  const budgetAllocation = [
    { name: 'Sales & Marketing', value: 2.10, percent: '33%', color: '#2563EB' },
    { name: 'Team Salaries', value: 2.00, percent: '32%', color: '#06B6D4' },
    { name: 'Office & Operations', value: 1.17, percent: '19%', color: '#14B8A6' },
    { name: 'Product & Technology', value: 0.97, percent: '15%', color: '#F59E0B' },
    { name: 'Legal & Compliance', value: 0.32, percent: '5%', color: '#EF4444' },
    { name: 'Contingency & Reserves', value: 0.94, percent: '14%', color: '#8B5CF6' }
  ];

  return (
    <section id="financials" className="relative py-32 bg-[#0B1220] overflow-hidden border-t border-white/5">
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-brand-teal/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-cyan tracking-widest uppercase mb-3">Financial Dashboard</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none mb-6">
            Projections & Budget Allocations
          </h3>
          <p className="text-gray-400 text-lg">
            A granular projection mapping our 7-year growth, Year 1 launch burn rate, and capital deployment metrics.
          </p>
        </div>

        {/* Chart Selector Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('projections')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all border flex items-center gap-2 ${
              activeTab === 'projections' 
                ? 'bg-brand-blue text-white border-brand-blue/40 shadow-lg shadow-brand-blue/15' 
                : 'bg-white/5 text-gray-400 border-white/5 hover:border-white/10 hover:text-white'
            }`}
          >
            <TrendingUp className="w-4 h-4" /> 7-Year projections
          </button>
          
          <button
            onClick={() => setActiveTab('monthly')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all border flex items-center gap-2 ${
              activeTab === 'monthly' 
                ? 'bg-brand-cyan text-brand-dark border-brand-cyan/40 shadow-lg shadow-brand-cyan/15' 
                : 'bg-white/5 text-gray-400 border-white/5 hover:border-white/10 hover:text-white'
            }`}
          >
            <Calculator className="w-4 h-4" /> Year 1 Burn vs Revenue
          </button>
          
          <button
            onClick={() => setActiveTab('budget')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all border flex items-center gap-2 ${
              activeTab === 'budget' 
                ? 'bg-brand-teal text-white border-brand-teal/40 shadow-lg shadow-brand-teal/15' 
                : 'bg-white/5 text-gray-400 border-white/5 hover:border-white/10 hover:text-white'
            }`}
          >
            <PieIcon className="w-4 h-4" /> Fund Allocations
          </button>
        </div>

        {/* Charts Container */}
        <div className="glass-card rounded-3xl border border-white/5 p-8 shadow-2xl relative">
          
          {activeTab === 'projections' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h4 className="text-lg font-bold text-white">7-Year Projections (ARR & Restaurant Scale)</h4>
                  <p className="text-xs text-gray-400">Projection showing scale reaching ₹399.60 Cr ARR and 60,000 restaurants by Year 7.</p>
                </div>
                <span className="text-[10px] text-brand-cyan font-bold uppercase tracking-wider bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1 rounded-full">
                  CAGR 115%
                </span>
              </div>
              
              <div className="h-96 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={yearlyData}>
                    <defs>
                      <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563EB" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                    <XAxis dataKey="year" stroke="#4b5563" fontSize={11} />
                    <YAxis yAxisId="left" stroke="#4b5563" fontSize={11} label={{ value: 'Revenue (₹ Crore)', angle: -90, position: 'insideLeft', style: { fill: '#9ca3af', fontSize: '11px', fontWeight: 'bold' } }} />
                    <YAxis yAxisId="right" orientation="right" stroke="#4b5563" fontSize={11} label={{ value: 'Restaurants Count', angle: 90, position: 'insideRight', style: { fill: '#9ca3af', fontSize: '11px', fontWeight: 'bold' } }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                      labelStyle={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}
                    />
                    <Area yAxisId="left" type="monotone" dataKey="revenue" name="Annual Revenue (₹ Cr)" stroke="#2563EB" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                    <Bar yAxisId="right" dataKey="restaurants" name="Onboarded Restaurants" fill="#06B6D4" radius={[4, 4, 0, 0]} opacity={0.65} barSize={40} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'monthly' && (
            <div>
              {/* Year Selector Tabs */}
              <div className="flex justify-start gap-2 mb-6 overflow-x-auto pb-2 border-b border-white/5">
                {[1, 2, 3, 4, 5, 6, 7].map((yr) => (
                  <button
                    key={yr}
                    onClick={() => setSelectedYear(yr)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border shrink-0 ${
                      selectedYear === yr 
                        ? 'bg-brand-cyan text-brand-dark border-brand-cyan/40 shadow-lg' 
                        : 'bg-white/5 text-gray-400 border-white/5 hover:border-white/10 hover:text-white'
                    }`}
                  >
                    Year {yr} Projections
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h4 className="text-lg font-bold text-white">Year {selectedYear} Monthly Revenue vs Net Burn</h4>
                  <p className="text-xs text-gray-400 mt-1">{monthlyProjectionsByYear[selectedYear].description}</p>
                </div>
                <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider bg-red-950/20 border border-red-900/30 px-3 py-1.5 rounded-full shrink-0">
                  {monthlyProjectionsByYear[selectedYear].expenseLabel}
                </span>
              </div>
              
              <div className="h-96 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlyProjectionsByYear[selectedYear].data}>
                    <defs>
                      <linearGradient id="colorBurn" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorMonthlyRev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                    <XAxis dataKey="month" stroke="#4b5563" fontSize={11} />
                    <YAxis stroke="#4b5563" fontSize={11} label={{ value: 'Amount (₹ Lakhs)', angle: -90, position: 'insideLeft', style: { fill: '#9ca3af', fontSize: '11px', fontWeight: 'bold' } }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                      labelStyle={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}
                    />
                    <Area type="monotone" dataKey="revenue" name="Estimated Revenue (₹ Lakhs)" stroke="#10B981" strokeWidth={2.5} fillOpacity={1} fill="url(#colorMonthlyRev)" />
                    <Area type="monotone" dataKey="burn" name="Net Monthly Burn (₹ Lakhs)" stroke="#EF4444" strokeWidth={2.5} fillOpacity={1} fill="url(#colorBurn)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'budget' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 h-90 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={budgetAllocation}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={120}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {budgetAllocation.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`₹${value} Crore`, 'Allocation']}
                      contentStyle={{ backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Budget breakdowns list */}
              <div className="lg:col-span-5 space-y-4">
                <h5 className="text-base font-bold text-white mb-4">₹6.50 Crore Pre-Seed Fund Breakdown</h5>
                <div className="space-y-3">
                  {budgetAllocation.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3.5 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-3">
                        <span className="w-3.5 h-3.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                        <span className="text-xs font-semibold text-white">{item.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-white block">₹{item.value} Cr</span>
                        <span className="text-[9px] text-gray-500 block font-bold">{item.percent} allocation</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
