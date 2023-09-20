import React from "react";
import Link from "next/link";
import { ReactSVG } from "react-svg";

const CtaSection = (props) => {
  const { title, showButton, styleContainer } = props

  return (
    <div className="cta-section-01" style={styleContainer}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-9 col-xs-11">
            <div className="block-title text-center">
              <h2 className="title heading-light">
                {title}
              </h2>
              <p className="text-light">
                Estamos agradecidos por tu visita a nuestra página web,
                y esperamos que esto sea el comienzo de algo maravilloso,
                que tú puedas conocer más sobre el arte en el estado Táchira y nosotros podamos aprender sobre nuestros artistas nacionales,
                no dudes en comunicarte con nosotros si tienes alguna pregunta, aclaratoria o sugerencia.
              </p>
            </div>
            {showButton ? (
              <div style={{ display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: 20 }}>
                <Link href='/contacto'>
                  <button className="btn btn-primary btn-primary-hvr" style={{ width: '50%' }}>
                    Contáctanos
                  </button>
                </Link>
              </div>
            ) : (
              <form
                action="/"
                className="form-subscribe-inline--01 cta-section-01__newsletter"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control"
                />
                <button className="btn btn-primary btn-primary-hvr">
                  Subscribe Now
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="cta-section-01--shapes">
          <div className="cta-shape cta-shape--01 overflow-hidden">
            <div
              className="transform-origin-top-right"
              data-aos="zoom-in"
              data-aos-duration={1000}
              data-aos-delay={500}
            >
              <ReactSVG
                src="./image/home-4/cta-shape-1.svg"
                alt="shape"
                className="fill-tertiary"
              />
            </div>
          </div>
          <div className="cta-shape cta-shape--02">
            <ReactSVG
              src="./image/home-4/cta-shape-2.svg"
              alt="shape"
              className="fill-tertiary"
            />
          </div>
          <div
            className="cta-shape cta-shape--03"
            data-aos="fade-right"
            data-aos-duration={900}
            data-aos-delay={500}
          >
            <ReactSVG
              src="./image/home-4/cta-shape-3.svg"
              alt="shape"
              className="fill-tertiary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

CtaSection.defaultProps = {
  title: "Join of our community of 10,0000 users of the world’s leading organizations",
  showButton: true
}

export default CtaSection;
