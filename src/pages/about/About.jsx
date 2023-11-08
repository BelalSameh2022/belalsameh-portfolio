import React from "react";
import "./about.css";
import Info from "../../components/Info";
import Stats from "../../components/Stats";
import Skills from "../../components/Skills";
import { resume } from "../../data";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/Belal_Sameh_Resume.pdf";
import ResumeItem from "../../components/ResumeItem";

export default function About() {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal information</h3>

            <ul className="info__list grid">
              <Info />
            </ul>

            <a href={CV} download="" className="button">
              Download CV
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section__subtitle subtitle__center">Techniacl skills</h3>

        <div className="skills__container grid">
          <Skills />
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume">
        <h3 className="section__subtitle subtitle__center">
          Education & Experience
        </h3>

        <div className="resume__container grid">
            <div className="resume__data">
                {resume.map((value)=>{
                    if (value.category === 'experience') {
                        return <ResumeItem key={value.id} {...value} />
                    }
                })}
            </div>
            <div className="resume__data">
                {resume.map((value)=>{
                    if (value.category === 'education') {
                        return <ResumeItem key={value.id} {...value} />
                    }
                })}
            </div>
        </div>
      </section>
    </main>
  );
}
