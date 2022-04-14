const twColors = require('tailwindcss/colors')

const colors = {
    gray: {
        25: "#FCFCFD",
        50: "#F9FAFB",
        100: "#F2F4F7",
        200: "#E4E7EC",
        300: "#D0D5DD",
        400: "#98A2B3",
        500: "#667085",
        600: "#475467",
        700: "#344054",
        800: "#1D2939",
        900: "#101828",
    },
    primary: twColors.purple,
    secondary: twColors.blue,
    sucess: {
        300: "#6CE9A6",
        400: "#32D583",
        500: "#12B76A",
        600: "#039855",
        700: "#027A48",
    },
    warning: {
        25: "#FFFCF5",
        50: "#FFFAEB",
        100: "#FEF0C7",
        200: "#FEDF89",
        500: '#f1c40f'
    },

    // Custom Colors
    thunder: "#ffd400",
    fire: "#ff6a00",
}


const THEME = { colors };
module.exports = THEME;