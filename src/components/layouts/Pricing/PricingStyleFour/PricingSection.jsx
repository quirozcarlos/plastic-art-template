import React, { useRef, useState } from "react";
import PricingCard from "~components/lib/Card/PrcingCardStyleFour";
import ThreeColSlider from "~components/lib/Slider/MobileSlider/ThreeColSlider";
import PrcingData from "./data";

const PricingSection = () => {
  return (
    <div className="pricing-section-04">
      <div className="pricing-section-04__shape">
        <img src="./image/home-7/content-shape-2.png" className="w-100" />
      </div>
      {Array.from(Array(5)).map((_, index) => {
        return (
          <div
            className={`pricing-section-04__circle-${index + 1} particle`}
          key={index}></div>
        );
      })}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="section-title pricing-section-04__title">
              <h6 className="subtitle text-secondary mb-20">
                Pricing &amp; Plans
              </h6>
              <h2 className="title">
                We offer simple pricing <br className="d-none d-xs-block" />
                plan for you
              </h2>
              <p className="text-dark">
                An enim nullam tempor sapien gravida donec enim
                <br className="d-none d-xs-block" /> ipsum porta justo integena
                gna at pretium
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-9 col-xs-11">
            <ThreeColSlider className="three-row-mobile-slider align-items-center g-0 pricing-center-card-scale">
              {PrcingData.map(
                ({ plan, list, active, price, id, color }, index) => {
                  return (
                    <div
                      className="col-lg-4 col-md-8 col-sm-8 col-xs-10 col-10"
                      data-aos="fade-up"
                      data-aos-delay={200 * index}
                      data-aos-duration="1000"
                      key={id}
                    >
                      <PricingCard
                        plan={plan}
                        list={list}
                        price={price}
                        active={active}
                        color={color}
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
