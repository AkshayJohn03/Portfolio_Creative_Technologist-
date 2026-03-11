
export enum ProjectCategory {
  UX = 'UX/UI Design',
  VISUAL = 'Visual & Graphic Design',
  AI_ML = 'AI & Machine Learning'
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  fullDescription?: string;
  imageUrl: string;
  link: string;
  tags: string[];
  hasInternalPage?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  linkedinUrl?: string;
}

export interface GalleryItem {
  title: string;
  description: string;
  imageUrl: string;
}

export interface CaseStudySection {
  title: string;
  content: string | string[]; // Can be paragraph or list of items
  type: 'text' | 'list' | 'grid';
}

export interface Persona {
  name: string;
  role: string;
  image: string;
  bio: string;
  needs?: string;
  painPoints?: string;
  empathyMap?: {
    says: string;
    thinks: string;
    does: string;
    feels: string;
  };
}

export interface ResearchSection {
  overview: string;
  keyFindings: string[];
}

export interface MarketContext {
  mission: string;
  gap: string;
  secretSauce: string;
}

export interface CompetitorAnalysis {
  overview: string;
  takeaways: { title: string; description: string }[];
}

export interface FutureGrowth {
  shortTerm: string;
  midTerm: string;
  longTerm: string;
}

export interface Architecture {
  sitemap: string[];
  userFlow: string[];
}

export interface Wireframing {
  focusAreas: { title: string; description: string; points: string[] }[];
}

export interface Testing {
  goals: string[];
  metrics: { name: string; description: string; target: string }[];
}

export interface VisualIdentity {
  primaryColor: string;
  secondaryColor: string;
  description: string;
}

export interface PDPElement {
  feature: string;
  detail: string;
  value: string;
}

export interface TechStackItem {
  category: string;
  tools: string[];
}

export interface ModelArchitectureStep {
  title: string;
  description: string;
}

export interface ModelArchitecture {
  overview: string;
  steps: ModelArchitectureStep[];
}

export interface PerformanceMetric {
  name: string;
  value: string;
  description: string;
}

export interface InputParameter {
  category: string;
  details: string[];
}

export interface AIProjectStructure {
  problem: string;
  approach: string;
  architecture: string;
  experiment: string;
  results: string;
  whatFailed: string;
}

export interface CaseStudyContent {
  id: string;
  title: string;
  role: string;
  heroImage?: string;
  overview: string;
  context?: string;

  // New Detailed Sections
  marketContext?: MarketContext;
  competitorAnalysis?: CompetitorAnalysis;
  futureGrowth?: FutureGrowth;
  visualIdentity?: VisualIdentity;
  architecture?: Architecture;
  wireframing?: Wireframing;
  testing?: Testing;
  pdpStructure?: PDPElement[]; // Added for detailed PDP breakdown

  research?: ResearchSection;
  persona?: Persona;
  challenges?: { title: string; description: string }[];
  strategies?: { title: string; description: string }[];
  futureWork?: { title: string; description: string }[]; // New Section

  wireframeGallery?: GalleryItem[]; // Added for wireframe row
  uiGallery?: GalleryItem[];

  // AI Project Specifics
  techStack?: TechStackItem[];
  modelArchitecture?: ModelArchitecture;
  performanceMetrics?: PerformanceMetric[];
  inputParameters?: InputParameter[];
  aiStructure?: AIProjectStructure;
}
