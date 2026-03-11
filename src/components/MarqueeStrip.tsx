const MarqueeStrip = () => {
  const items = [
    "TPO Regulated",
    "SAFE Agent",
    "FCA No. 410876",
    "Client Money Protected",
    "NALS Approved",
    "Since 1986",
    "Leicester University Partner",
    "Student Specialist",
  ];

  return (
    <div className="bg-surface py-8 border-y border-border overflow-hidden">
      <div className="h-[1px] w-full bg-accent opacity-20 absolute top-0" />
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-12">
            <span className="text-xl font-bebas tracking-wider opacity-60 hover:opacity-100 transition-opacity cursor-default">
              {item}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-accent ml-24" />
          </div>
        ))}
      </div>
      <div className="h-[1px] w-full bg-accent opacity-20 absolute bottom-0" />
    </div>
  );
};

export default MarqueeStrip;
