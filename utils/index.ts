import Feature1 from '@/public/images/illustration-features-tab-1.svg'
import Feature2 from '@/public/images/illustration-features-tab-2.svg'
import Feature3 from '@/public/images/illustration-features-tab-3.svg'


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

export const features = [
  {
    title: 'Simple Bookmarking',
    heading: 'Bookmark in one click',
    content: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    key: 1,
    img: Feature1
  },
  {
    title: 'Speedy Searching',
    heading: 'Intelligent search',
    content: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    key: 2,
    img: Feature2
  },
  {
    title: 'Easy Sharing',
    heading: 'Share your bookmarks',
    content: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    key: 3,
    img: Feature3
  }
]