/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '1240': '1240px',
        '136': '136px',
        '122': '122px',
        '115px':'115px',
        
      },
      height: {
        '415': '415px',
        '34': '34px',
        '68': '68px',
        '39.44': '39.44px',
        '25px':'25px'
      },
      
      fontSize: {
        '288px': '288px',
        '36px': '36px',
        '18px': '18px',
      },
      lineHeight: {
        '410.69px': '410.69px',
        '51.34px': '51.34px',
        '25.67px': '25.67px',
      },
      fontWeight: {
        '500': '500',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
    screens: {
      'sm': '640px',  // Small screens (phones)
      'md': '768px',  // Medium screens (tablets)
      'lg': '1024px', // Large screens (desktops)
      // Add more breakpoints as needed
    },
  },
  plugins: [],
}
