/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#ff69b4', // Light Pink
        secondary: '#ffe4e1', // Misty Rose
        accent: '#ff1493', // Deep Pink
        dark: '#222222', // Dark Text
      },
    },
  },
  plugins: [],
};