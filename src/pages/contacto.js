import React from "react";
import { PageWrapper } from "~components/Core";
import ContentSection from "~components/layouts/Contact/ContactOne/ContentSection";
export default function contactOne() {
  return (
    <PageWrapper
      themeConfig={{
        innerPage: {
          breadcrumbTitle: "Contáctanos",
          activePage: "Contáctanos",
          img: "./image/banners/banner3.jpeg",
          breadcrumbText: "¡Estamos aquí para escucharte! Contáctanos fácilmente a través de correo electrónico o teléfono. También puedes enviarnos un mensaje directamente utilizando nuestro formulario de contacto."
        },
      }}
    >
      <ContentSection />
    </PageWrapper>
  );
}
