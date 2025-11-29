import iconHeartActive from "../../../../images/icon_heart_active.svg";
import iconHeartInactive from "../../../../images/icon_heart.svg";
import iconTrash from "../../../../images/icon_trash.svg";
import ImageExpansion from "../../Popup/ImageExpansion/ImageExpansion";
import { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const { handleOpenPopup, onCardLike, onCardDelete } = props;

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_is-active" : ""
  }`;

  function handleLikeClick() {
    onCardLike(props.card);
  }

  function handleDeleteClick() {
    onCardDelete(props.card);
  }

  const imageComponent = {
    title: "Expand image",
    children: <ImageExpansion card={{ name: name, link: link }} />,
  };

  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="elements__card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => handleOpenPopup(imageComponent)}
      />

      <img
        className="card__trash"
        src={iconTrash}
        alt="Trash icon"
        onClick={handleDeleteClick}
      />

      <div className="card__content">
        <p className="card__content-text">{name}</p>
        <button
          className={cardLikeButtonClassName}
          id="like-inactive"
          src={iconHeartInactive}
          onClick={handleLikeClick}
        ></button>
      </div>
    </div>
  );
}
