import ContactForm from "../components/ContactForm";
import "../css/contact.css";

function Contact() {
  return (
    <>
      <header>
        <img src="src/assets/entrada.JPG" alt="entrada" />
        <div className="intro-text-section">
          <span id="odoimplant-title">Contacte</span>
          <span>Demana cita</span>
        </div>
      </header>
      <section className="clinica-section">
        <div className="clinica-text">
          <div className="title">
            <span>Contacte </span>
          </div>
          <p>
            Per obtenir més informació sobre els nostres serveis, omple el
            nostre formulari i ens posarem en contacte amb tu el més aviat
            possible. Alternativament, podeu trucar-nos o enviar-nos un correu
            electrònic i estarem encantats de respondre a totes les vostres
            preguntes.
          </p>
        </div>
      </section>
      <section className="contact-info-section">
        <div className="contact-details">
          <div className="contact-items">
            <img src="src/assets/call-logo.png" alt="call-icon" />
            <p>93 498 78 90</p>
          </div>
          <div className="contact-items">
            <a className="insta" href="https://www.instagram.com/odoimplant">
              <img
                src="src/assets/vecteezy-instagram.png"
                alt="vecteezy-instagram"
              />
              <p>https://www.instagram.com/odoimplant/</p>
            </a>
          </div>
          <div className="contact-items">
            <img src="src/assets/mail-logo.png" alt="mail-icon" />
            <p>odo@odoimplant.com</p>
          </div>
          <div className="contact-items">
            <img src="src/assets/location-logo.png" alt="location-icon" />
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
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAxHNc-aIHC_XBfmViXFCJVQwbTAEnmSsQ&q=Odoimplant"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <section className="contact-form">
        <ContactForm />
      </section>
    </>
  );
}
export default Contact;
