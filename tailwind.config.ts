/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e4012b'
      },
      fontFamily: {
        neue: ['NeueHaas', 'sans-serif'],
        'neue-medium': ['NeueHaasMedium', 'sans-serif']
      }
    }
  },
  plugins: []
}
