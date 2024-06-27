/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 4px 4px 0px #00000040',
    },
      width: {
        '1240': '1240px',
        '136': '136px',
        '122': '122px',
        '115':'115px',
        '255':'255px',
        
      },
      height: {
        '415': '415px',
        '34': '34px',
        '68': '68px',
        '39.44': '39.44px',
        '255':'255px'
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
      'sm': '640px',  
      'md': '768px',  
      'lg': '1024px', 
      'dm': {'max': '767px'},
     
    },
  },
  plugins: [],
}
