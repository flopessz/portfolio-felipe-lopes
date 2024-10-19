import {nextui} from '@nextui-org/theme';
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|divider).js"
  ],
  theme: {
      screens: { 
        'xxsm': '300px',
        // => @media (min-width: 640px) { ... }
  
        'xsm': '320px',
        // => @media (min-width: 640px) { ... }
        
        '2sm': '375px',
        // => @media (min-width: 640px) { ... }
  
        '3sm': '425px',
        // => @media (min-width: 640px) { ... }

        '4sm': '475px',
        // => @media (min-width: 640px) { ... }
        
        '5sm': '550px',
        // => @media (min-width: 640px) { ... }
        
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
  
        '3xl': '1720px',
        // => @media (min-width: 1720px) { ... }
  
        '4xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      
    },
    extend: {
      animation: {
        spin: 'spin 3s linear infinite',
        checkicon: 'pop-in 0.5s ease-in-out forwards',
        fade: 'fadeOut 2s ease-out',
        fademodal: 'fadeIn 300ms ease-in',
        fadenavbar: 'fadeInDown 1s ease-out',
        fadenmn: 'fadenmn 500ms ease-out',
      },
      keyframes: {
        "pop-in": {
          '0%': { opacity: "0", transform: "scale(0)" },
          '100%': { opacity: "1", transform: "scale(1)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          '0%': { opacity: "0" },
          '100%': { opacity: "1" },
        },
        fadeOut: {
          '0%': { opacity: "1" },
          '50%': { opacity: "0.5" },
          '100%': { opacity: "0" },
        },
        fadenmn: {
          '0%': { opacity: "0" },
          '100%': { opacity: "1" },
        },
        fadeInDown: {
          '0%': { opacity: "0", transform: "translateY(-20px)" },
          '100%': { opacity: "1", transform: "translateY(0)" },
        },
      },
      width: {
        'sm': '90%',
        'xl': '50%',
      },
      colors: {
        'cor1': '#3fabe2',
        'cor2': '#67d3f2',
        'cor3': '#235b9c', 

        'dark': '#000000',
        'dark1': '#181818',
        'dark2': '#272727',
        'dark3': '#323438',
        'dark4': '#1B1B1B',
        'dark5': '#26292e',
        'dark6': '#232426',

        'gray1': '#98a7b5', 
        'gray2': '#474a4d', 
        'textgray': '#b3bec1',
        'textnavbar': '#bcbfc7',
        'colorunselect': '#787878',
        
      },
    },
  },
  plugins: [],
} satisfies Config

export default config