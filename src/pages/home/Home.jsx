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
            {/* Highly skilled Node.js Backend Developer with over [X years] of experience in building scalable, high-performance server-side applications. Proficient in creating RESTful and GraphQL APIs, integrating third-party services, and optimizing database queries for enhanced application performance. Demonstrated expertise in working with MongoDB, PostgreSQL, and MySQL, along with hands-on experience in microservices architecture, Docker, and cloud platforms like AWS and Azure. Strong knowledge of authentication mechanisms, including OAuth2, JWT, and session-based authentication, ensuring secure and reliable application environments. Adept at writing clean, maintainable code following best practices, coupled with a deep understanding of asynchronous programming and event-driven architecture. Passionate about collaborating with cross-functional teams to deliver top-notch software solutions and continuously learning new technologies to stay ahead in the rapidly evolving tech landscape. */}
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
