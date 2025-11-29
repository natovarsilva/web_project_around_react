import { useState } from "react";

export default function NewCard({ onAddPlaceSubmit }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlaceSubmit({ name, link });

    setName("");
    setLink("");
  }

  return (
    <form className="form" id="form-new-place" onSubmit={handleSubmit}>
      <h3 className="form__title">Nuevo lugar</h3>
      <input
        className="form__text-input form__text-input_name"
        type="text"
        placeholder="Título"
        id="input-place-name"
        name="input-place-name"
        required
        minLength="2"
        maxLength="30"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <span id="input-place-name-error" className="form__error-msg"></span>
      <input
        className="form__text-input form__place-image"
        type="url"
        placeholder="Enlace a la imagen"
        id="input-place-image"
        name="input-place-image"
        required
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <span id="input-place-image-error" className="form__error-msg"></span>
      <button className="form__submit form__submit_inactive" type="submit">
        Crear
      </button>
    </form>
  );
}
