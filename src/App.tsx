import React from 'react';
import './App.css';
import ListadoPeliculas from './Peliculas/listadoPeliculas';
import { pelicula } from './Peliculas/pelicula.model';
import PeliculaIndividual from './Peliculas/peliculaIndividual';

function App() {

  const peliculasCartelera:pelicula[]=[
  {
    id:1,
    titulo:'La noche',
    poster:'https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440'
  
  },
  {
    id:2,
    titulo:'Los Carros',
    poster:'https://fondosmil.com/fondo/21959.jpg'
  
  },
  {
    id:3,
    titulo:'Las Motos',
    poster:'https://www.xtrafondos.com/descargar.php?id=4464&resolucion=1920x1080'
  
  }
]

const proximosEstrenos:pelicula[]=[
  
    {
      id:4,
      titulo:'Los Perros',
      poster:'https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440'
    
    },
    {
      id:5,
      titulo:'Los Gatos',
      poster:'https://fondosmil.com/fondo/21959.jpg'
    
    }
  ]


  return(
    <>
     <h3>Peliculas en Cartelera</h3> 
     <ListadoPeliculas pelicula={peliculasCartelera} ></ListadoPeliculas>

     <h3>Peliculas en Cartelera</h3> 
     <ListadoPeliculas pelicula={proximosEstrenos} ></ListadoPeliculas>

    </>
  );
}

export default App;
