import React from 'react'
import Header from '../components/atoms/Header';
import AboutMe from '../components/molecules/AboutMe';
import AboutDescription from '../components/organims/AboutDescription';
import GraficCircle from '../components/organims/GraficCircle';
import ServicesExper from '../components/organims/ServicesExper';
import EducationGrafict from '../components/organims/EducationGrafict';

function Home() {
  return (
    <>
        <Header/>
        <AboutDescription/>
        <GraficCircle />
        <ServicesExper/>
        <EducationGrafict/>
        
    </>
  )
}

export default Home;