import React, { useRef } from 'react'
import TestimonialSliderTwo from '~components/lib/Slider/TestimonialSliderTwo';
import ScreenshotSliderOne from '~components/lib/Slider/ScreenshotSliderOne';

export const screenshotSlider = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  centerMode: true,
  centerPadding: "180px",
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  easing: "linear",
  speed: 500,
  responsive: [
    {
      breakpoint: 2450,
      settings: {
        slidesToShow: 5,
        // slidesToScroll: 5,
        centerPadding: "-60px",
      },
    },
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 5,
        // slidesToScroll: 5,
        centerPadding: "-80px",
      },
    },
    {
      breakpoint: 1901,
      settings: {
        slidesToShow: 5,
        // slidesToScroll: 5,
        centerPadding: "-100px",
      },
    },
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 5,
        // slidesToScroll: 5,
        centerPadding: "-120px",
      },
    },
    {
      breakpoint: 1750,
      settings: {
        slidesToShow: 5,
        // slidesToScroll: 5,
        centerPadding: "-180px",
      },
    },
    {
      breakpoint: 1670,
      settings: {
        slidesToShow: 5,
        // slidesToScroll: 5,
        centerPadding: "-180px",
      },
    },
    {
      breakpoint: 1640,
      settings: {
        slidesToShow: 5,
        // slidesToScroll: 5,
        centerPadding: "-180px",
      },
    },
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 5,
        // slidesToScroll: 5,
        centerPadding: "-350px",
      },
    },
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "-270px",
      },
    },
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "-270px",
      },
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "-270px",
      },
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "-270px",
      },
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 5,
        centerPadding: "-270px",
      },
    },
    {
      breakpoint: 830,
      settings: {
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "160px",
      },
    },
    {
      breakpoint: 650,
      settings: {
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 515,
      settings: {
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        centerPadding: "0px",
        arrows: false,
      },
    },
  ],
}

const Testimonial = () => {
  const data = Array(25).fill(0).map((img, idx) => ({ src: `./image/60anniversary/${idx + 1}.webp` }))

  return(
    <div className="testimonil-section-04">
      <div className="container">
        <div className="row">
          <div className="section-title testimonil-section-04__title">
            <h2 className="title">Exposición virtual colectiva "60 Aniversario"</h2>
          </div>
        </div>
      </div>
      <ScreenshotSliderOne
        disableFrame
        data={data}
        sliderConfig={screenshotSlider}
      />
    </div>
  )}

export default Testimonial
