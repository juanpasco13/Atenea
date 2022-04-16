import css from './listadoPeliculas.module.css';
import { pelicula } from "./pelicula.model.d";
import PeliculaIndividual from "./peliculaIndividual";
import ListadoGenerico from "./utils/ListadoGenerico";



export default function ListadoPeliculas(props:listadoPeliculasProps){
            return(
                <ListadoGenerico listado={props.peliculas}>
                    <div className={css.div}> 
                        {props.peliculas?.map(
                            pelicula =>
                            <PeliculaIndividual pelicula={pelicula}
                            key={pelicula.id}
                            ></PeliculaIndividual>
                        )}
                    </div>
                </ListadoGenerico>
        )  
    }

interface listadoPeliculasProps{
    peliculas?:pelicula[];
}