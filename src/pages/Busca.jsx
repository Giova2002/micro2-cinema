
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Busca.module.css";

const Busca = () => {
  const { id } = useParams(); // Obtener el ID de la película de la URL
  const [pelicula, setPelicula] = useState(null);

  useEffect(() => {
    const cargarPelicula = async () => {
      try {
        const respuesta = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=a14c80ae068cf2ee2e614b27391deec2&language=es-MX`
        );

        if (respuesta.status === 200) {
          const datos = await respuesta.json();
          setPelicula(datos);
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

    cargarPelicula();
  }, [id]);

  if (!pelicula) {
    return <div>Cargando...</div>;
  }


  return (
    <div className={styles.container}>
        {/* <h2 className={styles.title}>{pelicula.title}</h2> */}
        <img
        src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
        alt={pelicula.title}
        className={styles.poster}
        />
        <h2 className={styles.title}>{pelicula.title}</h2>
        <p>{pelicula.overview}</p>
        <p>Idioma Original: {pelicula.original_language}</p>
        <p>Fecha Estreno: {pelicula.release_date}</p>
        <p>Popularidad: {pelicula.popularity}</p>
        <p>Rating: {pelicula.vote_average}</p>
        <p>Géneros:</p>
        <ul>
        {pelicula.genres.map((genero) => (
            <li key={genero.id}>{genero.name}</li>
        ))}
        </ul>
        
  </div>
  );
};

export default Busca;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import styles from "./Busca.module.css";


// const Busca = () => {
//  const { id } = useParams();
//  const [pelicula, setPelicula] = useState(null);


//  useEffect(() => {
//    const cargarPelicula = async () => {
//     console.log("entre ");
//      try {
//        const respuesta = await fetch(
//          `https://api.themoviedb.org/3/movie/${id}?api_key=a14c80ae068cf2ee2e614b27391deec2&language=es-MX`
//        );


//        if (respuesta.status === 200) {
//          const datos = await respuesta.json();
//          setPelicula(datos);
//        } else if (respuesta.status === 401) {
//          console.log("Pusiste la llave mal");
//        } else if (respuesta.status === 404) {
//          console.log("La pelicula que buscas no existe");
//        } else {
//          console.log("Hubo un error y no sabemos que paso");
//        }
//      } catch (error) {
//        console.log(error);
//      }
//    };


//    cargarPelicula();
//  }, [id]);


//  if (!pelicula) {
//     console.log("cargando ");
//    return <div>Cargando...</div>;
//  }
//  console.log("no entre ");


//  return (
//    <div className={styles.container}>
//      <h2>{pelicula.title}</h2>
//      <img
//        src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
//        alt={pelicula.title}
//        className={styles.poster}
//      />
//      <p>{pelicula.overview}</p>
//    </div>
//  );
// };


// export default Busca;


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import styles from "./Busca.module.css";

// const Busca = () => {
//   const { id } = useParams();
//   const [pelicula, setPelicula] = useState(null);

//   useEffect(() => {
//     const cargarPelicula = async () => {
//       try {
//         const respuesta = await fetch(
//           `https://api.themoviedb.org/3/movie/${id}?api_key=a14c80ae068cf2ee2e614b27391deec2&language=es-MX`
//         );

//         if (respuesta.status === 200) {
//           const datos = await respuesta.json();
//           setPelicula(datos);
//         } else if (respuesta.status === 401) {
//           console.log("Pusiste la llave mal");
//         } else if (respuesta.status === 404) {
//           console.log("La pelicula que buscas no existe");
//         } else {
//           console.log("Hubo un error y no sabemos que paso");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     cargarPelicula();
//   }, [id]);

//   if (!pelicula) {
//     return <div>Cargando...</div>;
//   }
//   console.log("entre");

//   return (
    
//     <div className={styles.container}>
//       <h2>{pelicula.title}</h2>
//       <img
//         src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
//         alt={pelicula.title}
//         className={styles.poster}
//       />
//       <p>{pelicula.overview}</p>
//     </div>
//   );
// };

// export default Busca;

// import React from 'react';
// import { useLocation } from 'react-router-dom';

// export default function Busca() {
 

//   return (

//     <h1>hola</h1>
   
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// export default function Busca() {
//   const location = useLocation();
//   const [resultados, setResultados] = useState([]);

//   useEffect(() => {
//     const buscarPeliculas = async () => {
//       try {
//         const query = new URLSearchParams(location.search).get('query');
//         if (!query) {
//           return;
//         }
        
//         const respuesta = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a14c80ae068cf2ee2e614b27391deec2&query=${query}`);
//         const datos = await respuesta.json();
//         setResultados(datos.results);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     buscarPeliculas();
//   }, [location.search]);

//   return (
//     <div>
//       {resultados.length > 0 ? (
//         <ul>
//           {resultados.map((pelicula) => (
//             <li key={pelicula.id}>
//               <Link to={`/Peliculas/${pelicula.id}`}>
//                 <img src={`https://image.tmdb.org/t/p/w185/${pelicula.poster_path}`} alt={pelicula.title} />
//                 <h3>{pelicula.title}</h3>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No se encontraron resultados para la búsqueda.</p>
//       )}
//     </div>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// export default function Busca() {
//   const location = useLocation();
//   const [resultados, setResultados] = useState([]);

//   useEffect(() => {
//     const buscarPeliculas = async () => {
//       try {
//         const query = new URLSearchParams(location.search).get('query');
//         if (!query) {
//           return;
//         }
//         const respuesta = await fetch(`https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query=${query}`);
//         const datos = await respuesta.json();
//         setResultados(datos.results);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     buscarPeliculas();
//   }, [location.search]);

//   return (
//     <div>
//       {resultados.length > 0 ? (
//         <ul>
//           {resultados.map((pelicula) => (
//             <li key={pelicula.id}>
//               <img src={`https://image.tmdb.org/t/p/w185/${pelicula.poster_path}`} alt={pelicula.title} />
//               <h3>{pelicula.title}</h3>
//               <p>{pelicula.overview}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No se encontraron resultados para la búsqueda.</p>
//       )}
//     </div>
//   );
// }







// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// export default function Busca() {
//   const location = useLocation();
//   const [resultados, setResultados] = useState([]);

//   useEffect(() => {
//     const buscarPeliculas = async () => {
//       try {
//         const query = new URLSearchParams(location.search).get('query');
//         if (!query) {
//           return;
//         }
//         const respuesta = await fetch(`https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query=${query}`);
//         const datos = await respuesta.json();
//         setResultados(datos.results);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     buscarPeliculas();
//   }, [location.search]);

//   return (
//     <div>
//       {resultados.length > 0 ? (
//         <ul>
//           {resultados.map((pelicula) => (
//             <li key={pelicula.id}>
//               <img src={`https://image.tmdb.org/t/p/w185/${pelicula.poster_path}`} alt={pelicula.title} />
//               <h3>{pelicula.title}</h3>
//               <p>{pelicula.overview}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No se encontraron resultados para la búsqueda.</p>
//       )}
//     </div>
//   );
// }




// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// export default function Busca() {
//   const location = useLocation();
//   const [resultados, setResultados] = useState([]);

//   useEffect(() => {
//     const buscarPeliculas = async () => {
//       try {
//         const query = new URLSearchParams(location.search).get('query');
//         if (!query) {
//           return;
//         }
//         const respuesta = await fetch(`https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query=${query}`);
//         const datos = await respuesta.json();
//         setResultados(datos.results);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     buscarPeliculas();
//   }, [location.search]);

//   return (
//     <div>
//       {resultados.length > 0 ? (
//         <ul>
//           {resultados.map((pelicula) => (
//             <li key={pelicula.id}>
//               <img src={`https://image.tmdb.org/t/p/w185/${pelicula.poster_path}`} alt={pelicula.title} />
//               <h3>{pelicula.title}</h3>
//               <p>{pelicula.overview}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No se encontraron resultados para la búsqueda.</p>
//       )}
//     </div>
//   );
// }





// import React from 'react';
// import { useLocation } from 'react-router-dom';

// export default function Busca() {
 

//   return (
//     <h1>hola</h1>
   
//   );
// }

