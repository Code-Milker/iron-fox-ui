// tailwind.config.js
module.exports = {
  content: [
    "./src/partials/**/*.html",
    "./src/public/**/*.css",
    "./src/public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "sans-serif"], // Add your font here
      },
      colors: {
        "iron-fox": {
          DEFAULT: "#1E1E2E", // Base background color (dark gray/blue)
          "light-gray": "#E0E0E0", // Text color (soft white)
          "dark-gray": "#A0A0A0", // Muted gray for secondary text
          "metallic": "#B0BEC5", // Metallic silver
          "cyan": "#00C8FF", // Vibrant cyan for highlights
          "cyan-dark": "#0088CC", // Slightly darker cyan
          "accent": "#1A1A25", // Accent dark background
        },
      },
    },
  },
};
