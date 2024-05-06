/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkblue: {
          "100": "#2434b3",
          "200": "#0a1ea0",
        },
        cardblue:"#2a3bbf",
        blacky:"#040826",
        crimson: "#ee2852",
        mediumslateblue: {
          "100": "#3349d3",
          "200": "#293ccc",
        },
        tomato: "#ff4b36",
        lightsteelblue: "#c9cfff",
        blueviolet: "#3e49f3",
        midnightblue: "#08104d",
        slategray: "#666a80",
        royalblue: {
          "100": "#4772ff",
          "200": "#446cef",
          "300": "#4256d6",
        },
        slateblue: "#2a3bbf",
        gainsboro: "#dfdfdf",
        lavender: "#d7e3f7",
      },
      spacing: {},
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        "13967xl": "13986px",
        "8xs": "5px",
        "3xs": "10px",
        "10xs": "3px",
        "27xl": "46px",
        "5xl-5": "24.5px",
        "4xs": "9px",
        "39xl": "58px",
      },
    },
    fontSize: {
      base: "1rem",
      mini: "0.938rem",
      sm: "0.875rem",
      lg: "1.125rem",
      "8xl": "1.688rem",
      "3xl": "1.375rem",
      smi: "0.813rem",
      "16xl": "2.188rem",
      "2xl": "1.313rem",
      "9xl": "1.75rem",
      "41xl": "3.75rem",
      "17xl": "2.25rem",
      "29xl": "3rem",
      "31xl": "3.125rem",
      "11xl": "1.875rem",
      "21xl": "2.5rem",
      xl: "1.25rem",
      "61xl": "5rem",
      "5xl": "1.5rem",
      inherit: "inherit",
    },
    
  },
  plugins: [],
}

