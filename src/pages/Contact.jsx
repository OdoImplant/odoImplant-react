import ContactForm from "../components/ContactForm";
import "../css/contact.css";
import entrada from "../assets/entrada.png";
import callLogo from "../assets/call-logo.png";
import instaLogo from "../assets/vecteezy-instagram.png";
import mailLogo from "../assets/mail-logo.png";
import location from "../assets/location-logo.png";
import { t } from "../utils/transllationFunction.js";

function Contact() {
  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <>
      <header>
        <img src={entrada} alt="entrada" />
        <div className="intro-text-section">
          <span id="odoimplant-title">{t("contacte")}</span>
          <span>{t("demana-cita")}</span>
        </div>
      </header>
      <section className="clinica-section">
        <div className="clinica-text">
          <div className="title">
            <span>{t("contacte")} </span>
          </div>
          <p>{t("contacte-text")}</p>
        </div>
      </section>
      <section className="contact-info-section">
        <div className="contact-details">
          <div className="contact-items">
            <img src={callLogo} alt="call-icon" />
            <p>93 498 78 90</p>
          </div>
          <div className="contact-items">
            <a className="insta" href="https://www.instagram.com/odoimplant">
              <img src={instaLogo} alt="vecteezy-instagram" />
              <p>https://www.instagram.com/odoimplant/</p>
            </a>
          </div>
          <div className="contact-items">
            <img src={mailLogo} alt="mail-icon" />
            <p>odo@odoimplant.com</p>
          </div>
          <div className="contact-items">
            <img src={location} alt="location-icon" />
            <p>C/ Huelva 138 (local posterior) 08020 Barcelona</p>
          </div>
        </div>
        <div className="map-area">
          <iframe
            width="600"
            height="250"
            frameborder="0"
            style={{ border: 0 }}
            referrerpolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Odoimplant`}
            allowfullscreen
          ></iframe>
        </div>
      </section>
      {/* <section className="contact-form">
        <ContactForm />
      </section>*/}
    </>
  );
}

export default Contact;
