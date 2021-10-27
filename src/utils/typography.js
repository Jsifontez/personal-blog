import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: '25.2px',
  scaleRatio: 2.5,
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
