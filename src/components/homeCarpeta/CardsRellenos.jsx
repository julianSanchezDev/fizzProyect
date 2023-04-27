import React from "react";
import img1 from "./imagenes/img1.jpeg"
import img2 from "./imagenes/img2.jpeg"
import img3 from "./imagenes/img3.jpeg"
import img4 from "./imagenes/img4.jpeg"


const CardRellenos = () => {
  const imagenes= [img1,img2,img3,img4];
  return (
    <div className="flex flex-wrap flex-col sm:flex-row">
  <div className="w-full lg:w-1/2 p-4">
    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img src={img1} alt="Movie"/></figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  </div>
  <div className="w-full lg:w-1/2 p-4">
    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img src={img2} alt="Movie"/></figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  </div>
  <div className="w-full lg:w-1/2 p-4">
    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img src={img3} alt="Movie"/></figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  </div>
  <div className="w-full lg:w-1/2 p-4">
    <div className="card card-side bg-base-100 shadow-xl">
      <figure><img src={img4}  alt="Movie"/></figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
      </div>
    </div>
  </div>
</div>

  

  );
};

export default CardRellenos;
