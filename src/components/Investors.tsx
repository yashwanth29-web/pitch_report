import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Flame, Layers, Award, HeartHandshake, Zap } from 'lucide-react';

export default function Investors() {
  const points = [
    {
      num: '6-10x',
      title: 'Order Volume Growth',
      desc: 'Enabling customer dine-in pre-ordering removes typical peak-hour tables bottleneck for restaurants, multiplying daily orders.',
      icon: <Flame className="w-5 h-5 text-brand-cyan" />
    },
    {
      num: '90%+',
      title: 'Restaurant Retention',
      desc: 'Since we save them ₹150+ commission fees per order, restaurants naturally become extremely sticky partner platforms.',
      icon: <HeartHandshake className="w-5 h-5 text-brand-teal" />
    },
    {
      num: '₹18',
      title: 'Flat Fee Unit Economics',
      desc: 'Predictable pricing eliminates transaction friction and encourages heavy repeated baskets compared to delivery.',
      icon: <Zap className="w-5 h-5 text-brand-blue" />
    },
    {
      num: '12x',
      title: 'SaaS Expansion Multiplier',
      desc: 'Low overhead costs (no fleet management, no delivery operations) allow fast geographic scaling and solid margins.',
      icon: <Layers className="w-5 h-5 text-brand-cyan" />
    },
    {
      num: '2.4x',
      title: 'Network Effects Co-efficient',
      desc: 'As more restaurants put PICK QR stickers on tables, organic customer acquisitions scale rapidly with zero acquisition cost.',
      icon: <Award className="w-5 h-5 text-brand-teal" />
    },
    {
      num: '35%+',
      title: 'Customer Repeat Rate',
      desc: 'Office workers ordering their daily takeaways pre-arrival make the platform a utility in their daily routine.',
      icon: <ShieldCheck className="w-5 h-5 text-brand-blue" />
    }
  ];

  return (
    <section className="relative py-32 bg-[#0B1220] overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-blue/5 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-cyan tracking-widest uppercase mb-3">Why Invest in PICK?</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none mb-6">
            The Investment Thesis
          </h3>
          <p className="text-gray-400 text-lg">
            High operating leverage, sticky restaurant relationships, and zero delivery operations liability make PICK a highly scalable platform.
          </p>
        </div>

        {/* Thesis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-3xl glass-card border-white/5 hover:border-brand-blue/20 transition-all duration-300 flex flex-col justify-between h-[250px] text-left group"
            >
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  {point.icon}
                </div>
                <span className="text-3xl font-black text-white group-hover:text-brand-cyan transition-colors">
                  {point.num}
                </span>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-2">{point.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
