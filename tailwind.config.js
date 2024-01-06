/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    fontFamily: {
      'spartan': ['Spartan-MB-SemiBold', 'sans-serif'],
    },
    extend: {
      screens: {
        '3xl': '1980px',
        'ssm': '360px',
      },
    },
  },
  plugins: [],
  
}

