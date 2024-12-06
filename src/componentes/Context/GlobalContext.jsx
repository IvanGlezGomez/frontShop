import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [genres, setGenres] = useState(["ficcion", "noficcion", "child", "youth", "comic", "english", "paper"])
    const [cart, setCart] = useState([])

    return (
        <GlobalContext.Provider value={{ genres, setGenres, cart, setCart }}>
            {children}
        </GlobalContext.Provider>
    )
}