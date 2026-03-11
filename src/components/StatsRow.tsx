import { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const Counter = ({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const displayValue = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-8">
      <div className="flex items-end mb-2">
        <motion.span className="text-6xl md:text-8xl font-bebas text-accent leading-none">
          {displayValue}
        </motion.span>
        <span className="text-4xl md:text-6xl font-bebas text-accent leading-none ml-1">{suffix}</span>
      </div>
      <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-headline text-muted text-center max-w-[120px]">
        {label}
      </span>
    </div>
  );
};

const StatsRow = () => {
  return (
    <section className="bg-bg py-24 border-y border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        <Counter value={38} label="Years of Experience" suffix="+" />
        <Counter value={80} label="Student lets before Xmas" suffix="%" />
        <Counter value={2} label="Leicester Universities" />
        <Counter value={100} label="Managed Service" suffix="%" />
      </div>
    </section>
  );
};

export default StatsRow;
