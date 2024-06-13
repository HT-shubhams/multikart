// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your project's file structure
  ],
  theme: {
    extend: {
      boxShadow: {
        "right-lg":
          "10px 0 15px -3px rgba(0, 0, 0, 0.1), 6px 0 6px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
