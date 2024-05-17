import { useState, createContext, useEffect, useContext } from "react";
import { MuiThemeContext } from "./MuiThemeContext";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const LIGHT = ({
    "folder" : "light",
    "scrollbar": " light-scrollbar",
    "buttonIcon" : <DarkModeIcon className="text-neutral-700"/>,
    "iconHover": " text-neutral-700 hover:text-black",
    "sidebarBg": " bg-neutral-100",
    "hoverSidebar" : " hover:bg-neutral-400 hover:text-black",
    "textSidebar" : " text-neutral-700",
    "navbarBg": " bg-main-purple-100",
    "activeNavbar" : " font-bold text-main-purple-950 md:bg-transparent",
    "hoverNavbar" : " hover:font-bold hover:underline hover:text-main-green-900",
    "textNavbar" : " text-gray-900",
    "borderNavbar" : " border-neutral-700",
    "mainBorder" : " border-black",
    "mainBg" : " bg-neutral-200",
    "lightBg" : " bg-neutral-300",
    "highBg" : " bg-neutral-400",
    "softBg" : " bg-white/40",
    "lightText" : " text-neutral-600",
    "mainText" : " text-black",
    "invText" : " text-white",
    "primaryAccent" : " bg-main-purple",
    "secondaryAccent" : " bg-main-red",
    "primaryText" : " text-main-purple",
    "secondaryText" : " text-main-red",
    "primaryButton" : " border-main-purple hover:bg-main-purple hover:text-white",
    "secondaryButton" : " border-main-red hover:bg-main-red hover:text-white",
    "primaryBg" : " bg-cover bg-light-pattern",
    "secondaryBg" : " bg-cover bg-light-alt-pattern",
});
const DARK = ({
    "folder" : "dark",
    "scrollbar": " dark-scrollbar",
    "buttonIcon": <LightModeIcon className="text-neutral-300"/>,
    "iconHover": " text-neutral-300 hover:text-white",
    "sidebarBg": " bg-neutral-850",
    "hoverSidebar" : " hover:bg-neutral-500 hover:text-white",
    "textSidebar" : " text-neutral-300",
    "navbarBg": " bg-neutral-900",
    "activeNavbar" : " bg-neutral-800",
    "hoverNavbar" : " hover:bg-neutral-600 hover:text-white",
    "textNavbar" : " text-neutral-300",
    "borderNavbar" : " border-neutral-300",
    "mainBorder" : " border-white",
    "mainBg" : " bg-neutral-800",
    "lightBg" : " bg-neutral-750",
    "highBg" : " bg-neutral-600",
    "softBg" : " bg-black/40",
    "lightText" : " text-neutral-400",
    "mainText" : " text-white",
    "invText" : " text-black",
    "primaryAccent" : " bg-main-red",
    "secondaryAccent" : " bg-main-purple",
    "primaryText" : " text-main-red",
    "secondaryText" : " text-main-purple",
    "primaryButton" : " border-main-red hover:bg-main-red hover:text-black",
    "secondaryButton" : " border-main-purple hover:bg-main-purple hover:text-black",
    "primaryBg" : " bg-cover bg-dark-pattern",
    "secondaryBg" : " bg-cover bg-dark-alt-pattern",
});

export const ThemeContext = createContext();
export function ThemeContextProvider(props) {
    const { toggleMui } = useContext(MuiThemeContext);
    let theme, setTheme;
    let localTheme = localStorage.getItem('theme');
    if (localTheme === 'dark') {
        [theme, setTheme] = useState(DARK);
    } else {
        [theme, setTheme] = useState(LIGHT);
    }
    function toggleTheme() {
        toggleMui();
        if (theme.mainBg === " bg-neutral-800") {
            setTheme(LIGHT);
        } else {
            setTheme(DARK);
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