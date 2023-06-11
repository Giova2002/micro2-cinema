
import './App.css'
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SingUp from './pages/SignUp';
import Navbar from './pages/Navbar';
import Peliculas from './pages/Peliculas';
import Perfil from './pages/Perfil';
import Proximamente from './pages/Proximamente';
import Footer from './pages/footer';
import Grid from './pages/Grid';
import { useState } from 'react';


function App() {
  // const API_URL= 'https://api.themoviedb.org/3/movie/550?api_key=a14c80ae068cf2ee2e614b27391deec2 '
  // const API_KEY = 'a14c80ae068cf2ee2e614b27391deec2'
  // const IMAGE_PATH=  'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'
  // const URL_IMAGE= 'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'

  // // Variables de estados
  // const [movies, setMovies]= useState([])
  // const [searchKey, setSearchKey]= useState("")
  // const [trailer, setTrailer]= useState(null);
  // const [movie, setMovie]= useState({tittle: "loading Movies" });
  // const [playing, setPlaying]= useState(false);
  
  // // funcion para realizar la particion por get a la opt
  // const fetchMovies= async(searchKey) =>{
  //   const type= searchKey ? "search": "discover"
  //   const {data: {results},
  // }= await axios.get(`${API_URL}/${type}/movie`, {
  //     params: {
  //       api_key: API_KEY,
  //       query: searchKey,

  //     },
  //   })
  //   setMovies(results)
  //   setMovie(results[0])
  // }

  return ( 
    <>
    <Navbar/>
    {/* <Grid/> */}
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<SingUp/>}/>
      <Route path='/Peliculas' element={<Peliculas/>}/>
      <Route path='/Perfil' element={<Perfil/>}/>
      <Route path='/Proximamente' element={<Proximamente/>}/>
      
    </Routes>
    <Footer/>
    
    
    </>
    


    // <div className='App'>
    //   <Nabvar/>

    // </div>

    // <>
    // <Nabvar/>
    
    // {/* <Router>
    //   <Nabvar/>
    //   <Switch>
    //     <Route path='/' exact />
    //   </Switch>
    // </Router> */}

    // </>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  );
}

export default App
