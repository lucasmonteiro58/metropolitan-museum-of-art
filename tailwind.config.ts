/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        neue: ['NeueHaas', 'sans-serif'],
        'neue-medium': ['NeueHaasMedium', 'sans-serif']
      }
    }
  },
  plugins: []
}
