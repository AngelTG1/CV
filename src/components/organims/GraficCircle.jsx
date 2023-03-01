import React from 'react'
import { informations } from '../../data/information';
import Tarjeta from '../molecules/Tarjeta';

function GraficCircle() {
  return (
    <>
      <div class="container-grafic">
        <Tarjeta infor={informations.porcetajeHtml} nombre="Html" />
        <Tarjeta infor={informations.porcetajeCss} nombre="Css" />
        <Tarjeta infor={informations.porcetajeJavascript} nombre="Javascript" />
        <Tarjeta infor={informations.porcetajeJava} nombre="Java" />
      </div>
    </>
  )
}

export default GraficCircle;