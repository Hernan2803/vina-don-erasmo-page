import { createContext } from "react";
import { Layout as Start } from "../start/Layout";

export const RouteContext = createContext();
export function RouteContextProvider(props) {
    const allRoutes = [
        {
            url: "/",
            comp: <Start/>,
        },
    ];

    return (
        <RouteContext.Provider value={({ allRoutes })}>
            {props.children}
        </RouteContext.Provider>
    )
}