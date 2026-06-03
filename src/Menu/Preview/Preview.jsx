import React from "react";
import "../General/Overall.css";
import car1 from '../Preview/Pic/ford.jpg'
import car2 from '../Preview/Pic/p1.jpg'
import car3 from '../Preview/Pic/sportcar.jpg'
import '../Preview/Preview.css'
const Preview = () => {
  return (
  <div className="Big-Main">
      <section className=" container-fluid carousel-top pt-3">
        <div id="carouselExampleAutoplaying" className="carousel slide  " data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={car1}  alt="w" className=" carousel-pic"/>
              </div>
              <div className="carousel-item">
                <img src={car2}  alt="w" className=" carousel-pic"/>
              </div>
              <div className="carousel-item">
                <img src={car3}  alt="w" className=" carousel-pic"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
      </section>

    
  </div>)
  
  
  
};

export default Preview;
