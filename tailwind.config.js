/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: ["./src/**/*.{html,js}"
  ],

  theme: {
    fontFamily: {
      'display': ['Helvetica'],
    },
    extend: {
      listStyleImage: {
        checkmark: 'url("/src/assets/images/Group 53 (3).png")',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}