
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Busca.module.css";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Busca = () => {
  const { id } = useParams(); // Obtener el ID de la película de la URL
  const [pelicula, setPelicula] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cedula, setCedula] = useState("");
  const [correo, setCorreo] = useState("");
  const [boletos, setBoletos] = useState(0);
  const [asientos, setAsientos] = useState([]);

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

  const handleReservar = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    agregar();
    const agregar = async ()=>{
      const reserva = {
        "nombre": nombre,
        "apellido": apellido,
        "correo": correo,
        "fecha": fecha,
        "personas": personas
      };
      try{
      const docRef = await addDoc(collection(db, "reservar"),reserva );
      console.log("Document written with ID: ", docRef.id);
    }catch(e){
      console.error(e);
    }
    }


  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleCedulaChange = (event) => {
    setCedula(event.target.value);
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleBoletosChange = (event) => {
    const value = parseInt(event.target.value);
    setBoletos(value);
  };

  const handleAsientoChange = (index, event) => {
    const value = event.target.checked;
    const newAsientos = [...asientos];
    newAsientos[index] = value;
    setAsientos(newAsientos);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar que se hayan seleccionado asientos
    const selectedAsientos = asientos.filter((asiento) => asiento === true);
    if (selectedAsientos.length === 0) {
      alert("Debes seleccionar al menos un asiento");
      return;
    }

    // Validar que se haya ingresado un nombre
    if (nombre.trim() === "") {
      alert("Debes ingresar tu nombre");
      return;
    }

    // Validar que se haya ingresado un apellido
    if (apellido.trim() === "") {
      alert("Debes ingresar tu apellido");
      return;
    }

    // Validar que se haya ingresado una cédula de identidad
    if (cedula.trim() === "") {
      alert("Debes ingresar tu cédula de identidad");
      return;
    }

    // Validar que se haya ingresado un correo electrónico válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      alert("Debes ingresar un correo electrónico válido");
      return;
    }

    // Validar que se haya ingresado la cantidad de boletos
    if (boletos < 1 || boletos > 5) {
      alert("Debes ingresar una cantidad de boletos válida (entre 1 y 5)");
      return;
    }

    // Enviar la reserva al servidor (o hacer lo que corresponda)
    alert("Reserva realizada con éxito");
    setShowModal(false);

//    const reserva = {
//        nombre,
//        apellido,
//        cedula,
//        correo,
//        boletos,
//        asientos,
//        pelicula: pelicula.title,
//        fecha: new Date(),
//      };
//      db.collection("reservar").add({
//        nombre: nombre,
//        apellido: apellido,
//        correo: correo,
//        fecha: fecha,
//        personas: personas
//      })
//      .then((docRef) => {
//        console.log("Documento agregado con ID: ", docRef.id);
//      })
//      .catch((error) => {
//        console.error("Error al agregar documento: ", error);
//      });
        const agregar = async ()=>{
          const reserva = {
            "nombre": nombre,
            "apellido": apellido,
            "correo": correo,
            "fecha": fecha,
            "personas": personas
          };
          try{
          const docRef = await addDoc(collection(db, "reservar"),reserva );
          console.log("Document written with ID: ", docRef.id);
        }catch(e){
          console.error(e);
        }
        }
      // Guardar la reserva en Firestore
//      try {
//        const respuesta = db.collection("reservar").add(reserva);
//        console.log("Reserva guardada con ID:", respuesta.id);
//        alert("Reserva realizada con éxito");
//        setShowModal(false);
//      } catch (error) {
//        console.log("Error al guardar reserva:", error);
//        alert("Hubo un error al realizar la reserva, por favor inténtalo de nuevo más tarde");
//      }
  };

  if (!pelicula) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={styles.container}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
        alt={pelicula.title}
        className={styles.poster}
      />
      <div className={styles.info}>
        <h2 className={styles.title}>{pelicula.title}</h2>
       <p className={styles.overview}>{pelicula.overview}</p>
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
        
        <div className={styles.actions}>

          <button className={styles.reservar} onClick={handleReservar}>
            Reservar
          </button>
        </div>
      </div>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3 className={styles.modalTitle}>Reserva de boletos</h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="nombre">Nombre:</label>
                <input
                  type="text"
                  id="nombre"
                  value={nombre}
                  onChange={handleNombreChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="apellido">Apellido:</label>
                <input
                  type="text"
                  id="apellido"
                  value={apellido}
                  onChange={handleApellidoChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="cedula">Cédula de identidad:</label>
                <input
                  type="text"
                  id="cedula"
                  value={cedula}
                  onChange={handleCedulaChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="correo">Correo electrónico:</label>
                <input
                  type="email"
                  id="correo"
                  value={correo}
                  onChange={handleCorreoChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="boletos">Cantidad de boletos:</label>
                <input
                  type="number"
                  id="boletos"
                  min="1"
                  max="5"
                  value={boletos}
                  onChange={handleBoletosChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Asientos:</label>
                <div className={styles.asientos}>
                  {Array.from({ length: 50 }, (_, i) => (
                    <label key={i} className={styles.asiento}>
                      <input
                        type="checkbox"
                        checked={asientos[i] || false}
                        onChange={(event) => handleAsientoChange(i, event)}
                        disabled={asientos.filter((asiento) => asiento === true).length >= boletos && !asientos[i]}
                      />
                      <span className={styles.checkmark}>{i + 1}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className={styles.formActions}>
                <button type="submit">Reservar</button>
                <button type="button" onClick={handleModalClose}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Busca;