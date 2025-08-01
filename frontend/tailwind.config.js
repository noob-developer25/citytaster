/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
      extend: {
        colors: {
          primary:   '#1e90ff',
          secondary: '#ff6347',
        }
      }
    },
    plugins: [],
  }
  