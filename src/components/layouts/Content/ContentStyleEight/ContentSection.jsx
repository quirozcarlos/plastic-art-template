import React from "react";
import { ReactSVG } from "react-svg";
import TabBlock from "~components/lib/Tabs/TabStyleOne/TabBlock";
import ContentBlock from "./ContentBlock";

const tabItemsData = [
  {
    id: "first",
    navItem: "Talleres",
    tabContent: <ContentBlock
      img1a={"./image/school/taller4.jpeg"}
      img1b={"./image/school/taller1a.jpeg"}
      img2a={"./image/school/cuadro4.jpeg"}
      img2b={"./image/school/cuadro2.jpeg"}
    />,
  },
  {
    id: "second",
    navItem: "Salones",
    tabContent: <ContentBlock
      img1a={"./image/school/taller2.jpeg"}
      img1b={"./image/school/taller2a.jpeg"}
      img2a={"./image/school/salon3.jpeg"}
      img2b={"./image/school/salon3a.jpeg"}
    />,
  },
  {
    id: "third",
    navItem: "Espacios Creativos",
    tabContent: <ContentBlock
      img1a={"./image/school/taller3.jpeg"}
      img1b={"./image/school/cuadro1.jpeg"}
      img2a={"./image/school/taller1.jpeg"}
      img2b={"./image/school/cuadro3.jpeg"}
    />,
  },
];

const ContentSection = () => {
  return (
    <div className="content-section-08">
      <div className="content-section-08__shape-1 circle-x">
        <img
          src="./image/home-4/content-shape-5.svg"
          alt="shape"
          className="make-it-inline"
        />
      </div>
      <div className="content-section-08__shape-2 shape-x-1">
        <ReactSVG
          src="./image/home-4/content-shape-6.svg"
          alt="shape"
          className="make-it-inline fill-secondary"
        />
      </div>
      <div className="container">
        <TabBlock tabItems={tabItemsData} />
      </div>
    </div>
  );
};

export default ContentSection;
