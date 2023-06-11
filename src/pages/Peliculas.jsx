


import { useState, useEffect } from "react";
import styles from "./Peliculas.module.css";

const Peliculas = () => {
  const [pagina, setPagina] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const cargarPeliculas = async (pagina) => {
    try {
      const respuesta = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=a14c80ae068cf2ee2e614b27391deec2&language=es-MX&page=${pagina}`
      );
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setPeliculas(datos.results);
      } else {
        console.log("Hubo un error al cargar las películas");
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

  const handleReservar = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
  };

  const Modal = ({ pelicula, onClose }) => {
    const [asientosSeleccionados, setAsientosSeleccionados] = useState([]);
    const [cantidadBoletos, setCantidadBoletos] = useState(1);

    const handleSeleccionarAsiento = (asiento) => {
      if (asientosSeleccionados.includes(asiento)) {
        setAsientosSeleccionados(asientosSeleccionados.filter((a) => a !== asiento));
      } else {
        setAsientosSeleccionados([...asientosSeleccionados, asiento]);
      }
    };

    const handleCantidadBoletosChange = (event) => {
      const cantidad = event.target.value;
      if (cantidad > 5) {
        setCantidadBoletos(5);
      } else if (cantidad < 1) {
        setCantidadBoletos(1);
      } else {
        setCantidadBoletos(cantidad);
      }
    };

    const handleComprar = () => {
      // Aquí puedes agregar la lógica para guardar la información de la compra
      onClose();
    };

    return (
      <div className={styles.modal}>
        <div className={styles.modalContenido}>
          <button className={styles.modalCerrar} onClick={onClose}>
            X
          </button>
          <h2>{pelicula.title}</h2>
          <p>{pelicula.overview}</p>
          <p>Selecciona los asientos:</p>
          <div className={styles.asientos}>
            {Array.from({ length: 30 }, (_, i) => (
              <button
                key={i}
                className={`${styles.asiento} ${
                  asientosSeleccionados.includes(i + 1) ? styles.asientoSeleccionado : ""
                }`}
                onClick={() => handleSeleccionarAsiento(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <p>
            Cantidad de boletos:
            <input type="number" value={cantidadBoletos} onChange={handleCantidadBoletosChange} min="1" max="10" />
          </p>
          <button className="compra" onClick={handleComprar}>Comprar</button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className={styles.contenedor}>
        {peliculas.map((pelicula) => (
          <div className={styles.pelicula} key={pelicula.id}>
            <img
              className={styles.poster}
              src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
              alt={pelicula.title}
            />
            <div className={styles.informacion}>
              <h3 className={styles.titulo}>{pelicula.title}</h3>
              <p className={styles.descripcion}>{pelicula.overview}</p>
                <div className={styles.detalle}>
                <p>
                  <strong>Idioma original:</strong> {pelicula.original_language}
                </p>
                <p>
                <strong>Género:</strong> {pelicula.genre_ids.join(", ")}
                </p>
                </div>
              <button className={styles.reservar} onClick={() => handleReservar(pelicula)}>
                Reservar
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.paginacion}>
        <button onClick={handleAnterior} disabled={pagina === 1}>
          Anterior
        </button>
        <button onClick={handleSiguiente} disabled={pagina === 1000}>
          Siguiente
        </button>
      </div>
      {peliculaSeleccionada && (
        <Modal pelicula={peliculaSeleccionada} onClose={() => setPeliculaSeleccionada(null)} />
      )}
    </div>
  );
};

export default Peliculas;


// import React, { useState, useEffect } from "react";
// import styles from "./Peliculas.module.css";

// const Peliculas = () => {
//     const [pagina, setPagina] = useState(1);
//     const [peliculas, setPeliculas] = useState([]);
//     const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
  
//     const cargarPeliculas = async (pagina) => {
//       try {
//         const respuesta = await fetch(
//           `https://api.themoviedb.org/3/movie/now_playing?api_key=a14c80ae068cf2ee2e614b27391deec2&language=es-MX&page=${pagina}`
//         );
//         if (respuesta.status === 200) {
//           const datos = await respuesta.json();
//           setPeliculas(datos.results);
//         } else {
//           console.log("Hubo un error al cargar las películas");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
  
//     useEffect(() => {
//       cargarPeliculas(pagina);
//     }, [pagina]);
  
//     const handleSiguiente = () => {
//       if (pagina < 1000) {
//         setPagina(pagina + 1);
//       }
//     };
  
//     const handleAnterior = () => {
//       if (pagina > 1) {
//         setPagina(pagina - 1);
//       }
//     };
  
//     const handleReservar = (pelicula) => {
//       setPeliculaSeleccionada(pelicula);
//     };
  
//     const Modal = ({ pelicula, onClose }) => {
//       const [asientosSeleccionados, setAsientosSeleccionados] = useState([]);
//       const [cantidadBoletos, setCantidadBoletos] = useState(1);
  
//       const handleSeleccionarAsiento = (asiento) => {
//         if (asientosSeleccionados.includes(asiento)) {
//           setAsientosSeleccionados(asientosSeleccionados.filter((a) => a !== asiento));
//         } else {
//           setAsientosSeleccionados([...asientosSeleccionados, asiento]);
//         }
//       };
  
//       const handleCantidadBoletosChange = (event) => {
//         const cantidad = event.target.value;
//         if (cantidad > 5) {
//           setCantidadBoletos(5);
//         } else if (cantidad < 1) {
//           setCantidadBoletos(1);
//         } else {
//           setCantidadBoletos(cantidad);
//         }
//       };
  
//       const handleComprar = () => {
//         // Aquí puedes agregar la lógica para guardar la información de la compra
//         onClose();
//       };
  
//       return (
//         <div className={styles.modal}>
//           <div className={styles.modalContenido}>
//             <button className={styles.modalCerrar} onClick={onClose}>
//               X
//             </button>
//             <h2>{pelicula.title}</h2>
//             <p>{pelicula.overview}</p>
//             <p>Selecciona los asientos:</p>
//             <div className={styles.asientos}>
//               {Array.from({ length: 30 }, (_, i) => (
//                 <button
//                   key={i}
//                   className={`${styles.asiento} ${
//                     asientosSeleccionados.includes(i + 1) ? styles.asientoSeleccionado : ""
//                   }`}
//                   onClick={() => handleSeleccionarAsiento(i + 1)}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//             </div>
//             <p>
//               Cantidad de boletos:
//               <input type="number" value={cantidadBoletos} onChange={handleCantidadBoletosChange} min="1" max="10" />
//             </p>
//             <button onClick={handleComprar}>Comprar</button>
//             <button className={styles.botonCerrar} onClick={onClose}>
//               Cerrar
//             </button>
//           </div>
//         </div>
//       );
//     };
  
//     return (
//       <div>
//         <div className={styles.contenedor}>
//           {peliculas.map((pelicula) => (
//             <div className={styles.pelicula} key={pelicula.id}>
//               <img
//                 className={styles.poster}
//                 src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
//                 alt={pelicula.title}
//               />
//               <div className={styles.informacion}>
//                 <h3 className={styles.titulo}>{pelicula.title}</h3>
//                 <p className={styles.descripcion}>{pelicula.overview}</p>
//                 <div className={styles.detalle}>
//                   <p>
//                     <strong>Idioma original:</strong> {pelicula.original_language}
//                   </p>
//                   <p>
//                     <strong>Género:</strong> {pelicula.genre_ids.join(", ")}
//                   </p>
//                   <p>
//                     <strong>Fecha:</strong> {pelicula.release_date}
//                   </p>
//                 </div>
//                 <button onClick={() => handleReservar(pelicula)}>Reservar</button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className={styles.paginacion}>
//           <button onClick={handleAnterior}>Anterior</button>
//           <button>{pagina}</button>
//           <button onClick={handleSiguiente}>Siguiente</button>
//         </div>
//         {peliculaSeleccionada && <Modal pelicula={peliculaSeleccionada} onClose={() => setPeliculaSeleccionada(null)} />}
//       </div>
//     );
//   };
  
//   export default Peliculas;

// const Peliculas = () => {
//   const [pagina, setPagina] = useState(1);
//   const [peliculas, setPeliculas] = useState([]);
//   const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

//   const cargarPeliculas = async (pagina) => {
//     try {
//       const respuesta = await fetch(
//         `https://api.themoviedb.org/3/movie/now_playing?api_key=a14c80ae068cf2ee2e614b27391deec2&language=es-MX&page=${pagina}`
//       );
//       if (respuesta.status === 200) {
//         const datos = await respuesta.json();
//         setPeliculas(datos.results);
//       } else {
//         console.log("Hubo un error al cargar las películas");
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

//   const handleReservar = (pelicula) => {
//     setPeliculaSeleccionada(pelicula);
//   };

//   const Modal = ({ pelicula, onClose }) => {
//     const [asientosSeleccionados, setAsientosSeleccionados] = useState([]);
//     const [cantidadBoletos, setCantidadBoletos] = useState(1);

//     const handleSeleccionarAsiento = (asiento) => {
//       if (asientosSeleccionados.includes(asiento)) {
//         setAsientosSeleccionados(asientosSeleccionados.filter((a) => a !== asiento));
//       } else {
//         setAsientosSeleccionados([...asientosSeleccionados, asiento]);
//       }
//     };

//     const handleCantidadBoletosChange = (event) => {
//         const cantidad = event.target.value;
//         if (cantidad > 5) {
//           setCantidadBoletos(5);
//         } else if (cantidad < 1) {
//           setCantidadBoletos(1);
//         } else {
//           setCantidadBoletos(cantidad);
//         }
//       };

//     const handleComprar = () => {
//       // Aquí puedes agregar la lógica para guardar la información de la compra
//       onClose();
//     };

//     return (
//       <div className={styles.modal}>
//         <div className={styles.modalContenido}>
            
//           <button className={styles.modalCerrar} onClick={onClose}>
//             X
//           </button>
//           <h2>{pelicula.title}</h2>
//           <p>{pelicula.overview}</p>
//           <p>Selecciona los asientos:</p>
//           <div className={styles.asientos}>
//             {Array.from({ length: 30 }, (_, i) => (
//               <button
//                 key={i}
//                 className={`${styles.asiento} ${asientosSeleccionados.includes(i + 1) ? styles.asientoSeleccionado : ""}`}
//                 onClick={() => handleSeleccionarAsiento(i + 1)}
//               >
//                 {i + 1}
//               </button>
//             ))}
//           </div>
//           <p>
//             Cantidad de boletos:
//             <input type="number" value={cantidadBoletos} onChange={handleCantidadBoletosChange} min="1" max="10" />
//           </p>
//           <button onClick={handleComprar}>Comprar</button>
//         </div>
//       </div>
//     );
//   };

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
//             <div className={styles.informacion}>
//               <h3 className={styles.titulo}>{pelicula.title}</h3>
//               <p className={styles.descripcion}>{pelicula.overview}</p>
//               <div className={styles.detalle}>
//                 <p><strong>Idioma original:</strong> {pelicula.original_language}</p>
//                 <p><strong>Género:</strong> {pelicula.genre_ids.join(", ")}</p>
//                 <p><strong>Fecha:</strong> {pelicula.release_date}</p>
//               </div>
//               <button onClick={() => handleReservar(pelicula)}>Reservar</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className={styles.paginacion}>
//         <button onClick={handleAnterior}>Anterior</button>
//         <button>{pagina}</button>
//         <button onClick={handleSiguiente}>Siguiente</button>
//       </div>
//       {peliculaSeleccionada && (
//         <Modal pelicula={peliculaSeleccionada} onClose={() => setPeliculaSeleccionada(null)} />
//       )}
//     </div>
//   );
// };

// export default Peliculas;






// import React, { useState, useEffect } from "react";
// import styles from "./Peliculas.module.css";



// const Peliculas = () => {
//     const [pagina, setPagina] = useState(1);
//     const [peliculas, setPeliculas] = useState([]);
//     const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
  
//     const cargarPeliculas = async (pagina) => {
//       try {
//         const respuesta = await fetch(
//           `https://api.themoviedb.org/3/movie/now_playing?api_key=a14c80ae068cf2ee2e614b27391deec2&language=es-MX&page=${pagina}`
//         );
  
//         if (respuesta.status === 200) {
//           const datos = await respuesta.json();
//           setPeliculas(datos.results);
//         } else {
//           console.log("Hubo un error al cargar las películas");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

  
//     useEffect(() => {
//       cargarPeliculas(pagina);
//     }, [pagina]);
  
//     const handleSiguiente = () => {
//       if (pagina < 1000) {
//         setPagina(pagina + 1);
//       }
//     };
  
//     const handleAnterior = () => {
//       if (pagina > 1) {
//         setPagina(pagina - 1);
//       }
//     };
//     const handleReservar = (pelicula) => {
//         setPeliculaSeleccionada(pelicula);
//       };
  
//     return (
//       <div>
//         <div className={styles.contenedor}>
//           {peliculas.map((pelicula) => (
//             <div className={styles.pelicula} key={pelicula.id}>
//               <img
//                 className={styles.poster}
//                 src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
//                 alt={pelicula.title}
//               />
//               <div className={styles.informacion}>
//                 <h3 className={styles.titulo}>{pelicula.title}</h3>
//                 <p className={styles.descripcion}>{pelicula.overview}</p>
//                 <div className={styles.detalle}>
//                   <p><strong>Idioma original:</strong> {pelicula.original_language}</p>
//                   <p><strong>Género:</strong> {pelicula.genre_ids.join(", ")}</p>
//                   <p><strong>Fecha:</strong> {pelicula.release_date}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
  
//         <div className={styles.paginacion}>
//           <button onClick={handleAnterior}>Anterior</button>
//           <button onClick={handleSiguiente}>Siguiente</button>
//         </div>
//       </div>
//     );
//   };
  
//   export default Peliculas;
// const Peliculas = () => {

//     const Peliculas = () => {
//         const [pagina, setPagina] = useState(1);
//         const [peliculas, setPeliculas] = useState([]);
      
//         const cargarPeliculas = async (pagina) => {
//           try {
//             const respuesta = await fetch(
//               `https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`
//             );
      
//             if (respuesta.status === 200) {
//               const datos = await respuesta.json();
//               setPeliculas(datos.results);
//             } else {
//               console.log("Hubo un error al cargar las películas");
//             }
//           } catch (error) {
//             console.log(error);
//           }
//         };
      
//         useEffect(() => {
//           cargarPeliculas(pagina);
//         }, [pagina]);
      
//         const handleSiguiente = () => {
//           if (pagina < 1000) {
//             setPagina(pagina + 1);
//           }
//         };
      
//         const handleAnterior = () => {
//           if (pagina > 1) {
//             setPagina(pagina - 1);
//           }
//         };
      
  
//     return (
//         <div>
//         <div className={styles.contenedor}>
//           {peliculas.map((pelicula) => (
//             <div className={styles.pelicula} key={pelicula.id}>
//               <img
//                 className={styles.poster}
//                 src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
//                 alt={pelicula.title}
//               />
//               <div className={styles.informacion}>
//                 <h3 className={styles.titulo}>{pelicula.title}</h3>
//                 <p className={styles.descripcion}>{pelicula.overview}</p>
//                 <p className={styles.fecha}>
//                   Fecha de estreno: {pelicula.release_date}
//                 </p>
//                 <p className={styles.idioma}>
//                   Idioma: {pelicula.original_language}
//                 </p>
//                 <p className={styles.genero}>
//                   Género:{" "}
//                   {pelicula.genre_ids.map((id) => (
//                     <span key={id}>{generos[id]}, </span>
//                   ))}
//                 </p>
//                 <p className={styles.puntuacion}>
//                   Puntuación: {pelicula.vote_average}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
  
//         <div className={styles.paginacion}>
//           <button onClick={handleAnterior}>Anterior</button>
//           <button onClick={handleSiguiente}>Siguiente</button>
//         </div>
//       </div>
//     );
//   };
  
//   // Un objeto que mapea los IDs de género a su nombre correspondiente
//   const generos = {
//     28: "Acción",
//     12: "Aventura",
//     16: "Animación",
//     35: "Comedia",
//     80: "Crimen",
//     99: "Documental",
//     18: "Drama",
//     10751: "Familia",
//     14: "Fantasía",
//     36: "Historia",
//     27: "Terror",
//     10402: "Música",
//     9648: "Misterio",
//     10749: "Romance",
//     878: "Ciencia ficción",
//     10770: "Película de TV",
//     53: "Suspenso",
//     10752: "Bélica",
//     37: "Western"
//   };
    
//   };
  
//   export default Peliculas;
// const Peliculas = () => {
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
//       <div className={styles.contenedor}>
//         {peliculas.map((pelicula) => (
//           <div className={styles.pelicula}key={pelicula.id}>
//             <img
//               className={styles.poster}
//               src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
//               alt={pelicula.title}
//             />
//             <h3 className={styles.poster} >{pelicula.title}</h3>
//           </div>
//         ))}
//       </div>

//       <div className={styles.paginacion}>
//         <button onClick={handleAnterior}>Anterior</button>
//         <button onClick={handleSiguiente}>Siguiente</button>
//       </div>
//     </div>
//   );
// };

// export default Peliculas;

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