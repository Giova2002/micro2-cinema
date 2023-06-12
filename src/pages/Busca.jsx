
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Busca() {
  const location = useLocation();
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    const buscarPeliculas = async () => {
      try {
        const query = new URLSearchParams(location.search).get('query');
        if (!query) {
          return;
        }
        
        const respuesta = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a14c80ae068cf2ee2e614b27391deec2&query=${query}`);
        const datos = await respuesta.json();
        setResultados(datos.results);
      } catch (error) {
        console.log(error);
      }
    };
    buscarPeliculas();
  }, [location.search]);

  return (
    <div>
      {resultados.length > 0 ? (
        <ul>
          {resultados.map((pelicula) => (
            <li key={pelicula.id}>
              <Link to={`/Peliculas/${pelicula.id}`}>
                <img src={`https://image.tmdb.org/t/p/w185/${pelicula.poster_path}`} alt={pelicula.title} />
                <h3>{pelicula.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron resultados para la búsqueda.</p>
      )}
    </div>
  );
}
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

