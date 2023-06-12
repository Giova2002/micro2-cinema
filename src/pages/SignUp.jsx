import React from "react";
import styles from "./SignUp.module.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { InputControl } from "./InputControl/InputControl";
import { googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";




export function Signup() {
    const navigate = useNavigate();
    const [values, setvalues] = useState({ name: "", email: "", pass: "" });
    const [errorMsg, setErrorMsg] = useState([]);
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false); 
  const signinWithGoogle = async () =>{
      try{
          const result = await signInWithPopup(auth, googleProvider);
          console.log(result);
      }catch (error){
          console.error(error);
      }
   };
    const registro = () => {
      if (!values.name || !values.email || !values.pass) {
        setErrorMsg("Llene todos los campos");
        return;
      }
      setErrorMsg("");
      setSubmitButtonDisabled(true);
      createUserWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res) => {
          setSubmitButtonDisabled(false);
          const user = res.user;
          await updateProfile(user, {
            displayName: values.name,
          });
          navigate("/");
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
        });
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
          <h1 className={styles.heading}>Registro</h1>
          <InputControl
            label="Nombre"
            placeholder="Ingrese un nombre"
            onChange={(event) =>
              setvalues((prev) => ({ ...prev, name: event.target.value }))
            }
          />
          <InputControl
            label="Email"
            placeholder="Ingrese un correo"
            onChange={(event) =>
              setvalues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <InputControl
            label="Contraseña"
            placeholder="Ingrese una contraseña"
            onChange={(event) =>
              setvalues((prev) => ({ ...prev, pass: event.target.value }))
            }
          />
          <div className={styles.footer}>
            <b className={styles.error}>{errorMsg}</b>
            <button onClick={registro} disabled={submitButtonDisabled}>
              Guardar
            </button>
            <button onClick={signinWithGoogle}>Registrate con google</button>
            <p>
              Si ya tienes una cuenta inicia sesión
              <span>
                <Link to="/login"> Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }




export default Signup;

