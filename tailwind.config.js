/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            strokeGray: "#4E4E4E",
            baseGreen: "#23FC6B",
            softGray: "#ECECEC",
            baseBlue: "#2367FC",
            baseGrayWithOpacity: "rgba(217,217,217, 0.1)",
         },
         boxShadow: {
            whiteShadow: "0 0 15px 5px rgba(255,255,255,0.7)",
            grenShadow: "0 0 15px 5px rgba(35,255,107,0.7)",
            blueShadow: "0 0 15px 5px rgba(35,103,252,0.9)",
         },
         fontFamily: {
            K2D: ["K2D", "sans-serif"],
            Roboto: ["Roboto", "sans-serif"],
         },
      },
   },

   plugins: [],
};
