const Footer = () => {
  return (
    <footer className="bg-bg py-16 md:py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-12">
        <div className="max-w-xs">
          <div className="text-3xl font-bebas tracking-tighter mb-6">
            PRIYA<span className="text-accent italic">PROPERTIES</span>
          </div>
          <p className="text-[10px] text-muted uppercase tracking-[0.2em] leading-relaxed">
            Leicester's premier independent estate & letting agency. Excellence in residential sales, lettings, and student accommodation since 1986.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-headline uppercase tracking-[0.4em] mb-4 text-accent">NAVIGATE</span>
            <a href="#" className="text-sm font-light hover:text-accent transition-colors">Home</a>
            <a href="#properties" className="text-sm font-light hover:text-accent transition-colors">Properties</a>
            <a href="#students" className="text-sm font-light hover:text-accent transition-colors">Students</a>
            <a href="#contact" className="text-sm font-light hover:text-accent transition-colors">Contact</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-headline uppercase tracking-[0.4em] mb-4 text-accent">LEGAL</span>
            <a href="#" className="text-sm font-light hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm font-light hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="text-sm font-light hover:text-accent transition-colors">Cookie Policy</a>
            <a href="#" className="text-sm font-light hover:text-accent transition-colors">FCA Compliance</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 md:mt-24 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 text-center md:text-left">
        <p className="text-[9px] uppercase tracking-widest">
          © 2026 Priya Properties. Registered in England & Wales. FCA No. 410876. 
          Members of TPO, SAFE Agent, and NALS.
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[9px] uppercase tracking-widest font-bold">
          <span>SAFE AGENT</span>
          <span>TPO REGULATED</span>
          <span>NALS APPROVED</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
