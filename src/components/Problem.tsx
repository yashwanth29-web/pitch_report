import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle, TrendingDown, Clock, AlertTriangle, ArrowRight, Sparkles, DollarSign } from 'lucide-react';

export default function Problem() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="problem" className="relative py-32 bg-[#0B1220] overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-cyan tracking-widest uppercase mb-3">Dine-In & Takeaway Inefficiency</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none mb-6">
            The Food Waiting Time Problem
          </h3>
          <p className="text-gray-400 text-lg">
            Traditional food apps focus entirely on delivery, forcing commuters, office employees, and students to wait 20+ minutes at counters or tables just to pick up or eat their food.
          </p>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: List of Challenges */}
          <div className="lg:col-span-6 space-y-10 text-left">
            
            {/* Customer Section */}
            <div>
              <h4 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <span className="w-1.5 h-6 rounded bg-red-500" />
                Customer Pain Points
              </h4>
              <ul className="space-y-4">
                {[
                  { title: "No Route Commute Discovery", desc: "Travelers from X to Y cannot map their path to pre-order and grab food 20 minutes before starting." },
                  { title: "Peak Canteen & Lunch Waiting", desc: "Office employees and students waste 20-30 minutes of their short breaks waiting for food prep." },
                  { title: "No Custom Radius pre-ordering", desc: "Unable to set a radius (like 3 km) or search specific spots to pre-order and dine-in or pickup." },
                  { title: "Inflated Menu & Delivery Pricing", desc: "Paying 25% marked up menu items plus compounded delivery fees for a nearby spot." }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3 items-start"
                  >
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm font-semibold">{item.title}</strong>
                      <span className="text-xs text-gray-400 mt-0.5 block">{item.desc}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Restaurant Section */}
            <div>
              <h4 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <span className="w-1.5 h-6 rounded bg-red-500" />
                Restaurant Pain Points
              </h4>
              <ul className="space-y-4">
                {[
                  { title: "Aggressive Commission Rates (25-30%)", desc: "Aggregators slice off margins, pushing restaurants to live on breakeven profit." },
                  { title: "Zero Customer Identity & Data Ownership", desc: "Aggregators hide buyer names, numbers, and profiles, preventing direct loyalty loops." },
                  { title: "Compelled Deep Discounting", desc: "Restaurants are forced into discounting programs to gain visibility inside search feeds." }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index + 4) * 0.1 }}
                    className="flex gap-3 items-start"
                  >
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm font-semibold">{item.title}</strong>
                      <span className="text-xs text-gray-400 mt-0.5 block">{item.desc}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Comparative Infographic Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Swiggy/Zomato Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-[#111827]/40 border border-red-500/20 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 blur-2xl rounded-full" />
              
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h5 className="text-xs font-bold text-red-400 uppercase tracking-widest">Aggregators</h5>
                  <p className="text-lg font-bold text-white mt-0.5">Zomato / Swiggy Delivery</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-red-950/30 border border-red-900/30 text-red-400 text-xs font-bold">
                  25-30% Commissions
                </div>
              </div>

              <div className="space-y-3.5 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-gray-400 flex items-center gap-2"><DollarSign className="w-4 h-4 text-red-400" /> Menu Pricing Markup</span>
                  <span className="text-white font-semibold">+15% to +25%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-gray-400 flex items-center gap-2"><Clock className="w-4 h-4 text-red-400" /> Average Customer Wait Time</span>
                  <span className="text-white font-semibold">45 - 60 Mins</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-gray-400 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-red-400" /> Extra Fees (Delivery, Platform, Rain)</span>
                  <span className="text-white font-semibold">₹40 - ₹80 per order</span>
                </div>
              </div>
            </motion.div>

            {/* VS Badge */}
            <div className="flex justify-center my-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-blue to-brand-cyan flex items-center justify-center font-bold text-white text-xs border border-white/10 shadow-lg">
                VS
              </div>
            </div>

            {/* PICK Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#111827]/80 to-[#14B8A6]/5 border border-brand-teal/30 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/10 blur-3xl rounded-full" />
              
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h5 className="text-xs font-bold text-brand-teal uppercase tracking-widest">Next Gen Marketplace</h5>
                  <p className="text-lg font-bold text-white mt-0.5">PICK Pre-Ordering</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-brand-teal/20 border border-brand-teal/30 text-brand-teal text-xs font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> ₹18 Flat Fee
                </div>
              </div>

              <div className="space-y-3.5 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-gray-400 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-teal" /> Menu Pricing Markup</span>
                  <span className="text-brand-teal font-extrabold">0% (True Menu Prices)</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-gray-400 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-teal" /> Average Customer Wait Time</span>
                  <span className="text-brand-teal font-extrabold">0 Mins (Pick & Dine-in ready)</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-gray-400 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-teal" /> Extra Fees (Delivery, Platform, Rain)</span>
                  <span className="text-brand-teal font-extrabold">₹0 (Zero Charges)</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
