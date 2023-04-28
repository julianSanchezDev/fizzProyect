import React from "react";
import img1 from "./imagenes/img1.jpeg"
import img2 from "./imagenes/img2.jpeg"
import img3 from "./imagenes/img3.jpeg"
import img4 from "./imagenes/img4.jpeg"


const CardRellenos = () => {
  const imagenes = [img1, img2, img3, img4];
  return (

    <>
    <div className="text-center py-10">
        <h2 className="text-3xl font-bold mb-4">No Vendemos Marketing, Vendemos Libertad.</h2>
      <p className="max-w-md mx-auto px-4 text-gray-700 leading-relaxed">
        Cómo leíste, vendemos libertad para que puedas ocuparte de vivir tu vida, lleva tranquilos a tus hijos al colegio, mira esa película que querés, hace ese viaje, tu negocio está en creciendo con Fizz.
      </p>
    </div>
    
     <div className="flex flex-wrap flex-col sm:flex-row">
      <div className="w-full lg:w-1/2 p-4">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure><img src={img1} alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">Market Place de Facebook</h2>
            <p></p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure><img src={img2} alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">Desarrollo Web</h2>
            <p></p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure><img src={img3} alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">Anuncios</h2>
            <p></p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure><img src={img4} alt="Movie" /></figure>
          <div className="card-body">
            <h2 className="card-title">Seguidores en Instagram</h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    
    </>

   



  );
};

export default CardRellenos;
