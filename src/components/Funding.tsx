import React from 'react';
import { motion } from 'framer-motion';
import { Target, CalendarRange, Landmark, ShieldCheck, Milestone, Check } from 'lucide-react';

export default function Funding() {
  const rounds = [
    {
      round: 'Pre-Seed',
      year: 'Year 1',
      ask: '₹6.5 Crore',
      runway: '18 Months',
      useOfFunds: 'Initial product tech development, restaurant sales hiring, and customer acquisition launch in Hyderabad sandbox.',
      milestones: [
        'Onboard 1,500 restaurants',
        '2,600 avg daily orders',
        '₹1.71 Crore Year-1 ARR'
      ],
      color: '#2563EB',
      glowing: true
    },
    {
      round: 'Seed',
      year: 'Year 2',
      ask: '₹8 Crore',
      runway: '18 Months',
      useOfFunds: 'Product features automation, expanding sales pipeline to secure market share inside Hyderabad.',
      milestones: [
        'Onboard 4,000 restaurants',
        '15,100 avg daily orders',
        '₹9.90 Crore Year-2 ARR'
      ],
      color: '#06B6D4',
      glowing: false
    },
    {
      round: 'Series A',
      year: 'Year 3',
      ask: '₹15 Crore',
      runway: '24 Months',
      useOfFunds: 'Regional scaling across Telangana & Andhra Pradesh (3 primary cities). Setting up support nodes.',
      milestones: [
        'Onboard 8,000 restaurants',
        '42,500 avg daily orders',
        '₹27.90 Crore Year-3 ARR'
      ],
      color: '#14B8A6',
      glowing: false
    },
    {
      round: 'Series B',
      year: 'Year 5',
      ask: '₹30 Crore',
      runway: '24 Months',
      useOfFunds: 'Geographic scaling across 8 major cities in TS & AP. Marketing launch campaigns.',
      milestones: [
        'Onboard 25,000 restaurants',
        '1.6L avg daily orders',
        '₹109.80 Crore ARR'
      ],
      color: '#8B5CF6',
      glowing: false
    },
    {
      round: 'Series C',
      year: 'Year 7',
      ask: '₹45 Crore',
      runway: '36 Months',
      useOfFunds: 'Expansion into 10 major Indian metropolitan hubs. Scaling corporate partnerships.',
      milestones: [
        'Onboard 60,000 restaurants',
        '6L avg daily orders',
        '₹399.60 Crore ARR'
      ],
      color: '#EC4899',
      glowing: false
    }
  ];

  return (
    <section id="funding" className="relative py-32 bg-[#0B1220] overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-cyan tracking-widest uppercase mb-3">Investment Timeline</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none mb-6">
            Funding Rounds & Milestones
          </h3>
          <p className="text-gray-400 text-lg">
            Capital requirements mapped to key growth drivers, strategic target thresholds, and business runways.
          </p>
        </div>

        {/* Pricing Cards list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {rounds.map((round, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl flex flex-col justify-between relative overflow-hidden h-[480px] ${
                round.glowing 
                  ? 'border border-brand-blue bg-[#111827] shadow-xl shadow-brand-blue/10' 
                  : 'border border-white/5 bg-[#111827]/40 hover:border-white/10 transition-colors'
              }`}
            >
              {round.glowing && (
                <div className="absolute top-0 right-0 bg-brand-blue text-white text-[9px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-widest">
                  Current Round
                </div>
              )}

              <div>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mb-1">
                  {round.year}
                </span>
                <h4 className="text-xl font-bold text-white mb-2">{round.round}</h4>
                <div className="text-2xl font-black text-white mb-4" style={{ color: round.glowing ? '#2563EB' : 'white' }}>
                  {round.ask}
                </div>
                <div className="h-px bg-white/5 my-3" />
                
                <div className="flex gap-2 items-center text-[10px] text-gray-400 mb-4 font-bold bg-white/5 px-2.5 py-1 rounded-lg w-fit">
                  <CalendarRange className="w-3.5 h-3.5 text-brand-cyan" /> {round.runway} Runway
                </div>

                <p className="text-[11px] text-gray-400 leading-relaxed mb-6">
                  {round.useOfFunds}
                </p>
              </div>

              {/* Milestones list */}
              <div>
                <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider block mb-2 flex items-center gap-1">
                  <Target className="w-3 h-3 text-brand-cyan" /> Targets to Unlock Next Round
                </span>
                <ul className="space-y-1.5 text-[10px]">
                  {round.milestones.map((milestone, idx) => (
                    <li key={idx} className="flex gap-2 items-center text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                      <span>{milestone}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
