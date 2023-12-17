/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/heroimg.jpg')",
      },
      colors: {
        primaryColor: '#6B3CC9',
        secondaryColor: '#F28D35',
        analogousColor1: '#6A44F2',
        analogousColor2: '#1CBDDD',
        triadicColor1: '#52378C',
        darkColor: '#78BF91',
        textColor: '#2F2F2F',
        textColorLight: '#545A75',
        textColorSubtitle: '#9C9991',
        accentColor1: '#E2F2FE',
        accentColor2: '#FFF8E0',
        errorColor: '#FF0335',
        successColor: '#5EB30B',
        primary: '#00040f',
        secondary: '#00f6ff',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    screens: {
      exs: '100px',
      xs: '375px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
