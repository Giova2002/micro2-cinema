import { useState, useEffect } from "react";
import styles from "./Peliculas.module.css";

const Peliculas = () => {
  const [pagina, setPagina] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  const [generos, setGeneros] = useState({});
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

  const cargarGeneros = async () => {
    try {
      const respuesta = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=a14c80ae068cf2ee2e614b27391deec2&language=es-MX`
      );
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        const generosObject = {};
        datos.genres.forEach((genero) => {
          generosObject[genero.id] = genero.name;
        });
        setGeneros(generosObject);
      } else {
        console.log("Hubo un error al cargar los géneros");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    cargarPeliculas(pagina);
    cargarGeneros();
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
                  <strong>Género:</strong>{" "}
                  {pelicula.genre_ids.map((id) => generos[id]).join(", ")}
                </p>
              </div>
              {/* <button className={styles.reservar} onClick={() => handleReservar(pelicula)}>
                Reservar
              </button> */}
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
