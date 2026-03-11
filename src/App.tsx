import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import WhyChooseUs from './components/WhyChooseUs';
import PropertyListings from './components/PropertyListings';
import AboutStrip from './components/AboutStrip';
import StatsRow from './components/StatsRow';
import StudentsSection from './components/StudentsSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative bg-bg"
      >
        <CustomCursor />
        <Navbar />
        
        <main>
          <Hero />
          <MarqueeStrip />
          <WhyChooseUs />
          <PropertyListings />
          <AboutStrip />
          <StatsRow />
          <StudentsSection />
          <Contact />
        </main>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
