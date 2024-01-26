/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamilly:  {
      sans: ['var(--font-poppins)']
    },
    extend: {
      backgroundImage: {
        'hero': "url('/images/wallpaper-child.jpeg')",
      },
    },
  },
  plugins: [],
}
