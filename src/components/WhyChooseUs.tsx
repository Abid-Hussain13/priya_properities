import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const cards = [
    { title: "Exclusive Sales", image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80", number: "01" },
    { title: "Premium Lettings", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80", number: "02" },
    { title: "Student Specialist", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80", number: "03" }
  ];

  return (
    <section className="bg-white py-20 md:py-32 text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12 lg:gap-20">
        <div className="lg:w-1/3">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            className="text-[10px] uppercase font-headline tracking-[0.4em] mb-4 block"
          >
            Since 1986 // Priya Properties
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bebas leading-[0.9] mb-8"
          >
            Why Choose Us for Your <span className="text-accent italic">Next Property?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted text-sm font-light leading-relaxed max-w-sm mb-12"
          >
            With over three decades of experience in the Leicester market, we combine local expertise with a premium service approach that sets us apart from standard agents.
          </motion.p>
          <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="px-10 py-4 border border-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
          >
            Our Full Story
          </motion.button>
        </div>

        <div className="lg:w-2/3 flex flex-col md:flex-row gap-8 items-start">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex-1 w-full md:w-auto md:mt-[var(--margin-top)]"
              style={{ '--margin-top': `${idx * 60}px` } as any}
            >
              <div className="aspect-[3/4] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden mb-6">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <div className="flex justify-between items-end">
                <h3 className="text-2xl font-bebas tracking-wide">{card.title}</h3>
                <span className="text-[10px] font-headline opacity-40">\ {card.number}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
