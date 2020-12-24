module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#B2D234",
        "primary-lighter": "#c2e539",
        "ct-black": "#212121",
        "source-grey": "#b1b1b1",
        "st-blue": "#008CD3",
        "st-red": "#ED1C24",
        "st-orange": "#F26622",
      },
      ringColor: {
        primary: "#B2D234",
      },
      fontFamily: {
        pop: ["Poppins"],
        quest: ["Questrial"],
      },
      fontSize: {
        smaller: "14px",
        small: "16px",
        md: "18px",
        "md-lh": ["18px", "36px"],
        lg: "20px",
        larger: ["22px", "28px"],
        "hero-h1": ["92px", "92px"],
        h2: ["42px", "56px"],
        "slider-h3": ["26px", "40px"],
        "slider-p": ["16px", "32px"],
      },
      letterSpacing: {
        two: "2px",
      },
      spacing: {
        30: "7.5rem",
        45: "11.5rem",
        "15px": "15px",
        "20px": "20px",
        "30px": "30px",
        "35px": "35px",
        "50px": "50px",
        "70px": "70px",
        "75px": "75px",
        "90px": "90px",
        "110px": "110px",
        "120px": "120px",
      },
      maxWidth: {
        btn: "215px",
        "600px": "600px",
        "750px": "750px",
        "815px": "815px",
        "1400px": "1400px",
        "slider-img-default": "355px",
        "slider-img-active": "510px",
      },
      width: {
        "slider-img-default": "355px",
        "slider-img-active": "510px",
      },
      height: {
        hero: "calc(100vh + 100px)",
        "hero-content": "395px",
        btn: "60px",
        "slider-img-mobile": "350px",
        "slider-img-default": "390px",
        "slider-img-active": "620px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
