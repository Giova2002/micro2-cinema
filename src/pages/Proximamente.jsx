
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Proximamente.module.css";


const Proximamente = () => {
 const [pagina, setPagina] = useState(1);
 const [peliculas, setPeliculas] = useState([]);
 const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);


 const cargarPeliculas = async (pagina) => {
   try {
     const respuesta = await fetch(
       `https://api.themoviedb.org/3/movie/upcoming?api_key=a14c80ae068cf2ee2e614b27391deec2&language=es-MX&page=${pagina}`
     );


     console.log(respuesta);


     if (respuesta.status === 200) {
       const datos = await respuesta.json();
       setPeliculas(datos.results);
     } else if (respuesta.status === 401) {
       console.log("Pusiste la llave mal");
     } else if (respuesta.status === 404) {
       console.log("La pelicula que buscas no existe");
     } else {
       console.log("Hubo un error y no sabemos que paso");
     }
   } catch (error) {
     console.log(error);
   }
 };


 useEffect(() => {
   cargarPeliculas(pagina);
 }, [pagina]);


 const handleSiguiente = () => {
   if (pagina < 1000) {
     setPagina(pagina + 1);
   }
 };


 const handleAnterior = () => {
   if (pagina > 1) {
     setPagina(pagina - 1);
   }
 };


 return (
   <div className={styles.container}>
     <h2>Próximos estrenos</h2>
     <div className={styles.row}>
       {peliculas.map((pelicula) => (
         <div className={styles.pelicula} key={pelicula.id}>
           <div
             className={`${styles.overlay} ${
               peliculaSeleccionada === pelicula ? styles.overlayVisible : ""
             }`}
           >
             <h3>{pelicula.title}</h3>
             <p>Fecha de estreno: {pelicula.release_date}</p>
             <Link to={`/pelicula/${pelicula.id}`}>Ver detalles</Link>
           </div>
           <img
             className={styles.poster}
             src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
             alt={pelicula.title}
             onClick={() => setPeliculaSeleccionada(pelicula)}
           />
         </div>
       ))}
     </div>


     <div className={styles.paginacion}>
       <button onClick={handleAnterior}>Anterior</button>
       <button onClick={handleSiguiente}>Siguiente</button>
     </div>
   </div>
 );
};


export default Proximamente;

