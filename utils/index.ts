import Feature1 from '@/public/images/illustration-features-tab-1.svg';
import Feature2 from '@/public/images/illustration-features-tab-2.svg';
import Feature3 from '@/public/images/illustration-features-tab-3.svg';
import Chrome from '@/public/images/logo-chrome.svg';
import Firefox from '@/public/images/logo-firefox.svg';
import Opera from '@/public/images/logo-opera.svg';


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

export const extentions = [
  {
    heading: 'Add to Chrome',
    img: Chrome,
    min_version: 'Minimum version 62',
  },
  {
    heading: 'Add to Firefox',
    img: Firefox,
    min_version: 'Minimum version 55',
  },
  {
    heading: 'Add to Opera',
    img: Opera,
    min_version: 'Minimum version 46',
  }
]

export const faqs = [
  {
    question: 'What is Bookmark?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
    key: 1
  },
  {
    question: 'How can I request a new browser?',
    answer: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
    key: 2
  },
  {
    question: 'Is there a mobile app?',
    answer: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus.',
    key: 3
  },
  {
    question: 'What about other Chromium browsers?',
    answer: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
    key: 4
  }
]