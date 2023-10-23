/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { min: "320px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px", max: "1439px" },
        xl: "1440px",
        "2xl": "768px",
        "3xl": { min: "1023px" },
        "4xl": "2559px",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "18px",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "32px",
        "5xl": "3.052rem",
        "6xl": "3.552rem",
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      width: {
        icon: "32px",
      },
      height: {
        icon: "32px",
      },
      colors: {
        white: "#fff",
      },
      borderColor: {
        primary: "#9E9E9E",
      },
      backgroundColor: {
        primary: "#1182B6",
      },
      textColor: {
        primary: "#09415B",
        secondary: "#9E9E9E",
        other: "#1182B6",
      },
    },
  },
  plugins: [],
};
