/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",          // si tu as un index.html à la racine
    "./src/**/*.{js,ts,jsx,tsx}", // tous les fichiers JS/TS/JSX/TSX dans src
    "./src/components/**/*.{js,ts,jsx,tsx}", // tous les composants
    "./src/pages/**/*.{js,ts,jsx,tsx}",      // toutes les pages
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22c55e", // vert personnalisé si besoin
        secondary: "#16a34a",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // si tu veux utiliser Inter
      },
    },
  },
  plugins: [],
};
