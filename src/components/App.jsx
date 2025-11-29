import "../index.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/footer";

// import iconHeartActive from "./images/icon_heart_active.svg";
// import iconHeart from "./images/icon_heart.svg";
// import iconTrash from "./images/icon_trash.svg";

import { useEffect, useState } from "react";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);
  // const [isLiked, setIsLiked] = useState(false);
  // return ();

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleOpenPopup = (popupConfig) => {
    setPopup(popupConfig);
  };

  const handleClosePopup = () => {
    setPopup(null);
  };

  const handleUpdateUser = (data) => {
    (async () => {
      await api
        .setUserInfo(data)
        .then((newData) => {
          setCurrentUser(newData); // actualiza el usuario en contexto
          handleClosePopup(); // cierra el popup al terminar
        })
        .catch((error) => console.error(error));
    })();
  };

  const handleUpdateAvatar = (data) => {
    (async () => {
      await api
        .setUserAvatar(data)
        .then((newData) => {
          setCurrentUser(newData); // actualiza el usuario con el avatar nuevo
          handleClosePopup(); // cierra el popup al terminar
        })
        .catch((error) => console.error(error));
    })();
  };

  const handleCardLike = async (card) => {
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
  };

  const handleCardDelete = async (card) => {
    await api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== card._id)
        );
      })
      .catch((error) => console.error(error));
  };

  const handleAddPlaceSubmit = (data) => {
    const { name, link } = data;
    (async () => {
      await api
        .createCard(name, link)
        .then((newCard) => {
          setCards((state) => [newCard, ...state]); // nueva tarjeta al inicio
          handleClosePopup(); // cierra el popup
        })
        .catch((error) => console.error(error));
    })();
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
    >
      <div className="page__content">
        <Header />
        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
