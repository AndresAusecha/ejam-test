/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "primary/dark": "#252F3D",
        "primary/green": "#59AE43",
        "primary/blue": "#2C7EF8",
        "primary/light-blue": "#E3EEFF",
        "secondary/gray": "#4D5254",
        "secondary/light-gray": "#FAFAFA",
        "secondary/dark-gray": "#969696",
        "secondary/dark-gray-2": "#37465A",
        "secondary/dark-gray-3": "#CFCFCF",
        "secondary/red": "#F82C2C",
        "secondary/green": "#5BB59A",
        "secondary/dark-gray-4": "#333333"
      }
    },
  },
  plugins: [],
}
