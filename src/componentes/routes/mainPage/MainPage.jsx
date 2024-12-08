import { useContext, useEffect } from "react"
import AllProducts from "../../Elements/AllProducts"
import SliderProduct from "../../Elements/SliderProducts"
import { GlobalContext } from "../../Context/GlobalContext.jsx"

const MainPage = () => {
    const { genres } = useContext(GlobalContext)
    let typeToShow = null

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * genres.length)
        typeToShow = genres[randomIndex]
        console.log(typeToShow)
    }, [])

    return(
        <>
            <SliderProduct query={"ficcion"}/>
            <AllProducts productsName={"Todos los productos"}/>
        </>
    )
}

export default MainPage