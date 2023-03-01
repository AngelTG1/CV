import React from 'react'

function Tarjeta({infor, nombre}) {
  return (
    <>
         <div class="card">
            <div class="box">
                <div class="percent">
                    <svg>
                        <circle cx="70" cy="70" r="70"></circle>
                        <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div class="number">
                        <h2>{infor}<span>%</span></h2>
                    </div>
                </div>  
                <h2 class="text">{nombre}</h2>
            </div>
        </div>
    </>
  )
}

export default Tarjeta;