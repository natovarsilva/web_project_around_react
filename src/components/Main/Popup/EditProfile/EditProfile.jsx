// export default function EditProfile() {
//   return (
//     <form className="form" id="form-profile">
//       <h3 className="form__title">Editar perfil</h3>
//       <input
//         className="form__text-input form__text-input_name"
//         type="text"
//         placeholder="Nombre"
//         id="input-profile-name"
//         name="input-profile-name"
//         required
//         minLength="2"
//         maxLength="40"
//       />
//       <span id="input-profile-name-error" className="form__error-msg"></span>
//       <input
//         className="form__text-input form__text-input_description"
//         type="text"
//         placeholder="Acerca de mi"
//         id="input-profile-description"
//         name="input-profile-description"
//         required
//         minLength="2"
//         maxLength="200"
//       />
//       <span
//         id="input-profile-description-error"
//         className="form__error-msg"
//       ></span>
//       <button className="form__submit form__submit_inactive" type="submit">
//         Guardar
//       </button>
//     </form>
//   );
// }

import { useState, useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function EditProfile() {
  const userContext = useContext(CurrentUserContext);
  const { currentUser, handleUpdateUser } = userContext;

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // evita recarga

    // Enviamos al contexto los datos en el formato que espera la API
    handleUpdateUser({ name, about: description });
  };

  return (
    <form className="form" id="form-profile" onSubmit={handleSubmit}>
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
        value={name || ""} // valor controlado
        onChange={handleNameChange} // onChange controlado
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
        value={description || ""} // valor controlado
        onChange={handleDescriptionChange} // onChange controlado
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
