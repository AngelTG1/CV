import React from 'react'
import DescriptionProyect from '../atoms/DescriptionProyect'
import TitleSection from '../atoms/TitleSection'
import { informations } from '../../data/information'



function AboutMe({projectList}) {
  return (
    <>
        <TitleSection msn={informations.title}/>
        {
            projectList.map( itemProject => <DescriptionProyect projectDescription={itemProject} />)
        }

    </>
  )
}

export default AboutMe