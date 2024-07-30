import { useState, createContext, useEffect, useContext } from "react";
import { MuiThemeContext } from "./MuiThemeContext";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const themeLight = ({
    "buttonIcon" : <DarkModeIcon className="text-neutral-700"/>,
    "activeNavbar" : " font-bold text-main-purple-100",
    "cardBg": " bg-main-purple-100",
    "cardText": " text-main-purple-950",
    "folder" : "light",
    "footerBg": " bg-main-purple-300",
    "hoverNavbar" : " hover:font-bold hover:underline hover:text-main-green-700",
    "iconHover": " text-neutral-700 hover:text-black",
    "scrollbar": " light-scrollbar",
    "mainBg" : " bg-neutral-200",
    "mainText" : " text-black",
    "navbarBg": " bg-main-purple-900",
    "highText" : " text-main-purple-800",
    "sectionText": " font-bold text-4xl text-main-purple-700",
    "softBg" : " bg-white/40",
    "textNavbar" : " text-gray-700",
    "titleText": " text-main-purple-950",
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