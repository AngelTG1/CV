import React from 'react'
import { informations } from '../../data/information';
import '../../assets/css/services.css';
import Js from '../../assets/img/JS1.svg'
import Java1 from '../../assets/img/Java1.svg'
import Database1 from '../../assets/img/Database1.svg'
import Html5 from '../../assets/img/html5.svg'
import Css3 from '../../assets/img/Css3.svg'

function ServicesExper() {
  return (
    <>
        <h2 className='titleServi titleAbout'>My Services</h2>
        <div className='ovr-section'>
            
            <div className='ovr-build-grid'>
                <div className='icon-item'>
                    <div className='icon-item-icon'>
                        <img src={Js} alt="" />
                    </div>
                </div>
                <div className='icon-item-right'>
                    <div className='icon-item-title '>{informations.nombrePrograma4}</div>
                    <div className='icon-item-desc '>{informations.descriptionServiceJs}</div>
                </div>
            </div>

            <div className='ovr-build-grid'>
                <div className='icon-item'>
                    <div className='icon-item-icon'>
                    <img src={Html5} alt="" />
                    </div>
                </div>
                <div className='icon-item-right'>
                    <div className='icon-item-title'>{informations.nombrePrograma1}</div>
                    <div className='icon-item-desc'>{informations.descriptionServiceHtml}</div>
                </div>
            </div>

            <div className='ovr-build-grid'>
                <div className='icon-item'>
                    <div className='icon-item-icon'>
                    <img src={Java1} alt="" />
                    </div>
                </div>
                <div className='icon-item-right'>
                    <div className='icon-item-title '>{informations.nombrePrograma3}</div>
                    <div className='icon-item-desc '>{informations.descriptionServiceJAva}</div>
                </div>
            </div>

            <div className='ovr-build-grid'>
                <div className='icon-item'>
                    <div className='icon-item-icon'>
                        <img src={Css3} alt="" />
                    </div>
                </div>
                <div className='icon-item-right'>
                    <div className='icon-item-title '>{informations.nombrePrograma2}</div>
                    <div className='icon-item-desc'>{informations.descriptionServiceCss}</div>
                </div>
            </div>

            <div className='ovr-build-grid'>
                <div className='icon-item'>
                    <div className='icon-item-icon'>
                    <img src={Database1} alt="" />
                    </div>
                </div>
                <div className='icon-item-right'>
                    <div className='icon-item-title'>{informations.nombrePrograma5}</div>
                    <div className='icon-item-desc'>{informations.descriptionServiceData}</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ServicesExper;