/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#475BE8",
        secondaryColor: "#DADEFA",
        textPrimary: "#11142D",
        textSecondary: "#808191",
        grayf4: "#F4F4F4",
        grayfc: "#FCFCFC",
      },
      spacing: {
        c10: "10px",
      },
    },
  },
  plugins: [],
};
