import React from "react";
import Video from "~components/Core/VideoModal";

export default function VideoSection() {
  return (
    <div className="video-section-01 video-section-01--2 bg-transparent">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-6 col-md-9 col-xl-6 col-lg-6 offset-xxl-1 order-lg-2 mb-mobile-lg">
            <div
              className="video-block"
              data-aos="fade-left"
              data-aos-duration={800}
            >
              <img
                src="./image/school/salon2.jpeg"
                alt="content-image"
                className="w-100"
              />
              <div className="video-button-block">
                <Video
                  id="h9WJgu6OnLI"
                  className="video-btn popup-btn video-btn-1 text-primary bg-white"
                >
                  <i className="fas fa-play" />
                </Video>
              </div>
              <div className="dots">
                <img src="./image/about/dots.svg" className="w-100" alt="dot" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xxl-5 col-xl-6 col-md-8 order-lg-1">
            <div
              className="video-section-content block-title"
              data-aos="fade-right"
              data-aos-duration={800}
            >
              <h2 className="title">
                ¡Un placer conocerte!
              </h2>
              <p className="text-dark">
                La Escuela de Artes Plásticas Valentín Hernández Useche es una Institución  de carácter vocacional que forma jóvenes valores, brindándoles una educación teórico- práctica, con un gran sentido de valoración  estético-artístico, con dominio de la representación bidimensional y tridimensional, así como en las diversas técnicas de interpretación y representación plásticas del arte, ayudando a concebir una cultura e identidad nacional, participará en la solución de los problemas sociales y culturales relacionados con el área plástica y estará abierta a las diversas corrientes de las Artes y las nuevas tecnologías.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
