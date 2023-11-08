import React from "react";
import Close from "../assets/close.svg";
import { useState } from "react";

export default function PortfolioItem({ img, title, details }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="portfolio__item">
      <img src={img} alt="Belal Sameh" className="portfolio__img" />

      <div className="portfolio__hover" onClick={toggleModal}>
        <div className="portfolio__title">{title}</div>
      </div>

      {modal && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <img src={Close} alt="Belal Sameh" className="modal__close" onClick={toggleModal} />

            <h3 className="modal__title">{title}</h3>

            <ul className="modal__list grid">
              {details.map(({ icon, title, desc }, index) => {
                return (
                  <li className="modal__item" key={index}>
                    <span className="item__icon">{icon}</span>

                    <div>
                      <span className="item__title">{title}</span>
                      <span className="item__details">{desc}</span>
                    </div>
                  </li>
                );
              })}
            </ul>

            <img src={img} alt="Belal Sameh" className="modal__img" />
          </div>
        </div>
      )}
    </div>
  );
}
