//import TrashImage from "../images/Trash.svg";

export default function Cards({ name, link, counter = 0, onCardClick }) {
  const handleZoomImageClick = () => {
    onCardClick();
  };

  return (
    <div className="element" onClick={handleZoomImageClick}>
      <img src={link} alt={name} className="element__image" />
      <button className="element__trash"></button>
      <div className="element__info">
        <h3 className="element__description">{name}</h3>
        <button className="element__like"></button>
        <p className="element__like-counter">{counter}</p>
      </div>
    </div>
  );
}
