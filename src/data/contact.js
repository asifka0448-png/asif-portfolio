export const contactDetails = {
  whatsappNumber: '', // International format, digits only. Example: 919876543210
  email: '',
  instagramUrl: '',
  linkedinUrl: '',
};

export const contactLinks = [
  {
    label: 'WhatsApp',
    placeholder: 'ADD PHONE NUMBER',
    getHref: ({ whatsappNumber }) => whatsappNumber ? `https://wa.me/${whatsappNumber.replace(/\D/g, '')}` : '',
  },
  {
    label: 'Email',
    placeholder: 'ADD EMAIL ADDRESS',
    getHref: ({ email }) => email ? `mailto:${email}` : '',
  },
  {
    label: 'Instagram',
    placeholder: 'ADD PROFILE URL',
    getHref: ({ instagramUrl }) => instagramUrl,
  },
  {
    label: 'LinkedIn',
    placeholder: 'ADD PROFILE URL',
    getHref: ({ linkedinUrl }) => linkedinUrl,
  },
].map((item) => ({ ...item, href: item.getHref(contactDetails) }));
