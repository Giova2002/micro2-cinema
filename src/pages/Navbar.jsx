
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import foto4 from "../foto/foto4.png";

// import {UserAuth} from '../context/AuthContext'

export default function Navbar() {
    
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);
//   const{logout, user}= UserAuth();

  const toggleMenu = () => {
    if (location.pathname === '/') {
      return;
    }
    setMenuOpen(!menuOpen);
  };

  const buscarPeliculas = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a14c80ae068cf2ee2e614b27391deec2&query=${busqueda}`);
      const datos = await respuesta.json();
      setResultados(datos.results);
    } catch (error) {
      console.log(error);
    }
  };
// const buscarPeliculas = async (e) => {
//     e.preventDefault();
//     try {
//       const respuesta = await fetch(`https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query=${busqueda}`);
//       const datos = await respuesta.json();
//       setResultados(datos.results);
//       history.push(`/Busca?query=${busqueda}`);
//     } catch (error) {
//       console.log(error);
//     }
//   };

  return (
    <header>
      <div className="logo">
        <img src={foto4} alt="FILMET logo" />
        <h1>FILMET</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Peliculas">Peliculas</Link>
        <Link to="/Proximamente">Estrenos</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Signup">Sign Up</Link>
        <Link to="/Perfil">Perfil</Link>
        <Link to="/Busca"></Link>
        {/* <form onSubmit={buscarPeliculas}>
          <input type="text" placeholder="Buscar" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
          <button type="submit"><i className="fas fa-search"></i></button>
        </form> */}
        <div className="menu">
          {location.pathname !== '/' && (
            <React.Fragment>
                <i class="fa-solid fa-bars"  onClick={toggleMenu}></i>
              {/* <img src="/foto/foto5.png" alt="Menu" onClick={toggleMenu} /><i class="fa-solid fa-bars"></i> */}
              {menuOpen && (
                <div className="menu-items">
                  <Link to="/Login">Login</Link>
                  <Link to="/Signup">Sign Up</Link>
                  <Link to="/Perfil">Perfil</Link>
                </div>
              )}
            </React.Fragment>
          )}
        </div>
      </nav>
      {/* {resultados.length > 0 && (
        <div className="resultados">
          <h2>Resultados de la búsqueda:</h2>
          <ul>
            {resultados.map((pelicula) => (
            <Link to={`/Busca/${pelicula.id}`}>
             <li key={pelicula.id}>
                <Link to={`/Peliculas/${pelicula.id}`}>
                  <img src={`https://image.tmdb.org/t/p/w185/${pelicula.poster_path}`} alt={pelicula.title} />
                  <h3>{pelicula.title}</h3>
                </Link>
              </li>
            </Link>
             
            ))}
          </ul>
        </div>
      )} */}
    </header>
  );
}



// import { Link, useLocation } from 'react-router-dom';
// import React, { useState } from 'react';

// export default function Navbar() {
    
//   const [menuOpen, setMenuOpen] = React.useState(false);
//   const location = useLocation();
//   const [busqueda, setBusqueda] = useState('');
//   const [resultados, setResultados] = useState([]);

//   const toggleMenu = () => {
//     if (location.pathname === '/') {
//       return;
//     }
//     setMenuOpen(!menuOpen);
//   };

//   const buscarPeliculas = async (e) => {
//     e.preventDefault();
//     try {
//       const respuesta = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a14c80ae068cf2ee2e614b27391deec2&query=${busqueda}`);
//       const datos = await respuesta.json();
//       setResultados(datos.results);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <header>
//       <div className="logo">
//         <img src="/foto/foto4.png" alt="FILMET logo" />
//         <h1>FILMET</h1>
//       </div>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/Peliculas">Peliculas</Link>
//         <Link to="/Proximamente">Estrenos</Link>
//         <Link to="/Login">Login</Link>
//         <Link to="/Signup">Sign Up</Link>
//         <Link to="/Perfil">Perfil</Link>
//         <Link to="/Busca"></Link>
//         <form onSubmit={buscarPeliculas}>
//           <input type="text" placeholder="Buscar" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
//           <button type="submit"><i className="fas fa-search"></i></button>
//         </form>
//         <div className="menu">
//           {location.pathname !== '/' && (
//             <React.Fragment>
//                 <i class="fa-solid fa-bars"  onClick={toggleMenu}></i>
//               {/* <img src="/foto/foto5.png" alt="Menu" onClick={toggleMenu} /><i class="fa-solid fa-bars"></i> */}
//               {menuOpen && (
//                 <div className="menu-items">
//                   <Link to="/Login">Login</Link>
//                   <Link to="/Signup">Sign Up</Link>
//                   <Link to="/Perfil">Perfil</Link>
//                 </div>
//               )}
//             </React.Fragment>
//           )}
//         </div>
//       </nav>
//       {resultados.length > 0 && (
//         <div className="resultados">
//           <h2>Resultados de la búsqueda:</h2>
//           <ul>
//             {resultados.map((pelicula) => (
//               <li key={pelicula.id}>
//                 <Link to={`/Peliculas/${pelicula.id}`}>
//                   <img src={`https://image.tmdb.org/t/p/w185/${pelicula.poster_path}`} alt={pelicula.title} />
//                   <h3>{pelicula.title}</h3>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// }







// import { Link, useLocation } from 'react-router-dom';
// import React from 'react';

// export default function Navbar() {
    
//   const [menuOpen, setMenuOpen] = React.useState(false);
//   const location = useLocation();

//   const toggleMenu = () => {
//     if (location.pathname === '/') {
//       return;
//     }
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header>
//       <div className="logo">
//         <img src="/foto/foto4.png" alt="FILMET logo" />
//         <h1>FILMET</h1>
//       </div>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/Peliculas">Peliculas</Link>
//         <Link to="/Proximamente">Estrenos</Link>
//         <Link to="/Login">Login</Link>
//         <Link to="/Signup">Sign Up</Link>
//         <Link to="/Perfil">Perfil</Link>
//         <Link to="/Busca"></Link>
//         <form>
//           <input type="text" placeholder="Buscar" />
//           <button type="submit"><i className="fas fa-search"></i></button>
//         </form>
//         <div className="menu">
//           {location.pathname !== '/' && (
//             <React.Fragment>
//                 <i class="fa-solid fa-bars"  onClick={toggleMenu}></i>
//               {/* <img src="/foto/foto5.png" alt="Menu" onClick={toggleMenu} /><i class="fa-solid fa-bars"></i> */}
//               {menuOpen && (
//                 <div className="menu-items">
//                   <Link to="/Login">Login</Link>
//                   <Link to="/Signup">Sign Up</Link>
//                   <Link to="/Perfil">Perfil</Link>
//                 </div>
//               )}
//             </React.Fragment>
//           )}
//         </div>
//         {/* <form>
//           <input type="text" placeholder="Buscar" />
//           <button type="submit"><i className="fas fa-search"></i></button>
//         </form> */}
//       </nav>
//     </header>
//   );
// }








// import { Link } from 'react-router-dom'
// import React from 'react'

// export default function Navbar() {
//   return (

    
//     <header>
//       <div className="logo">
//         <img src="/foto/foto4.png" alt="FILMET logo" />
//         <h1>FILMET</h1>
        
//       </div>
//         <nav>
//         <Link to='/'>Home</Link>
//         <Link to='/Peliculas'>Peliculas</Link>
//         <Link to='/Proximamente'>Estrenos</Link>
//         <Link to='/Login'>Login</Link>
//         <Link to='/Signup'>Sign Up</Link>
//         <Link to='/Perfil'>Perfil</Link>
//         <form>
//             <input type="text" placeholder="Buscar" />
//             <button type="submit"><i className="fas fa-search"></i></button>
//         </form>
//         </nav>
//     </header>
    
//   )
// }








// import { Link, useLocation } from 'react-router-dom';
// import React, { useState } from 'react';

// export default function Navbar() {
    
//   const [menuOpen, setMenuOpen] = React.useState(false);
//   const location = useLocation();
//   const [busqueda, setBusqueda] = useState('');
//   const [resultados, setResultados] = useState([]);

//   const toggleMenu = () => {
//     if (location.pathname === '/') {
//       return;
//     }
//     setMenuOpen(!menuOpen);
//   };

// //   const buscarPeliculas = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const respuesta = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=a14c80ae068cf2ee2e614b27391deec2&query=${busqueda}`);
// //       const datos = await respuesta.json();
// //       setResultados(datos.results);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };
// const buscarPeliculas = async (e) => {
//     e.preventDefault();
//     try {
//       const respuesta = await fetch(`https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query=${busqueda}`);
//       const datos = await respuesta.json();
//       setResultados(datos.results);
//       history.push(`/Busca?query=${busqueda}`);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <header>
//       <div className="logo">
//         <img src="/foto/foto4.png" alt="FILMET logo" />
//         <h1>FILMET</h1>
//       </div>
//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/Peliculas">Peliculas</Link>
//         <Link to="/Proximamente">Estrenos</Link>
//         <Link to="/Login">Login</Link>
//         <Link to="/Signup">Sign Up</Link>
//         <Link to="/Perfil">Perfil</Link>
//         <Link to="/Busca"></Link>
//         <form onSubmit={buscarPeliculas}>
//           <input type="text" placeholder="Buscar" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
//           <button type="submit"><i className="fas fa-search"></i></button>
//         </form>
//         <div className="menu">
//           {location.pathname !== '/' && (
//             <React.Fragment>
//                 <i class="fa-solid fa-bars"  onClick={toggleMenu}></i>
//               {/* <img src="/foto/foto5.png" alt="Menu" onClick={toggleMenu} /><i class="fa-solid fa-bars"></i> */}
//               {menuOpen && (
//                 <div className="menu-items">
//                   <Link to="/Login">Login</Link>
//                   <Link to="/Signup">Sign Up</Link>
//                   <Link to="/Perfil">Perfil</Link>
//                 </div>
//               )}
//             </React.Fragment>
//           )}
//         </div>
//       </nav>
//       {resultados.length > 0 && (
//         <div className="resultados">
//           <h2>Resultados de la búsqueda:</h2>
//           <ul>
//             {resultados.map((pelicula) => (
//               <li key={pelicula.id}>
//                 <Link to={`/Peliculas/${pelicula.id}`}>
//                   <img src={`https://image.tmdb.org/t/p/w185/${pelicula.poster_path}`} alt={pelicula.title} />
//                   <h3>{pelicula.title}</h3>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// }