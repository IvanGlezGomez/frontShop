import axios from "axios"
import { useContext, useState } from "react"
import { GlobalContext } from "../../Context/GlobalContext"

const AddSingleProduct = () => {
    const { genres } = useContext(GlobalContext)
    const [bookType, setBookType] = useState(true)
    const [isbn, setIsbn] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [gender, setGender] = useState("ficcion")
    const [author, setAuthor] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const url = import.meta.env.VITE_API_URL + "create"
    const [message, setMessage] = useState("")

    const handleTypeInput = (e) => {
        e.target.value === "papeleria" ? setBookType(false) : setBookType(true)
        setGender(e.target.value)
        console.log(e.target.value)
    }

    const uploadProduct = async (e) => {
        e.preventDefault()

        const newProduct = {isbn, name, price, stock, gender, author, description, image}
        console.log(newProduct)

        axios.post(url, newProduct)
        .then(res => console.log('Respuesta del servidor', res.data))
        .catch(err => console.error("Hubo un error", err))

        setIsbn("")
        setName("")
        setPrice("")
        setStock("")
        setAuthor("")
        setDescription("")
        setImage("")
        setMessage("Producto subido con exito")
    }


    return (
        <>
           <form onSubmit={uploadProduct}>
                <label>Tipo de producto: </label>
                <select name="gender" onChange={handleTypeInput}>
                    {genres.map((ele, i) => <option key={i} value={ele}>{ele}</option>)}
                    {/* <option value="book">Libro</option>
                    <option value="paper">Papeleria</option> */}
                </select>
                {bookType 
                    ? (
                        <>
                            <label>ISBN: </label>
                            <input type="text" value={isbn} onChange={e => setIsbn(e.target.value)}/>
                            <label>Titulo: </label>
                            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                            <label>Precio: </label>
                            <input type="number" value={price} onChange={e => setPrice(e.target.value)}/>
                            <label>Stock: </label>
                            <input type="number" value={stock} onChange={e => setStock(e.target.value)}/>
                            <label>Autor: </label>
                            <input type="text" value={author} onChange={e => setAuthor(e.target.value)}/>
                            <label>Descripción: </label>
                            <textarea name="description" id="description" rows="3" cols="40" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                        </>
                    ) : (
                        <>
                            <label>Codigo de barras: </label>
                            <input type="text" value={isbn} onChange={e => setId(e.target.value)}/>
                            <label>Producto: </label>
                            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                            <label>Precio: </label>
                            <input type="number" value={price} onChange={e => setPrice(e.target.value)}/>
                            <label>Stock: </label>
                            <input type="number" value={stock} onChange={e => setStock(e.target.value)}/>
                        </>
                    )}
                    <label>Imagen: </label>
                    <input type="text" value={image} onChange={e => setImage(e.target.value)}/>
                    {/* <input type="file" id="image" accept="image/png, image/jpeg" /> */}
                    <button type="submit">Enviar</button>
            </form> 
            <div>{message}</div>
        </>
    )
}

export default AddSingleProduct