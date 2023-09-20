import React, { useState } from "react";
import { ACADEMY_ADDRESS, ACADEMY_MAIL, ACADEMY_PHONE } from "~data/constants";

const ContentSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const mailtoLink = `mailto:${ACADEMY_MAIL}?subject=${encodeURIComponent('Nuevo mensaje desde el formulario de contacto')}&body=${encodeURIComponent(`Nombre: ${formData.name}\nCorreo: ${formData.email}\nMensaje: ${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const isFormValid = formData.name && formData.email && formData.message;

  const styles = {
    img: {
      objectFit: 'cover',
      height: 550
    }
  }

  return (
    <>
      <div className="contactform-section-01">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-8 mb-mobile-lg">
              <div className="contactform-section-01__sidebar">
                <h4 className="title">Información de Contacto</h4>
                <div className="contactform-section-01__sidebar--body">
                  <div className="address">
                    <h6 className="address--title">Dirección de la Escuela</h6>
                    <div className="address__box">
                      <div className="icon">
                        <img
                          src="./image/contact/small-map-icon.svg"
                          alt="map-icon"
                        />
                      </div>
                      <span>
                        {ACADEMY_ADDRESS}
                      </span>
                    </div>
                  </div>
                  <div className="info">
                    <h6 className="info--title">Datos de contacto</h6>
                    <ul className="info__box m-0 p-0">
                      <li className="info__box--lists">
                        <i className="fas fa-phone-alt" />
                        <a href="#">{ACADEMY_PHONE}</a>
                      </li>
                      <li className="info__box--lists">
                        <i className="fas fa-envelope" />
                        <a href={`mailto:${ACADEMY_MAIL}`}> {ACADEMY_MAIL}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 offset-xl-1 col-lg-8 col-md-10">
              <div className="contactform-section-01__from">
                <form className="contact-form-01" onSubmit={handleSubmit}>
                  <div className="contact-form-01--inpute-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Escribe tu nombre*"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="contact-form-01--inpute-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Escribe tu correo electronico*"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <textarea
                    placeholder="Escribe tu mensaje"
                    cols={30}
                    rows={10}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    className="btn btn-primary btn-primary-hvr"
                    type="submit"
                    value="Enviar Mensaje"
                    disabled={!isFormValid}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contactmap-section">
        <div className="container-fluid g-0">
          <div className="contactmap-section__map">
            <img src="./image/ubication.png" className="w-100" alt="map" style={styles.img} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSection;
