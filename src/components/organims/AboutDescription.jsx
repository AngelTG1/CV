import React from 'react'
import { informations } from '../../data/information'
import '../../assets/css/aboutMe.css'
import github from '../../assets/img/Framegithub.svg'
// import AboutMeTrash from '../atoms/AboutMeTrash'
import DescriptionProyect from '../atoms/DescriptionProyect'
import AboutMe from '../molecules/AboutMe'
import TitleSection from '../atoms/TitleSection'

function AboutDescription() {
  return (
    <div className='content-aboutme'>
        <TitleSection msn={informations.titles[0]} clasename="titleAbout" />
        {/* <h1 className='titleAbout'>{informations.title}</h1> */}
        <AboutMe projectList={informations.projectsList} />

        {/* <AboutMeTrash list={informations.projectsList} /> */}
        {/* <p className='descritionAbout'>{informations.presentacion}</p>
        <p className='descritionAbout'>{informations.proyecto1}</p>
        <p className='descritionAbout'>{informations.proyecto2}</p> */}
        <div>
          <a className='descritionAbout2 color1' href="https://github.com/AngelTG1"><img className='github' src={github} alt="" /> {informations.infor}</a>
        </div>
    </div>
  )
}

export default AboutDescription;