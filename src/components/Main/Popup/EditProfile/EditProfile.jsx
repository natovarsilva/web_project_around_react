export default function EditProfile() {
  return (
    <form className="form" id="form-profile">
      <h3 className="form__title">Editar perfil</h3>
      <input
        className="form__text-input form__text-input_name"
        type="text"
        placeholder="Nombre"
        id="input-profile-name"
        name="input-profile-name"
        required
        minLength="2"
        maxLength="40"
      />
      <span id="input-profile-name-error" className="form__error-msg"></span>
      <input
        className="form__text-input form__text-input_description"
        type="text"
        placeholder="Acerca de mi"
        id="input-profile-description"
        name="input-profile-description"
        required
        minLength="2"
        maxLength="200"
      />
      <span
        id="input-profile-description-error"
        className="form__error-msg"
      ></span>
      <button className="form__submit form__submit_inactive" type="submit">
        Guardar
      </button>
    </form>
  );
}
