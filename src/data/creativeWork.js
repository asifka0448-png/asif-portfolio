export const creativeCategories = [
  { id: 'social-media-designs', title: 'Social Media Designs', galleryType: 'images' },
  { id: 'logo-design-brand-identity', title: 'Logo Design & Brand Identity', galleryType: 'logos' },
  { id: 'visiting-card-designs', title: 'Visiting Card Designs', galleryType: 'visiting-cards' },
  { id: 'motion-graphics', title: 'Motion Graphics', galleryType: 'video' },
  { id: 'ai-promotional-videos', title: 'AI Promotional Videos', galleryType: 'video' },
];

// Add future projects here. Image entries use `images: [{ src, alt, side? }]`;
// a front/back visiting card belongs in one project object's `images` array.
// Video entries use `mediaType: 'video'`, `src`, and an optional `poster` path.
export const creativeProjects = [
  {
    id: 'aura-logo',
    categoryId: 'logo-design-brand-identity',
    title: 'AURA Logo',
    category: 'Logo Design & Brand Identity',
    description: 'Logo Design · Brand Identity',
    image: '/assets/logos/Aura Logo.jpg',
  },
  {
    id: 'honeybee-logo',
    categoryId: 'logo-design-brand-identity',
    title: 'HoneyBee Logo',
    category: 'Logo Design & Brand Identity',
    description: 'Logo Design · Brand Identity',
    image: '/assets/logos/HONEYBEE.jpg',
  },
  {
    id: 'l-logo',
    categoryId: 'logo-design-brand-identity',
    title: 'L Logo',
    category: 'Logo Design & Brand Identity',
    description: 'Logo Design · Brand Identity',
    image: '/assets/logos/L.jpg',
  },
  {
    id: 'logo-design',
    categoryId: 'logo-design-brand-identity',
    title: 'Logo Design',
    category: 'Logo Design & Brand Identity',
    description: 'Logo Design · Brand Identity',
    image: '/assets/logos/LOGO.jpg',
  },
  {
    id: 'memo-finds-logo',
    categoryId: 'logo-design-brand-identity',
    title: 'Memo Finds Logo',
    category: 'Logo Design & Brand Identity',
    description: 'Logo Design · Brand Identity',
    image: '/assets/logos/Memo Finds.jpg',
  },
];
