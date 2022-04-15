import { pelicula } from "./pelicula.model.d"
import css from './peliculaIndividual.module.css'

export default function PeliculaIndividual(props:peliculaIndividualProps){
    const construirLink=()=>`/Peliculas/${props.pelicula.id}`
    return(
        <div className={css.div} >
            <a href={construirLink()}>
            <img src={props.pelicula.poster} alt="poster" />
            </a>
            <p> 
                <a href={construirLink()}>{props.pelicula.titulo}</a>
            </p>
        </div>

    );
}
interface peliculaIndividualProps{
    pelicula:pelicula;
}
