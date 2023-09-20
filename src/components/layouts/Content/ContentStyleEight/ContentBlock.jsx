import React from 'react'

export default function ContentBlock({ img1a, img1b, img2a, img2b, text, subtitle }){
return(
<div className="row align-items-center justify-content-center">
    <div className="col-xl-7 col-lg-6 col-md-8 col-sm-10 col-xs-11">
      <div className="content-section-08__image-group" >
        {img1a && (
          <img
            className="w-100"
            src={img1a}
            alt="content image"
          />
        )}
        {img1b && (
          <div className="content-section-08__image-group--card" >
            <img
              src={img1b}
              alt="content image"
            />
          </div>
        )}
      </div>
    </div>
    {(img2a || img2b) && (
      <div className="col-xl-7 col-lg-6 col-md-8 col-sm-10 col-xs-11" style={{ marginTop: 30 }}>
        <div className="content-section-08__image-group" >
          {img2a && (
            <img
              className="w-100"
              src={img2a}
              alt="content image"
            />
          )}
          {img2b && (
            <div className="content-section-08__image-group--card" >
              <img
                src={img2b}
                alt="content image"
              />
            </div>
          )}
        </div>
      </div>
    )}
    {(text || subtitle) && (
      <div
        className="col-xl-5 col-lg-5 col-md-8 col-11"
        data-aos="fade-left"
        data-aos-delay={500}
        data-aos-duration={1000}
      >
        <div className="content-section-08__content text-center text-lg-start block-title">
          {text && (
            <h2 className="title heading-light">
              {text}
            </h2>
          )}
          {subtitle && (
            <p className="text-light">
              Vero homero perfecto mei ut, sonet aperiam an nec. Ni
              <br className="d-none d-xxl-block" /> nec dict altera legimu.
              Me vita haeo tibi que com titure
              <br className="d-none d-xxl-block" /> viset cut.Proin tempus
              elit a laoreet volut pat.
            </p>
          )}
        </div>
      </div>
    )}
  </div>
)
}
