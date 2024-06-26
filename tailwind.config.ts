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
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        pumpkinSpiceLight: {
          "primary": "#D35400",
          "secondary": "#E6AE84",
          "accent": "#EE9755",
          "neutral": "#4A3C31",
          "background": "#F5E8D2",
        },
        pumpkinSpiceDark: {
          "primary": "#F1A71E",
          "secondary": "#3E2E14",
          "accent": "#9B7C42",
          "neutral": "#FDF1D8",
          "background": "#594012",
        },
        holidayCookiesLight: {
          "primary": "#93A5D8",
          "secondary": "#DAD2BE",
          "accent": "#5F9C44",
          "neutral": "#11141D",
          "background": "#E8EBF2",
        },
        holidayCookiesDark: {
          "primary": "#273A6D",
          "secondary": "#413925",
          "accent": "#3A6328",
          "neutral": "#E2E5EE",
          "background": "#0D1017"
        },
        springBloomLight: {
          "primary": "#B7D37B",
          "secondary": "#CDCDD6",
          "accent": "#CCA7BD",
          "neutral": "#090C03",
          "background": "#E0DECF",
        },
        springBloomDark: {
          "primary": "#6A862D",
          "secondary": "#292932",
          "accent": "#573249",
          "neutral": "#F9FCF3",
          "background": "#2F2D1E",
        },
        summerSunsetLight: {
          "primary": "#EB7A6D",
          "secondary": "#F0C1BC",
          "accent": "#77B19A",
          "neutral": "#0D0403",
          "background": "#F7DCD9",
        },
        summerSunsetDark: {
          "primary": "#942114",
          "secondary": "#43140F",
          "accent": "#2F5446",
          "neutral": "#FCF3F3",
          "background": "#260B08",
        },
      }
    ],
    darkTheme: false,
  },
  screens: {
    xxsTall: { raw: '(width: 375px) and (height: 629px)' },
    xxs: '375px',
    xs: '390px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
    xxl: '1536px',
  },
  variants: {
    extend: {
      opacity: ['group-hover'],
    },
  },
}
export default config
