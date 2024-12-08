import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [genres, setGenres] = useState(["ficcion", "noficcion", "infantil", "junvenil", "comic", "english", "papeleria"])
    const [cart, setCart] = useState([])

    return (
        <GlobalContext.Provider value={{ genres, setGenres, cart, setCart }}>
            {children}
        </GlobalContext.Provider>
    )
}