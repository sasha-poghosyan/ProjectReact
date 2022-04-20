import './App.css';
import React from 'react';
import { BrowserRouter as Roter, Route, Routes } from 'react-router-dom'
import Home from './Pages/HomePage/HomePage';
import Menu from './Components/Menu/Menu';
import ContactPage from './Pages/ContactPage/ContactPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import Corona from './Pages/Corona/Corona';
import RegisterPage from './Pages/RegisterPage/RegisterPage';

function App() {
    return (
      <Roter>
        <Menu/>
        <Routes>
         <Route path='/Home' element={<Home/>}/>
         <Route path='/ContactPage'element={<ContactPage/>}/>
         <Route path='/AboutPage'element={<AboutPage/>}/>
         <Route path='/Corona'element={<Corona/>}/>
         <Route path='/RegisterPage'element={<RegisterPage/>}/>
        
         
         

         </Routes>

      </Roter>
    )
  }

export default App;

