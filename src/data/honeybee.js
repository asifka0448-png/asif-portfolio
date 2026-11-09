const asset = (filename) => `/assets/honeybee-studio/${filename}`;

export const honeybeeProject = {
  id: 'honeybee-studio-brand-launch',
  slug: 'honeybee-studio',
  title: 'HoneyBee Studio',
  projectTitle: 'HoneyBee Studio – Brand Launch Campaign',
  tagline: 'We Bring the Buzz.',
  category: 'Social Media & Marketing Designs',
  campaign: 'Brand Launch Campaign',
  visualIdentity: 'Black & Yellow',
  description: 'A vibrant launch campaign introducing HoneyBee Studio through a distinctive black-and-yellow identity, expressive visuals and a clear sense of creative energy.',
  images: [
    { src: asset('01-intro.jpg.jpg'), alt: 'HoneyBee Studio logo and We Bring the Buzz brand launch artwork', caption: 'Brand introduction' },
    { src: asset('02-services.jpg.jpg'), alt: 'HoneyBee Studio services campaign design', caption: 'Services' },
    { src: asset('03-why-choose.jpg.jpg'), alt: 'HoneyBee Studio why choose us campaign design', caption: 'Why choose HoneyBee' },
    { src: asset('04-brand-value.jpg.jpg'), alt: 'HoneyBee Studio brand values campaign design', caption: 'Brand values' },
    { src: asset('05-contact.jpg.jpg'), alt: 'HoneyBee Studio contact campaign design', caption: 'Contact' },
  ],
};
