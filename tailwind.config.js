module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "blue-shade": "#06202A",
        "blue-shade2": "#0B1A2F",
      },
    },
    rotate: {
      270: "270deg",
    },
  },
  variants: {
    animation: ["group-hover"],
  },
  plugins: [],
};
