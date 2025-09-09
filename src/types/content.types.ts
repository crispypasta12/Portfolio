import { IconName } from "@/resources/icons";
import { zones } from "tzdata";

/**
 * IANA time zone string (e.g., 'Asia/Calcutta', 'Europe/Vienna').
 * See: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
export type IANATimeZone = Extract<keyof typeof zones, string>; // Narrow to string keys for React usage

/**
 * Represents a person featured in the portfolio.
 */
export type Person = {
  firstName: string;
  lastName: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
  location: IANATimeZone;
  languages?: string[];
};

/**
 * Newsletter Section
 */
export type Newsletter = {
  display: boolean;
  title: React.ReactNode;
  description: React.ReactNode;
};

/**
 * Social link configuration.
 */
export type Social = Array<{
  name: string;
  icon: IconName;
  link: string;
}>;

/**
 * Base interface for page configuration with common properties.
 */
export interface BasePageConfig {
  path: `/${string}` | string;
  label: string;
  title: string;
  description: string;
  image?: `/images/${string}` | string;
}

/**
 * Home — extended with optional, data-driven sections used on the homepage.
 */
export interface Home extends BasePageConfig {
  image: `/images/${string}` | string;
  headline: React.ReactNode;
  featured: {
    display: boolean;
    title: React.ReactNode;
    href: string;
  };
  subline: React.ReactNode;

  /** Small highlight cards under hero */
  spotlights?: Array<{
    icon?: IconName;
    title: string;
    description: React.ReactNode;
  }>;

  /** Tech Stack & Capabilities (4 subsections) */
  tech?: {
    display: boolean;
    sections: Array<{
      title: string;
      description?: React.ReactNode;
      tags: Array<{ name: string; icon?: IconName }>;
    }>;
  };

  /** Work Process (4 steps) */
  process?: {
    display: boolean;
    steps: Array<{
      title: string;
      description: React.ReactNode;
      icon?: IconName;
    }>;
  };

  /** Publications & Funding */
  publications?: {
    display: boolean;
    items: Array<{
      title: string;
      venue?: string;
      year?: string;
      link?: string;
      scholar?: string; 
      citations?: number;
    }>;
  };

  /** Testimonials (optional; keep off if empty) */
  testimonials?: {
    display: boolean;
    items: Array<{ quote: string; author: string; role?: string }>;
  };

  /** Hobbies & Life (optional; keep off if not needed) */
  hobbies?: { display: boolean; items: string[] };

  /** Contact CTA */
  contact?: {
    display: boolean;
    title: React.ReactNode;
    ctaLabel: string;
    ctaHref: string;
  };
}

/**
 * About page configuration.
 */
export interface About extends BasePageConfig {
  tableOfContent: { display: boolean; subItems: boolean };
  avatar: { display: boolean };
  calendar: { display: boolean; link: string };
  intro: { display: boolean; title: string; description: React.ReactNode };
  work: {
    display: boolean;
    title: string;
    experiences: Array<{
      company: string;
      timeframe: string;
      role: string;
      /** NEW: optional logo path (e.g., '/images/about/work_milwaukee.webp') */
      logo?: string;
      achievements: React.ReactNode[];
      images?: Array<{
        src: string;
        alt: string;
        width: number;
        height: number;
      }>;
    }>;
  };
  studies: {
    display: boolean;
    title: string;
    institutions: Array<{
      name: string;
      logo?: string;
      thesis?: string;
      description: React.ReactNode;
    }>;
  };
  technical: {
    display: boolean;
    title: string;
    skills: Array<{
      title: string;
      description?: React.ReactNode;
      tags?: Array<{ name: string; icon?: string }>;
      images?: Array<{
        src: string;
        alt: string;
        width: number;
        height: number;
      }>;
    }>;
  };
}

/** Blog, Work, Gallery */
export interface Blog extends BasePageConfig {}
export interface Work extends BasePageConfig {}
export interface Gallery extends BasePageConfig {
  images: Array<{ src: string; alt: string; orientation: string }>;
}
