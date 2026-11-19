import data from '../data/data.json';

export interface LinkType {
  name: string;
  href: string;
}

export interface HeaderData {
  logo: string;
  logo_alt: string;
  links: LinkType[];
  button_text: string;
  button_href: string;
  button_icon: string;
  menu_label: string;
  close_label: string;
}

export interface FooterData {
  logo: string;
  logo_alt: string;
  description: string;
  links_title: string;
  links: LinkType[];
  contact_title: string;
  address_label: string;
  address: string;
  phone_label: string;
  phone: string;
  phone_href: string;
  email_label: string;
  email: string;
  email_href: string;
  link_mark: string;
  copyright: string;
  socials: LinkType[];
}

export interface BackToTopData {
  aria_label: string;
}

export interface HeroSectionData {
  id: string;
  eyebrow: string;
  title_line: string;
  title_highlight: string;
  title_mid: string;
  title_end: string;
  lead: string;
  image: string;
  image_alt: string;
  stats: { icon: string; value: string; label: string; tone: string }[];
}

export interface AboutSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_accent: string;
  title_end: string;
  text: string;
  image: string;
  image_alt: string;
}

export interface ExpertiseSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_accent: string;
  lead: string;
  items: { icon: string; title: string; text: string }[];
}

export interface ProductsSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_accent: string;
  lead: string;
  items: { icon: string; title: string; text: string; image: string; image_alt: string }[];
}

export interface ResearchSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_accent: string;
  text: string;
  image: string;
  image_alt: string;
  points: { icon: string; title: string }[];
}

export interface TestimonialsSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_accent: string;
  lead: string;
  quote_mark: string;
  star: string;
  prev_label: string;
  next_label: string;
  items: { quote: string; name: string; role: string; image: string; image_alt: string; stars: number }[];
}

export interface ContactSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_accent: string;
  lead: string;
  address_label: string;
  address: string;
  phone_label: string;
  phone: string;
  phone_href: string;
  email_label: string;
  email: string;
  email_href: string;
  form_title: string;
  name_placeholder: string;
  email_placeholder: string;
  phone_placeholder: string;
  subject_placeholder: string;
  company_placeholder: string;
  message_placeholder: string;
  category_placeholder: string;
  categories: string[];
  button_text: string;
  success_message: string;
}

export interface FaqSectionData {
  id: string;
  eyebrow: string;
  title: string;
  title_accent: string;
  lead: string;
  image: string;
  image_alt: string;
  open_icon: string;
  close_icon: string;
  items: { question: string; answer: string }[];
}

export const siteJson = data;
export const common = data.common;
export const template = data.categories.Healthcare.templateComponents['template-1'];
export const pages = template.pages;
export const sections = template.sections;
