import { alpha, createTheme, getContrastRatio } from "@mui/material";
import { orange } from "@mui/material/colors";

const violetBase = '#7F00FF';
const violetMain = alpha(violetBase, 0.7);

export const theme = createTheme({
    palette: {
      ochre: {
        main: '#E3D026',
        light: '#E9DB5D',
        dark: '#A29415',
        contrastText: '#242105',
      },
      violet: {
        main: violetMain,
        light: alpha(violetBase, 0.5),
        dark: alpha(violetBase, 0.9),
        contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
      },
    },
  });