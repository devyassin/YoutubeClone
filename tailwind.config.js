/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1480px",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        SoftRed: "#FC1503",
        SoftBlack: "#1E1E1E",
        LightBlue: "#87cefa",
        fashion1: "#d9d9d9",
        fashion2: "#8c8c8c",
        fashion3: "#595959",
        fashion4: "#262626",
        fashion5: "#0d0d0d",
      },
      backgroundImage: (theme) => ({
        "profile-background": "url('./assets/programming-background.jpg')",
      }),
    },
  },
  plugins: [],
};
