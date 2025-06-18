import iconClose from "../../../images/icon_close.svg";

export default function Popup(props) {
  const { onClose, title, children } = props;
  return (
    <div className="popup">
      <div className={`popup__container ${!title ? "popup__image-name" : ""} `}>
        <button className="popup__close" type="button" id="popup-image-close" />
        <img
          className="popup__close-image"
          src={iconClose}
          alt="X icon to close the form."
          onClick={onClose}
        />
        {title && <h3 className="form__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}
