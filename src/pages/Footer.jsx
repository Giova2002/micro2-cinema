import { Link } from 'react-router-dom'
import React from 'react'
import foto4 from "../foto/foto4.png";

export default  function Footer() { 
    return ( 
        <footer class="pie-pagina">
        <div class="grupo-1">
            <div class="box">
                <figure>
                    <h1 className='tittle'>FILMET</h1>
                    <a href="#">
                        <img src={foto4} alt="logo" />
                    </a>
                </figure>
            </div>
            <div class="box">
                <h2>SOBRE NOSOTROS</h2>
                <p>En FilMet, estamos apasionados por el cine y queremos compartir esa pasión contigo. Nuestro objetivo es ofrecer una experiencia de cine inmersiva que te permita sumergirte en la historia y disfrutar de cada momento. Ya sea que estés buscando los éxitos de taquilla más recientes o clásicos del cine, tenemos una amplia selección de películas para satisfacer todos los gustos.</p>
                <p>¡Gracias por elegir FilMet!</p>
            </div>
            <div class="box">
                <h2>SIGUENOS</h2>
                <div class="red-social">
                    <a href="https://es-la.facebook.com/" class="fa fa-facebook"></a>
                    <a href="https://www.instagram.com/" class="fa fa-instagram"></a>
                    <a href="https://twitter.com/?lang=es" class="fa fa-twitter"></a>
                    <a href="https://www.youtube.com/" class="fa fa-youtube"></a>
                </div>
            </div>
        </div>
        <div class="grupo-2">
            <small>&copy; 2023 <b>FilMet</b>   Cusato - Cianfaglione</small>
        </div>
    </footer>
        )};
