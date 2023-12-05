export const cx = (...classNames: (string | undefined)[]) => classNames.filter(Boolean).join(' ');

export const navLinks = [
  {
    name: 'Features',
    path: '/'
  },
  {
    name: 'Pricing',
    path: '/'
  },
  {
    name: 'Contact',
    path: '/'
  }
]