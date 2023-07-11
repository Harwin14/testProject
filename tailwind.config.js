module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'card': '10px 10px 30px rgba(0, 0, 0, .05)',
      },
      colors: {
        ungu: {
          'gradient': 'linear-gradient(to bottom, #0f0c29, #302b, #24243e)',
        },
        primary: '#5542f6',
        highlight: '#eae8f8',
        abu: '#F5F5F5',
        darkAbu: '#EEEEEE',
        gold:'#f4b050'
      },
      screens: {
        'xs': '400px',
        's': '500px',
        'tablet': '600px'
      }
    },
  },
  plugins: [],
};
