
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
import Busca from './pages/Busca';
import Grid from './pages/Grid';
import { useState } from 'react';


function App() {

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
      {/* <Route path='/Busca' element={<Busca/>}/> */}
      <Route path='/pelicula/:id' element={<Busca/>}/>
      {/* <Route path="/Busca" component={Busca} /> */}

    </Routes>

    <Footer/>
    </>
    
  );
}

export default App
