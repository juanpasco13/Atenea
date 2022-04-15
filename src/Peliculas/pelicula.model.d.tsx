export interface pelicula {
    id:number;
    titulo:string;
    poster:string;
}

export interface landingPageDTO{
    EnCartelera?:pelicula[]
    ProximosEstrenos?:pelicula[]

}