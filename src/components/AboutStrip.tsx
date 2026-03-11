import { motion } from 'framer-motion';

const AboutStrip = () => {
  return (
    <section className="bg-surface py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 relative">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-[80%] aspect-square rounded-3xl overflow-hidden shadow-2xl z-10 relative"
          >
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80" alt="Office" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-10 -right-5 w-[60%] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl z-20 border-8 border-surface"
          >
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80" alt="Team" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <div className="lg:w-1/2">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            className="text-[10px] uppercase font-headline tracking-[0.4em] mb-4 block"
          >
            Who We Are
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl font-bebas leading-[0.9] mb-8"
          >
            An Independent Voice in <span className="text-accent italic">Leicester Real Estate</span>
          </motion.h2>
          <div className="space-y-6 text-muted text-sm font-light leading-relaxed tracking-wide">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Established in 1986, Priya Properties has grown to become one of Leicester's most respected independent estate and letting agents. Our deep roots in the community allow us to provide unparalleled insights into the local market.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              We pride ourselves on our boutique approach, offering bespoke services including in-house professional photography, comprehensive managed lettings, and strong links with both the University of Leicester and De Montfort University.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex items-center gap-8"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bebas text-accent">1986</span>
              <span className="text-[10px] uppercase tracking-widest opacity-40">ESTABLISHED</span>
            </div>
            <div className="w-[1px] h-10 bg-border" />
            <div className="flex flex-col">
              <span className="text-3xl font-bebas text-accent">100%</span>
              <span className="text-[10px] uppercase tracking-widest opacity-40">INDEPENDENT</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutStrip;
