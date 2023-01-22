import React from 'react'
import { informations } from '../../data/information'
import NumberDescription from '../atoms/NumberDescription';

function GraficaCircle({numberGrafic}) {
  return (
    <>
      <div className="container-grafic">
            <div className="card">
                <div className="box">
                    <div className="percent">
                        <svg>
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <div className="number">
                            <h2>{numberGrafic.map(item => <div key={index}>{item}</div>)}<span>%</span></h2>
                        </div>
                    </div>
                    <h2 className="text"></h2>
                </div>
            </div>

        
        </div>
    </>
  )
}

export default GraficaCircle;