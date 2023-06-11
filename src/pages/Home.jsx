

import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const [pagina, setPagina] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

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

  const handlePeliculaSeleccionada = async (pelicula) => {
    try {
      const respuesta = await fetch(
        `https://api.themoviedb.org/3/movie/${pelicula.id}?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&append_to_response=genres`
      );
  
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setPeliculaSeleccionada(datos);
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

  const handlePeliculaDeseleccionada = () => {
    setPeliculaSeleccionada(null);
  };

  return (
    <div>
      <div className="hero">
        <div className="carrusel">
          <img src="foto/img1.jpg" alt="Imagen 1" />
          <img src="foto/img2.jpg" alt="Imagen 2" />
          <img src="foto/img3.jpg" alt="Imagen 3" />
          <img src="foto/img4.jpg" alt="Imagen 4" />
          <img src="foto/img5.jpg" alt="Imagen 5" />
          <img src="foto/img6.jpg" alt="Imagen 6" />
        </div>
      </div>

      <div className={styles.container}>
        <h2>Películas populares</h2>
        <div className={styles.row}>
          {peliculas.map((pelicula) => (
            <div
              className={styles.pelicula}
              key={pelicula.id}
              onClick={() => handlePeliculaSeleccionada(pelicula)}
            >
              <img
                className={styles.poster}
                src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                alt={pelicula.title}
              />
              <h3>{pelicula.title}</h3>
            </div>
          ))}
        </div>

        {peliculaSeleccionada && (
          <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={handlePeliculaDeseleccionada}>
              X
            </button>
            <img
              className={styles.poster}
              src={`https://image.tmdb.org/t/p/w500/${peliculaSeleccionada.poster_path}`}
              alt={peliculaSeleccionada.title}
            />
            <h3>{peliculaSeleccionada.title}</h3>
            {/* <p>{peliculaSeleccionada.overview}</p> */}
            <h3>Idioma</h3>
            <p>{peliculaSeleccionada.original_language}</p>
            <h3>Género</h3>
            <ul>
              {peliculaSeleccionada.genres.map((genero) => (
                <li key={genero.id}>{genero.name}</li>
              ))}
            </ul>
          </div>
        </div>
        )}

        <div className={styles.paginacion}>
          <button onClick={handleAnterior}>Anterior</button>
          <button onClick={handleSiguiente}>Siguiente</button>
        </div>
      </div>
    </div>
  );
};

export default Home;



// import React, { useState, useEffect } from "react";
// import styles from "./Home.module.css";

// const Home = () => {
//   const [pagina, setPagina] = useState(1);
//   const [peliculas, setPeliculas] = useState([]);
//   const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

//   const cargarPeliculas = async (pagina) => {
//     try {
//       const respuesta = await fetch(
//         `https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`
//       );

//       console.log(respuesta);

//       if (respuesta.status === 200) {
//         const datos = await respuesta.json();
//         setPeliculas(datos.results);
//       } else if (respuesta.status === 401) {
//         console.log("Pusiste la llave mal");
//       } else if (respuesta.status === 404) {
//         console.log("La pelicula que buscas no existe");
//       } else {
//         console.log("Hubo un error y no sabemos que paso");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     cargarPeliculas(pagina);
//   }, [pagina]);

//   const handleSiguiente = () => {
//     if (pagina < 1000) {
//       setPagina(pagina + 1);
//     }
//   };

//   const handleAnterior = () => {
//     if (pagina > 1) {
//       setPagina(pagina - 1);
//     }
//   };

//   const handlePeliculaSeleccionada = (pelicula) => {
//     setPeliculaSeleccionada(pelicula);
//   };

//   const handlePeliculaDeseleccionada = () => {
//     setPeliculaSeleccionada(null);
//   };

//   return (
//     <div>
//       <div className="hero">
//         <div className="carrusel">
//           <img src="foto/img1.jpg" alt="Imagen 1" />
//           <img src="foto/img2.jpg" alt="Imagen 2" />
//           <img src="foto/img3.jpg" alt="Imagen 3" />
//           <img src="foto/img4.jpg" alt="Imagen 4" />
//           <img src="foto/img5.jpg" alt="Imagen 5" />
//           <img src="foto/img6.jpg" alt="Imagen 6" />
//         </div>
//       </div>

//       <div className={styles.container}>
//         <h2>Películas populares</h2>
//         <div className={styles.row}>
//           {peliculas.map((pelicula) => (
//             <div
//               className={styles.pelicula}
//               key={pelicula.id}
//               onMouseEnter={() => handlePeliculaSeleccionada(pelicula)}
//               onMouseLeave={handlePeliculaDeseleccionada}
//             >
//               <img
//                 className={styles.poster}
//                 src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
//                 alt={pelicula.title}
//               />
//               <h3>{pelicula.title}</h3>
//             </div>
//           ))}
//         </div>

//         {peliculaSeleccionada && (
//           <div className={styles.modal}>
//             <div className={styles.modalContent}>
//               <img
//                 className={styles.poster}
//                 src={`https://image.tmdb.org/t/p/w500/${peliculaSeleccionada.poster_path}`}
//                 alt={peliculaSeleccionada.title}
//               />
//               <h3>{peliculaSeleccionada.title}</h3>
//               <p>{peliculaSeleccionada.overview}</p>
//             </div>
//           </div>
//         )}

//         <div className={styles.paginacion}>
//           <button onClick={handleAnterior}>Anterior</button>
//           <button onClick={handleSiguiente}>Siguiente</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
// import React, { useState, useEffect } from "react";
// import styles from "./Home.module.css";

// const Home = () => {
//   const [pagina, setPagina] = useState(1);
//   const [peliculas, setPeliculas] = useState([]);

//   const cargarPeliculas = async (pagina) => {
//     try {
//       const respuesta = await fetch(
//         `https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`
//       );

//       console.log(respuesta);

//       if (respuesta.status === 200) {
//         const datos = await respuesta.json();
//         setPeliculas(datos.results);
//       } else if (respuesta.status === 401) {
//         console.log("Pusiste la llave mal");
//       } else if (respuesta.status === 404) {
//         console.log("La pelicula que buscas no existe");
//       } else {
//         console.log("Hubo un error y no sabemos que paso");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     cargarPeliculas(pagina);
//   }, [pagina]);

//   const handleSiguiente = () => {
//     if (pagina < 1000) {
//       setPagina(pagina + 1);
//     }
//   };

//   const handleAnterior = () => {
//     if (pagina > 1) {
//       setPagina(pagina - 1);
//     }
//   };

//   return (
//     <div>
//       <div className="hero">
//         <div className="carrusel">
//           <img src="foto/img1.jpg" alt="Imagen 1" />
//           <img src="foto/img2.jpg" alt="Imagen 2" />
//           <img src="foto/img3.jpg" alt="Imagen 3" />
//           <img src="foto/img4.jpg" alt="Imagen 4" />
//           <img src="foto/img5.jpg" alt="Imagen 5" />
//           <img src="foto/img6.jpg" alt="Imagen 6" />
//         </div>
//       </div>
      
//       <div className={styles.container}>
//         <h2></h2>
//         <div className={styles.row}>
//           {peliculas.map((pelicula) => (
//             <div className={styles.pelicula} key={pelicula.id}>
//               <img
//                 className={styles.poster}
//                 src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
//                 alt={pelicula.title}
//               />
//               <h3 className={styles.poster} >{pelicula.title}</h3>
//             </div>
//           ))}
//         </div>

//         <div className={styles.paginacion}>
//           <button onClick={handleAnterior}>Anterior</button>
//           <button onClick={handleSiguiente}>Siguiente</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React, { useEffect } from "react";
// import { useState } from 'react';
// import styles from "./Home.module.css";

// const Home= ()=>{
//   const [peliculas, setPeliculas] = useState([]);

//   const cargarPeliculas = async () => {
//     try {
//       const respuesta = await fetch(
//         "https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX"
//       );
//       console.log(respuesta);
//       if (respuesta.status === 200) {
//         const datos = await respuesta.json();
//         setPeliculas(datos.results);
//       } else if (respuesta.status === 401) {
//         console.log("Pusiste la llave mal");
//       } else if (respuesta.status === 404) {
//         console.log("La pelicula que buscas no existe");
//       } else {
//         console.log("Hubo un error y no sabemos que paso");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     cargarPeliculas();
//   }, []);

//   return(
//     <div>
//       <div className="hero">
//         <div className="carrusel">
//           <img src="foto/img1.jpg" alt="Imagen 1" />
//           <img src="foto/img2.jpg" alt="Imagen 2" />
//           <img src="foto/img3.jpg" alt="Imagen 3" />
//           <img src="foto/img4.jpg" alt="Imagen 4" />
//           <img src="foto/img5.jpg" alt="Imagen 5" />
//           <img src="foto/img6.jpg" alt="Imagen 6" />
//         </div>
//       </div>
//       <div className={styles.container}>
//         <h2></h2>
//         <div className={styles.row}>
//           {peliculas.map((pelicula) => (
//             <div key={pelicula.id} className="col-md-4 mb-3">
//               <img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt={pelicula.title} height={600} width="100%" />
//               <h4 className="text-center">{pelicula.title}</h4>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect } from "react";
// import { useState } from 'react';
// const Home= ()=>{
//   const cargarPeliculas = async () => {
//     try {
//       const respuesta = await fetch(
//         "https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX"
//       );
//       console.log(respuesta);
//       if (respuesta.status === 200) {
//         const datos = await respuesta.json();
//         setPeliculas(datos.results);
//       } else if (respuesta.status === 401) {
//         console.log("Pusiste la llave mal");
//       } else if (respuesta.status === 404) {
//         console.log("La pelicula que buscas no existe");
//       } else {
//         console.log("Hubo un error y no sabemos que paso");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     cargarPeliculas();
//   }, []);
//     return(
//         <div>
//              <div className="hero">
//                  <div className="carrusel">
//                      <img src="foto/img1.jpg" alt="Imagen 1" />
//                      <img src="foto/img2.jpg" alt="Imagen 2" />
//                      <img src="foto/img3.jpg" alt="Imagen 3" />
//                      <img src="foto/img4.jpg" alt="Imagen 4" />
//                      <img src="foto/img5.jpg" alt="Imagen 5" />
//                      <img src="foto/img6.jpg" alt="Imagen 6" />
//                  </div>
                 
//                 </div>
//                 {/* <div className={styles.contenedor}>
//                     {peliculas.map((pelicula) => (
//                 <div className={styles.pelicula} key={pelicula.id}>
//                     <img
//                     className={styles.poster}
//                     src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
//                     alt={pelicula.title}
//                     />
//                     <h3 className={styles.poster}>{pelicula.title}</h3>
//                 </div>
//                 ))}
//             </div> */}

//             {/* <div className="container mt-3">
//                 <div className="row">
//                     {movies.map((movie)=> (
//                         <div key={movie.id} className="col-md-4 mb-3">
//                             <img src={`${URL_IMAGE + movie.poster_path}`} alt="" height={600} width="100%" />
//                             <h4 className="text-center">{movie.title}</h4>
//                         </div>

//                     ))}

//                 </div>
//             </div> */}
            
//         </div>
       
//     );
// };

// export default Home;




// import React, { useState, useEffect } from "react";
// import styles from "./Peliculas.module.css";

// const Peliculas = () => {
//   const [peliculas, setPeliculas] = useState([]);

//   const cargarPeliculas = async () => {
//     try {
//       const respuesta = await fetch(
//         "https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX"
//       );
//       console.log(respuesta);
//       if (respuesta.status === 200) {
//         const datos = await respuesta.json();
//         setPeliculas(datos.results);
//       } else if (respuesta.status === 401) {
//         console.log("Pusiste la llave mal");
//       } else if (respuesta.status === 404) {
//         console.log("La pelicula que buscas no existe");
//       } else {
//         console.log("Hubo un error y no sabemos que paso");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     cargarPeliculas();
//   }, []);

//   return (
//     <div>
//       <div className={styles.contenedor}>
//         {peliculas.map((pelicula) => (
//           <div className={styles.pelicula} key={pelicula.id}>
//             <img
//               className={styles.poster}
//               src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
//               alt={pelicula.title}
//             />
//             <h3 className={styles.poster}>{pelicula.title}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Peliculas;

// import React, { useEffect } from "react";
// import { useState } from 'react';
// import axios from "axios";
// const Home= ()=>{
//     const API_URL= 'https://api.themoviedb.org/3/movie/popular'
//     const API_KEY = 'a14c80ae068cf2ee2e614b27391deec2'
//     const IMAGE_PATH=  'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
//     const URL_IMAGE= 'https://image.tmdb.org/t/p/'
//     // const URL_IMAGE= 'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'

//     // https://image.tmdb.org/t/p/
//     // Variables de estados
//     const [movies, setMovies]= useState([])
//     const [searchKey, setSearchKey]= useState("")
//     const [trailer, setTrailer]= useState(null);
//     const [movie, setMovie]= useState({title: "loading Movies" });
//     const [playing, setPlaying]= useState(false);
//     const fetchMovies= async(searchKey) =>{
//         const type= searchKey ? "search": "discover"
//         const {data: {results}, }= await axios.get(`${API_URL}/${type}/movie`, { params: { api_key: API_KEY, query: searchKey, }, })    //     const {data: {results},
//     //   }= await axios.get(`${API_URL}/${type}/movie`, {
//     //       params: {
//     //         api_key: API_KEY,
//     //         query: searchKey,
    
//     //       },
//     //     })
//         setMovies(results)
//         setMovie(results[0])
//       }
//     //   useEffect(()=>{
//     //     fetchMovies();
//     //   },[])

//     useEffect(() => {
//         fetchMovies();
//       }, []);
      
//       useEffect(() => {
//         fetchMovies(searchKey);
//       }, [searchKey]);
//     return(
//         <div>
//              <div class="hero">
//                  <div class="carrusel">
//                      <img src="foto/img1.jpg" alt="Imagen 1" />
//                      <img src="foto/img2.jpg" alt="Imagen 2" />
//                      <img src="foto/img3.jpg" alt="Imagen 3" />
//                      <img src="foto/img4.jpg" alt="Imagen 4" />
//                      <img src="foto/img5.jpg" alt="Imagen 5" />
//                      <img src="foto/img6.jpg" alt="Imagen 6" />
//                  </div>
//            </div>
//             <div className="container mt-3">
//                 <div className="row">
//                     {movies.map((movie)=> (
//                         <div key={movie.id} className="col-md-4 mb-3">
//                             <img src={`${URL_IMAGE + movie.poster_path}`} alt="" width="300px" />
//                             <h4 className="text-center">{movie.title}</h4>
//                         </div>

//                     ))}

//                 </div>
//             </div>
            
//         </div>
       
//     );
// };

// export default Home;


// import React, { useEffect } from "react";
// import { useState } from 'react';
// const Home= ()=>{
    
//     return(
      
//              <div class="hero">
//                  <div class="carrusel">
//                      <img src="foto/img1.jpg" alt="Imagen 1" />
//                      <img src="foto/img2.jpg" alt="Imagen 2" />
//                      <img src="foto/img3.jpg" alt="Imagen 3" />
//                      <img src="foto/img4.jpg" alt="Imagen 4" />
//                      <img src="foto/img5.jpg" alt="Imagen 5" />
//                      <img src="foto/img6.jpg" alt="Imagen 6" />
//                  </div>
//            </div>
            
       
       
//     );
// };

// export default Home;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Home = () => {
//   const [movies, setMovies] = useState([]);

//   const fetchMovies = async () => {
//     const { data } = await axios.get(
//       "https://api.themoviedb.org/3/movie/popular?api_key=your_api_key"
//     );
//     setMovies(data.results);
//   };

//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   return (
//     <div className="movies-container">
//       {movies.map((movie) => (
//         <div key={movie.id} className="movie-card">
//           <div className="movie-image">
//             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//           </div>
//           <div className="movie-info">
//             <h2>{movie.title}</h2>
//             <p>Idiomas: {movie.original_language}</p>
//             <p>Géneros: {movie.genres.map((genre) => genre.name).join(", ")}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;