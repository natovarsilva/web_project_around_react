import editAvatar from "../../images/edit_avatar_icon.svg";
import profileImage from "../../images/profile_image.svg";
import profileEditButton from "../../images/profile_edit_button.svg";
import iconAdd from "../../images/icon_add.svg";

import Popup from "./Popup/Popup";
import NewCard from "./Popup/NewCard/NewCard";
import EditProfile from "./Popup/EditProfile/EditProfile";
import EditAvatar from "./Popup/EditAvatar/EditAvatar";

import Card from "./components/Card/Card";

import { useContext } from "react";
import api from "../../utils/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Main({
  onOpenPopup,
  onClosePopup,
  popup,
  cards,
  onCardLike,
  onCardDelete,
  onAddPlaceSubmit,
}) {
  // const [cards, setCards] = useState([]);

  const newCardPopup = {
    title: "New card",
    children: <NewCard onAddPlaceSubmit={onAddPlaceSubmit} />,
  };
  const editProfilePopup = { title: "Edit profile", children: <EditProfile /> };
  const editAvatarPopup = { title: "Edit avatar", children: <EditAvatar /> };

  const { currentUser } = useContext(CurrentUserContext);

  function handleOpenPopup(popupConfig) {
    onOpenPopup(popupConfig);
  }

  function handleClosePopup() {
    onClosePopup();
  }

  //BORRADO 15.5
  // async function handleCardLike(card) {
  //   // Verifica una vez más si a esta tarjeta ya le has dado like
  //   const isLiked = card.isLiked;

  //   // Envía una solicitud a la API y obtiene los datos actualizados de la tarjeta
  //   await api
  //     .changeLikeCardStatus(card._id, !isLiked)
  //     .then((newCard) => {
  //       setCards((state) =>
  //         state.map((currentCard) =>
  //           currentCard._id === card._id ? newCard : currentCard
  //         )
  //       );
  //     })
  //     .catch((error) => console.error(error));
  // }

  // async function handleCardDelete(card) {
  //   await api
  //     .deleteCard(card._id)
  //     .then(() => {
  //       setCards((state) =>
  //         state.filter((currentCard) => currentCard._id !== card._id)
  //       );
  //     })
  //     .catch((error) => console.error(error));
  // }

  async function handleCardLike(card) {
    const isLiked = card.isLiked;
    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

  async function handleCardDelete(card) {
    await api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== card._id)
        );
      })
      .catch((error) => console.error(error));
  }

  //BORRAR rn 15.6
  // useEffect(() => {
  //   api
  //     .getInitialCards()
  //     .then((cardsData) => {
  //       setCards(cardsData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // const Main = () => {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-wrapper">
          <img
            className="profile__image"
            //src={profileImage}
            src={currentUser.avatar}
            alt="Jacques Cousteau image"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          />
          <img
            className="profile__edit-icon"
            src={editAvatar}
            alt="Edit avatar"
          />{" "}
        </div>
        <div className="profile__info">
          <h1 className="profile__info-name">{currentUser.name}</h1>
          <a href="#">
            <img
              className="profile__info profile__info_edit-button"
              src={profileEditButton}
              alt="Pencil icon, referencing you can edit"
              onClick={() => handleOpenPopup(editProfilePopup)}
            />
          </a>
          <p className="profile__info profile__info_description">
            {currentUser.about}
          </p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          <img src={iconAdd} alt="Icon +" />
        </button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            handleOpenPopup={handleOpenPopup}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
  // };
}

// export default Main;
