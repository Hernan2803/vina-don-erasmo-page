import { createContext, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const themeLight = createTheme({
    palette: {
        mode: "light",
    },
    typography: {
        fontFamily: `"Montserrat", sans-serif`
    },
    palette: {
        primary: {
            main: '#560530',
        },
        secondary: {
            main: '#026530',
        },
    },
    
});

const themeDark = createTheme({
    palette: {
        mode: "dark",
    },
    typography: {
        fontFamily: `"Montserrat", sans-serif`
    },
    palette: {
        primary: {
            main: '#560530',
        },
        secondary: {
            main: '#026530',
        },
    },
    
});

export const MuiThemeContext = createContext();
export function MuiThemeContextProvider(props) {
    let muiDark, setMuiDark;
    let localTheme = localStorage.getItem('theme');
    if (localTheme === "dark") {
        [ muiDark, setMuiDark ] = useState(true);
    } else {
        [ muiDark, setMuiDark ] = useState(false);
    }
    const toggleMui = () => { setMuiDark(!muiDark); };
    return (
        <ThemeProvider theme={muiDark ? themeDark : themeLight}>
            <MuiThemeContext.Provider value={({ toggleMui, muiDark })}>
                { props.children }
            </MuiThemeContext.Provider>
        </ThemeProvider>
    )
}