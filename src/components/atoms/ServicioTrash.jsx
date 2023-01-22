import React from 'react'

function ServicioTrash({nombreimg, nombrePrograma, descritionServicio}) {
  return (
    <>
            <div className='ovr-build-grid'>
                <div className='icon-item'>
                    <div className='icon-item-icon'>
                        <img src={nombreimg} alt="" />
                    </div>
                </div>
                <div className='icon-item-right'>
                    <div className='icon-item-title '>{nombrePrograma}</div>
                    <div className='icon-item-desc '>{descritionServicio}</div>
                </div>
            </div>
    </>
  )
}

export default ServicioTrash;