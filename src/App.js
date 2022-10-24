import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Home from './components/Home';
import Internship from './components/Internship';
import Projects from './components/Projects';
import Skills from './components/Skills';
import MainHome from './components/MainHome'

const App = () => {
  return (
    <>


    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainHome/>} >
        <Route index element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='skills' element={<Skills/>} />
        <Route path='projects' element={<Projects/>} />
        <Route path='internship' element={<Internship/>} />
        <Route path='*' element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App