import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#5267DF',
        dark: '#242A45',
        light: '#ffffff',
        red: '#FA5959',
        gray: {
          light: '#E8EAF6',
          medium: '#a09fa4',
        }
      }
    },
  },
  plugins: [],
}
export default config
