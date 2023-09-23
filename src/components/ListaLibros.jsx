
import { useState } from "react";
import { Link } from "react-router-dom";
import FormularioAgregarLibro from "./FormularioAgregarLibro";
const ListaLibros = ({ libros }) => {
    const [categoria, setCategoria] = useState("");

    const [listaLibros, setListaLibros] = useState(libros);

    const agregarLibro = (nuevoLibro) => {
        setListaLibros([...listaLibros, nuevoLibro])
    }

    const librosFiltrados = listaLibros.filter(
        libro => libro.categoria === categoria || !categoria
        );

    return (
        <>
        <h1>Formulario Nuevo Libro</h1>
        <FormularioAgregarLibro agregarLibro={agregarLibro} />
        <h1>Mini Catálogo de Libros</h1>
        <label>Categoría: </label>
   <select onChange={(e) => setCategoria(e.target.value)} >
    <option key='' value=''>Todos</option>
    <option key='0' value='Clásico'>Clásico</option>
    <option key='1' value='Distopía'>Distopía</option>
    <option key='2' value='Fantasía'>Fantasía</option>
    </select>      

        <div className="book-grid">
            {
                librosFiltrados.map((libro)=>(
                    <div key={libro.id} className="book-card">
                        <div className="book-title" >{libro.titulo}</div>
                        <div>{libro.descripcion}</div>
                        <div>{libro.autor}</div>
                        <div>{libro.categoria}</div>
                        <Link to={`/libro/${libro.id}`}>Ver más</Link>
                   
                    </div>
                ))
            }
        </div>
        </>
    )
} 

export default ListaLibros;