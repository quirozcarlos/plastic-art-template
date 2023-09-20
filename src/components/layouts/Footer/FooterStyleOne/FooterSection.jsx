import React from "react";
import { ACADEMY_ADDRESS, ACADEMY_MAIL, ACADEMY_PHONE } from "~data/constants";

const FooterDownload = () => {
  return (
    <div className="footer-widget footer-widget--03 text-center text-sm-start">
          <h5 className="footer-widget--title">Información de Contacto</h5>
          <ul className="footer-widget--info m-0 p-0 list-unstyled">
            <li>{ACADEMY_ADDRESS}</li>
            <li className="footer-2-datails">
              <i className="fas fa-phone-alt" />
              <a href="#">{ACADEMY_PHONE}</a>
            </li>
            <li className="footer-2-datails">
              <i className="fas fa-envelope" />
              <a href="#"> {ACADEMY_MAIL}</a>
            </li>
          </ul>
        </div>
  );
};

export default function FooterSection({ type }) {
  return (
    <footer className="footer-area--01">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-xl-3 col-xxl-3 col-sm-6 col-xs-9 col-10 order-sm-1 order-lg-1">
            <div className="footer-content text-center text-sm-start">
              <p className="footer-content--text text-dark">
                En tiempos de dificultad y escases damos un paso al frente.
                Trabajando por brindar a la futura generación vivir en paz, igualdad e inclusión.
              </p>
              <ul className="footer-content--social">
                <li>
                  <a href="https://www.instagram.com/escueladeartesplasticas.sc/" target="_blank">
                    <i className="fab fa-instagram" />
                    &nbsp;Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@escueladeartesplasticasapl442" target="_blank">
                    <i className="fab fa-youtube" />
                    &nbsp;Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-xl-3 col-xxl-3 col-sm-4 col-xs-11 offset-sm-1 offset-lg-0 order-sm-2 order-lg-2" />
          <div className="col-lg-3 col-xl-3 col-xxl-3 col-sm-4 col-xs-11 offset-sm-1 offset-lg-0 order-sm-4 order-lg-3" />
          <div className="col-lg-3 col-xl-3 col-xxl-3 col-sm-6 col-xs-11 order-sm-3 order-lg-4">
            <FooterDownload/>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <p>Copyright © {new Date().getFullYear()} Escuela de Artes Plásticas</p>
      </div>
    </footer>
  );
}
