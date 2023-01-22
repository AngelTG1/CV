import React from 'react'
import { informations } from '../../data/information'
import '../../assets/css/aboutMe.css'
import github from '../../assets/img/Framegithub.svg'

function AboutDescription() {
  return (
    <div className='content-aboutme'>
        <h1 className='titleAbout'>{informations.title}</h1>
        <p className='descritionAbout'>{informations.presentacion}</p>
        <p className='descritionAbout'>{informations.proyecto1}</p>
        <p className='descritionAbout'>{informations.proyecto2}</p>
        <div>
          <a className='descritionAbout2 color1' href="https://github.com/AngelTG1"><img src={github} alt="" /> {informations.infor}</a>
        </div>
    </div>
  )
}

export default AboutDescription;