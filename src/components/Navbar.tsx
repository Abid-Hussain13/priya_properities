import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Properties', href: '#properties' },
    { name: 'Students', href: '#students' },
    { name: 'Contact', href: '#contact' },
  ];

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
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12 text-sm uppercase tracking-widest font-light">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-accent transition-colors">{link.name}</a>
          ))}
        </div>

        <div className="flex items-center gap-4">
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
            className="hidden sm:block bg-accent text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-transform duration-200"
          >
            Book Viewing
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg uppercase tracking-widest font-bebas text-white hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button 
                className="bg-accent text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider w-full"
                onClick={() => setIsOpen(false)}
              >
                Book Viewing
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
