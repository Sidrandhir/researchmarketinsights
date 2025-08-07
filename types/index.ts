// Core types for the market research platform

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'ADMIN' | 'EDITOR' | 'USER';
  createdAt: Date;
  updatedAt: Date;
}

export interface Report {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  subcategory?: string;
  price: number;
  discountPrice?: number;
  reportCode: string;
  imageUrl?: string;
  toc?: string;
  scope?: string;
  segments?: string;
  faqs?: FAQ[];
  rating: number;
  downloads: number;
  views: number;
  featured: boolean;
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  language: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface PressRelease {
  id: string;
  title: string;
  content: string;
  category: string;
  subcategory?: string;
  imageUrl?: string;
  author: string;
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
  language: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  position?: string;
  source: 'CONTACT_FORM' | 'SAMPLE_REQUEST' | 'BUY_NOW' | 'ENQUIRY';
  status: 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'CONVERTED' | 'LOST';
  notes?: string;
  reportId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: string;
  userId?: string;
  reportId: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  customerCompany?: string;
  licenseType: 'SINGLE_USER' | 'MULTI_USER' | 'ENTERPRISE';
  price: number;
  currency: string;
  status: 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED';
  paymentMethod: 'STRIPE' | 'PAYPAL' | 'BANK_TRANSFER';
  transactionId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Sample {
  id: string;
  reportId: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  customerCompany?: string;
  status: 'PENDING' | 'SENT' | 'FAILED';
  sentAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface StaticPage {
  id: string;
  slug: string;
  title: string;
  content: string;
  language: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  status: 'DRAFT' | 'PUBLISHED';
  createdAt: Date;
  updatedAt: Date;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IndustryCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  reportCount: number;
  language: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface NewsletterSubscription {
  id: string;
  email: string;
  status: 'ACTIVE' | 'UNSUBSCRIBED';
  createdAt: Date;
  updatedAt: Date;
}

export interface SearchResult {
  id: string;
  type: 'REPORT' | 'PRESS_RELEASE' | 'INDUSTRY';
  title: string;
  description: string;
  url: string;
  category?: string;
  language: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

export interface SampleRequestForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  reportId: string;
  reportTitle: string;
  purpose: string;
}

export interface BuyNowForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  reportId: string;
  reportTitle: string;
  licenseType: 'SINGLE_USER' | 'MULTI_USER' | 'ENTERPRISE';
  quantity: number;
}

export interface EnquiryForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  reportId?: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

// Language types
export type Language = 'en' | 'zh' | 'ko' | 'ar' | 'fr' | 'es' | 'de' | 'jp';

export interface LanguageConfig {
  code: Language;
  name: string;
  flag: string;
  rtl: boolean;
}

// Navigation types
export interface NavigationItem {
  name: string;
  href: string;
  children?: NavigationItem[];
}

// Form validation types
export interface ValidationError {
  field: string;
  message: string;
}

// File upload types
export interface UploadedFile {
  filename: string;
  originalname: string;
  mimetype: string;
  size: number;
  url: string;
}

// Chart data types
export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
  }[];
}

// Analytics types
export interface AnalyticsData {
  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{
    page: string;
    views: number;
  }>;
  topReferrers: Array<{
    source: string;
    visits: number;
  }>;
} 