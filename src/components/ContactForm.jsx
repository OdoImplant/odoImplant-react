import React from "react";

function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("The form is getting submitted");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nom</label>
        <input type="text" name="nom" />
        <label>Cognom</label>
        <input type="text" name="cognom" />
        <label>Telèfon</label>
        <input type="number" name="telefon" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>En què et podem ajudar?</label>
        <textarea name="message"></textarea>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ContactForm;
