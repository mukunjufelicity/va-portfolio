import { useState } from 'react';
import { Check, Shield, HelpCircle, ArrowRight, Star, Info } from 'lucide-react';
import { motion } from 'motion/react';

const packages = [
  {
    id: 'starter',
    name: 'Starter Retainer',
    hours: '5 HOURS PER WEEK',
    subtitle: 'Ideal for executives needing dedicated calendar protection, inbox zero maintenance, and priority routing.',
    price: 770,
    featured: false,
    bullets: [
      'Inboxes sorted weekly (Gmail/Outlook)',
      'Daily calendar check & conflicting times resolved',
      'Up to 15 meetings scheduled per month',
      'Drafting routine business email templates',
      'Direct email support (felicitymukunju@gmail.com)'
    ]
  },
  {
    id: 'business',
    name: 'Business Operations',
    hours: '12 HOURS PER WEEK',
    subtitle: 'Perfect for fast-paced managers requiring operations support, dispatching, CRM entries, and project coordination.',
    price: 1680,
    featured: true,
    bullets: [
      'Full daily inbox management + active priority filtering',
      'Dynamic scheduling & comprehensive multi-timezone planning',
      'Task assignment, setup & tracking in Notion/ClickUp/Jira',
      'Customer communications and CRM updates (Salesforce)',
      'Detailed meeting briefs & immediate action alerts',
      'Bi-weekly brief operational reports summarizing workflows'
    ]
  },
  {
    id: 'elite',
    name: 'Elite Executive Partner',
    hours: '20 HOURS PER WEEK',
    subtitle: 'Fully-immersive support covering comprehensive business operations, data cleaning, and dispatch logistics.',
    price: 2600,
    featured: false,
    bullets: [
      'Unlimited inbox triage & proactive emergency handling',
      'Complete travel coordination with fully personalized itineraries',
      'SOP writing, documentation maintaining & folder reorganizing',
      'Active team coordination (assigning tasks & monitoring progress)',
      'Advanced reporting & Power BI data cleaning support',
      'Leveraging AI tools to structure documents & save time'
    ]
  }
];

export default function Packages() {
  const [sliderHours, setSliderHours] = useState<number>(12);

  // Exact formula from screenshot:
  // Math.round(hours/week * 4.33 weeks/month * $35/hour standard rate)
  const calculateBudget = (hours: number): number => {
    return Math.round(hours * 4.33 * 35);
  };

  const handleInquire = () => {
    window.open('https://calendly.com/felicitymukunju/consultation', '_blank', 'noreferrer');
  };

  return (
    <div className="section-container">
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`rounded-3xl border p-8 flex flex-col justify-between relative transition-all duration-300 ${
              pkg.featured
                ? 'bg-[#132c2a] border-[#132c2a] text-stone-100 shadow-xl'
                : 'bg-[#faf8f5] border-stone-200/80 text-stone-800 shadow-xs hover:border-stone-300'
            }`}
          >
            {pkg.featured && (
              <span className="absolute -top-3.5 left-6 bg-[#bd4f3a] text-white text-[9.3px] uppercase font-sans tracking-widest px-4 py-1.5 rounded-md font-bold shadow-sm">
                MOST PROFESSIONAL
              </span>
            )}
            
            <div>
              <span className={`text-[10px] tracking-widest font-bold block mb-1 font-mono ${pkg.featured ? 'text-[#e2a84c]' : 'text-[#cca054]'}`}>
                {pkg.hours}
              </span>
              <h3 className={`text-2xl font-serif font-bold mb-3 ${pkg.featured ? 'text-white' : 'text-stone-900'}`}>{pkg.name}</h3>
              <p className={`text-xs leading-relaxed mb-6 font-sans ${pkg.featured ? 'text-stone-300' : 'text-stone-500'}`}>
                {pkg.subtitle}
              </p>
              
              <div className="flex items-baseline gap-1.5 mb-8 py-3.5">
                <span className={`text-4xl font-serif font-bold tracking-tight ${pkg.featured ? 'text-[#e2a84c]' : 'text-[#bd4f3a]'}`}>
                  ${pkg.price}
                </span>
                <span className={`text-xs ${pkg.featured ? 'text-stone-300' : 'text-stone-500'} font-sans font-medium`}>
                  / MONTH
                </span>
              </div>

              {/* Bullets List */}
              <ul className="space-y-4 pt-2">
                {pkg.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-xs leading-relaxed">
                    <span className={`p-0.5 rounded-full mt-0.5 flex-none ${
                      pkg.featured ? 'bg-[#1a3835] text-[#42b883]' : 'bg-emerald-50 text-[#2e7d32]'
                    }`}>
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span className={pkg.featured ? 'text-stone-200' : 'text-stone-700'}>
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <button
                onClick={handleInquire}
                className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  pkg.featured
                    ? 'bg-[#bd4f3a] text-white hover:bg-[#a6402d] hover:shadow-md'
                    : 'bg-white text-stone-900 border border-stone-300 hover:bg-stone-50'
                }`}
              >
                SELECT {pkg.name.toUpperCase()} RETAINER
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Retainer Slide Calculator Widget */}
      <div className="bg-white rounded-2xl border border-stone-200/80 p-6 sm:p-8 shadow-xs max-w-3xl mx-auto overflow-hidden relative">
        <span className="absolute top-0 left-0 w-2.5 h-full bg-[#bd4f3a]"></span>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pl-3">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-emerald-600 uppercase font-bold block mb-1">TAILORED ENGAGEMENTS</span>
            <h4 className="text-xl font-display font-semibold text-stone-900">
              Custom Retainer Slider Calculator
            </h4>
            <p className="text-stone-500 text-xs mt-1">
              Adjust the sliding selector to calculate custom weekly schedules.
            </p>
          </div>
          
          <div className="flex items-center gap-1.5 self-start md:self-auto bg-stone-50 border border-stone-200/60 p-2.5 rounded-xl">
            <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-xs">
              $35
            </div>
            <div>
              <span className="text-[9px] font-mono font-bold block text-stone-400 leading-tight uppercase">PM RATE / STANDARD RATE</span>
              <span className="text-xs font-display font-bold text-stone-700">$35/hour</span>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="space-y-6 px-3">
          <div className="flex justify-between items-center bg-stone-50 p-3 rounded-lg border border-stone-200/50">
            <span className="text-xs font-semibold text-stone-700">Select Hours/Week:</span>
            <span className="text-sm font-display font-mono font-bold text-[#bd4f3a] bg-white border px-3 py-1 rounded shadow-2xs">
              {sliderHours} hrs
            </span>
          </div>
          
          <div className="relative">
            <input
              type="range"
              min="5"
              max="40"
              value={sliderHours}
              onChange={(e) => setSliderHours(Number(e.target.value))}
              className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#bd4f3a]"
            />
            <div className="flex justify-between text-[9px] font-mono font-bold text-stone-400 mt-2">
              <span>MIN: 5 Hrs/wk</span>
              <span>(Full Retainer: {Math.round(sliderHours * 4.33)} hrs/month)</span>
              <span>MAX: 40 Hrs/wk</span>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 font-bold block">Estimated Monthly Budget</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl sm:text-3xl font-display font-bold text-stone-900">
                  ${calculateBudget(sliderHours)}
                </span>
                <span className="text-xs text-stone-500 font-mono">/ MONTH</span>
              </div>
            </div>
            
            <button
              onClick={handleInquire}
              className="py-3 px-6 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer self-stretch sm:self-auto flex items-center justify-center gap-1"
            >
              Inquire For Custom Schedule
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
