import { useState, useEffect } from 'react';
import { 
  Briefcase, 
  MapPin, 
  ShieldCheck, 
  Mail, 
  Linkedin, 
  ExternalLink, 
  Calendar, 
  ArrowRight, 
  ChevronRight, 
  Layers, 
  Award,
  Zap,
  Globe,
  Clock,
  Code,
  ShieldAlert,
  Menu,
  X,
  Volume2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import components
import TechStack from './components/TechStack';
import CaseStudies from './components/CaseStudies';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';

// Import Felicity's permanent portrait
import felicityPortrait from './assets/images/felicity.jpg';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for nav header sticky background blurring
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookConsultation = () => {
    window.open('https://calendly.com/felicitymukunju/consultation', '_blank', 'noreferrer');
  };

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Value', href: '#value' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Sample Work', href: '#sample-work' },
    { name: 'Packages', href: '#packages' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <div className="min-h-screen bg-[#fbf9f6] text-stone-900 selection:bg-[#bd4f3a]/15 selection:text-[#bd4f3a]">
      
      {/* 1. Header Navigation Bar */}
      <nav id="navbar" className={`fixed top-0 left-0 w-full z-101 border-b transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-stone-200/60 py-3 shadow-xs' 
          : 'bg-[#fbf9f6] border-stone-100/60 py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex flex-col">
              <span className="text-stone-900 text-base font-display font-medium tracking-tight">
                <span className="font-bold">Felicity</span> Mukunju
              </span>
              <span className="text-[9.5px] uppercase font-mono tracking-widest text-[#bd4f3a] font-bold">
                EXECUTIVE ASSISTANT & PARTNER IT SPECIALIST
              </span>
            </div>

            {/* Desktop Nav links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-stone-600 hover:text-[#bd4f3a] text-xs font-semibold tracking-wider uppercase transition-colors duration-250 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Action Button */}
            <div className="hidden lg:block">
              <button
                onClick={handleBookConsultation}
                className="bg-[#bd4f3a] hover:bg-[#a6402d] text-white px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-stone-600 hover:text-stone-900 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-stone-100 bg-white"
            >
              <div className="px-4 py-4 space-y-3.5 shadow-sm">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-stone-600 hover:text-[#bd4f3a] text-xs font-semibold tracking-wider uppercase transition-colors duration-250 cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleBookConsultation();
                  }}
                  className="w-full bg-[#bd4f3a] text-white py-3 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-4 h-4" />
                  Book Consultation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Container spacing for fixed top bar */}
      <div className="pt-20"></div>

      {/* 2. Hero Section */}
      <section id="overview" className="relative py-14 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <span className="inline-flex items-center gap-1.5 text-[10px] bg-[#132c2a]/10 text-[#132c2a] border border-[#132c2a]/15 font-mono tracking-widest font-bold px-3 py-1 rounded-full uppercase">
                <Award className="w-3.5 h-3.5 text-[#132c2a]" />
                EX-ATHENA EXECUTIVE ASSISTANT & JKUAT IT SPECIALIST
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-950 tracking-tight leading-none">
                Hi, I'm Felicity Mukunju
              </h1>

              <p className="text-[#bd4f3a] font-serif text-lg sm:text-xl font-semibold">
                Executive Operations Partner & Elite Virtual Assistant
              </p>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
                Welcome! I'm your dedicated partner in operational excellence. With a <strong className="font-semibold text-stone-950">B.Sc. in Information Technology</strong> from JKUAT and rigorous training managing workloads for executive remote-first leaders at Athena, I don't just complete administrative support tasks — I architect systems. By streamlining calendar synchronization, handling complex logs and task trackers, and engineering inboxes, I turn high-stress overhead into a seamless, well-oiled delivery engine.
              </p>

              {/* Location metadata metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 pb-2">
                <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-stone-200/80 shadow-2xs">
                  <span className="p-2 bg-[#132c2a]/10 text-[#132c2a] rounded-lg shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wide text-stone-400 font-bold block">LOCATION & TIMEZONE</span>
                    <p className="text-[#bd4f3a] text-xs font-bold mt-0.5">Nairobi, Kenya • EAT (GMT+3)</p>
                    <p className="text-[10px] text-stone-500 leading-tight block mt-0.5">Perfect overlap for US, UK & EU shifts</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-stone-200/80 shadow-2xs">
                  <span className="p-2 bg-[#e2a84c]/15 text-[#cca054] rounded-lg shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wide text-stone-400 font-bold block">ATHENA STANDARD OF RIGOR</span>
                    <p className="text-stone-900 text-xs font-bold mt-0.5">Top 1% Global Remote EAs</p>
                    <p className="text-[10px] text-stone-500 leading-tight block mt-0.5">Exceptional ownership & tech fluency</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#packages"
                  className="bg-[#132c2a] hover:bg-[#1e4441] text-white font-medium text-xs tracking-wider uppercase py-4 px-6 rounded-xl transition-colors duration-300 text-center flex items-center justify-center gap-1 shadow-sm"
                >
                  View Custom Packages & Rates
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="mailto:felicitymukunju@gmail.com"
                  className="bg-white hover:bg-stone-150 border border-stone-300 text-stone-700 font-semibold text-xs tracking-wider uppercase py-4 px-6 rounded-xl transition-colors duration-300 text-center flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-4 h-4 text-[#bd4f3a]" />
                  felicitymukunju@gmail.com
                </a>
              </div>

            </div>

            {/* Right Column: Profile Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-square sm:max-w-[400px]">
                {/* Visual frame accents */}
                <div className="absolute -inset-2 bg-[#132c2a]/10 rounded-3xl border border-[#132c2a]/15 -z-1 translate-x-3 translate-y-3"></div>
                
                {/* Main portrait wrapper */}
                <div className="relative w-full h-full bg-[#faf8f5] rounded-2xl overflow-hidden border-2 border-[#132c2a]/15 shadow-lg">
                  <img
                    src={felicityPortrait}
                    alt="Felicity Mukunju - Executive Assistant & Tech Specialist"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Value Propostion - The Competitive Edge Section */}
      <section id="value" className="py-20 bg-[#faf8f5] border-y border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono font-semibold tracking-widest text-[#bd4f3a] bg-[#bd4f3a]/10 px-3 py-1 rounded-full">
              THE COMPETITIVE EDGE
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-950 mt-4 tracking-tight">
              Why Partner With Felicity?
            </h2>
            <p className="text-stone-500 text-sm mt-3 leading-relaxed">
              Many remote virtual assistants complete checklist tasks manually. As an IT-fluent operations specialist, I design automated processes and communication structures that scale productivity permanently.
            </p>
          </div>

          {/* Bento-style advantages grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            <div className="p-6 bg-white rounded-2xl border border-stone-100 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">
              <div>
                <span className="p-3 bg-[#132c2a]/10 rounded-xl text-[#132c2a] inline-block mb-4">
                  <Award className="w-5 h-5" />
                </span>
                <h3 className="text-base font-serif font-semibold text-stone-900 mb-2">Ex-Athena Rigor</h3>
                <span className="text-[9px] font-mono tracking-widest text-[#bd4f3a] block mb-3 font-semibold uppercase">EXECUTIVE STANDARD</span>
                <p className="text-stone-500 text-xs leading-relaxed font-sans">
                  Athena is famous for accepting only the top 1% of assistants. I am trained in meticulous administrative procedures, executive scheduling, prioritization frameworks, and proactive time ownership.
                </p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-100 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">
              <div>
                <span className="p-3 bg-[#132c2a]/10 rounded-xl text-[#132c2a] inline-block mb-4">
                  <Globe className="w-5 h-5" />
                </span>
                <h3 className="text-base font-serif font-semibold text-stone-900 mb-2">Science & IT Fluency</h3>
                <span className="text-[9px] font-mono tracking-widest text-[#132c2a] block mb-3 font-semibold uppercase">TECHNICAL EXPERTISE</span>
                <p className="text-stone-500 text-xs leading-relaxed font-sans">
                  Armed with an Information Technology degree, I treat software setups, CRM hygiene (Salesforce), database structuring, and spreadsheets as core strengths rather than daunting tasks.
                </p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-100 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">
              <div>
                <span className="p-3 bg-[#e2a84c]/15 rounded-xl text-[#cca054] inline-block mb-4">
                  <Zap className="w-5 h-5 animate-pulse" />
                </span>
                <h3 className="text-base font-serif font-semibold text-stone-900 mb-2">Modern AI Augmentation</h3>
                <span className="text-[9px] font-mono tracking-widest text-[#cca054] block mb-3 font-semibold uppercase">SPEED & SCALE</span>
                <p className="text-stone-500 text-xs leading-relaxed font-sans">
                  Elite prompt architect utilizing Gemini and ChatGPT for daily workflow optimization: drafting outlines, proofreading communications, and formatting technical meeting notes instantly to save massive client time.
                </p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-stone-100 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">
              <div>
                <span className="p-3 bg-[#bd4f3a]/10 rounded-xl text-[#bd4f3a] inline-block mb-4">
                  <Clock className="w-5 h-5" />
                </span>
                <h3 className="text-base font-serif font-semibold text-stone-900 mb-2">Timezone Harmony</h3>
                <span className="text-[9px] font-mono tracking-widest text-[#bd4f3a] block mb-3 font-semibold uppercase">GLOBAL OVERLAP</span>
                <p className="text-stone-500 text-xs leading-relaxed font-sans">
                  Experienced in managing high-velocity projects and scheduling meetings across Pacific, Eastern, Standard, Continental European, and East African time zones with zero overlap.
                </p>
              </div>
            </div>

          </div>

          {/* Stats track record dark banner */}
          <div className="bg-[#132c2a] text-stone-100 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-lg border border-[#1a3b38]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#1b3e3b]/40 to-[#132c2a] rounded-full blur-2xl"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
              
              <div className="lg:col-span-6">
                <span className="text-[10px] font-mono tracking-widest text-[#cca054] font-bold uppercase block mb-2">PROVEN REMOTE TRACK RECORD</span>
                <h3 className="text-xl md:text-2xl font-serif text-amber-50/90 leading-snug">
                  Throughout supporting fast-paced remote agency clients (Athena) and multiclient project deliveries, my interventions consistently demonstrate massive operational ROI.
                </h3>
              </div>

              <div className="lg:col-span-6 grid grid-cols-3 gap-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 text-center sm:text-left">
                <div>
                  <span className="text-3xl md:text-4xl font-serif font-bold text-[#cca054] block">~20%</span>
                  <span className="text-[9px] uppercase font-mono text-stone-300 tracking-wider font-bold block mt-1">INBOX TRIAGE EFFICIENCY</span>
                </div>
                
                <div>
                  <span className="text-3xl md:text-4xl font-serif font-bold text-[#e2a84c] block">~30%</span>
                  <span className="text-[9px] uppercase font-mono text-stone-300 tracking-wider font-bold block mt-1">ADMINISTRATIVE SETUP SPEED</span>
                </div>

                <div>
                  <span className="text-3xl md:text-4xl font-serif font-bold text-emerald-400 block">100%</span>
                  <span className="text-[9px] uppercase font-mono text-stone-300 tracking-wider font-bold block mt-1">CONFLICT RESOLUTION ACCURACY</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. Expertise Section */}
      <section id="expertise" className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono font-semibold tracking-widest text-[#bd4f3a] bg-amber-500/10 px-3 py-1 rounded-full">
              OPERATIONAL FOCUS
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-950 mt-4 tracking-tight">
              Comprehensive Management Capabilities
            </h2>
            <p className="text-stone-500 text-sm mt-3 leading-relaxed">
              I don't just execute simple manual chores. I design and customize proactive processes that save hours of operational overhead, tailored for global scaling startups.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Calendar & Time Management */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/50 shadow-2xs space-y-4">
              <div className="flex items-center gap-3">
                <span className="p-3 bg-[#132c2a]/10 border border-[#132c2a]/15 text-[#132c2a] rounded-xl">
                  <Calendar className="w-5 h-5 text-[#132c2a]" />
                </span>
                <div>
                  <h3 className="text-lg font-serif font-bold text-stone-950">Calendar & Time Management</h3>
                  <p className="text-[11px] text-stone-400 font-mono text-left">Proactive Scheduling Protection</p>
                </div>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed font-sans">
                Comprehensive, conflict-free scheduling designed to protect executive focus across multiple global timezones, ensuring preparation blocks are hardcoded.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-stone-700 text-xs">
                <li className="flex gap-2 items-start bg-[#faf8f5]/65 p-2.5 rounded-lg border border-stone-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#132c2a] shrink-0 mt-1.5"></span>
                  Multi-timezone synchronization and calendar coordination.
                </li>
                <li className="flex gap-2 items-start bg-[#faf8f5]/65 p-2.5 rounded-lg border border-stone-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#132c2a] shrink-0 mt-1.5"></span>
                  Proactive buffering, schedule optimization, and focus preservation.
                </li>
                <li className="flex gap-2 items-start bg-[#faf8f5]/65 p-2.5 rounded-lg border border-stone-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#132c2a] shrink-0 mt-1.5"></span>
                  Executive logistics (flights, lodging, and dynamic itineraries).
                </li>
                <li className="flex gap-2 items-start bg-[#faf8f5]/65 p-2.5 rounded-lg border border-stone-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#132c2a] shrink-0 mt-1.5"></span>
                  Automated event reminders and action items extraction.
                </li>
              </ul>
            </div>

            {/* Email & Inbox Architecture */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/50 shadow-2xs space-y-4">
              <div className="flex items-center gap-3">
                <span className="p-3 bg-[#bd4f3a]/10 border border-[#bd4f3a]/15 text-[#bd4f3a] rounded-xl">
                  <Mail className="w-5 h-5 text-[#bd4f3a]" />
                </span>
                <div>
                  <h3 className="text-lg font-serif font-bold text-stone-950">Email & Inbox Architecture</h3>
                  <p className="text-[11px] text-stone-400 font-mono text-left">Inbox Zero & Outbound Triage</p>
                </div>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed font-sans">
                Transforming the inbox from a source of stress into a streamlined, high-priority workflow channel. I manage automated categorization & priorities.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-stone-700 text-xs">
                <li className="flex gap-2 items-start bg-[#faf8f5]/65 p-2.5 rounded-lg border border-stone-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bd4f3a] shrink-0 mt-1.5"></span>
                  Inbox Zero maintenance through automated rules and tags.
                </li>
                <li className="flex gap-2 items-start bg-[#faf8f5]/65 p-2.5 rounded-lg border border-stone-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bd4f3a] shrink-0 mt-1.5"></span>
                  Drafting polished outbound communications & template replies.
                </li>
                <li className="flex gap-2 items-start bg-[#faf8f5]/65 p-2.5 rounded-lg border border-stone-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bd4f3a] shrink-0 mt-1.5"></span>
                  Priority-based message escalations and action logs.
                </li>
                <li className="flex gap-2 items-start bg-[#faf8f5]/65 p-2.5 rounded-lg border border-stone-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bd4f3a] shrink-0 mt-1.5"></span>
                  Daily executive status digests and summary briefings.
                </li>
              </ul>
            </div>

            {/* Project Support & Operations Dispatch */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/50 shadow-2xs space-y-4">
              <div className="flex items-center gap-3">
                <span className="p-3 bg-[#132c2a]/10 border border-[#132c2a]/15 text-[#132c2a] rounded-xl">
                  <Layers className="w-5 h-5 text-[#132c2a]" />
                </span>
                <div>
                  <h3 className="text-lg font-serif font-bold text-stone-950">Project Support & Operations</h3>
                  <p className="text-[11px] text-stone-400 font-mono text-left">Milestone & Ticket Triage</p>
                </div>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed font-sans">
                Coordinating task pipelines and cross-functional teams to keep milestones tight and deliverables on track. Direct integration with remote dashboards.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-stone-700 text-xs">
                <li className="flex gap-2 items-start bg-[#faf8f5]/65 p-2.5 rounded-lg border border-stone-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#132c2a] shrink-0 mt-1.5"></span>
                  Job scheduling, resource allocation, and team routing support.
                </li>
                <li className="flex gap-2 items-start bg-[#faf8f5]/65 p-2.5 rounded-lg border border-stone-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#132c2a] shrink-0 mt-1.5"></span>
                  SOP creation, workflow documenting, and operations tracking.
                </li>
                <li className="flex gap-2 items-start bg-[#faf8f5]/65 p-2.5 rounded-lg border border-stone-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#132c2a] shrink-0 mt-1.5"></span>
                  Daily task monitoring on Notion, ClickUp, Jira, and Monday.com.
                </li>
                <li className="flex gap-2 items-start bg-[#faf8f5]/65 p-2.5 rounded-lg border border-stone-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#132c2a] shrink-0 mt-1.5"></span>
                  Real-time task dispatch, alerts management, and status updates.
                </li>
              </ul>
            </div>

            {/* Data Operations & Reporting */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/50 shadow-2xs space-y-4">
              <div className="flex items-center gap-3">
                <span className="p-3 bg-[#e2a84c]/15 border border-[#e2a84c]/20 text-[#cca054] rounded-xl">
                  <Code className="w-5 h-5 text-[#cca054]" />
                </span>
                <div>
                  <h3 className="text-lg font-serif font-bold text-stone-950">Data Operations & Reporting</h3>
                  <p className="text-[11px] text-stone-400 font-mono text-left">CRM Hygiene & Analytics</p>
                </div>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed font-sans">
                Leveraging spreadsheet and database skills to gather, clean, and visualize organizational data. Providing vital dashboard support.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-stone-700 text-xs">
                <li className="flex gap-2 items-start bg-[#faf8f5]/65 p-2.5 rounded-lg border border-stone-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cca054] shrink-0 mt-1.5"></span>
                  Data collection, restructuring, and formatting (Excel, Airtable).
                </li>
                <li className="flex gap-2 items-start bg-[#faf8f5]/65 p-2.5 rounded-lg border border-stone-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cca054] shrink-0 mt-1.5"></span>
                  Performance summaries, dashboard support, and operational KPIs.
                </li>
                <li className="flex gap-2 items-start bg-[#faf8f5]/65 p-2.5 rounded-lg border border-stone-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cca054] shrink-0 mt-1.5"></span>
                  Sleek and clear report creation (Power BI, Google Slides).
                </li>
                <li className="flex gap-2 items-start bg-[#faf8f5]/65 p-2.5 rounded-lg border border-[#132c2a]/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cca054] shrink-0 mt-1.5"></span>
                  Database cleaning and customer record curation (Salesforce).
                </li>
              </ul>
            </div>

          </div>

          {/* Core quote block */}
          <div className="max-w-3xl mx-auto border-l-4 border-[#bd4f3a] pl-6 md:pl-10 py-5 italic text-[#132c2a] text-sm sm:text-base leading-relaxed bg-[#132c2a]/5 rounded-r-2xl pr-6 font-serif font-medium">
            "By ensuring calendar slots have perfect reminders, priority filters automatically flag essential investor emails, and dispatch tasks align with target deadlines, I unlock up to 20 hours of creative focus back to our executives every single week."
            <span className="block mt-2.5 text-xs uppercase font-mono tracking-widest text-[#bd4f3a] font-bold not-italic font-sans">
              — Felicity Mukunju
            </span>
          </div>

        </div>
      </section>

      {/* 5. Tech Stack Filter section */}
      <section id="tech-stack" className="py-20 bg-[#faf8f5] border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono font-semibold tracking-widest text-[#bd4f3a] bg-[#bd4f3a]/10 px-3 py-1 rounded-full">
              MY TECHNOLOGY ECOSYSTEM
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-950 mt-4 tracking-tight">
              Day-to-Day Operations Stack
            </h2>
            <p className="text-stone-500 text-sm mt-3 leading-relaxed">
              I am highly fluent in modern software ecosystems, enabling me to immediately integrate into remote tech teams without onboarding drag.
            </p>
          </div>

          <TechStack />

        </div>
      </section>

      {/* 6. Case Studies Interactive Simulator Section */}
      <section id="sample-work">
        <CaseStudies />
      </section>

      {/* 7. Retainer packages & sliders section */}
      <section id="packages" className="py-20 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono font-semibold tracking-widest text-[#bd4f3a] bg-[#bd4f3a]/10 px-3 py-1 rounded-full">
              TRANSPARENT RETAINER ENGAGEMENTS
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-950 mt-4 tracking-tight">
              Structure & Market-Valued Packages
            </h2>
            <p className="text-stone-500 text-sm mt-3 leading-relaxed font-sans">
              I charge premium, remote-first rates reflecting an engineering IT background and elite Athena training. No low-balling, just absolute, guaranteed focus and operations maturity.
            </p>
          </div>

          <Packages />

        </div>
      </section>

      {/* 8. Testimonials carousel section */}
      <section id="testimonials" className="py-20 bg-[#faf8f5] border-y border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono font-semibold tracking-widest text-[#bd4f3a] bg-[#bd4f3a]/10 px-3 py-1 rounded-full">
              GUARANTEED PROFESSIONAL TRUST
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-950 mt-4 tracking-tight">
              Endorsements & Recommendation Logs
            </h2>
            <p className="text-stone-500 text-sm mt-3 leading-relaxed">
              Read detailed feedback from tech directors, global founders, and busy creative agency executives who have delegated key workflows directly to me.
            </p>
          </div>

          <Testimonials />

        </div>
      </section>

      {/* 9. Booking CTA / Intake Section */}
      <section className="py-20 md:py-24 bg-[#faf8f5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Box: Official channels & operational stats */}
            <div className="lg:col-span-7 flex flex-col justify-between p-8 bg-white rounded-2xl border border-stone-200/50 shadow-2xs">
              <div className="space-y-6">
                <span className="text-xs uppercase font-mono font-semibold tracking-widest text-[#bd4f3a] bg-[#bd4f3a]/10 px-3 py-1 rounded-full">
                  ONBOARDING ELITE COORDINATION
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-950 leading-tight">
                  Schedule a Brief Consultation
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Ready to reclaim your time, organize chaotic threads, and optimize task assignments? Use the verified channels below to book an intake call.
                </p>

                <div className="pt-4 border-t border-stone-200/50 space-y-4">
                  <span className="text-[11px] font-mono tracking-wider font-bold text-stone-400 block uppercase">Official Channels</span>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="mailto:felicitymukunju@gmail.com"
                      className="bg-white hover:bg-stone-100 border border-stone-200 text-stone-700 py-3.5 px-6 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors duration-250 flex items-center justify-center gap-2 flex-1 shadow-2xs"
                    >
                      <Mail className="w-4 h-4 text-[#bd4f3a]" />
                      felicitymukunju@gmail.com
                    </a>

                    <button
                      onClick={handleBookConsultation}
                      className="bg-[#132c2a] hover:bg-[#1e4441] text-white py-3.5 px-6 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors duration-250 flex items-center justify-center gap-2 flex-1 shadow-xs cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      Open My Calendly Calendar
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-stone-200/50 flex gap-3 items-start">
                <span className="p-2 bg-[#132c2a]/10 text-[#132c2a] rounded-lg shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-xs font-bold text-stone-900 uppercase font-mono">Operational Sync Zone</h4>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    Available for 25 to 40 hours standard retainer support depending on your team's volume. Onboarding takes less than 3 business days.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Box: Clean Calendly Invite pitch box (without the configure Calendly controller) */}
            <div className="lg:col-span-5 bg-[#132c2a] text-stone-100 p-8 rounded-2xl border border-[#1a3b38] relative flex flex-col justify-between overflow-hidden shadow-lg">
              <span className="absolute top-0 left-0 w-2 h-full bg-[#bd4f3a]"></span>
              
              <div className="space-y-5">
                <span className="text-[10px] font-mono tracking-widest text-[#bd4f3a] font-bold block uppercase bg-[#bd4f3a]/10 px-2.5 py-1 rounded-md self-start border border-[#bd4f3a]/25 max-w-[130px] text-center">
                  CALENDLY SYNC
                </span>
                
                <h4 className="text-xl font-serif font-semibold leading-snug text-[#faf8f5]">
                  Book a 15-Minute Intake Sync
                </h4>
                
                <p className="text-stone-300 text-xs leading-relaxed font-sans mt-2">
                  Select your slot directly via our live Calendly dashboard to connect. We will outline your exact inbox workflows, inspect ongoing CRM schedules, and formulate a custom, remote-first onboarding blueprint.
                </p>

                <div className="bg-[#1b3e3b]/50 border border-[#1b3e3b]/30 p-3.5 rounded-xl space-y-2 mt-4">
                  <span className="text-[10px] font-mono font-bold text-stone-300 tracking-wider uppercase block">ONBOARDING PRE-REQUISITES:</span>
                  <div className="flex items-center gap-2 text-xs text-stone-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cca054]"></span>
                    No setup fees required
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cca054]"></span>
                    Timezone sync confirmed on first sync
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cca054]"></span>
                    Non-Disclosure agreements pre-signed
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 mt-6">
                <button
                  onClick={handleBookConsultation}
                  className="w-full bg-[#bd4f3a] hover:bg-[#a6402d] text-white py-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg transition-transform duration-300 flex items-center justify-center gap-2 cursor-pointer border border-[#bd4f3a]/50"
                >
                  Confirm Intake Slot ↗
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 10. Footer Footer */}
      <footer className="bg-[#faf8f5] border-t border-stone-200/50 py-10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-xs text-stone-500 font-sans tracking-wide">
            © 2026 Felicity Mukunju • Operations EA & Partner Portfolio. All Rights Reserved. Standard and Rates aligned to Remote Elite global standards.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs font-mono font-bold uppercase text-stone-400 tracking-widest">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bd4f3a]"></span>
              Standard Retainer Certified
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#bd4f3a]"></span>
              Professional Operations EA
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
