const tailwindcss = require('tailwindcss');

module.exports = {
  content: [
    './src/**/*.{js}',
    './src/App.js/',
    '.src/index.js',
    '/src/components/AddHighScore.js',
    '/src/components/LettersFromUser.js',
    '/src/components/StartCta.js',
    '/src/components/UsedLettersFromUser.js',
    '/src/components/UserInput.js',
    '/src/components/Words.js',
  ],
  plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')],
};
