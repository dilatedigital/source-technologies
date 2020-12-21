module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#B2D234",
        "primary-lighter": "#c2e539",
        "ct-black": "#212121",
      },
      fontFamily: {
        pop: ["Poppins"],
        quest: ["Questrial"],
      },
      fontSize: {
        smaller: "14px",
        small: "16px",
        lg: "20px",
      },
      letterSpacing: {
        two: "2px",
      },
      spacing: {
        30: "7.5rem",
        "30px": "30px",
        "35px": "35px",
        "70px": "70px",
        "90px": "90px",
        "110px": "110px",
        "120px": "120px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
