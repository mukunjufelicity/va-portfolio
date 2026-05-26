import { useState } from 'react';
import { 
  Mail, 
  FileSpreadsheet, 
  Database, 
  ListTodo, 
  MessageSquare, 
  Layers, 
  Sparkles, 
  Trello,
  Settings,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TechItem {
  id: string;
  name: string;
  category: 'Operations' | 'CRM' | 'Workspaces' | 'AI' | 'Productivity';
  badge: string;
  description: string;
  icon: any;
}

const techItems: TechItem[] = [
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    category: 'Productivity',
    badge: 'PRODUCTIVITY',
    description: 'Expert level inbox organization, advanced calendar routing, and collaborative drive management.',
    icon: Mail,
  },
  {
    id: 'office-365',
    name: 'Office 365',
    category: 'Productivity',
    badge: 'PRODUCTIVITY',
    description: 'Polished documentation, Excel data manipulation, and Outlook calendar optimization.',
    icon: FileSpreadsheet,
  },
  {
    id: 'salesforce-zoho',
    name: 'Salesforce & Zoho CRM',
    category: 'CRM',
    badge: 'CRM & DATABASE',
    description: 'Client contact tracking, record cleaning, sales pipeline entries, and data organization.',
    icon: Database,
  },
  {
    id: 'clickup-asana',
    name: 'ClickUp & Asana',
    category: 'Operations',
    badge: 'OPERATIONS',
    description: 'Task allocation, timeline mapping, dependency tracking, and remote team alignment.',
    icon: ListTodo,
  },
  {
    id: 'slack-teams',
    name: 'Slack & Microsoft Teams',
    category: 'Workspaces',
    badge: 'COMMUNICATION',
    description: 'Async team coordination, real-time alerts, and stakeholder channel management.',
    icon: MessageSquare,
  },
  {
    id: 'notion-airtable',
    name: 'Notion & Airtable',
    category: 'Operations',
    badge: 'OPERATIONS',
    description: 'Building relational databases, centralized SOP wikis, and team project workspace structures.',
    icon: Layers,
  },
  {
    id: 'advanced-ai',
    name: 'Advanced AI (Gemini / ChatGPT)',
    category: 'AI',
    badge: 'AI INFUSED',
    description: 'Elite prompt drafting for quick summaries, automated mail templates, and high-quality doc outlines.',
    icon: Sparkles,
  },
  {
    id: 'jira-confluence',
    name: 'Jira & Confluence',
    category: 'Operations',
    badge: 'WORKFLOW & SOP',
    description: 'Managing tickets, documenting release logs, and cataloging structured operations wiki pages.',
    icon: Trello,
  },
];

type CategoryFilter = 'All Stack' | 'Operations & Tasks' | 'CRM & DB' | 'Workspaces' | 'AI Optimization';

export default function TechStack() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All Stack');

  const filteredItems = techItems.filter((item) => {
    if (activeFilter === 'All Stack') return true;
    if (activeFilter === 'Operations & Tasks') return item.category === 'Operations' || item.category === 'Productivity';
    if (activeFilter === 'CRM & DB') return item.category === 'CRM';
    if (activeFilter === 'Workspaces') return item.category === 'Workspaces' || item.id === 'slack-teams';
    if (activeFilter === 'AI Optimization') return item.category === 'AI';
    return true;
  });

  const filters: CategoryFilter[] = [
    'All Stack',
    'Operations & Tasks',
    'CRM & DB',
    'Workspaces',
    'AI Optimization',
  ];

  return (
    <div className="section-container">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer ${
              activeFilter === filter
                ? 'bg-[#132c2a] text-white shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={item.id}
                className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs hover:shadow-md hover:border-stone-300 transition-all duration-300 flex flex-col justify-between group h-full relative overflow-hidden"
              >
                {/* Accent indicator line on hover */}
                <span className="absolute top-0 left-0 w-full h-1 bg-[#132c2a] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-3 bg-stone-50 rounded-xl group-hover:bg-[#bd4f3a]/10 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-stone-700 group-hover:text-[#bd4f3a] transition-colors duration-300" />
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 font-bold">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-display font-semibold text-stone-900 mb-2">
                    {item.name}
                  </h4>
                  <p className="text-xs text-stone-500 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span className="text-[10px] text-stone-400 font-medium tracking-wide font-mono">FULLY FLUENT</span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
