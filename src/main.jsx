import React from 'react'
import ReactDOM from 'react-dom/client'
import { MuiThemeContextProvider } from './context/MuiThemeContext'
import { ThemeContextProvider } from './context/ThemeContext'
import{ BrowserRouter } from "react-router-dom"
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <MuiThemeContextProvider>
                <ThemeContextProvider>
                    <App/>
                </ThemeContextProvider>
            </MuiThemeContextProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
