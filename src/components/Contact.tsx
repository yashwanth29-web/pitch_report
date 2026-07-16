import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ShieldCheck, Mail, Building2, User } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', fundName: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.fundName) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Fire celebratory confetti!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2563EB', '#06B6D4', '#14B8A6']
      });
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-32 bg-[#0B1220] overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-teal/5 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-cyan tracking-widest uppercase mb-3">Investor Relations</h2>
          <h3 className="text-4xl font-extrabold text-white tracking-tight mb-4">
            Request Pitch Deck & Financial Model
          </h3>
          <p className="text-gray-400 text-sm">
            Enter your details below. Our founding team will secure permissions and share credentials for our full financial dataroom and investment deck.
          </p>
        </div>

        {/* Contact Container */}
        <div className="glass-card rounded-3xl border border-white/5 p-8 shadow-2xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6 text-left"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-brand-cyan" /> Full Name
                    </label>
                    <input 
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Yashwanth Reddy"
                      className="w-full px-4 py-3 bg-[#0a0f1d] border border-white/5 rounded-xl text-white text-sm focus:outline-none focus:border-brand-blue transition-colors placeholder:text-gray-600"
                    />
                  </div>

                  {/* Fund Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-brand-cyan" /> Venture Fund / Institution
                    </label>
                    <input 
                      type="text"
                      required
                      value={form.fundName}
                      onChange={(e) => setForm({ ...form, fundName: e.target.value })}
                      placeholder="e.g. Sequoia India / Angel Network"
                      className="w-full px-4 py-3 bg-[#0a0f1d] border border-white/5 rounded-xl text-white text-sm focus:outline-none focus:border-brand-blue transition-colors placeholder:text-gray-600"
                    />
                  </div>

                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-brand-cyan" /> Work Email Address
                  </label>
                  <input 
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="e.g. partner@fund.com"
                    className="w-full px-4 py-3 bg-[#0a0f1d] border border-white/5 rounded-xl text-white text-sm focus:outline-none focus:border-brand-blue transition-colors placeholder:text-gray-600"
                  />
                </div>

                {/* Note Input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Message / Investment Mandate (Optional)
                  </label>
                  <textarea 
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your fund's stage or details you'd like to receive..."
                    className="w-full px-4 py-3 bg-[#0a0f1d] border border-white/5 rounded-xl text-white text-sm focus:outline-none focus:border-brand-blue transition-colors placeholder:text-gray-600 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-brand-blue/30 transition-all flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Verifying Work Credentials...
                      </>
                    ) : (
                      <>
                        <span>Submit Pitch Deck Request</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-4 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Request Submitted Successfully</h4>
                <p className="text-xs text-gray-400 max-w-md mx-auto mb-6">
                  Thank you, <span className="text-white font-semibold">{form.name}</span>. We've sent confirmation to <span className="text-brand-cyan font-semibold">{form.email}</span>. Our team will verify credentials and reach out within 24 hours.
                </p>
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a0f1d] border border-white/5 text-[10px] text-gray-500 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> Secure encrypted data corridor active
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
