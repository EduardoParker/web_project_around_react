import React from "react";
import Header from "./Header.js";
import Cards from "./Card.js";
import api from "../utils/Api.js";
import "../blocks/page.css";
import Main from "./Main.js";
import Footer from "./Footer.js";
//import PopupWithForm from "./PopupWithForm.js";

function App() {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards().then((cards) => {
      setCards(cards);
    });
  }, []);

  //handles para los popups

  //variable de estado y handle popup para perfile

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);

  const onEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
    //console.log(isEditProfilePopupOpen);
  };

  //variable de estado y popup para addplace
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const onAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
    //const isAddPlacePopupOpen
  };

  //variable de estado y popup para avatar
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const onEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const onCardClick = () => {
    console.log("click");
  };

  //para cerrar
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  };

  return (
    <>
      <div className="page">
        <Header />
        <Main
          isOpenProfile={isEditProfilePopupOpen}
          onEditProfileClick={onEditProfileClick}
          isOpenAddPlace={isAddPlacePopupOpen}
          onAddPlaceClick={onAddPlaceClick}
          isOpenAvatar={isEditAvatarPopupOpen}
          onEditAvatarClick={onEditAvatarClick}
          closeAllPopups={closeAllPopups}
        />
        <section className="elements">
          {cards.map((item, _id) => {
            return (
              <Cards
                name={item.name}
                link={item.link}
                key={item._id}
                onCardClick={onCardClick}
              />
            );
          })}
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
