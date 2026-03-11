import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-navbar px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bebas tracking-tighter">
          PRIYA<span className="text-accent italic">PROPERTIES</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-12 text-sm uppercase tracking-widest font-light">
          <a href="#" className="hover:text-accent transition-colors">Home</a>
          <a href="#properties" className="hover:text-accent transition-colors">Properties</a>
          <a href="#students" className="hover:text-accent transition-colors">Students</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            e.currentTarget.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = `translate(0px, 0px)`;
          }}
          className="bg-accent text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-transform duration-200"
        >
          Book Viewing
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
