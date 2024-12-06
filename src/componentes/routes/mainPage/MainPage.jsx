import { useEffect } from "react"
import AllProducts from "../../Elements/AllProducts"
import SliderProduct from "../../Elements/SliderProducts"

const MainPage = () => {
    const types = ["ficcion", "noficcion", "infantil", "junvenil", "comic", "english", "papeleria"]
    let typeToShow = null

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * types.length)
        typeToShow = types[randomIndex]
    }, [])

    return(
        <>
            <SliderProduct typeProduct={typeToShow}/>
            <AllProducts />
        </>
    )
}

export default MainPage