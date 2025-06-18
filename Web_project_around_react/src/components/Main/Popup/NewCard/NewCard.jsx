export default function NewCard() {
  return (
    <form className="form" id="form-new-place">
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
      />
      <span id="input-place-name-error" className="form__error-msg"></span>
      <input
        className="form__text-input form__place-image"
        type="url"
        placeholder="Enlace a la imagen"
        id="input-place-image"
        name="input-place-image"
        required
      />
      <span id="input-place-image-error" className="form__error-msg"></span>
      <button className="form__submit form__submit_inactive" type="submit">
        Crear
      </button>
    </form>
  );
}
