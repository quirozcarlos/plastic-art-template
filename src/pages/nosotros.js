import React from "react";
import { PageWrapper } from "~components/Core";
import VideoStyleThree from "~components/layouts/Video/VideoStyleThree";
import AboutStyleThree from "~components/layouts/About/AboutStyleThree";
import FactStyleFour from "~components/layouts/Fact/FactStyleFour";
import CtaSection from "~components/layouts/Cta/CtaStyleOne";
import TeamSection from "~components/layouts/Team/TeamStyleOne";
import ContentStyleTwentyFour from "~components/layouts/Content/ContentStyleTwentyFour";

export default function AboutUs() {
  return (
    <PageWrapper
      themeConfig={{
        innerPage: {
          breadcrumbTitle: "Sobre Nosotros",
          activePage: "Sobre Nosotros",
          img: "./image/banners/banner2.jpeg",
          breadcrumbText: " En nuestra escuela de arte, creamos un espacio donde la imaginación florece y las habilidades artísticas se perfeccionan. Únete a nosotros para explorar el mundo del arte y ser parte de nuestra comunidad creativa."
        },
      }}
    >
      <VideoStyleThree />
      <AboutStyleThree className="d-none" />
      <FactStyleFour className="bg-transparent" />
      <ContentStyleTwentyFour />
      <TeamSection className="bg-transparent" />
      <CtaSection
        showButton
        title={'Queremos saber sobre ti'}
        styleContainer={{
          backgroundColor: '#001C80'
        }}
      />
    </PageWrapper>
  );
}
