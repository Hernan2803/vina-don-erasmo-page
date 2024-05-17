import { ThemeContext } from '../context/ThemeContext';
import { useContext, useRef, useState } from 'react';
import Navbar from './components/Navbar'
import Home from './sections/Home';
import Products from './sections/Products';
import About from './sections/About';
import Blog from './sections/Blog';

export function Layout() {

    const { theme } = useContext(ThemeContext);
    const [ page, setPage ] = useState(0);
    const body = useRef();
    
    window.onhashchange = function () {
        history.pushState(null, "", window.location.pathname);
    }

    const scrollHandler = () => {
        let mh = window.screen.height;
        let st = body.current.scrollTop + mh / 1.5;
        let screen = Math.floor(st / mh);
        if (screen != page) {
        setPage(screen);
        }
    }

    return (
        <div ref={body} className={"h-screen overflow-y-scroll" + theme.scrollbar} onScroll={scrollHandler}>
            <Navbar current={page}/>
            <Home/>
            <Products/>
            <About/>
            <Blog/>
        </div>
    )
}