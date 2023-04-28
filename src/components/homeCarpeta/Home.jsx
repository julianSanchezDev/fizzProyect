import React, { useEffect } from "react";
import WspIcono from "./WspIcono";
import logo from "./imagenes/logo.jpeg"

const Home = () => {
  useEffect(() => {
    const boton = document.querySelector("#boton");
    const menu = document.querySelector("#menu");

    boton.addEventListener("click", () => {
      console.log("CLICK");
      menu.classList.toggle("hidden");
    });
  }, []);

  const imgLogo= [logo];
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap	p-4 text-lg">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={imgLogo} />
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <button
            id="boton"
            className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          id="menu"
          className="w-full  flex-grow lg:flex lg:items-center lg:w-auto hidden"
        >
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-700 hover:border-purple-500 border-b-2 border-transparent -mb-2 mr-4 text-lg font-bold"
            >
              Nosotros
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-700 hover:border-purple-500 border-b-2 border-transparent -mb-2 mr-4 text-lg font-bold"
            >
              Donde Estamos ?
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5491133856648"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-700 hover:border-purple-500 border-b-2 border-transparent -mb-2 text-lg font-bold"
            >
              Contactanos
            </a>
          </div>
        </div>
      </nav>

      <div className="text-center py-10">
        <h1 className="text-3xl font-bold mb-4">¿Cómo vender más?</h1>
      <p className="max-w-md mx-auto px-4 text-gray-700 leading-relaxed">
      Eso es lo que seguramente buscas en Google para mejorar tu negocio, nosotros te proponemos otra solución, deja tus datos en nuestro formulario de abajo para que te contemos que podemos hacer por tu negocio
      </p>
    </div>
      <div className="relative">
        <WspIcono />
      </div>
    </>
  );
};

export default Home;
