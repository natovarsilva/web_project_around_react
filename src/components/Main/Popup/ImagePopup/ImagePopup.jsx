export default function ImagePopup({ card, onClose }) {
  const isOpen = !!card;

  return (
    <div className={`popup popup_type_image ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_image">
        <button
          className="popup__close-button"
          type="button"
          aria-label="Close"
          onClick={onClose}
        ></button>

        {card && (
          <>
            <img className="popup__image" src={card.link} alt={card.name} />
            <p className="popup__caption">{card.name}</p>
          </>
        )}
      </div>
    </div>
  );
}
