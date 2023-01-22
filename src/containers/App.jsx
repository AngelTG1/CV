import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/atoms/Header';
import AboutMe from '../components/molecules/AboutMe';
import Home from '../pages/Home';


export function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/' element={<AboutMe/>} />
            </Routes>
        </BrowserRouter>
    </>
    
  )
}

export default App;
