import React, { useRef, useState } from "react";
import PricingCard from "~components/lib/Card/PrcingCardStyleTwo";
import ThreeColSlider from "~components/lib/Slider/MobileSlider/ThreeColSlider";
import PrcingData from "./data";

const PricingSection = ({ subColor }) => {
  return (
    <div className="pricing-section-02">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10 col-xs-11 text-center">
            <div className="section-title pricing-section-02__title">
              <h2 className="title">
                Información de inscripciones
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-9 col-xs-11">
            <ThreeColSlider className="three-row-mobile-slider">
              {PrcingData.map(
                ({ plan, list, active, priceIcon, price, id, subtitle }, index) => {
                  return (
                    <div
                      className="col-lg-6"
                      data-aos="fade-up"
                      data-aos-delay={200 * index}
                      data-aos-duration="1000"
                      key={id}
                    >
                      <PricingCard
                        plan={plan}
                        subtitle={subtitle}
                        list={list}
                        price={price}
                        active={active}
                        priceIcon={priceIcon}
                      />
                    </div>
                  );
                }
              )}
            </ThreeColSlider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
