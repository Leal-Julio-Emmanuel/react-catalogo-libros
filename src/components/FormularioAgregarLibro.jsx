import { useForm } from "react-hook-form";

const FormularioAgregarLibro = ({ agregarLibro }) => {
    const { register, handleSubmit, formState: {errors} } = useForm();

    const onsubmit = (data) => {
        agregarLibro(data);
    };

    return (
        <form onsubmit={handleSubmit(onsubmit)}>
            <div>
                <label htmlFor="titulo">Título</label>
                <imput
                 id="titulo"
                 name="titulo"
                 {... register("titulo",{ required: "Este campo es requerido"})}
                 />
                 {errors.titulo && <span>errors.titulo.message</span>}
            </div>
            <div>
                <label htmlFor="autor"></label>
                <input
                id="autor"
                name="autor"
                {... register("autor",{ required: "Este campo es requerido"})}
                />
                {errors.categoria && <span>errors.categoria.message</span>}  
            </div>
            <button type="submit">Agregar Libro</button>
        </form>
    );
};

export default FormularioAgregarLibro;