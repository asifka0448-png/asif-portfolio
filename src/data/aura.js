const asset = (filename) => `/assets/aura/${filename}`;

export const auraProject = {
  id: 'aura-luxury-perfume',
  slug: 'aura',
  title: 'AURA',
  subtitle: 'Luxury Perfume Branding',
  tagline: 'Beyond the Ordinary.',
  category: 'Brand Identity & Packaging',
  projectType: 'Fictional Brand Concept',
  description: 'A complete luxury perfume branding concept developed with a distinctive visual identity, elegant product design, premium packaging and promotional campaign.',
  disclaimer: 'A Fictional Brand Concept – Created for Creative & Portfolio Showcase Only.',
  heroImage: {
    src: asset('Bottle and Box Product Poster.jpg'),
    alt: 'AURA perfume bottle and box product poster',
    caption: 'AURA bottle and box product poster',
  },
  sections: [
    {
      id: 'brand-identity',
      number: '02',
      title: 'Brand Identity',
      description: 'A visual identity shaped by deep purple, refined silver typography and luxury-inspired minimalism.',
      layout: 'identity',
      images: [
        { src: asset('Aura Logo.jpg'), alt: 'AURA luxury perfume logo', caption: 'AURA logo' },
      ],
    },
    {
      id: 'product-design',
      number: '03',
      title: 'Product Design',
      description: 'The bottle, presentation box and campaign poster bring the AURA identity together as a tactile product experience.',
      layout: 'product',
      images: [
        { src: asset('Bottle.jpg'), alt: 'AURA perfume bottle product design', caption: 'Perfume bottle' },
        { src: asset('Bottle and Box Product Poster.jpg'), alt: 'AURA perfume bottle and box product poster', caption: 'Bottle and box product poster' },
        { src: asset('Box Creation.jpg'), alt: 'AURA perfume packaging box mockup', caption: 'Packaging box mockup' },
      ],
    },
    {
      id: 'packaging-system',
      number: '04',
      title: 'Packaging System',
      description: 'A coordinated set of print-ready package panels, designed to carry the same restrained luxury language across every side.',
      layout: 'packaging',
      images: [
        { src: asset('Front Side.jpg'), alt: 'AURA packaging front panel', caption: 'Front side' },
        { src: asset('Back Panel.jpg'), alt: 'AURA packaging back panel', caption: 'Back panel' },
        { src: asset('Side Panel.jpg'), alt: 'AURA packaging side panel', caption: 'Side panel' },
        { src: asset('Side Panel 2.jpg'), alt: 'AURA packaging second side panel', caption: 'Side panel 02' },
        { src: asset('Top Panel.jpg'), alt: 'AURA packaging top panel', caption: 'Top panel' },
        { src: asset('Bottom Panel.jpg'), alt: 'AURA packaging bottom panel', caption: 'Bottom panel' },
      ],
    },
    {
      id: 'social-campaign',
      number: '05',
      title: 'Social Media Campaign',
      description: 'Launch and product-focused campaign artwork extends the visual identity into a digital promotional system.',
      layout: 'campaign',
      images: [
        { src: asset('Brand Launch.jpg'), alt: 'AURA perfume brand launch campaign creative', caption: 'Brand launch' },
        { src: asset('Product Highlight.jpg'), alt: 'AURA perfume product highlight campaign creative', caption: 'Product highlight' },
      ],
    },
  ],
  credits: [
    { label: 'Project', value: 'AURA Luxury Perfume Branding' },
    { label: 'Category', value: 'Brand Identity & Packaging' },
    { label: 'Tools', value: 'Adobe Photoshop, AI Tools' },
    { label: 'Concept', value: 'Fictional Brand Concept' },
  ],
};
