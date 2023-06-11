
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

export default function Navbar() {
    
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    if (location.pathname === '/') {
      return;
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">
        <img src="/foto/foto4.png" alt="FILMET logo" />
        <h1>FILMET</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Peliculas">Peliculas</Link>
        <Link to="/Proximamente">Estrenos</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Signup">Sign Up</Link>
        <Link to="/Perfil">Perfil</Link>
        <form>
          <input type="text" placeholder="Buscar" />
          <button type="submit"><i className="fas fa-search"></i></button>
        </form>
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
        {/* <form>
          <input type="text" placeholder="Buscar" />
          <button type="submit"><i className="fas fa-search"></i></button>
        </form> */}
      </nav>
    </header>
  );
}

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
