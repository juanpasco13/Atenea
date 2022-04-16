import {landingPageDTO} from './Peliculas/pelicula.model.d';
import { useEffect, useState } from 'react';
import ListadoPeliculas from './Peliculas/listadoPeliculas'; 

export default function LandingPage(){
    const [peliculas,setPeliculas]=useState<landingPageDTO>({})

useEffect (() => {
    const timerId = setTimeout(() => {
   setPeliculas({

        EnCartelera:[
          {
            id:1,
            titulo:'La noche',
            poster:'https://ichef.bbci.co.uk/news/640/cpsprodpb/FED1/production/_100933256_gettyimages-165964685.jpg'
          },
          {
            id:2,
            titulo:'El dia',
            poster:'https://elversiculodeldia.com/wp-content/uploads/2016/01/manana.jpg'
          },
          {
            id:3,
            titulo:'El Crepusculo',
            poster:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Redskyatnight.jpg/220px-Redskyatnight.jpg'
          }
        ],

        ProximosEstrenos:[
          {
            id:4,
            titulo:'Los carros',
            poster:'https://www.elcarrocolombiano.com/wp-content/uploads/2019/09/20190904-TOYOTA-COROLLA-2020-HIBRIDO-COLOMBIA-PRECIOS-CARACTERISTICAS-VERSIONES-02.jpg'
          },
          {
            id:5,
            titulo:'Las Motos',
            poster:'https://motos.honda.com.ec/uploads/galeria/Colores_CB-160F_BLANCA.jpg'
          },
        ]
      })
    },1500);
  return ()=> clearTimeout(timerId); 
}) 

return(
    <>
        <div className="d-grid gap-2 col-6 my-2 mx-auto">
        <button type="button" className="btn btn-primary">Boton cerrando</button>
      </div>
      
      <div >
        <h3>Peliculas en Cartelera 1</h3>
      <ListadoPeliculas peliculas={peliculas.EnCartelera}></ListadoPeliculas>
      </div>

      <div >
        <h3>Las Cositas</h3>
      <ListadoPeliculas peliculas={peliculas.ProximosEstrenos}></ListadoPeliculas>
      </div>
    </>
    
)
}