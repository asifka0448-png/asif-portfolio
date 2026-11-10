import { moviePosterProjects } from './moviePosters.js';
import { corporateProjects } from './corporate.js';

export const categories = [
  { id: 'product-advertising', title: 'Product Advertising' },
  { id: 'brand-identity-packaging', title: 'Brand Identity & Packaging' },
  { id: 'social-media-marketing', title: 'Social Media & Marketing Designs' },
  { id: 'movie-posters', title: 'Movie Posters' },
  { id: 'wedding-photo-manipulation', title: 'Wedding Photo Manipulation' },
  { id: 'corporate-commercial', title: 'Corporate & Commercial Designs' },
];

export const projects = [
  { id: 'aura-luxury-perfume', categoryId: 'brand-identity-packaging', title: 'AURA – Luxury Perfume Branding', category: 'Brand Identity & Packaging', image: '/assets/aura/Bottle and Box Product Poster.jpg', pageSlug: 'aura', projectType: 'Fictional Brand Concept' },
  { id: 'honeybee-studio-brand-launch', categoryId: 'social-media-marketing', title: 'HoneyBee Studio – Brand Launch Campaign', category: 'Social Media & Marketing Designs', image: '/assets/honeybee-studio/01-intro.jpg.jpg', pageSlug: 'honeybee-studio' },
  { id: 'davidoff-hot-water', categoryId: 'product-advertising', title: 'Davidoff Hot Water', category: 'Product Advertising', image: '/assets/product-advertising/David Off.jpg', disclaimer: 'Unofficial personal design concept · not an official brand campaign.' },
  { id: 'jbl-speaker', categoryId: 'product-advertising', title: 'JBL Speaker', category: 'Product Advertising', image: '/assets/product-advertising/JBL.jpg', disclaimer: 'Unofficial personal design concept · not an official brand campaign.' },
  { id: 'west-end-watch', categoryId: 'product-advertising', title: 'West End Watch', category: 'Product Advertising', image: '/assets/product-advertising/West End.jpg', disclaimer: 'Unofficial personal design concept · not an official brand campaign.' },
  { id: 'apple-juice', categoryId: 'product-advertising', title: 'Apple Juice', category: 'Product Advertising', image: '/assets/product-advertising/Apple Juice copy.jpg', disclaimer: 'Unofficial personal design concept · not an official brand campaign.' },
  { id: 'chicfer-organic-fertilizer', categoryId: 'product-advertising', title: 'Chicfer Organic Fertilizer', category: 'Product Advertising', image: '/assets/product-advertising/Chicfer.jpg', disclaimer: 'Unofficial personal design concept · not an official brand campaign.' },
  { id: 'coca-cola', categoryId: 'product-advertising', title: 'Coca-Cola', category: 'Product Advertising', image: '/assets/product-advertising/COLA.jpg', disclaimer: 'Unofficial personal design concept · not an official brand campaign.' },
  ...moviePosterProjects,
  ...corporateProjects,
];

export const expertise = [
  'Graphic Design',
  'Brand Identity & Visual Design',
  'Product Advertising',
  'Social Media Creatives',
  'Wedding Photo Manipulation',
  'Photo Retouching',
  'Poster Design',
  'Video Editing & Motion Graphics',
];

export const tools = [
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Adobe After Effects',
  'Adobe Premiere Pro',
  'Canva',
  'ChatGPT',
  'Gemini',
];
