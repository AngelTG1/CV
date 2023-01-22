import React from 'react'
import Logo from '../../assets/react.svg'
import '../../assets/css/Header.css'
import Rayo from '../../assets/img/Vectorrayo1.svg'
import Tagua from '../../assets/img/Tagua.jpeg'
import { informations } from '../../data/information'

function Header() {
  return (
    <header className='Content-Header'>

      <div className='Content-img'>
        <img className='Logo' src={Tagua} alt="Logo de la empresa" />
        
      </div>

      <div className='Content-title'>
        <h1 className='Name'>{informations.nombreCompleto}</h1>
      </div>


      <div className='Content-title2'>
      <div>
        <img className='rayo' src={Rayo} alt="" />
      </div>
          <a className='mi' href="#"><h2>{informations.sobreMe}</h2></a>
      </div>
    </header>

    
  )
}

export default Header;