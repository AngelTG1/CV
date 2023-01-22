import React from 'react'

function AboutMeTrash({list, item, titulo}) {
  return (
    <>
        {list.map(item => <p className='descritionAbout' key={titulo}>{item}</p>)}
    </>
  )
}

export default AboutMeTrash;