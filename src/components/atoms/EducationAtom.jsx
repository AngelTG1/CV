import React from 'react'

function EducationAtom({year, title, description}) {
  return (
    <>
        <div class="box1">
            <div class="year">{year}</div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </>
  )
}

export default EducationAtom