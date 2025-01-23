import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "34934987890";
  const message = "Hola%20I%20Voldria%20demanar%20hora";

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button onClick={handleClick} style={styles.button}>
      <FaWhatsapp style={styles.icon} />
    </button>
  );
};

const styles = {
  button: {
    display: "flex",
    alignItems: "center",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#25D366",
    color: "white",
    border: "none",
    padding: "0.5rem",
    cursor: "pointer",
    borderRadius: "50px",
  },
  icon: {
    fontSize: "2rem",
  },
};

export default WhatsAppButton;
