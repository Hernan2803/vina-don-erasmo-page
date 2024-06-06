import { useState, useEffect, useContext } from "react"
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from "react-router-dom"
import { ThemeContext } from "./../context/ThemeContext";
import MenuItems from "./MenuItems"

function Navbar({ current }) {
    const paths = ["#home", "#products", "#about", "#blog"];
    const [selection, setSelection] = useState("#home");
    const [collapse, setCollapse] = useState("hidden");
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [navStyle, setNavStyle] = useState([
        "block py-2 px-3 rounded" + theme.activeNavbar,
        "block py-2 px-3 rounded" + theme.textNavbar + theme.hoverNavbar,
        "block py-2 px-3 rounded" + theme.textNavbar + theme.hoverNavbar,
        "block py-2 px-3 rounded" + theme.textNavbar + theme.hoverNavbar,
    ]);
    const [active, setActive] = useState(false);
    const showMenu = () => {
        setActive(!active);
    };

    function toggleCollapse() {
        if (collapse === "") {
            setCollapse("hidden");
        } else {
            setCollapse("");
        }
    }

    useEffect(() => {
        setNavStyle(paths.map((element) => {
            if (selection === element) {
                return "px-3 py-2 rounded-md" + theme.activeNavbar;
            } else {
                return "px-3 py-2 rounded-md" + theme.textNavbar + theme.borderNavbar + theme.hoverNavbar;
            }
        }))
    }, [selection, theme]);

    useEffect(() => {
        setNavStyle(paths.map((_, idx) => {
            if (current === idx) {
                return "px-3 py-2 rounded-md" + theme.activeNavbar;
            } else {
                return "px-3 py-2 rounded-md" + theme.textNavbar + theme.borderNavbar + theme.hoverNavbar;
            }
        }))
    }, [current]);

    return (
        <nav className={"fixed top-0 z-50 w-full" + theme.navbarBg}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <button type="button" className={"inline-flex items-center justify-center rounded-md p-2 focus:outline-none" + theme.hoverNavbar} aria-controls="mobile-menu" aria-expanded="false" onClick={toggleCollapse}>
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className={theme.textNavbar} onClick={showMenu}/>
                    </button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <Link to="/">
                        <div className="flex flex-shrink-0 items-center">
                            <img className="block h-8 w-auto lg:block" src={theme.folder + "/logo.png"} alt="Logo"/>
                        </div>
                    </Link>
                </div>
                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <a href="#home" className={navStyle[0]} onClick={() => setSelection('#home')}>Inicio</a>
                        </li>
                        <li>
                            <a href="#products" className={navStyle[1]} onClick={() => setSelection('#products')}>Productos</a>
                        </li>
                        <li>
                            <a href="#about" className={navStyle[2]} onClick={() => setSelection('#about')}>Nosotros</a>
                        </li>
                        <li>
                            <a href="#blog" className={navStyle[3]} onClick={() => setSelection('#blog')}>Novedades</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar