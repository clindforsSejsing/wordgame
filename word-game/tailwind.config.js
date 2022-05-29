const tailwindcss = require('tailwindcss');

module.exports = {
  content: [
    './src/**/*.js',
    './src/App.js',
    '.src/index.js',
    './src/colorBoxFeedback.js',
    './src/components/AddHighScore.js',
    './src/components/LettersFromUser.js',
    './src/components/StartCta.js',
    './src/components/UsedLettersFromUser.js',
    './src/components/UserInput.js',
    './src/components/Words.js',
  ],
  plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')],
  theme: {
    fontFamily: {
      serif: ['Dancing Script', 'cursive'],
    },
    extend: {
      colors: {
        blue: 'rgb(79, 108, 222)',
        green: 'rgb(79, 222, 93)',
        red: 'rgb(251, 42, 42)',
      },
    },
  },
};
