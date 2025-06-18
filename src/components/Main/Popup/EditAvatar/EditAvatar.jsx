export default function EditAvatar() {
  return (
    <form className="form" id="form-update-avatar">
      <h3 className="form__title">Cambiar foto de perfil</h3>
      <input
        className="form__text-input form__avatar-image"
        type="url"
        placeholder="Enlace a la imagen"
        id="input-avatar-image"
        name="input-avatar-image"
        required
      />
      <span id="input-avatar-image-error" className="form__error-msg"></span>
      <button className="form__submit form__submit_inactive" type="submit" />
      Guardar
    </form>
  );
}
