import { createTheme } from "@mui/material";
import { green, purple } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: '#966EE0',
            dark: purple[900],
            light: '#966EE0',
            contrastText: '#eee',
        },
        secondary: {
            main: '#23C450',
            dark: green[700],
            light: '#B0E59B',
            contrastText: '#eee',
        },
        background: {
            default: '#CDCDCD',
            paper: '#fff',
        }
    }
});