import React from "react";
import WidgetNormal from "~components/lib/Widget/WidgetNormal";
import data from "./data";
const AboutSection = ({ className }) => {
  return (
    <div className="about-section-03">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div
            className="col-xl-6 col-lg-6 col-md-8 col-xs-10 col-sm-10 offset-xl-1 order-lg-2"
            data-aos="fade-left"
            data-aos-delay={500}
            data-aos-duration={1000}
          >
            <div className="about-section-03__content mb-mobile-lg">
              <div className="block-title content-title">
                <h6 className={`subtitle text-secondary mb-20 ${className}`}>
                  About Custer
                </h6>
                <h2 className="title">
                  Reseña Histórica <br className="d-none d-xl-block" />
                </h2>
                <p>
                  En la década de los sesenta, el Táchira tenía escasos lazos artísticos con la región capital y carecía de una escena artística significativa. A pesar de los cambios sustanciales en la sociedad debido al auge de la televisión en Venezuela, no había una relación directa con la globalización que vendría décadas después. La actividad artística en la región no estaba a la par de ciudades cercanas al epicentro cultural de la capital, lo que relegaba la pintura a un nivel casi doméstico.
                  <br className="d-none d-xl-block" /> <br className="d-none d-xl-block" />
                  El origen de la Escuela de Artes Plásticas de San Cristóbal se encuentra en el taller de artes y oficios de Capacho, fundado por el Gobernador Abel Montilla después de inspirarse en una visita a la Escuela Quiteña en Ecuador en 1942. En este taller, Valentín Hernández Useche comenzó a desarrollar sus primeros criterios artísticos, lo que posteriormente condujo a la creación del principal centro de arte en la capital del estado, la Escuela de Artes Plásticas de San Cristóbal.
                  <br className="d-none d-xl-block" /> <br className="d-none d-xl-block" />
                  Bajo la gestión del gobernador Edilberto Escalante en 1962, y a petición del profesor Valentín Hernández Useche, se estableció la Escuela de Artes Plásticas de San Cristóbal con el objetivo de promover la pintura en la región. Dado que había escasez de maestros venezolanos en la zona, la formación inicial dependió de profesores de Cúcuta, con excepciones como los maestros Elbano Méndez Osuna, Manuel Osorio Velasco y Valentín Hernández Useche. A pesar de las limitaciones en el desarrollo artístico, esta época vio la formación de la agrupación pictórica "La Cueva Pictórica," que incluyó a artistas como Ulacio Sandoval, Agustín Guerrero, Freddy Pereira, Jesús Aliviares, Juana Michel Angelli y Rafael Guerrero. Aunque efímera, esta agrupación dejó un legado de renovación en la pintura regional en un momento sin movimiento vanguardista.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 col-md-8 col-xs-10 col-sm-10 order-lg-1">
            <div className="about-section-03__widget">
              {data.map(({ id, iconImage, text, title }, index) => {
                return (
                  <div
                    className="about-section-03__widget--wrapper"
                    data-aos="fade-up"
                    data-aos-delay={200 * index}
                    data-aos-duration="1000"
                    key={id}
                  >
                    <WidgetNormal
                      className="widget-content widget-column-till-md"
                      iconImage={iconImage}
                      title={title}
                      text={text}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
