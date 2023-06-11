import React, { useState, useEffect } from "react";
import styles from "./Peliculas.module.css";

const Peliculas = () => {
  const [pagina, setPagina] = useState(1);
  const [peliculas, setPeliculas] = useState([]);

  const cargarPeliculas = async (pagina) => {
    try {
      const respuesta = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`
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
    <div>
      <div className={styles.contenedor}>
        {peliculas.map((pelicula) => (
          <div className={styles.pelicula}key={pelicula.id}>
            <img
              className={styles.poster}
              src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
              alt={pelicula.title}
            />
            <h3 className={styles.poster} >{pelicula.title}</h3>
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

export default Peliculas;

// import React from "react";

// import styles from "./Peliculas.module.css";

// const Peliculas= ()=>{
//     let pagina = 1;
//     const btnAnterior = document.getElementById('btnAnterior');
//     const btnSiguiente = document.getElementById('btnSiguiente');

//     btnSiguiente.addEventListener('click', () => {
//         if(pagina < 1000){
//             pagina += 1;
//             cargarPeliculas();
//         }
//     });

//     btnAnterior.addEventListener('click', () => {
//         if(pagina > 1){
//             pagina -= 1;
//             cargarPeliculas();
//         }
//     });

//     const cargarPeliculas = async() => {
//         try {
//             const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`);
        
//             console.log(respuesta);

//             // Si la respuesta es correcta
//             if(respuesta.status === 200){
//                 const datos = await respuesta.json();
                
//                 let peliculas = '';
//                 datos.results.forEach(pelicula => {
//                     peliculas += `
//                         <div class="pelicula">
//                             <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
//                             <h3 class="titulo">${pelicula.title}</h3>
//                         </div>
//                     `;
//                 });

//                 document.getElementById('contenedor').innerHTML = peliculas;

//             } else if(respuesta.status === 401){
//                 console.log('Pusiste la llave mal');
//             } else if(respuesta.status === 404){
//                 console.log('La pelicula que buscas no existe');
//             } else {
//                 console.log('Hubo un error y no sabemos que paso');
//             }

//         } catch(error){
//             console.log(error);
//         }

//     }


//     return(
//         <div>
//             <div class= {styles.contenedor} id="contenedor"></div>

//             <div class={styles.paginacion} > 
//                 <button id="btnAnterior">Anterior</button>
//                 <button id="btnSiguiente">Siguiente</button>
//             </div>
//         </div>
       
//     )
    
// };

// export default Peliculas;
// const Peliculas= ()=>{
//     return(
//         <h1>Peliculas</h1>

//     );
// };

// export default Peliculas;


// cargarPeliculas();