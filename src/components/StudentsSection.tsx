import { motion } from 'framer-motion';

const StudentsSection = () => {
  const areas = ["Knighton", "Clarendon Park", "Bede Island", "West End"];

  return (
    <section id="students" className="relative py-20 md:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-accent opacity-[0.03]" />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-16 relative z-10">
        <div className="w-full lg:w-1/2">
          <span className="text-accent text-xs font-headline uppercase tracking-[0.4em] mb-4 block">Specialized Lettings</span>
          <h2 className="text-5xl md:text-7xl font-bebas leading-[0.9] mb-8">
            Leicester <span className="text-accent italic">Student</span> Housing
          </h2>
          <p className="text-muted text-base md:text-lg font-light leading-relaxed mb-8 md:mb-12">
            Serving both the University of Leicester and De Montfort University with premium student accommodation in the city's most desirable areas.
          </p>
          
          <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
            {areas.map((area, i) => (
              <motion.div 
                key={area}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 md:gap-4 group cursor-default"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-[2] transition-transform" />
                <span className="text-lg md:text-xl font-bebas tracking-wide group-hover:text-accent transition-colors">{area}</span>
              </motion.div>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto bg-accent text-black px-12 py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em]"
          >
            View Student Properties
          </motion.button>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="aspect-[4/5] bg-surface rounded-2xl md:rounded-3xl overflow-hidden mt-8 md:mt-12"
          >
            <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80" alt="Student" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="aspect-[4/5] bg-surface rounded-2xl md:rounded-3xl overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000" alt="Study" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudentsSection;
