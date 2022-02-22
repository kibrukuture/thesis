module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#00c569",
        black: "#090b17",
        gold: "#8f652f",
        white: "#747474",
        darkgray: "#323232",
        lightgray: "#353c3b",
      },
      fontFamily: {
        oswald: "Oswald",
        nunito: "Nunito",
      },
      animation: {
        loadone: "loadone 2s ease-in-out 1s infinite",
        loadtwo: "loadtwo 2s ease-in-out 6s infinite",
        loadthree: "loadthree 2s ease-in-out 4s infinite",
      },
      keyframes: {
        loadone: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(0px)" },
        },
        loadtwo: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(0px)" },
        },
        loadthree: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
};
