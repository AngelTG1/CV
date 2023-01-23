import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/atoms/Header';
import AboutMe from '../components/molecules/AboutMe';
import Home from '../pages/Home';


export function App() {
  return (
    <>
        <Home/>
    </>
    
  )
}

export default App;
