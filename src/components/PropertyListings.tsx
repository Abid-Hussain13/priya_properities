import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bed, Bath, Move } from 'lucide-react';

interface Property {
  id: number;
  type: 'Sales' | 'Lettings' | 'Student';
  image: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
}

const properties: Property[] = [
  { id: 1, type: 'Sales', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80', price: '£850,000', address: 'London Road, Stoneygate', beds: 5, baths: 3, sqft: 2400 },
  { id: 2, type: 'Lettings', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80', price: '£1,800 pcm', address: 'Clarendon Park Road', beds: 3, baths: 2, sqft: 1200 },
  { id: 3, type: 'Student', image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80', price: '£125 pw', address: 'Bede Island Apartments', beds: 4, baths: 2, sqft: 1100 },
  { id: 4, type: 'Sales', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80', price: '£1,200,000', address: 'The Ridgeway, Rothley', beds: 6, baths: 4, sqft: 4500 },
  { id: 5, type: 'Lettings', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80', price: '£2,500 pcm', address: 'Knighton Drive, Leicester', beds: 4, baths: 3, sqft: 1800 },
  { id: 6, type: 'Student', image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1000', price: '£110 pw', address: 'West End Living', beds: 5, baths: 2, sqft: 1400 },
];

const PropertyCard = ({ property }: { property: Property }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ 
      opacity: { duration: 0.2 },
      layout: { type: "spring", stiffness: 250, damping: 25, mass: 0.5 }
    }}
    whileHover={{ y: -10 }}
    className="group relative bg-surface border border-border rounded-3xl overflow-hidden hover:border-accent/40 hover:shadow-[0_0_30px_rgba(181,229,51,0.1)] transition-all"
  >
    <div className="aspect-[4/3] overflow-hidden relative">
      <img 
        src={property.image} 
        alt={property.address} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute top-4 left-4 bg-accent text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
        {property.type}
      </div>
    </div>
    <div className="p-6">
      <div className="text-2xl font-bebas mb-1 tracking-wide">{property.price}</div>
      <div className="text-muted text-xs font-light uppercase tracking-widest mb-6 truncate">{property.address}</div>
      
      <div className="flex items-center gap-6 text-muted">
        <div className="flex items-center gap-2">
          <Bed size={14} className="text-accent opacity-60" />
          <span className="text-[10px] uppercase font-headline">{property.beds} Beds</span>
        </div>
        <div className="flex items-center gap-2">
          <Bath size={14} className="text-accent opacity-60" />
          <span className="text-[10px] uppercase font-headline">{property.baths} Baths</span>
        </div>
        <div className="flex items-center gap-2">
          <Move size={14} className="text-accent opacity-60" />
          <span className="text-[10px] uppercase font-headline">{property.sqft} SQFT</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const PropertyListings = () => {
  const [filter, setFilter] = useState<'All' | 'Sales' | 'Lettings' | 'Student'>('All');

  const filtered = filter === 'All' ? properties : properties.filter(p => p.type === filter);

  return (
    <section id="properties" className="bg-bg py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-accent text-xs font-headline uppercase tracking-[0.4em] mb-4 block">Our Portfolio</span>
            <h2 className="text-6xl font-bebas leading-[0.9]">Property <span className="text-accent italic">Listings</span></h2>
          </div>
          
          <div className="flex flex-wrap gap-4 border-b border-border pb-4">
            {['All', 'Sales', 'Lettings', 'Student'].map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t as any)}
                className={`text-[10px] uppercase tracking-[0.2em] px-4 py-2 transition-all ${filter === t ? 'text-accent border-b border-accent' : 'text-muted hover:text-white'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyListings;
