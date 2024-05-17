import { useContext, useState } from 'react'
import { RouteContext } from './context/RouteContext'
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
    const { allRoutes } = useContext(RouteContext);

    return (
        <Routes>
            {allRoutes.map((page, idx) => {
                if (page.url === "/" || page.url === "/docs") {
                    return <Route key={`route-${idx}-to-${page}`} path={page.url} element={page.comp}/>;
                } else {
                    return <Route key={`route-${idx}-to-${page}`} path={page.url} element={logged ? page.comp : <Navigate replace to={"/"}/>}/>;
                }
            })}
        </Routes>
    )
}

export default App
