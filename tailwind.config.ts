import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js"
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
      keyframes: {
        textIn: {
          '0%': { transform: "translateY(100%)" },
          '100%': { transform: "translateY(0%)" },
        },
        textOut: {
          '0%': { transform: "translateY(0%)" },
          '100%': { transform: "translateY(-100%)" },
        },
      },
      animation: {
        textIn: 'textIn 1s ease-in-out infinite',
        textOut: 'textOut 1s ease-in-out infinite',
      },
      margin: {
        '18': '4.5rem',
        '19': '4.75rem',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
export default config
