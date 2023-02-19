module.exports = {
  syntax: "postcss-scss",
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {}, // minifier
    "postcss-nested": {},
    "postcss-advanced-variables": {}, // variables , if , for , mixins , interplation
  },
};
