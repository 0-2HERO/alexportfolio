

module.exports = {
      mode: 'jit',
      content: [
        './src/**/*.{html,ts,js}',
       
      ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};