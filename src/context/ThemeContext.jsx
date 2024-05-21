import { useState, createContext, useEffect, useContext } from "react";
import { MuiThemeContext } from "./MuiThemeContext";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const themeLight = ({
    "buttonIcon" : <DarkModeIcon className="text-neutral-700"/>,
    "folder" : "light",
    "scrollbar": " light-scrollbar",
    "iconHover": " text-neutral-700 hover:text-black",
    "mainBg" : " bg-neutral-200",
    "primaryText" : " text-main-purple-900",
    "secondaryText" : " text-main-green-900",
    "softBg" : " bg-white/40",
    "mainText" : " text-black",
    "activeNavbar" : " font-bold text-main-purple-950 md:bg-transparent",
    "hoverNavbar" : " hover:font-bold hover:underline hover:text-main-green-900",
    "textNavbar" : " text-gray-900",
    "borderNavbar" : " border-neutral-700",
});

export const ThemeContext = createContext();
export function ThemeContextProvider(props) {
    const { toggleMui } = useContext(MuiThemeContext);
    let theme, setTheme;
    let localTheme = localStorage.getItem('theme');
    if (localTheme === 'dark') {
        [theme, setTheme] = useState(themeLight);//themeDark
    } else {
        [theme, setTheme] = useState(themeLight);
    }
    function toggleTheme() {
        toggleMui();
        if (theme.mainBg === " bg-neutral-800") {
            setTheme(themeLight);
        } else {
            setTheme(themeLight);//themeDark
        }
    }

    useEffect(() => {
        if (theme.mainBg === " bg-neutral-800") {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={({theme, toggleTheme})}>
            {props.children}
        </ThemeContext.Provider>
    )
}