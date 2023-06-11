import React from "react";

const Peliculas= ()=>{
    const API_URL = 'https://api.themoviedb.org/3/movie/550?api_key=a14c80ae068cf2ee2e614b27391deec2'
  const API_KEY = 'a14c80ae068cf2ee2e614b27391deec2'
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'

  // Variables de estados
  const [movies, setMovies] = useState([])
  const [searchKey, setSearchKey] = useState("")
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({tittle: "loading Movies" });
  const [playing, setPlaying] = useState(false);

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover"
    const { data: { results }, } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    })
    setMovies(results)
    setMovie(results[0])
  }

  useEffect(() => {
    fetchMovies();
  }, [])

  return (
    <div className="home-container">
      <div className="hero">
        <div className="carrusel">
          <img src="foto/img1.jpg" alt="Imagen 1" />
          <img src="foto/img2.jpg" alt="Imagen 2" />
          <img src="foto/img3.jpg" alt="Imagen 3" />
          <img src="foto/img4.jpg" alt="Imagen 4" />
          <img src="foto/img5.jpg" alt="Imagen 5" />
          <img src="foto/img6.jpg" alt="Imagen 6" />
        </div>
      </div>
      <div className="movies-container">
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-md-4 mb-3">
              <div className="movie-card">
                <img src={`${URL_IMAGE + movie.poster_path}`} alt="" height={600} width="100%" />
                <div className="movie-details">
                  <h4 className="movie-title">{movie.title}</h4>
                  <p className="movie-overview">{movie.overview}</p>
                  <button className="play-button">Play Trailer</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default Peliculas;


// import React, { useEffect } from "react";
// import { useState } from 'react';
// const Home= ()=>{
//     const API_URL= 'https://api.themoviedb.org/3/movie/550?api_key=a14c80ae068cf2ee2e614b27391deec2 '
//     const API_KEY = 'a14c80ae068cf2ee2e614b27391deec2'
//     const IMAGE_PATH=  'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
//     const URL_IMAGE= 'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'

//     // Variables de estados
//     const [movies, setMovies]= useState([])
//     const [searchKey, setSearchKey]= useState("")
//     const [trailer, setTrailer]= useState(null);
//     const [movie, setMovie]= useState({tittle: "loading Movies" });
//     const [playing, setPlaying]= useState(false);
//     const fetchMovies= async(searchKey) =>{
//         const type= searchKey ? "search": "discover"
//         const {data: {results},
//       }= await axios.get(`${API_URL}/${type}/movie`, {
//           params: {
//             api_key: API_KEY,
//             query: searchKey,
    
//           },
//         })
//         setMovies(results)
//         setMovie(results[0])
//       }
//       useEffect(()=>{
//         fetchMovies();
//       },[])
//     return(
//         <div>
//              <div class="hero">
//                  <div class="carrusel">
//                      <img src="foto/img1.jpg" alt="Imagen 1" />
//                      <img src="foto/img2.jpg" alt="Imagen 2" />
//                      <img src="foto/img3.jpg" alt="Imagen 3" />
//                      <img src="foto/img4.jpg" alt="Imagen 4" />
//                      <img src="foto/img5.jpg" alt="Imagen 5" />
//                      <img src="foto/img6.jpg" alt="Imagen 6" />
//                  </div>
//            </div>
//             <div className="container mt-3">
//                 <div className="row">
//                     {movies.map((movie)=> (
//                         <div key={movie.id} className="col-md-4 mb-3">
//                             <img src={`${URL_IMAGE + movie.poster_path}`} alt="" height={600} width="100%" />
//                             <h4 className="text-center">{movie.title}</h4>
//                         </div>

//                     ))}

//                 </div>
//             </div>
            
//         </div>
       
//     );
// };

// export default Home;