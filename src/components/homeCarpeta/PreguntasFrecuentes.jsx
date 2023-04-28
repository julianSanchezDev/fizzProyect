import React from "react";
import logoMas from "./imagenes/mas.png"

const PreguntasFrecuentes = () => {
  const mas = [logoMas];
  return (

    <>
      <h3 className="py-10 text-center">Preguntas Frecuentes</h3>

      <div className="collapse text-center mx-auto max-w-2xl">
        <input type="checkbox" className="peer" />
        <div className="collapse-title">
          <div className="flex items-center">
            <img src={mas} alt="Icono" className="w-5 h-5 mr-2" />
            <a href="#" className="inline-block align-middle text-base">
              ¿Cuál es la diferencia entre los mensajes a mi market place y los mensajes a mi cuenta de Instagram?
            </a>
          </div>
        </div>
        <div className="collapse-content bg-transparent text-black dark:text-gray-200">
          <p>
            Los mensajes de Market Place son los que llegan a tu casilla de messenger de Facebook, por productos que publicaste ahi para vender. Y los de instagram, son los mensajes que llegan a tu cuenta de instagram, derivados de pubicidades, o de forma organica.
          </p>
        </div>
      </div>


      <div className="collapse text-center mx-auto max-w-2xl">
        <input type="checkbox" className="peer" />
        <div className="collapse-title">
          <div className="flex items-center">
            <img src={mas} alt="Icono" className="w-5 h-5 mr-2" />
            <a href="#" className="inline-block align-middle text-base">
              ¿Cómo puedo estar seguro de que los seguidores que me proporcionen son de calidad y no bots o cuentas falsas?
            </a>
          </div>
        </div>
        <div className="collapse-content bg-transparent text-black dark:text-gray-200">
          <p>
            Puede estar seguro de que los nuevos seguidores que obtenga en instagram son personas reales ya que son personas que vieron un anuncio de su negocio y decidieron seguirlo.
          </p>
        </div>
      </div>

      <div className="collapse text-center mx-auto max-w-2xl">
        <input type="checkbox" className="peer" />
        <div className="collapse-title">
          <div className="flex items-center">
            <img src={mas} alt="Icono" className="w-5 h-5 mr-2" />
            <a href="#" className="inline-block align-middle text-base">
              ¿Qué tan rápido puedo esperar resultados en mi posicionamiento SEO?
            </a>
          </div>
        </div>
        <div class="collapse-content bg-transparent text-black dark:text-gray-200">
          <p>
            En un sitio web nuevo podrian ser de 10 a 11 meses, generalmente es un poco mas rapido pero estos son los plazos maximos establecidos.
          </p>
        </div>
      </div>

      <div className="collapse text-center mx-auto max-w-2xl">
        <input type="checkbox" className="peer" />
        <div className="collapse-title">
          <div className="flex items-center">
            <img src={mas} alt="Icono" className="w-5 h-5 mr-2" />
            <a href="#" className="inline-block align-middle text-base">
              ¿Cómo se comunicarán conmigo cuando compro el servicio?
            </a>
          </div>
        </div>
        <div className="collapse-content bg-transparent text-black dark:text-gray-200 max-w-xl mx-auto text-center">

          <p className="my-4">
            Usted una vez tiene el servicio, pasa a ser atendido por un agente de cuenta, quien se encarga de ser el enlace entre su negocio y nuestro servicio.
          </p>

        </div>

      </div>

      <div className="collapse text-center mx-auto max-w-2xl">
        <input type="checkbox" className="peer" />
        <div className="collapse-title">
          <div className="flex items-center">
            <img src={mas} alt="Icono" className="w-5 h-5 mr-2" />
            <a href="#" className="inline-block align-middle text-base">
              ¿Tiene algún costo adicional la creación de contenido o publicidad en mi cuenta de Instagram o en mi sitio web?
            </a>
          </div>
        </div>
        <div className="collapse-content bg-transparent text-black dark:text-gray-200 max-w-xl mx-auto text-center">

          <p className="my-4">
            La creación de contenido no tiene ningún tipo de costo adicional.
          </p>

        </div>

      </div>

      <div className="collapse text-center mx-auto max-w-2xl">
        <input type="checkbox" className="peer" />
        <div className="collapse-title">
          <div className="flex items-center">
            <img src={mas} alt="Icono" className="w-5 h-5 mr-2" />
            <a href="#" className="inline-block align-middle text-base">
              ¿Ademas de abonar el servicio, tengo que pagar algo mas?
            </a>
          </div>
        </div>
        <div className="collapse-content bg-transparent text-black dark:text-gray-200 max-w-xl mx-auto text-center">

          <p className="my-4">
            Si, además del servicio usted tiene que destinar un presupuesto en publicidad, para que podamos anunciar en las distintas plataformas, Market Place, Facebook Ads, Google Ads etc.
          </p>

        </div>

      </div>







    </>

  );
};

export default PreguntasFrecuentes;
