module.exports = {

  mode: process.env.NODE_ENV ? 'jit' : undefined,
  content: ["./src/**/*.{js,jsx}",],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],

}
