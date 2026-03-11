import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Dramatically increase movement for better visibility
  // y1: Image moves slightly slower than scroll (parallax)
  // y2: Background text moves up faster
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const imgY = useTransform(scrollY, [0, 1000], [0, -150]); // Image moves inside container

  return (
    <section className="relative h-[100svh] w-full overflow-hidden flex items-center justify-center">
      {/* Main Image Container */}
      <motion.div 
        style={{ y: y1 }}
        className="relative z-10 w-[95%] md:w-[85%] h-[60%] md:h-[80%] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent z-20 opacity-60" />
        <motion.div 
          style={{ y: imgY, scale: 1.2 }} // Increased scale to allow movement without showing edges
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Architecture" 
            className="w-full h-[120%] object-cover" // Made taller to support internal parallax
          />
        </motion.div>
      </motion.div>

      {/* Tagline Stack - Top Left */}
      <div className="absolute top-[12%] md:top-[20%] left-[5%] md:left-[10%] z-30 text-white flex flex-col items-start gap-1">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="text-accent text-[10px] md:text-xs font-headline uppercase tracking-[0.3em]"
        >
          Excellence // Leicester Lettings
        </motion.span>
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="text-xs md:text-sm font-light opacity-60 tracking-widest"
        >
          TRUSTED SINCE 1986
        </motion.span>
      </div>

      {/* Short Description - Bottom Right */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-[10%] md:bottom-[15%] right-[5%] md:right-[10%] z-30 max-w-[240px] md:max-w-[300px] text-right"
      >
        <p className="text-xs md:text-sm font-light leading-relaxed opacity-80 uppercase tracking-widest">
          Redefining luxury living in the heart of <span className="text-accent italic">Leicester</span>. Expert guidance for sales & lettings.
        </p>
      </motion.div>

      {/* Stats Card - Bottom Left */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: 'spring' }}
        className="absolute bottom-[12%] left-[12%] z-40 bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl hidden lg:block"
      >
        <div className="text-xs uppercase tracking-widest opacity-60 mb-1">Established</div>
        <div className="text-3xl font-bebas text-accent leading-none">38+ YEARS</div>
      </motion.div>
    </section>
  );
};

export default Hero;
