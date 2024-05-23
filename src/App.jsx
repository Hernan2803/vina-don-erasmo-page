import { useContext, useState } from 'react'
import { RouteContext } from './context/RouteContext'
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout as Start } from './start/Layout'; 

function App() {
    const { allRoutes } = useContext(RouteContext);

    return (
        <Start/>
    )
}

export default App
