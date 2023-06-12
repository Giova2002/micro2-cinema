import React from "react";
import styles from "./Login.module.css";
import { InputControl} from "./InputControl/InputControl";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState , useEffect } from "react";
import { googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

export function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const Iniciar = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Datos incompletos");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  const signinWithGoogle = async () =>{
    try{
        const result = await signInWithPopup(auth, googleProvider);
        console.log(result);
    }catch (error){
        console.error(error);
    }
 };
  useEffect(() => {
    const guardarPerfil = async (user) => {
      try {
        const userProfile = {
          displayName: values.name, // Puedes guardar el nombre que ingresó el usuario durante el registro
          // Puedes agregar más campos para guardar en el perfil del usuario según tus necesidades
        };
        await updateProfile(user, userProfile);
      } catch (error) {
        console.log(error);
      }
    };
    
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/");
        guardarPerfil(user); // Llamada a la función para guardar el perfil del usuario
      }
    });
    return unsubscribe;
  }, [navigate, values.name]);
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>
        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Ingrese su correo"
        />
        <InputControl
          label="Contraseña"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Ingrese su contraseña"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={Iniciar} disabled={submitButtonDisabled}>Iniciar</button>
          <button onClick={signinWithGoogle}>Iniciar sesion con google</button>
          <p>
            Crear cuenta
            <span>
              <Link to="/signup"> ir</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
// const Login= ()=>{
//     return(
//         <h1>Login</h1>

//     );
// };

export default Login;