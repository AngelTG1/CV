import React from 'react'
import { informations } from '../../data/information';
import '../../assets/css/services.css';
import Js from '../../assets/img/JS1.svg'
import Java1 from '../../assets/img/Java1.svg'
import Database1 from '../../assets/img/Database1.svg'
import Html5 from '../../assets/img/html5.svg'
import Css3 from '../../assets/img/Css3.svg'
import ServicioTrash from '../atoms/ServicioTrash';
import TitleSection from '../atoms/TitleSection';

function ServicesExper() {
  return (
    <>
        <TitleSection msn={informations.titles[1]} clasename="titleServi titleAbout" />
        {/* <h2 className='titleServi titleAbout'>My Services</h2> */}
        <div className='ovr-section'>
            
           <ServicioTrash nombrePrograma={informations.nombrePrograma4} nombreimg={Js} descritionServicio={informations.descriptionServiceJs} />
           <ServicioTrash nombrePrograma={informations.nombrePrograma1} nombreimg={Html5} descritionServicio={informations.descriptionServiceHtml} />
           <ServicioTrash nombrePrograma={informations.nombrePrograma3} nombreimg={Java1} descritionServicio={informations.descriptionServiceJAva} />
           <ServicioTrash nombrePrograma={informations.nombrePrograma2} nombreimg={Css3} descritionServicio={informations.descriptionServiceCss} />
           <ServicioTrash nombrePrograma={informations.nombrePrograma5} nombreimg={Database1} descritionServicio={informations.descriptionServiceData} />  
        </div>
    </>
  )
}

export default ServicesExper;