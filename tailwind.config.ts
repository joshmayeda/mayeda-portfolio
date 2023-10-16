import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'pumpkinSpiceAccent': '#E1970E',
        'pumpkinSpiceSecondary': '#FBE7C1',
        'pumpkinSpicePrimary': '#EDD4A6',
        'pumpkinSpiceBackground': '#EDD4A6',
      },
      textColor: {
        'pumpkinSpiceText': '#271B02',
        'pumpkinSpiceAccent': '#E1970E',
      },
      ringColor: {
        'pumpkinSpiceText': '#271B02',
      },
    },
  },
  plugins: [],
}
export default config
