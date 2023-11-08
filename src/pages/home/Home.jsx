import React from "react";
import "./home.css";
import Profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <section className="home section grid">
      <img src={Profile} alt="Belal Sameh" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Belal Sameh.</span><br/>Web Developer
          </h1>

          <p className="home_description">
            I'm a web designer & front-end developer focused on
            crafting clean & user friendly expriences, I'm passionate about
            building excellent software that improves the lives of those around
            me.
          </p>

          <Link to="/about" className="button">
            More about me
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
}
