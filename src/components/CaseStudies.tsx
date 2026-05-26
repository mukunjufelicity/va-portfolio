import { useState } from 'react';
import { 
  Mail, 
  Calendar, 
  Slack, 
  ArrowRight, 
  Sparkles,
  Search,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Layers,
  ArrowRightLeft,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type ProjectType = 'email' | 'calendar' | 'logistics';
type SandboxMode = 'before' | 'after';

export default function CaseStudies() {
  const [activeProject, setActiveProject] = useState<ProjectType>('email');
  const [emailMode, setEmailMode] = useState<SandboxMode>('after');
  const [calendarMode, setCalendarMode] = useState<SandboxMode>('after');
  const [logisticsMode, setLogisticsMode] = useState<SandboxMode>('after');

  // Mini Search Term Mock
  const [searchTerm, setSearchTerm] = useState('felicity_inbox_architecture');

  return (
    <div className="bg-[#faf8f5] border-y border-stone-200/80 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-mono font-semibold tracking-widest text-[#bd4f3a] bg-[#bd4f3a]/10 px-3 py-1 rounded-full">
            INTERACTIVE PORTFOLIO PLAYGROUND
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-950 mt-3 tracking-tight">
            Case Studies & Sample Work
          </h2>
          <p className="text-stone-500 text-sm mt-3 leading-relaxed">
            Click through the operational dashboards below to see real-life examples of how I audit, restructure, and optimize administrative architecture for clients.
          </p>
        </div>

        {/* Project Tab Selector */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-12">
          <button
            onClick={() => setActiveProject('email')}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border font-medium text-[13px] transition-all duration-300 cursor-pointer ${
              activeProject === 'email'
                ? 'bg-[#132c2a] border-[#132c2a] text-white shadow-sm'
                : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
            }`}
          >
            <Mail className="w-4 h-4" />
            Email Integration: Inbox Zero
          </button>
          
          <button
            onClick={() => setActiveProject('calendar')}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border font-medium text-[13px] transition-all duration-300 cursor-pointer ${
              activeProject === 'calendar'
                ? 'bg-[#132c2a] border-[#132c2a] text-white shadow-sm'
                : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
            }`}
          >
            <Calendar className="w-4 h-4" />
            Calendar Flow: Calendar Harmony
          </button>
          
          <button
            onClick={() => setActiveProject('logistics')}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border font-medium text-[13px] transition-all duration-300 cursor-pointer ${
              activeProject === 'logistics'
                ? 'bg-[#132c2a] border-[#132c2a] text-white shadow-sm'
                : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
            }`}
          >
            <Slack className="w-4 h-4" />
            Team Logistics: Operations Dispatch
          </button>
        </div>

        {/* Interactive Playgrounds Slider Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left panel: Case details */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 bg-white rounded-2xl border border-stone-200 shadow-xs h-full">
            <AnimatePresence mode="wait">
              {activeProject === 'email' && (
                <motion.div
                  key="email-desc"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] bg-red-500/10 text-red-600 font-mono font-bold px-2 py-0.5 rounded-md uppercase">
                      Email Integration Project
                    </span>
                    <h3 className="text-xl font-display font-semibold text-stone-950 mt-2">
                      Eradicating Inbox Overload (From 2,000+ Unreads to Inbox Zero)
                    </h3>
                    
                    <div className="mt-5 space-y-4">
                      <div>
                        <h4 className="text-xs font-mono font-bold text-red-600 flex items-center gap-2 uppercase tracking-wide">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          The Problem (Before)
                        </h4>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                          The executive's inbox was choked with over 2,000 unread emails. Crucial investor updates, active partner files, and client enquiries were constantly lost in noise, leading to critical delays and immense stress.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-mono font-bold text-emerald-600 flex items-center gap-2 uppercase tracking-wide">
                          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                          My Optimization Strategy
                        </h4>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                          Conducted a thorough audit of incoming mail patterns. Set up advanced keyword-based Google Workspace rules & automated filters. Grouped emails into actionable priority categories. Created pre-approved template replies for recurring customer queries.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-mono font-bold text-stone-800 flex items-center gap-2 uppercase tracking-wide">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#bd4f3a]" />
                          The Real-Life Outcomes
                        </h4>
                        <ul className="text-xs text-stone-600 mt-1 space-y-1 list-disc pl-4 leading-relaxed">
                          <li>Achieved Inbox Zero within 5 business days.</li>
                          <li>Created folder tags that auto-cataloged 75% of incoming traffic.</li>
                          <li>Important threads are prioritized instantly, saving 2 hours of daily administrative triage from the executive's schedule.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-stone-100 mt-6">
                    <span className="text-[11px] font-mono text-stone-400 font-bold block mb-2 uppercase tracking-widest">TOOLS UTILIZED</span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Gmail', 'Google Workspace', 'Advanced AI Prompting'].map((tool) => (
                        <span key={tool} className="text-[10px] font-medium bg-stone-100 text-stone-700 px-2.5 py-1 rounded-md border border-stone-200">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeProject === 'calendar' && (
                <motion.div
                  key="calendar-desc"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] bg-amber-500/10 text-amber-600 font-mono font-bold px-2 py-0.5 rounded-md uppercase">
                      Calendar Sync Project
                    </span>
                    <h3 className="text-xl font-display font-semibold text-stone-950 mt-2">
                      Calendar Harmony (Structuring Multi-Timezone Focus Blocks)
                    </h3>
                    
                    <div className="mt-5 space-y-4">
                      <div>
                        <h4 className="text-xs font-mono font-bold text-red-600 flex items-center gap-2 uppercase tracking-wide">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          The Problem (Before)
                        </h4>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                          A chaotic, double-booked calendar across Pacific, Eastern, and EAT zones. The founder had back-to-back meetings with 0 minutes of preparation buffer, leading to missed client calls and high cognitive overwhelm.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-mono font-bold text-emerald-600 flex items-center gap-2 uppercase tracking-wide">
                          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                          My Optimization Strategy
                        </h4>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                          Implemented a strategic scheduling blueprint. Added 15-minute automatic 'buffer buffers' between blocks. Structured hard 'Deep Work Focus Blocks' in local mornings. Created clear custom intake booking rules to direct incoming calendar requests.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-mono font-bold text-stone-800 flex items-center gap-2 uppercase tracking-wide">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#bd4f3a]" />
                          The Real-Life Outcomes
                        </h4>
                        <ul className="text-xs text-stone-600 mt-1 space-y-1 list-disc pl-4 leading-relaxed">
                          <li>Eliminated overlapping bookings to 0% conflict in 3 weeks.</li>
                          <li>Guaranteed 3 hours of uninterrupted daily focus blocks for executive production.</li>
                          <li>Increased preparation scale; meeting documents are completely compiled and appended to events beforehand.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-stone-100 mt-6">
                    <span className="text-[11px] font-mono text-stone-400 font-bold block mb-2 uppercase tracking-widest">TOOLS UTILIZED</span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Calendly', 'Google Calendar', 'Airtable Scheduling'].map((tool) => (
                        <span key={tool} className="text-[10px] font-medium bg-stone-100 text-stone-700 px-2.5 py-1 rounded-md border border-stone-200">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeProject === 'logistics' && (
                <motion.div
                  key="logistics-desc"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] bg-blue-500/10 text-blue-600 font-mono font-bold px-2 py-0.5 rounded-md uppercase">
                      Operations Dispatch Project
                    </span>
                    <h3 className="text-xl font-display font-semibold text-stone-950 mt-2">
                      Operations Dispatch Pipeline (Raw Mess to Ticket Control)
                    </h3>
                    
                    <div className="mt-5 space-y-4">
                      <div>
                        <h4 className="text-xs font-mono font-bold text-red-600 flex items-center gap-2 uppercase tracking-wide">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          The Problem (Before)
                        </h4>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                          SOP and dispatch operations were managed via informal, disjointed updates in Slack channels. Urgent requirements were consistently buried, priorities were unclear, and task completions were not tracked.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-mono font-bold text-emerald-600 flex items-center gap-2 uppercase tracking-wide">
                          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                          My Optimization Strategy
                        </h4>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                          Designed and deployed a structured 'Inbox-to-Ticket' dashboard on Notion/Jira. Established clear communication SOP templates for clients. Instilled structured triaging pipelines based on impact-urgency matrices.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-mono font-bold text-stone-800 flex items-center gap-2 uppercase tracking-wide">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#bd4f3a]" />
                          The Real-Life Outcomes
                        </h4>
                        <ul className="text-xs text-stone-600 mt-1 space-y-1 list-disc pl-4 leading-relaxed">
                          <li>Accelerated turnaround on critical issues by 45%.</li>
                          <li>Unified 100% of task requirements into a single tracker.</li>
                          <li>Freed remote engineers from administrative checking, as tasks are cleanly structured and pre-assigned.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-stone-100 mt-6">
                    <span className="text-[11px] font-mono text-stone-400 font-bold block mb-2 uppercase tracking-widest">TOOLS UTILIZED</span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Notion SOP Workspaces', 'Jira Dispatch', 'Slack Automatons'].map((tool) => (
                        <span key={tool} className="text-[10px] font-medium bg-stone-100 text-stone-700 px-2.5 py-1 rounded-md border border-stone-200">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right panel: Active simulated sandbox */}
          <div className="lg:col-span-7 flex flex-col h-full bg-[#1e1c19] text-stone-200 rounded-2xl border border-stone-800 shadow-xl overflow-hidden min-h-[480px]">
            {/* Sandbox Top Bar Header */}
            <div className="bg-[#171513] border-b border-stone-800 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="ml-2 text-xs text-stone-400 font-mono tracking-wide">SIMULATED SANDBOX INTERFACE</span>
              </div>
              
              {/* Toggles BEFORE / AFTER */}
              <div className="bg-[#12100f] border border-stone-800/80 p-1 rounded-lg flex items-center">
                <button
                  onClick={() => {
                    if (activeProject === 'email') setEmailMode('before');
                    if (activeProject === 'calendar') setCalendarMode('before');
                    if (activeProject === 'logistics') setLogisticsMode('before');
                  }}
                  className={`px-3 py-1.5 rounded-md text-[11px] font-mono uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer ${
                    (activeProject === 'email' && emailMode === 'before') ||
                    (activeProject === 'calendar' && calendarMode === 'before') ||
                    (activeProject === 'logistics' && logisticsMode === 'before')
                      ? 'bg-red-500/15 text-red-500 border border-red-500/30 shadow-xs'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  Before
                </button>
                <button
                  onClick={() => {
                    if (activeProject === 'email') setEmailMode('after');
                    if (activeProject === 'calendar') setCalendarMode('after');
                    if (activeProject === 'logistics') setLogisticsMode('after');
                  }}
                  className={`px-3 py-1.5 rounded-md text-[11px] font-mono uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer ${
                    (activeProject === 'email' && emailMode === 'after') ||
                    (activeProject === 'calendar' && calendarMode === 'after') ||
                    (activeProject === 'logistics' && logisticsMode === 'after')
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-xs'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  After (Optimized)
                </button>
              </div>
            </div>

            {/* Sandbox Main Canvas Body */}
            <div className="p-6 flex-1 flex flex-col justify-between bg-[#191715]">
              
              <AnimatePresence mode="wait">
                {/* 1. EMAIL PROJECT */}
                {activeProject === 'email' && (
                  <motion.div
                    key={`email-sandbox-${emailMode}`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    <div>
                      {/* Search Bar Representation */}
                      <div className="bg-[#13110f] border border-stone-800 rounded-xl p-2.5 mb-5 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-stone-400 text-xs w-full">
                          <Search className="w-3.5 h-3.5" />
                          <span className="font-mono text-[11px] text-stone-300 truncate">{searchTerm}</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-md">
                          {emailMode === 'after' ? 'ACTIVE ARCHITECTURE' : 'UNSTRUCTURED'}
                        </span>
                      </div>

                      {/* Header in mail client */}
                      <div className="border-b border-stone-800/80 pb-3 mb-4 flex items-center justify-between">
                        <h4 className="text-xs uppercase font-mono tracking-widest text-stone-400">
                          {emailMode === 'after' ? 'Active Gmail Triage Folders' : 'Raw Inbound Mails'}
                        </h4>
                        <span className="text-xs text-stone-500 font-mono">
                          {emailMode === 'after' ? 'Filtered: 3 Folders' : '237 Unread / Unsorted'}
                        </span>
                      </div>

                      {/* Client-specific states */}
                      {emailMode === 'before' ? (
                        /* BEFORE (EMAIL) */
                        <div className="space-y-2.5">
                          <div className="p-3 bg-[#1e1c1a] border border-stone-800 rounded-xl opacity-90 relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                <h5 className="font-semibold text-xs text-stone-200">Weekly Promo Blast</h5>
                              </div>
                              <p className="text-xs text-stone-500 mt-1 italic italic truncate max-w-sm">"Get 50% discount off standard SaaS tooling now..."</p>
                            </div>
                            <span className="text-[10px] text-red-400 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-md font-mono self-start sm:self-auto font-bold uppercase">
                              UNMANAGED NOISE
                            </span>
                          </div>

                          <div className="p-3 bg-[#1e1c1a] border border-stone-800 rounded-xl opacity-90 relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                <h5 className="font-semibold text-xs text-stone-200">Inbound Partnership Enquiry - Urgent</h5>
                              </div>
                              <p className="text-xs text-stone-300 mt-1 truncate max-w-lg">"Hi, we need to finalize the investment prospectus sheet by tonight..."</p>
                            </div>
                            <span className="text-[10px] text-red-400 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-md font-mono self-start sm:self-auto font-bold uppercase">
                              LOST IN NOISE
                            </span>
                          </div>

                          <div className="p-3 bg-[#1e1c1a] border border-stone-800 rounded-xl opacity-90 relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                <h5 className="font-semibold text-xs text-stone-200">Daily Newsletter #34</h5>
                              </div>
                              <p className="text-xs text-stone-500 mt-1 italic truncate max-w-sm">"Learn how to manage your calendar on Monday.com..."</p>
                            </div>
                            <span className="text-[10px] text-red-400 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-md font-mono self-start sm:self-auto font-bold uppercase">
                              SPAM CLUTTER
                            </span>
                          </div>
                        </div>
                      ) : (
                        /* AFTER (EMAIL) */
                        <div className="space-y-4">
                          {/* Categories indicators */}
                          <div className="grid grid-cols-3 gap-2 pb-4 border-b border-stone-800/40">
                            <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/25 rounded-xl text-center">
                              <span className="text-[10px] text-stone-400 uppercase font-mono tracking-widest block font-bold">WORK (Client Deals)</span>
                              <span className="text-xs text-emerald-400 font-mono font-bold mt-1 block">Filtered / High Priority</span>
                            </div>
                            <div className="p-2.5 bg-sky-500/10 border border-sky-500/25 rounded-xl text-center">
                              <span className="text-[10px] text-stone-400 uppercase font-mono tracking-widest block font-bold">JOB FEED (Alerts)</span>
                              <span className="text-xs text-sky-400 font-mono font-medium mt-1 block font-bold">Filtered / Archiving</span>
                            </div>
                            <div className="p-2.5 bg-stone-800/40 border border-stone-800 rounded-xl text-center opacity-70">
                              <span className="text-[10px] text-stone-400 uppercase font-mono tracking-widest block font-bold">NEWSLETTERS</span>
                              <span className="text-xs text-stone-400 font-mono mt-1 block">Auto-Flote / Silenced</span>
                            </div>
                          </div>

                          {/* Filtered Action list */}
                          <div className="space-y-2">
                            <span className="text-[10px] font-mono tracking-wider uppercase text-stone-400 font-bold">Mock Automated Labels Applied on New Mail:</span>
                            
                            <div className="p-3 bg-[#162a22] border border-emerald-800/40 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <div>
                                <h5 className="font-semibold text-xs text-emerald-200">Ritesh Pawan</h5>
                                <p className="text-xs text-stone-300 mt-0.5 italic">"Meeting confirmation: itinerary confirmed & brief prepared."</p>
                              </div>
                              <span className="text-[9px] text-emerald-300 bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-1 rounded-md font-mono tracking-wider font-bold self-start sm:self-auto uppercase">
                                EXECUTIVE ACTIONS
                              </span>
                            </div>

                            <div className="p-3 bg-stone-900 border border-stone-800 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 opacity-95">
                              <div>
                                <h5 className="font-semibold text-xs text-stone-300">Manjiru Muhia</h5>
                                <p className="text-xs text-stone-400 mt-0.5">"Performance Summary: review dispatch sheets and logs."</p>
                              </div>
                              <span className="text-[9px] text-[#bd4f3a] bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md font-mono tracking-wider font-bold self-start sm:self-auto uppercase">
                                EXECUTIVE REPORT
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Status Panel Indicator */}
                    <div className="pt-4 border-t border-stone-800/30 flex items-center justify-between text-[11px] text-stone-400 font-mono mt-6">
                      <span className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${emailMode === 'after' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                        {emailMode === 'after' ? 'Clean structural filter logs: Systems Audit Checked ✅' : 'Chaos Detected: System Overhead Warning ⚠️'}
                      </span>
                      <span className="text-stone-500">Workspace Layer v2.1</span>
                    </div>
                  </motion.div>
                )}

                {/* 2. CALENDAR PROJECT */}
                {activeProject === 'calendar' && (
                  <motion.div
                    key={`calendar-sandbox-${calendarMode}`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top indicator panel */}
                      <div className="bg-[#13110f] border border-stone-800 rounded-xl p-2.5 mb-5 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-stone-400 text-xs w-full">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="font-mono text-[11px] text-stone-300">Active Buffer Policies Enabled: {calendarMode === 'after' ? 'Yes (EAT, EST, PST sync)' : 'None'}</span>
                        </div>
                      </div>

                      {/* Header in calendar client */}
                      <div className="border-b border-stone-800/80 pb-3 mb-4 flex items-center justify-between">
                        <h4 className="text-xs uppercase font-mono tracking-widest text-stone-400">
                          {calendarMode === 'after' ? 'Optimized Daily Agenda' : 'Unbuffered Daily Schedule'}
                        </h4>
                        <span className="text-xs text-stone-500 font-mono">
                          {calendarMode === 'after' ? 'Buffer blocks: Active' : 'Overlaps: 3 Conflicts ⚠️'}
                        </span>
                      </div>

                      {/* Client-specific states */}
                      {calendarMode === 'before' ? (
                        /* BEFORE (CALENDAR) */
                        <div className="space-y-2.5">
                          <div className="p-3 bg-[#1e1c1a] border border-red-500/20 rounded-xl opacity-90 relative">
                            <div className="absolute top-2.5 right-2.5 text-[9px] font-mono text-red-400 uppercase font-bold tracking-wider">
                              Double Booked ⚠️
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 bg-red-500 rounded-sm"></span>
                              <span className="font-mono text-xs text-stone-400 font-bold">10:00 AM - 11:00 AM</span>
                            </div>
                            <h5 className="font-semibold text-xs text-stone-200 mt-1">Investor Prospectus Review Sync</h5>
                            <span className="text-[10px] text-stone-500 italic block mt-0.5">Overlaps with Vendor Contract negotiation meeting.</span>
                          </div>

                          <div className="p-3 bg-[#1e1c1a] border border-red-500/20 rounded-xl opacity-90 relative">
                            <div className="absolute top-2.5 right-2.5 text-[9px] font-mono text-red-400 uppercase font-bold tracking-wider">
                              Double Booked ⚠️
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 bg-red-500 rounded-sm"></span>
                              <span className="font-mono text-xs text-stone-400 font-bold">10:00 AM - 10:45 AM</span>
                            </div>
                            <h5 className="font-semibold text-xs text-stone-200 mt-1">Vendor Contract Negotiation</h5>
                            <span className="text-[10px] text-stone-500 italic block mt-0.5">Overlaps with Investor prospectus review sync.</span>
                          </div>

                          <div className="p-3 bg-[#1e1c1a] border border-stone-800 rounded-xl opacity-75">
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 bg-stone-500 rounded-sm"></span>
                              <span className="font-mono text-xs text-stone-400 font-bold">11:00 AM - 12:00 PM</span>
                            </div>
                            <h5 className="font-semibold text-xs text-stone-300 mt-1">Client Strategy Onboarding</h5>
                            <span className="text-[10px] text-red-400 block mt-1 font-mono uppercase font-bold">⚠️ FATIGUE RISKS: Zero preparation buffer after previous high-stress meetings.</span>
                          </div>
                        </div>
                      ) : (
                        /* AFTER (CALENDAR) */
                        <div className="space-y-2.5">
                          <div className="p-3 bg-[#16272b] border border-sky-800/30 rounded-xl flex items-center justify-between">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 bg-sky-500 rounded-sm"></span>
                                <span className="font-mono text-[10px] text-sky-400 font-bold tracking-wider">09:00 AM - 10:30 AM (US EST / EAT Sync)</span>
                              </div>
                              <h5 className="font-semibold text-xs text-stone-200 mt-1">Core Focus: Value Strategy Design (No Calls)</h5>
                              <span className="text-[10px] text-stone-400 block mt-0.5">No incoming calls allowed. Strictly reserved for executive priority tasks.</span>
                            </div>
                            <span className="text-[10px] font-mono bg-sky-500/10 text-sky-300 px-2 py-0.5 rounded border border-sky-500/20 uppercase font-bold font-mono">
                              FOCUS TIME
                            </span>
                          </div>

                          <div className="p-2.5 bg-[#171513] border border-stone-800 rounded-xl flex items-center gap-2 justify-between">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                              <span className="font-mono text-[10px] text-emerald-400 font-bold tracking-wider">10:30 AM - 11:00 AM</span>
                              <span className="text-xs text-stone-300 font-semibold">• Strategic Buffer Block</span>
                            </div>
                            <span className="text-[9px] font-mono text-stone-500 uppercase">30 Min Buffer</span>
                          </div>

                          <div className="p-3 bg-[#162a22] border border-emerald-900/35 rounded-xl flex items-center justify-between">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-sm"></span>
                                <span className="font-mono text-[10px] text-emerald-300 font-bold tracking-wider">11:00 AM - 12:00 PM (US EST / EAT Sync)</span>
                              </div>
                              <h5 className="font-semibold text-xs text-stone-200 mt-1">Client Strategy Onboarding (Pre-Briefed)</h5>
                              <span className="text-[10px] text-stone-400 block mt-0.5">Pre-Brief sheet compiled by Felicity is appended to the meeting event.</span>
                            </div>
                            <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/20 uppercase font-bold">
                              PRE-BRIEFED
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Status Panel Indicator */}
                    <div className="pt-4 border-t border-stone-800/30 flex items-center justify-between text-[11px] text-stone-400 font-mono mt-6">
                      <span className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${calendarMode === 'after' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                        {calendarMode === 'after' ? 'Operational Calendar Sync: Stable & Buffered ✅' : 'Scheduler Conflict Warning: Double Bookings Present ⚠️'}
                      </span>
                      <span className="text-stone-500">Scheduler Tool v1.9</span>
                    </div>
                  </motion.div>
                )}

                {/* 3. LOGISTICS PROJECT */}
                {activeProject === 'logistics' && (
                  <motion.div
                    key={`logistics-sandbox-${logisticsMode}`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top indicator panel */}
                      <div className="bg-[#13110f] border border-stone-800 rounded-xl p-2.5 mb-5 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-stone-400 text-xs w-full">
                          <Layers className="w-3.5 h-3.5" />
                          <span className="font-mono text-[11px] text-stone-300">Integration Platform: {logisticsMode === 'after' ? 'Structured Dispatch System' : 'Messy Channels'}</span>
                        </div>
                      </div>

                      {/* Header in logistics client */}
                      <div className="border-b border-stone-800/80 pb-3 mb-4 flex items-center justify-between">
                        <h4 className="text-xs uppercase font-mono tracking-widest text-stone-400">
                          {logisticsMode === 'after' ? 'Notion Dispatch Ticket Tracker' : 'Raw Slack Messages'}
                        </h4>
                        <span className="text-xs text-stone-500 font-mono">
                          {logisticsMode === 'after' ? 'Active: 3 Tickets' : 'Inbox: 12 Chaotic Chats'}
                        </span>
                      </div>

                      {/* Client-specific states */}
                      {logisticsMode === 'before' ? (
                        /* BEFORE (LOGISTICS) */
                        <div className="space-y-2.5">
                          <div className="p-3 bg-[#1e1c1a] border border-stone-800 rounded-xl">
                            <div className="flex items-center gap-1.5">
                              <span className="font-mono text-xs text-[#bd4f3a] font-bold">@Client-Executive</span>
                              <span className="text-stone-500 text-[10px] font-mono">03:14 PM</span>
                            </div>
                            <p className="text-xs text-stone-200 mt-1 italic font-sans">
                              "hey felicity, forgot to tell you earlier. we need to clean that database list and check Salesforce. needs to be done by tomorrow if possible. thanks!"
                            </p>
                            <span className="text-[10px] text-red-400 block mt-1 font-mono uppercase font-bold">⚠️ UNTRACKED ASSIGNMENT: No clear owner, no structured specs.</span>
                          </div>

                          <div className="p-3 bg-[#1e1c1a] border border-stone-800 rounded-xl opacity-90">
                            <div className="flex items-center gap-1.5">
                              <span className="font-mono text-xs text-[#bd4f3a] font-bold">@Client-Executive</span>
                              <span className="text-stone-500 text-[10px] font-mono">04:22 PM</span>
                            </div>
                            <p className="text-xs text-stone-300 mt-1 italic font-sans">
                              "and also, can you assign someone to draft the routine business email templates for next week's campaign. urgent."
                            </p>
                          </div>
                        </div>
                      ) : (
                        /* AFTER (LOGISTICS) */
                        <div className="space-y-2">
                          <div className="p-3 bg-[#11242e] border border-sky-900/40 rounded-xl flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <span className="p-2 bg-sky-500/10 text-sky-400 rounded-lg">
                                <UserCheck className="w-4 h-4" />
                              </span>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] font-mono tracking-wider font-bold bg-sky-500/10 text-sky-300 px-1.5 py-0.5 rounded uppercase">TICKET #104</span>
                                  <span className="text-[10px] uppercase font-bold font-mono text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded">HIGH PRIORITY</span>
                                </div>
                                <h5 className="font-semibold text-xs text-stone-200 mt-1">Salesforce & CRM Hygiene Cleanup</h5>
                                <p className="text-[10px] text-stone-400 mt-0.5 leading-relaxed font-sans">Scope: Clean database contacts & deduplicate CRM entries. Assigned: Felicity.</p>
                              </div>
                            </div>
                            <span className="text-[10px] font-mono bg-sky-500/15 text-sky-300 py-1 px-2.5 rounded-md uppercase font-bold">
                              DISPATCHED
                            </span>
                          </div>

                          <div className="p-3 bg-[#162a22] border border-emerald-900/40 rounded-xl flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <span className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
                                <CheckCircle2 className="w-4 h-4" />
                              </span>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] font-mono tracking-wider font-bold bg-emerald-500/10 text-emerald-300 px-1.5 py-0.5 rounded uppercase">TICKET #105</span>
                                  <span className="text-[10px] uppercase font-bold font-mono text-stone-400 bg-stone-800 px-1.5 py-0.5 rounded">MEDIUM PREP</span>
                                </div>
                                <h5 className="font-semibold text-xs text-stone-200 mt-1">Routine Business Email Templates Drafting</h5>
                                <p className="text-[10px] text-stone-400 mt-0.5 leading-relaxed font-sans">Scope: Draft campaign templates. Reviewed and compiled in Google Docs.</p>
                              </div>
                            </div>
                            <span className="text-[10px] font-mono bg-emerald-500/15 text-emerald-300 py-1 px-2.5 rounded-md uppercase font-bold">
                              COMPLETE
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Status Panel Indicator */}
                    <div className="pt-4 border-t border-stone-800/30 flex items-center justify-between text-[11px] text-stone-400 font-mono mt-6">
                      <span className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${logisticsMode === 'after' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                        {logisticsMode === 'after' ? 'Operations Dispatch Integration: Connected ✅' : 'Raw Slack Messages: Direct Tasking Silenced ⚠️'}
                      </span>
                      <span className="text-stone-500">Notion Board Integrator v2.0s</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Toggle Tip Instruction in Slate Footer */}
              <div className="mt-4 pt-3 border-t border-stone-800/30 flex items-center justify-center gap-1 text-[11.5px] text-stone-500 font-mono text-center">
                <ArrowRightLeft className="w-3.5 h-3.5 text-[#bd4f3a]" />
                <span>Toggle the slider tabs above to swap scenarios.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
