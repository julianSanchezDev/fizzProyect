import React, { useState, useEffect } from 'react';
import Client1 from "./imagenes/cliente1.jpeg"
import Cliente2 from "./imagenes/cliente2.jpeg"
import Cliente3 from "./imagenes/cliente3.jpeg"
import Cliente4 from "./imagenes/cliente4.jpeg"
import Cliente5 from "./imagenes/cliente5.jpeg"
const Clientes = () => {

    const [indiceImagenes, setIndiceImagenes] = useState(0);
    const tiempo = 4000;
    const imagenes = [
     Client1,
     Cliente2,
     Cliente3,
     Cliente4,
     Cliente5
    ];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setIndiceImagenes((indiceAnterior) =>
          indiceAnterior === imagenes.length - 1 ? 0 : indiceAnterior + 1
        );
      }, tiempo);
      return () => clearInterval(intervalId);
    }, [tiempo, imagenes.length]);

  return (

    
<div class="flex flex-col sm:flex-row items-center">
  <div class="w-2/3">
    <div class="card max-w-sm mx-auto image-full sm: py-10 ">
      <figure><img src={imagenes[indiceImagenes]} className="h-2/3 w-full" /></figure>
      <div className="card-body">
        <h2 className="card-title">Nuestros Clientes</h2>
        <p>Quieres formar parte de ellos?</p>
      </div>
    </div>
  </div>
  <div class="ml-4 mt-4 sm:mt-0">
    <h3 class="text-lg font-medium">Únete a nuestro selecto grupo de clientes</h3>
    <p class="mt-2 text-base text-gray-600">Descubre por qué nuestros clientes confían en nosotros y cómo podemos ayudarte a lograr tus objetivos de marketing. ¡Contáctanos hoy mismo!</p>
  </div>
</div>


  )
}

export default Clientes