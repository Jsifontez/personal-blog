import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.66,
  scaleRatio: 2.5,
  googleFonts: [
    {
      name: "Fira Sans",
      styles: ["Bold"]
    },
    {
      name: "Montserrat",
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    }
  ],
  headerFontFamily: ["Fira Sans", "sans-serif"],
  bodyFontFamily: ["Montserrat", "sans-serif"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
