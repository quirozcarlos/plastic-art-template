import React from "react";
import Link from "next/link";
import { ReactSVG } from "react-svg";

const PricingCard = ({ plan, price, priceIcon, active, list, subtitle }) => {
  return (
    <div className={`card-pricing--02${active ? " active" : ""}`}>
      <div className="card-pricing--02__head">
        <h3 className="card-pricing--02__plan-title">{plan}</h3>
        <img
          className="card-pricing--02__plan-img"
          src={priceIcon}
          alt="pricing-icon"
        />
        <h2 className="card-pricing--02__price" />
        <span className="card-pricing--02__plan-text text-dark">{subtitle}</span>
      </div>

      <div className="d-flex justify-content-center">
        {list && (
          <ul className="card-pricing--01__list list-unstyled">
            {list.map(({ text, id }) => {
              return (
                <li key={id}>
                  <ReactSVG
                    src="./image/home-4/icon-check.svg"
                    alt="check"
                    className="icon-check"
                  />
                  {text}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="card-pricing--02__button text-center">
        <Link href='/contacto'>
          <a
            className={`btn border-2 btn-rounded btn-primary-outline${
              active ? "-reverse" : ""
            }`}
          >
            Contacto
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
