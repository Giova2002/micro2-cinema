

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import styles from "./Perfil.module.css";

const Perfil = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  const salir = () => {
    auth.signOut();
    navigate('/');
  }

  useEffect(() => {
    const cargarUsuario = async () => {
      const usuarioFirebase = await auth.currentUser;
      if (!usuarioFirebase) {
        navigate('/Login');
      } else {
        // Escuchar los cambios en el objeto usuario hasta que todos los datos estén disponibles
        auth.onAuthStateChanged((usuarioActualizado) => {
          if (usuarioActualizado) {
            setUsuario(usuarioActualizado);
          }
        });
      }
    };
    cargarUsuario();
  }, [navigate]);

  return (
    <div className={styles.perfilContainer}>
      <div className={styles.perfilHeader}>
        <h1>Perfil de Usuario</h1>
      </div>
      <div className={styles.perfilInfo}>
        {usuario ? (
        <>
            <img src="/foto/foto6.png" alt="Logo de usuario" />
            {/* <h2>Bienvenido - {usuario.displayName || usuario.email}</h2> */}
            <h2>Correo: {usuario.email}</h2>
        </>
        ) : (
        <h2>Inicie sesión</h2>
        )}
        <button onClick={salir} className={styles.salirButton}>Salir</button>
        </div>
    </div>
  );
};

export default Perfil;







// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { auth } from '../firebase';
// import styles from "./Perfil.module.css";

// const Perfil = (props) => {
//   const navigate = useNavigate();
//   const [usuario, setUsuario] = useState(null);

//   const salir = () => {
//     auth.signOut();
//     navigate('/');
//   }

//   useEffect(() => {
//     const verificarAutenticacion = async () => {
//       const usuarioFirebase = await auth.currentUser;
//       if (!usuarioFirebase) {
//         navigate('/Login');
//       } else {
//         setUsuario(usuarioFirebase);
//       }
//     };
//     verificarAutenticacion();
//   }, [navigate]);

//   return (
//     <div className={styles.perfilContainer}>
//       <div className={styles.perfilHeader}>
//         <h1>Perfil de Usuario</h1>
//       </div>
//       <div className={styles.perfilInfo}>
//         {usuario ? (
//           <>
//             {/* <h2>Bienvenido - {usuario.displayName || usuario.displayName}</h2> */}
//             <h2>Bienvenido - {props.name? `${props.name}`:" "}</h2>
//             <h2>Correo: {usuario.email}</h2>
//           </>
//         ) : (
//           <h2>Inicie sesión</h2>
//         )}
//         <button onClick={salir} className={styles.salirButton}>Salir</button>
//       </div>
//     </div>
//   );
// };

// export default Perfil;






// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { auth } from '../firebase';

// function salir() {
//   auth.signOut();
//   navigate('/');
// }

// const Perfil = () => {
//   const navigate = useNavigate();
//   const [usuario, setUsuario] = useState(null);

//   useEffect(() => {
//     const verificarAutenticacion = async () => {
//       const usuarioFirebase = await auth.currentUser;
//       if (!usuarioFirebase) {
//         navigate('/Login');
//       } else {
//         setUsuario(usuarioFirebase);
//       }
//     };
//     verificarAutenticacion();
//   }, [navigate]);

//   return (

//     <div className={styles.perfilContainer}>
//       <div className={styles.perfilHeader}>
//         <h1>Perfil de Usuario</h1>
//       </div>
//       <div className={styles.perfilInfo}>
//         <h2>{usuario ? `Nombre de usuario: ${usuario.displayName}` : 'Inicie sesión'}</h2>
//         <h2>{usuario ? `Correo: ${usuario.email}` : 'Inicie sesión'}</h2>
//         <button onClick={salir} className={styles.salirButton}>Salir</button>
//       </div>
//     </div>

//     // <div>
//     //   <div>
//     //     <div>
//     //       <h1>
//     //         {/* <Link to="/Login">Login</Link> */}
//     //       </h1>
//     //       <br />
//     //       <h1>
//     //         {/* <Link to="/Signup">Registrar</Link> */}
//     //       </h1>
//     //     </div>
//     //   </div>
//     //   <h2>{usuario ? `Bienvenido - ${usuario.displayName}` : 'Inicie sesión'}</h2>
//     //   <h2>{usuario ? ` Correo: ${usuario.email}` : 'Inicie sesión'}</h2>
//     //   <button onClick={salir}>Salir</button>
//     // </div>
//   );
// };

// export default Perfil;





// import { Link , useNavigate} from "react-router-dom";
// import {auth} from "../firebase"

// function salir() {
//   return auth.signOut()
//   navigate("/");
// }

// const Perfil= (props)=>{
//     return (
//         <div>
//           <div>
//             <div>
//               <h1>
//                 <Link to='/Login'>Login</Link>
//               </h1>
//               <br />
//               <h1>
//                 <Link to='/Signup'>Registrar</Link>
//               </h1>
//             </div>
//           </div>
//           <h2>{props.name?`Bienvenido - ${props.name}`:"Inicie sesión"}</h2>
//           <button onClick={salir}>Salir</button>
         
//         </div>
//       );
// };

// export default Perfil;

