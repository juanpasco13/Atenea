import { ReactElement } from "react";
import Cargando from "./Cargando";

export default function ListadoGenerico(props:listadoGenericoProps){
    if (!props.listado){
        if(props.cargandoUI){
            return props.cargandoUI;
        }
        return <Cargando/>
    }else if(props.listado.length === 0){
        if(props.listadoVacioUI){
            return props.listadoVacioUI
        }
        return (<h1>Esta Vacio Eh... No hay mounstros Aqui!</h1>)
    }else{
        return props.children
    }
}

interface listadoGenericoProps{
    listado:any;
    children:ReactElement;
    cargandoUI?:ReactElement;
    listadoVacioUI?:ReactElement;
}