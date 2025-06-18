import editAvatar from "../../images/edit_avatar_icon.svg";
import profileImage from "../../images/profile_image.svg";
import profileEditButton from "../../images/profile_edit_button.svg";
import iconAdd from "../../images/icon_add.svg";

import Popup from "./Popup/Popup";
import NewCard from "./Popup/NewCard/NewCard";
import EditProfile from "./Popup/EditProfile/EditProfile";
import EditAvatar from "./Popup/EditAvatar/EditAvatar";

import Card from "./components/Card/Card";

import { useState } from "react";
import ImageExpansion from "./Popup/ImageExpansion/ImageExpansion";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "New card", children: <NewCard /> };
  const editProfilePopup = { title: "Edit profile", children: <EditProfile /> };
  const editAvatarPopup = { title: "Edit avatar", children: <EditAvatar /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  // const Main = () => {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-wrapper">
          <img
            className="profile__image"
            src={profileImage}
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
          <h1 className="profile__info-name">Jacques Cousteau</h1>
          <a href="#">
            <img
              className="profile__info profile__info_edit-button"
              src={profileEditButton}
              alt="Pencil icon, referencing you can edit"
              onClick={() => handleOpenPopup(editProfilePopup)}
            />
          </a>
          <p className="profile__info profile__info_description">Explorador</p>
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
          <Card key={card._id} card={card} handleOpenPopup={handleOpenPopup} />
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
