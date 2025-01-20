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
      <section>
        <div>
          <img src="" alt="" />
        </div>
        <div></div>
        <div></div>
      </section>
      <section className="contact-form">
        <ContactForm />
      </section>
    </>
  );
}
export default Contact;
