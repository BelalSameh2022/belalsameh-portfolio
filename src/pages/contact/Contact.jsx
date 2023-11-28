import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Contact() {
  const formRef = useRef();
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  function sendEmail() {
    setLoading(true);
    emailjs
      .sendForm(
        "service_1j7p8yu",
        "template_tur6lgr",
        formRef.current,
        "UtEPWXUDh84VxfKRs"
      )
      .then(
        (result) => {
          console.log(result.text);
          setAlert("Message has sent successfully.");
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setAlert("Oops, something went wrong. Please try again.");
        }
      );
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Minimum length is 3")
      .max(20, "Maximum length is 20"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const contactFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: sendEmail,
  });

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get-in <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be shy!</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I'm always open to discussing new
            projects,creative ideas or opportunities to be apart of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">belal.ko3ip@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+201006269871</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://facebook.com" className="contact__social-link">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="contact__social-link">
              <FaTwitter />
            </a>
            <a href="https://github.com" className="contact__social-link">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" className="contact__social-link">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <form
          className="contact__form"
          ref={formRef}
          onSubmit={contactFormik.handleSubmit}
        >
          {alert ? <div className="alert">{alert}</div> : ""}
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Name..."
                className="form-control"
                name="name"
                onChange={contactFormik.handleChange}
                onBlur={contactFormik.handleBlur}
              />
              {contactFormik.errors.name && contactFormik.touched.name ? (
                <p className="text-alert">{contactFormik.errors.name}</p>
              ) : (
                ""
              )}
            </div>
            <div className="form__input-div">
              <input
                type="email"
                placeholder="Email..."
                className="form-control"
                name="email"
                onChange={contactFormik.handleChange}
                onBlur={contactFormik.handleBlur}
              />
              {contactFormik.errors.email && contactFormik.touched.email ? (
                <p className="text-alert">{contactFormik.errors.email}</p>
              ) : (
                ""
              )}
            </div>
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Subject..."
                className="form-control"
                name="subject"
                onChange={contactFormik.handleChange}
                onBlur={contactFormik.handleBlur}
              />
              {contactFormik.errors.subject && contactFormik.touched.subject ? (
                <p className="text-alert">{contactFormik.errors.subject}</p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Message..."
              className="form-control textarea"
              name="message"
              onChange={contactFormik.handleChange}
              onBlur={contactFormik.handleBlur}
            ></textarea>
            {contactFormik.errors.message && contactFormik.touched.message ? (
              <p className="text-alert">{contactFormik.errors.message}</p>
            ) : (
              ""
            )}
          </div>

          <button
            disabled={!(contactFormik.dirty && contactFormik.isValid)}
            type="submit"
            className="button"
          >
            Send message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
