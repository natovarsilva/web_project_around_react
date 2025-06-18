import iconHeartActive from "../../../../images/icon_heart_active.svg";
import iconHeartInactive from "../../../../images/icon_heart.svg";
import iconTrash from "../../../../images/icon_trash.svg";
import ImageExpansion from "../../Popup/ImageExpansion/ImageExpansion";

export default function Card(props) {
  const { name, link, isLiked } = props.card;
  const { handleOpenPopup } = props;

  const imageComponent = {
    title: "Expand image",
    children: <ImageExpansion card={{ name: name, link: link }} />,
  };

  return (
    <div className="elements__card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => handleOpenPopup(imageComponent)}
      />

      <img className="card__trash" src={iconTrash} alt="Trash icon" />

      <div className="card__content">
        <p className="card__content-text">{name}</p>
        <button
          className="card__content-like"
          id="like-inactive"
          src={iconHeartInactive}
          // onClick={() => handleLikeCard(props.card)}
        ></button>
      </div>
    </div>
  );
}
