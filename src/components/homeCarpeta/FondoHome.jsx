import React from 'react'
import imgFondo from './imagenes/vende.png'

const FondoHome = () => {


    const vendeImg= imgFondo;

  return (
    <div class="h-2/3 w-full bg-cover bg-center flex justify-center items-center" id="altoImg">
    <img src={imgFondo} alt="" class="h-full w-full object-cover" />
  </div>
  
  )
}

export default FondoHome