import { pelicula } from "./pelicula.model";
import PeliculaIndividual from "./peliculaIndividual";
import css from "./listadoPeliculas.module.css"

export default function ListadoPeliculas (props:listadoPeliculasProps) {
    return (
        <div className={css.div}>
            {props.pelicula.map(pelicula =>
            <PeliculaIndividual pelicula={pelicula} key={pelicula.id}/>)}
        </div>
    )

}

interface listadoPeliculasProps {
    pelicula:pelicula[]
}   