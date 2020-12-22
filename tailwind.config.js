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
        md: "18px",
        lg: "20px",
        "hero-h1": ["92px", "92px"],
        h2: ["42px", "56px"],
      },
      letterSpacing: {
        two: "2px",
      },
      spacing: {
        30: "7.5rem",
        "15px": "15px",
        "30px": "30px",
        "35px": "35px",
        "50px": "50px",
        "70px": "70px",
        "90px": "90px",
        "110px": "110px",
        "120px": "120px",
      },
      maxWidth: {
        "600px": "600px",
        "750px": "750px",
      },
      height: {
        hero: "calc(100vh + 100px)",
        "hero-content": "395px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
