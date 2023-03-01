import React from 'react'
import '../../assets/css/education.css';
import EducationAtom from '../atoms/EducationAtom';
import { informations } from '../../data/information';
import TitleSection from '../atoms/TitleSection';

function EducationGrafict() {
  return (
    <>
        <section class="education ">

            <TitleSection msn={informations.titles[2]} clasename="heading titleAbout" />

            <div class="box-container">

              <EducationAtom year={informations.year1} title={informations.eduTitle1} description={informations.eduDescription1} />
              <EducationAtom year={informations.year2} title={informations.eduTitle2} description={informations.eduDescription2} />
              <EducationAtom year={informations.year3} title={informations.eduTitle3} description={informations.eduDescription3} />
              <EducationAtom year={informations.year4} title={informations.eduTitle4} description={informations.eduDescription4} />
            
            </div>

        </section>
    </>
  )
}

export default EducationGrafict