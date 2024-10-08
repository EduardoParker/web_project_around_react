import React from "react";
import "../blocks/profile.css";
import buttonProfileUpdate from "../images/Edit_Button.svg";
import addButtonImage from "../images/Add_Button.svg";
//import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
//import api from "../utils/Api";
import "../blocks/page.css";
import Cards from "./Card";
import Header from "./Header";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
//import EditProfilePopUp from "./EditProfilePopup";

export default function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  isOpenProfile,
  isOpenAddPlace,
  isOpenAvatar,
  closeAllPopups,
  selectedCard,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  //const [cards, setCards] = React.useState([]);

  /*React.useEffect(() => {
    api.getInitialCards().then((cards) => {
      setCards(cards);
    });
  }, []);*/

  const handleEditProfileClick = () => {
    onEditProfileClick();
  };

  const handleAddPlaceClick = () => {
    onAddPlaceClick();
  };

  const handleEditAvatarClick = () => {
    onEditAvatarClick();
  };

  const currentUser = React.useContext(CurrentUserContext);

  /*function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (isLiked) {
      api.deleteCardLike(card._id, isLiked).then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      });
    } else {
      api.addCardLike(card._id, isLiked).then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      });
    }
  }

  function handleCardDelete(cardId) {
    api.deleteCard(cardId).then(() => {
      const filterCards = cards.filter((item) => item._id !== cardId);
      setCards(filterCards);
    });
  }*/

  return (
    <>
      {/*<PopupWithForm
        name="form_image"
        title="Nuevo Lugar"
        isOpen={isOpenAddPlace}
        onClose={closeAllPopups}
      >
        <fieldset className="form__input">
          <input
            type="text"
            className="form__item form__item_title"
            id="title"
            name="name"
            placeholder="Titulo"
            required
            //minlength="2"
            //maxlength="30"
          />
          <span className="form__error name-error"></span>
          <input
            type="url"
            className="form__item form__item_link"
            id="link"
            name="link"
            placeholder="Enlace a la imagen"
            required
          />
          <span className="form__error link-error"></span>
        </fieldset>
        <button
          className="form__button form__button_submit form__button_submit_image"
          type="submit"
          id="create_image"
        >
          Crear
        </button>
      </PopupWithForm>*/}

      <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups} />
      {
        //empieza apartado de profile main
      }
      <Header />
      <section className="profile">
        <div className="profile__avatar" onClick={handleEditAvatarClick}>
          <img
            src={currentUser.avatar}
            alt="imagen de perfil"
            className="profile__image-avatar"
          />
          <div className="profile__avatar-container">
            <img
              src={buttonProfileUpdate}
              alt="boton para editar avatar"
              className="profile__update-button"
            />
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__info-name">
            <h1 className="profile__name">{currentUser.name}</h1>
            <img
              src={buttonProfileUpdate}
              onClick={handleEditProfileClick}
              alt="boton para editar perfil"
              className="profile__edit-button button"
            />
          </div>
          <h2 className="profile__info-aboutme">{currentUser.about}</h2>
        </div>
        <img
          src={addButtonImage}
          onClick={handleAddPlaceClick}
          alt="boton para añadir contenido"
          className="profile__add-button button"
        />
      </section>
      <section className="elements">
        {cards.map((card) => {
          return (
            <Cards
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              selectedCard={selectedCard}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          );
        })}
      </section>
    </>
  );
}
