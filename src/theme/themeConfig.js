import {createTheme} from "@mui/material";
import {primary, white} from './colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: primary,
        },
        info: {
            main: white,
        }
    },
});