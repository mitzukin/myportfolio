/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#23272a',
        'secondary': '#2c2f33',
        'custom-blue': '#7289da',
        'paragraph': '#424549',
        'Below': '#191717'
      },
      fontWeight: {
        'custom': '500',
      },
      fontFamily: {
        custom: ['Inter', 'sans'],
        Roboto: ['Roboto', 'ui-sans-serif', 'system-ui'],

      },
      fontSize: {
        '10xl': '4rem',
        '11xl': '5rem', // You can adjust the value as needed
      },
      fontWeight: {
        'super-bold': 900, // You can adjust the weight as needed
      },
      backgroundColor: {
        'primary-light': '#FFA500', // Define your light gradient color
        'primary-dark': '#FF4500',  // Define your dark gradient color
      },
      screens: {
        'tablet': '1100x', 
        'ipad': '768px',
        'xs': '320px',
      },
    },
  },
  plugins: [
  ],
}

