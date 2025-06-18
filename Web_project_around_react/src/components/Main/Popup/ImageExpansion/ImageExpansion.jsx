export default function ImageExpansion(props) {
  const { card } = props;
  return (
    <div className="popup__container">
      <img className="popup__image" src={card.link} alt={card.name} />
      <h3 className="popup__image-name">{card.name}</h3>
    </div>
  );
}
