const { DEFAULT_SERIF_FONT } = require("next/dist/shared/lib/constants");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "theme-black": "#000000",
      "theme-white": "#FFFFFF",
      "theme-red": {
        DEFAULT: "#FF0000",
        100: "#ff4040",
        200: "#e33924",
      },
      "theme-yellow": {
        DEFAULT: "#ffde5a",
        50:"#ffde5a2e",
        100: "",
      },
      "theme-green": {
        DEFAULT: "#0D6F39",
        50:"#83ffb838",
        100: "#83ffb87d",
        300:"#0d6f39b0",
        900: "#00210e",
      },
      "theme-gray": { DEFAULT: "#F4F4F4" },
      "theme-gray-500": "#868686",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm1: "350px",
      },
    },
  },
  plugins: [],
};
