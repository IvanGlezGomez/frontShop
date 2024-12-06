import axios from "axios"
import { useState } from "react"

const AddSingleProduct = () => {
    const [bookType, setBookType] = useState(true)
    const [isbn, setIsbn] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [gender, setGender] = useState("")
    const [author, setAuthor] = useState("")
    const [description, setDescription] = useState("")
    const url = process.env.REACT_APP_API_URL + "create"

    const handleTypeInput = (e) => {
        e.target.value !== "book" ? setBookType(false) : setBookType(true)
    }

    const uploadProduct = async (e) => {
        e.preventDefault()

        let type
        bookType ? type = "book" : type = paper

        const newProduct = {isbn, name, price, stock, gender, author, description}

        axios.post(url, newProduct)
        .then(res => console.log('Respuesta del servidor', res.data))
        .catch(err => console.error("Hubo un error", err))

        setIsbn("")
        setName("")
        setPrice("")
        setStock("")
        setGender("")
        setGender("")
        setAuthor("")
        setDescription("")
    }


    return (
        <>
           <form onSubmit={uploadProduct}>
                <label>Tipo de producto: </label>
                <select name="typePoduct" onChange={handleTypeInput}>
                    <option value="book">Libro</option>
                    <option value="paper">Papeleria</option>
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
                            <label>Género: </label>
                            <input type="text" value={gender} onChange={e => setGender(e.target.value)}/>
                            <label>Autor: </label>
                            <input type="text" value={author} onChange={e => setAuthor(e.target.value)}/>
                            <label>Descripción: </label>
                            <textarea name="description" id="description" rows="3" cols="40" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                        </>
                    ) : (
                        <>
                            <label>Codigo de barras: </label>
                            <input type="text" value={_id} onChange={e => setId(e.target.value)}/>
                            <label>Producto: </label>
                            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                            <label>Precio: </label>
                            <input type="number" value={price} onChange={e => setPrice(e.target.value)}/>
                            <label>Stock: </label>
                            <input type="number" value={stock} onChange={e => setStock(e.target.value)}/>
                        </>
                    )}
                    <label>Imagen: </label>
                    <input type="file" id="image" accept="image/png, image/jpeg" />
                    <button type="submit">Enviar</button>
            </form> 
        </>
    )
}

export default AddSingleProduct