module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        imperialBlue: "#0000CD",
        imperialLightBlue: "#00bfff",
        imperialBlack: "#161a1d",
        imperialDarkBlue: "#000080"
      }, // ← this comma was missing!
      fontFamily: {
        sans: ['"Imperial Sans Text"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
