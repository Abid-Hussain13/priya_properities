import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="bg-bg py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="text-accent text-xs font-headline uppercase tracking-[0.4em] mb-4 block">Get In Touch</span>
        <h2 className="text-7xl md:text-9xl font-bebas leading-[0.85] mb-12">
          Start Your <span className="text-accent italic">Journey</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12 text-xl font-bebas tracking-wide mb-24 opacity-80">
          <div className="flex items-center gap-3">
            <span className="text-accent opacity-60">📞</span> 0116 255 9950
          </div>
          <div className="hidden md:block text-border">·</div>
          <div className="flex items-center gap-3">
            <span className="text-accent opacity-60">✉</span> [email protected]
          </div>
          <div className="hidden md:block text-border">·</div>
          <div className="flex items-center gap-3 underline underline-offset-8 decoration-accent/30">
            Leicester, UK
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
        >
          <input 
            type="text" 
            placeholder="NAME" 
            className="bg-surface border border-border p-6 rounded-2xl focus:border-accent/40 outline-none text-xs tracking-widest uppercase font-headline"
          />
          <input 
            type="email" 
            placeholder="EMAIL" 
            className="bg-surface border border-border p-6 rounded-2xl focus:border-accent/40 outline-none text-xs tracking-widest uppercase font-headline"
          />
          <textarea 
            placeholder="MESSAGE" 
            rows={5}
            className="bg-surface border border-border p-6 rounded-2xl focus:border-accent/40 outline-none text-xs tracking-widest uppercase font-headline md:col-span-2 resize-none"
          />
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              e.currentTarget.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `translate(0px, 0px)`;
            }}
            className="bg-accent text-black p-6 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] md:col-span-2 transition-transform duration-300"
          >
            Send Inquiry
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
