export type ProjectCategory = 'all' | 'apps' | 'games' | 'products' | 'experiments';

export type ProjectStatus = 'Released' | 'In Development' | 'Concept' | 'Coming Soon';

export type Platform = 'iOS' | 'Android' | 'Web' | 'macOS' | 'Spatial' | 'Cross-Platform';

export interface ProjectSection {
  title: string;
  content: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: 'apps' | 'games' | 'products' | 'experiments';
  categoryLabel: string;
  year: string;
  platforms: Platform[];
  status: ProjectStatus;
  featured: boolean;
  theme: {
    accent: string;
    ambient: string;
    gradient: string;
  };
  summary: string;
  overview: string;
  challenge: string;
  experience: string;
  technologies: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface InquiryFormState {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}
