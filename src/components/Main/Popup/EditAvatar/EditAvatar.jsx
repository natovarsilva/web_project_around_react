import { useRef, useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);

  // ref para acceder directamente al valor del input
  const avatarRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    handleUpdateAvatar({
      avatar: avatarRef.current.value, // valor del input usando ref
    });
  }
  return (
    <form className="form" id="form-update-avatar" onSubmit={handleSubmit}>
      <h3 className="form__title">Cambiar foto de perfil</h3>
      <input
        ref={avatarRef}
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
