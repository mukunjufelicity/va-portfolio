export interface TechItem {
  name: string;
  category: 'Operations' | 'CRM' | 'Workspaces' | 'AI' | 'Productivity';
  badge: 'Operations' | 'CRM' | 'Workspaces' | 'AI' | 'Productivity';
  description: string;
}

export type SandboxState = 'before' | 'after';

export interface EmailMail {
  id: string;
  from: string;
  subject: string;
  category: 'Inbox' | 'Filtered' | 'Work' | 'Alert' | 'Newsletter' | 'Spam';
  labelColor: string;
  labelText: string;
}

export interface CaseStudy {
  id: string;
  tabTitle: string;
  title: string;
  problem: string;
  strategy: string;
  outcomes: string[];
  tools: string[];
  sandboxTitle: string;
  sandboxBeforeLabel: string;
  sandboxAfterLabel: string;
}

export interface PackageItem {
  id: string;
  name: string;
  hours: string;
  subtitle: string;
  price: number;
  featured?: boolean;
  bullets: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  image: string;
  engagement: string;
  segment: string;
}
