import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, CheckCircle, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import the generated images
import sarahImg from '../assets/images/sarah.jpg';
import mbuviImg from '../assets/images/mbuvi.jpg';
import pavanImg from '../assets/images/pavan.jpg';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  image: string;
  segment: string;
  engagement: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'sarah',
    quote: "As a busy entrepreneur, finding Felicity was an absolute game-changer. She took complete charge of my project management, ensuring tasks were submitted on time and within budget. Her data organization skills provided invaluable business insight, allowing me to make better commercial decisions. Her clear, consistent, and proactive communication exceeds expectations in every way. I cannot imagine running my business without her support.",
    author: "Sarah Johnson",
    role: "Founder & Creative Director",
    location: "New York, USA",
    image: sarahImg,
    segment: "Creative Agency Leaders",
    engagement: "20 hours/week immersive logistics partner." 
  },
  {
    id: 'mbuvi',
    quote: "Felicity completely reorganized our Salesforce integration and transformed our disorganized operations SOPs into a master class in structural clarity. She manages our inbox triage with exceptional speed, filtering out hundreds of daily marketing pings so my engineering directors can focus exclusively on sprint deliverables. Her IT background makes communicating system setups incredibly fluid.",
    author: "Mbuvi Dennis",
    role: "CTO, TechSaaS",
    location: "London, UK",
    image: mbuviImg,
    segment: "Startup Scale-Up Leaders",
    engagement: "12 hours/week CRM & dispatch coordination."
  },
  {
    id: 'pavan',
    quote: "I worked with Felicity under our Athena premium remote EA structures. Her dedication to timezone synchronization is unmatched. Even when coordinating tight executive flights and travel itineraries starting across Europe, she handles calendar buffers perfectly, maintaining a zero-conflict rate. She's a proactive systems builder, not just an operations assistant!",
    author: "Ritwik Pavan",
    role: "COO, Fragile",
    location: "San Francisco, USA",
    image: pavanImg,
    segment: "Corporate Venture Leads",
    engagement: "Full project coordination and pipeline tracking."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <div className="section-container relative">
      
      {/* Container Box */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden relative min-h-[460px] md:min-h-[380px] flex flex-col justify-between">
        
        {/* Border Ribbon Top */}
        <div className="h-1.5 bg-gradient-to-r from-stone-900 via-[#bd4f3a] to-stone-900 w-full"></div>

        {/* Testimonials Slides with animations */}
        <div className="p-8 sm:p-12 flex-1 flex flex-col md:flex-row gap-8 items-center md:items-start">
          
          {/* Avatar Area Left */}
          <div className="flex-none">
            <div className="relative w-24 h-24 rounded-full border-2 border-[#bd4f3a]/35 overflow-hidden shadow-sm">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.image}
                  alt={current.author}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Review text & metadata Right */}
          <div className="flex-1 space-y-6">
            
            {/* Quote Icon */}
            <div className="text-[#bd4f3a]/15">
              <Quote className="w-10 h-10 fill-current" />
            </div>

            {/* Testimonial Quote */}
            <div className="relative min-h-[140px] md:min-h-[100px]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={current.id}
                  className="text-[13.5px] text-stone-700 leading-relaxed italic pr-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  "{current.quote}"
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Metadata and verification boxes */}
            <div className="pt-6 border-t border-stone-100 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="text-sm font-display font-bold text-stone-900 leading-tight">
                      {current.author}
                    </h4>
                    <p className="text-[11px] text-stone-500 font-medium">
                      {current.role} — <span className="text-stone-400">{current.location}</span>
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Side verification card */}
              <div className="bg-stone-50 border border-stone-200/60 p-3 rounded-xl min-w-[240px] text-left">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#bd4f3a] block uppercase leading-none mb-2">VERIFICATION DETAILS</span>
                <div className="space-y-1.5">
                  <span className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Client Partnership
                  </span>
                  <div>
                    <span className="text-[9px] font-bold font-mono text-stone-400 block leading-tight uppercase">ACCOUNT SEGMENT:</span>
                    <span className="text-[10px] text-stone-700 font-medium">{current.segment}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold font-mono text-stone-400 block leading-tight uppercase">RETAINER SERVICE DEPLOYMENT:</span>
                    <span className="text-[10px] text-stone-600 block italic leading-tight">{current.engagement}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom controls & indicator bar */}
        <div className="bg-stone-50 border-t border-stone-100 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  currentIndex === idx ? 'bg-[#bd4f3a] w-5' : 'bg-stone-300 hover:bg-stone-400'
                }`}
              ></button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 border border-stone-250 bg-white hover:bg-stone-100 text-stone-700 rounded-lg transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 border border-stone-250 bg-white hover:bg-stone-100 text-stone-700 rounded-lg transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
