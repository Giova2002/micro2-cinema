
// import { useState, useEffect } from "react";
// import { Link, useHistory } from "react-router-dom";
// import styles from "./Home.module.css";

// const Home = () => {
//   const [pagina, setPagina] = useState(1);
//   const [peliculas, setPeliculas] = useState([]);
//   const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
//   const [busqueda, setBusqueda] = useState("");
//   const [resultados, setResultados] = useState([]);
//   const history = useHistory();

//   const cargarPeliculas = async (pagina) => {
//     try {
//       const respuesta = await fetch(
//         `https://api.themoviedb.org/3/movie/popular?api_key=a14c80ae068cf2ee2e614b27391deec2&language=es-MX&page=${pagina}`
//       );

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

//   const handlePeliculaSeleccionada = async (pelicula) => {
//     try {
//       const respuesta = await fetch(
//         `https://api.themoviedb.org/3/movie/${pelicula.id}?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&append_to_response=genres`
//       );

//       if (respuesta.status === 200) {
//         const datos = await respuesta.json();
//         setPeliculaSeleccionada(datos);
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

//     // Navegar a la página Busca con el id de la película seleccionada
//     history.push(`/busca/${pelicula.id}`);
//   };

//   const handlePeliculaDeseleccionada = () => {
//     setPeliculaSeleccionada(null);
//   };

//   const buscarPeliculas = async () => {
//     try {
//       const respuesta = await fetch(
//         `https://api.themoviedb.org/3/search/movie?api_key=a14c80ae068cf2ee2e614b27391deec2&language=es-MX&query=${busqueda}&page=1&include_adult=false`
//       );

//       if (respuesta.status === 200) {
//         const datos = await respuesta.json();
//         setResultados(datos.results);
//       } else if (respuesta.status === 401) {
//         console.log("Pusiste la llave mal");
//       } else if (respuesta.status === 404) {
//         console.log("No se encontraron resultados");
//       } else {
//         console.log("Hubo un error y no sabemos que paso");
//       }
//     } catch (error) {
//       console.log(error);
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
//       <div className={styles.contenedor}>
//        <h1>Películas populares</h1>
//         <div className={styles.botones}>
//           <button onClick={handleAnterior}>Anterior</button>
//           <button onClick={handleSiguiente}>Siguiente</button>
//         </div>
//         {peliculaSeleccionada ? (
//           <div>
//             <button onClick={handlePeliculaDeseleccionada}>Volver</button>
//             <h2>{peliculaSeleccionada.title}</h2>
//             <img
//               src={`https://image.tmdb.org/t/p/w500${peliculaSeleccionada.poster_path}`}
//               alt={peliculaSeleccionada.title}
//             />
//             <p>{peliculaSeleccionada.overview}</p>
//             <ul>
//               {peliculaSeleccionada.genres.map((genero) => (
//                 <li key={genero.id}>{genero.name}</li>
//               ))}
//             </ul>
//           </div>
//         ) : (
//           <div>
//             <input
//               type="text"
//               placeholder="Buscar una película"
//               value={busqueda}
//               onChange={(e) => setBusqueda(e.target.value)}
//             />
//             <button onClick={buscarPeliculas}>Buscar</button>
//             {resultados.length > 0 && (
//               <div>
//                 <h2>Resultados de búsqueda:</h2>
//                 <ul>
//                   {resultados.map((pelicula) => (
//                     <li key={pelicula.id}>
//                       <Link to={`/busca/${pelicula.id}`}>
//                         <button>{pelicula.title}</button>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             <ul>
//               {peliculas.map((pelicula) => (
//                 <li key={pelicula.id}>
//                   <h2>{pelicula.title}</h2>
//                   <img
//                     src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
//                     alt={pelicula.title}
//                   />
//                   <p>{pelicula.overview}</p>
//                   <button onClick={() => handlePeliculaSeleccionada(pelicula)}>Ver más</button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import img1 from "../foto/img1.jpg";
import img2 from "../foto/img2.jpg";
import img3 from "../foto/img3.jpg";
import img4 from "../foto/img4.jpg";
import img5 from "../foto/img5.jpg";
import img6 from "../foto/img6.jpg";


const Home = () => {
 const [pagina, setPagina] = useState(1);
 const [peliculas, setPeliculas] = useState([]);
 const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
 const [busqueda, setBusqueda] = useState("");
 const [resultados, setResultados] = useState([]);


 const cargarPeliculas = async (pagina) => {
   try {
     const respuesta = await fetch(
       `https://api.themoviedb.org/3/movie/popular?api_key=a14c80ae068cf2ee2e614b27391deec2&language=es-MX&page=${pagina}`
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


//  const handlePeliculaSeleccionada = async (pelicula) => {
//    try {
//      const respuesta = await fetch(
//        `https://api.themoviedb.org/3/movie/${pelicula.id}?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&append_to_response=genres`
//      );


//      if (respuesta.status === 200) {
//        const datos = await respuesta.json();
//        setPeliculaSeleccionada(datos);
//      } else if (respuesta.status === 401) {
//        console.log("Pusiste la llave mal");
//      } else if (respuesta.status === 404) {
//        console.log("La pelicula que buscas no existe");
//      } else {
//        console.log("Hubo un error y no sabemos que paso");
//      }
//    } catch (error) {
//      console.log(error);
//    }
//  };


//  const handlePeliculaDeseleccionada = () => {
//    setPeliculaSeleccionada(null);
//  };


 const buscarPeliculas = async () => {
   try {
     const respuesta = await fetch(
       `https://api.themoviedb.org/3/search/movie?api_key=a14c80ae068cf2ee2e614b27391deec2&language=es-MX&query=${busqueda}&page=1&include_adult=false`
     );


     if (respuesta.status === 200) {
       const datos = await respuesta.json();
       setResultados(datos.results);
     } else if (respuesta.status === 401) {
       console.log("Pusiste la llave mal");
     } else if (respuesta.status === 404) {
       console.log("No se encontraron resultados");
     } else {
       console.log("Hubo un error y no sabemos que paso");
     }
   } catch (error) {
     console.log(error);
   }
 };


 return (
   <div>
     <div className="hero">
       <div className="carrusel">
         <img src={img1} alt="Imagen 1" />
         <img src={img2} alt="Imagen 2" />
         <img src={img3} alt="Imagen 3" />
         <img src={img4} alt="Imagen 4" />
         <img src={img5} alt="Imagen 5" />
         <img src={img6} alt="Imagen 6" />
       </div>
    </div>
     <div className={styles.contenedor}>
       {/* <h1>Películas populares</h1> */}
       {/* <div className={styles.botones}>
         <button onClick={handleAnterior}>Anterior</button>
         <button onClick={handleSiguiente}>Siguiente</button>
       </div> */}
       {peliculaSeleccionada ? (
         <div>
           {/* <button onClick={handlePeliculaDeseleccionada}>Volver</button> */}
           {/* <h2>{peliculaSeleccionada.title}</h2> */}
           <img
             src={`https://image.tmdb.org/t/p/w500${peliculaSeleccionada.poster_path}`}
             alt={peliculaSeleccionada.title}
           />
           {/* <p>{peliculaSeleccionada.overview}</p> */}
           <ul>
             {peliculaSeleccionada.genres.map((genero) => (
               <li key={genero.id}>{genero.name}</li>
             ))}
           </ul>
         </div>
       ) : (
         <div>
           <input
             type="text"
             placeholder="Buscar una película"
             value={busqueda}
             onChange={(e) => setBusqueda(e.target.value)}
           />
           <button onClick={buscarPeliculas}>Buscar</button>
           {resultados.length > 0 && (
             <div>
               <h2 className={styles.result}>Resultados de Búsqueda:</h2>
               <div className={styles.row}>
                 {resultados.map((pelicula) => (
                   <li key={pelicula.id}>
                    
                    <img
                      src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                      alt={pelicula.title}/>
                    <h2>{pelicula.title}</h2>
                     <Link to={`/pelicula/${pelicula.id}`}>
                       <button>ver mas</button>
                     </Link>
                   </li>
                 ))}
               </div>
             </div>
           )}
           {/* <h2>Proximos estreno</h2> */}
           <div className={styles.row}>
           {peliculas.map((pelicula) => (
               <li key={pelicula.id}>
                 
                 <img
                   src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                   alt={pelicula.title}
                 />
                 <h2>{pelicula.title}</h2>
                 {/* <p>{pelicula.overview}</p> */}
                 <Link to={`/pelicula/ ${pelicula.id}`}>
                 <button onClick={() => setPeliculaSeleccionada(pelicula)}>
                   Ver más
                 </button>
                 </Link>
                 
               </li>
             ))}
           </div>
           
         </div>
       )}
       <div className={styles.botones}>
         <button onClick={handleAnterior}>Anterior</button>
         <button onClick={handleSiguiente}>Siguiente</button>
       </div>
     </div>
     
   </div>
 );
};

export default Home;



// {/* <ul>
//              {peliculas.map((pelicula) => (
//                <li key={pelicula.id}>
//                  <h2>{pelicula.title}</h2>
//                  <img
//                    src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
//                    alt={pelicula.title}
//                  />
//                  {/* <p>{pelicula.overview}</p> */}
//                  <Link to={`/pelicula/ ${pelicula.id}`}>
//                  <button onClick={() => setPeliculaSeleccionada(pelicula)}>
//                    Ver más
//                  </button>
//                  </Link>
                 
//                </li>
//              ))}
//            </ul> */}




// import { Link } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import styles from "./Home.module.css";

// const Home = () => {
//   const [pagina, setPagina] = useState(1);
//   const [peliculas, setPeliculas] = useState([]);
//   const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
//   const [busqueda, setBusqueda] = useState("");
//   const [resultados, setResultados] = useState([]);

//   const cargarPeliculas = async (pagina) => {
//     try {
//       const respuesta = await fetch(
//         `https://api.themoviedb.org/3/movie/popular?api_key=a14c80ae068cf2ee2e614b27391deec2&language=es-MX&page=${pagina}`
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

//   const handlePeliculaSeleccionada = async (pelicula) => {
//     try {
//       const respuesta = await fetch(
//         `https://api.themoviedb.org/3/movie/${pelicula.id}?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&append_to_response=genres`
//       );

//       if (respuesta.status === 200) {
//         const datos = await respuesta.json();
//         setPeliculaSeleccionada(datos);
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

//   const handlePeliculaDeseleccionada = () => {
//     setPeliculaSeleccionada(null);
//   };

//   const buscarPeliculas = async () => {
//     try {
//       const respuesta = await fetch(
//         `https://api.themoviedb.org/3/search/movie?api_key=a14c80ae068cf2ee2e614b27391deec2&language=es-MX&query=${busqueda}&page=1&include_adult=false`
//       );

//       if (respuesta.status === 200) {
//         const datos = await respuesta.json();
//         setResultados(datos.results);
//       } else if (respuesta.status === 401) {
//         console.log("Pusiste la llave mal");
//       } else if (respuesta.status === 404) {
//         console.log("No se encontraron resultados");
//       } else {
//         console.log("Hubo un error y no sabemos que paso");
//       }
//     } catch (error) {
//       console.log(error);
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
//         <div className={styles.busqueda}>
//           <input
//             type="text"
//             value={busqueda}
//             onChange={(e) => setBusqueda(e.target.value)}
//           />
//           <button onClick={buscarPeliculas}>Buscar</button>
//         </div>

//         <div className={styles.row}>
//           {resultados.length > 0
//             ? resultados.map((pelicula) => (
//                 <div
//                   className={styles.pelicula}
//                   key={pelicula.id}
//                   onClick={() => handlePeliculaSeleccionada(pelicula)}
//                 >
//                   <img
//                     className={styles.poster}
//                     src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
//                     alt={pelicula.title}
//                   />
//                   <h3>{pelicula.title}</h3>
//                 </div>
//               ))
//             : peliculas.map((pelicula) => (
//                 <div
//                   className={styles.pelicula}
//                   key={pelicula.id}
//                   onClick={() => handlePeliculaSeleccionada(pelicula)}
//                 >
//                   <img
//                     className={styles.poster}
//                     src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
//                     alt={pelicula.title}
//                   />
//                   <h3>{pelicula.title}</h3>
//                 </div>
//               ))}
//         </div>

//         {peliculaSeleccionada && (
//           <div className={styles.modal}>
//             <div className={styles.modalContent}>
//               <button
//                 className={styles.closeButton}
//                 onClick={handlePeliculaDeseleccionada}
//               >
//                 X
//               </button>
//               <div className={styles.botones}>
//                 <Link to="/Busca">
//                   <button>Ver Más</button>
//                 </Link>
//               </div>
//               <img
//                 className={styles.poster}
//                 src={`https://image.tmdb.org/t/p/w500/${peliculaSeleccionada.poster_path}`}
//                 alt={peliculaSeleccionada.title}
//               />
//               <h3>{peliculaSeleccionada.title}</h3>
//               <h4>Idioma</h4>
//               <p>{peliculaSeleccionada.original_language}</p>
//               <h4>Género</h4>
//               <ul>
//                 {peliculaSeleccionada.genres.map((genero) => (
//                   <li key={genero.id}>{genero.name}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         )}

//         <div className={styles.paginacion}>
//           <button onClick={handleAnterior}>Anterior</button>
//           <button onClick={handleSiguiente}>Siguiente</button>
//         </div>
//         </div>
//         </div>
//         );
//     };
// export default Home;



// import { Link } from "react-router-dom";

// import React, { useState, useEffect } from "react";
// import styles from "./Home.module.css";

// const Home = () => {
//   const [pagina, setPagina] = useState(1);
//   const [peliculas, setPeliculas] = useState([]);
//   const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

//   const cargarPeliculas = async (pagina) => {
//     try {
//       const respuesta = await fetch(
//         `https://api.themoviedb.org/3/movie/popular?api_key=a14c80ae068cf2ee2e614b27391deec2&language=es-MX&page=${pagina}`
//       );
//     //   https://api.themoviedb.org/3/movie/550?api_key=a14c80ae068cf2ee2e614b27391deec2

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

//   const handlePeliculaSeleccionada = async (pelicula) => {
//     try {
//       const respuesta = await fetch(
//         `https://api.themoviedb.org/3/movie/${pelicula.id}?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&append_to_response=genres`
//       );
  
//       if (respuesta.status === 200) {
//         const datos = await respuesta.json();
//         setPeliculaSeleccionada(datos);
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
//         {/* <h2>Películas populares</h2> */}
//         <div className={styles.row}>
//           {peliculas.map((pelicula) => (
//             <div
//               className={styles.pelicula}
//               key={pelicula.id}
//               onClick={() => handlePeliculaSeleccionada(pelicula)}
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
//           <div className={styles.modalContent}>
//             <button className={styles.closeButton} onClick={handlePeliculaDeseleccionada}>
//               X
//             </button>
//             <div className={styles.botones}>
//                 <Link to="/Peliculas">
//                     <button>Ver Más</button>
//                 </Link>
//             </div>
//             <img
//               className={styles.poster}
//               src={`https://image.tmdb.org/t/p/w500/${peliculaSeleccionada.poster_path}`}
//               alt={peliculaSeleccionada.title}
//             />
//             <h3>{peliculaSeleccionada.title}</h3>
//             {/* <p>{peliculaSeleccionada.overview}</p> */}
//             <h4>Idioma</h4>
//             <p>{peliculaSeleccionada.original_language}</p>
//             <h4>Género</h4>
//             <ul>
//               {peliculaSeleccionada.genres.map((genero) => (
//                 <li key={genero.id}>{genero.name}</li>
//               ))}
//             </ul>
//           </div>
//         </div>)}

//         <div className={styles.paginacion}>
//           <button onClick={handleAnterior}>Anterior</button>
//           <button onClick={handleSiguiente}>Siguiente</button>
//         </div>
//         {/* <div className={styles.botones}>
//         <Link to="/Peliculas">
//             <button>Ir a Película</button>
//         </Link>
//      </div> */}
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