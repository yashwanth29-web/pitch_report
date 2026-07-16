import { motion } from 'framer-motion';
import { Mail, ShieldCheck, Award } from 'lucide-react';

export default function Team() {
  const members = [
    {
      name: 'Yashwanth Reddy',
      role: 'Co-Founder & CEO',
      bio: 'Ex-Product Leader at top foodtech. Built and scaled QR ordering platforms handling 100k+ weekly check-ins.',
      background: 'IIT Madras, Computer Science',
      initials: 'YR'
    },
    {
      name: 'Dr. Srinivas Rao',
      role: 'Co-Founder & CTO',
      bio: 'Deep tech specialist. Built high-concurrency systems, low latency socket architectures, and custom mapping routing routing tools.',
      background: 'BITS Pilani Alumni',
      initials: 'SR'
    },
    {
      name: 'Ananya Sharma',
      role: 'Chief Operating Officer (COO)',
      bio: 'Ex-Operations Lead at Uber. Expert in regional expansion, merchant acquisition pipelines, and localized scaling mechanics.',
      background: 'ISB Hyderabad',
      initials: 'AS'
    },
    {
      name: 'Rohan Verma',
      role: 'VP of Product',
      bio: 'Design specialist. Passionate about building world-class user experiences, micro-interactions, and visual storytelling interfaces.',
      background: 'NID Ahmedabad',
      initials: 'RV'
    },
    {
      name: 'Karan Malhotra',
      role: 'Director of Restaurant Sales',
      bio: 'Acquired over 800+ premium restaurant accounts in past roles. Deep relationships with leading F&B groups in Telangana.',
      background: 'IHM Hyderabad',
      initials: 'KM'
    },
    {
      name: 'Neha Kapoor',
      role: 'Head of Growth Marketing',
      bio: 'Growth hacking expert. Scaled consumer apps from zero to 1M+ active users using highly viral referral rewards frameworks.',
      background: 'MICA Ahmedabad',
      initials: 'NK'
    }
  ];

  return (
    <section id="team" className="relative py-32 bg-[#0B1220] overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-cyan tracking-widest uppercase mb-3">Leadership</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none mb-6">
            The Founding Team
          </h3>
          <p className="text-gray-400 text-lg">
            A combination of veteran operators from Uber, leading Indian food-tech aggregates, and tech architects from top engineering institutes.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl glass-card border-white/5 hover:border-brand-cyan/20 transition-all duration-300 flex flex-col justify-between h-[280px] group relative overflow-hidden"
            >
              {/* Profile Background initials glow */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center font-bold text-white text-base group-hover:bg-brand-cyan/15 group-hover:text-brand-cyan transition-colors">
                {member.initials}
              </div>

              <div>
                <span className="text-[9px] text-brand-cyan uppercase tracking-widest font-extrabold block mb-1">
                  {member.role}
                </span>
                <h4 className="text-lg font-bold text-white mb-2">{member.name}</h4>
                <p className="text-xs text-gray-400 leading-relaxed max-w-[210px] mb-4">
                  {member.bio}
                </p>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-white/5">
                <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">
                  🎓 {member.background}
                </span>
                <div className="flex gap-2">
                  <button className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </button>
                  <button className="text-gray-500 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
