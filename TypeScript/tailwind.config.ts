/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        stretchpro: ['StretchPro', 'sans-serif'],
        disassembler: ['disassembler', 'sans-serif'],
      },
    },
  },
  plugins: [],
}