const page = document.querySelector(".page");

const cardContainer = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;
const card = cardTemplate.querySelector(".card").cloneNode(true);
const form = document.forms["new-place"];

const newCardButton = document.querySelector(".profile__add-button");
const popupNew = document.querySelector(".popup_type_new-card");
const popupClose = popupNew.querySelector(".popup__close");

function createInitialCard(array) {
  array.forEach((element) => {
    /* переменные */
    const newCard = card.cloneNode(true);
    const cardImage = newCard.querySelector(".card__image");
    const cardTitle = newCard.querySelector(".card__title");
    const buttonDelete = newCard.querySelector(".card__delete-button");
    const buttonLike = newCard.querySelector(".card__like-button");

    /* генерация карточек */

    cardTitle.textContent = element.name;
    cardImage.src = element.link;
    cardContainer.append(newCard);

    /* кнопка удаления */

    page.addEventListener("click", (evt) => {
      if (evt.target === buttonDelete) {
        newCard.remove();
      }

      if (evt.target === newCardButton) {
        popupNew.classList.add("popup_is-opened");
      }

      /* кнопка лайка */

      if (evt.target === buttonLike) {
        buttonLike.classList.toggle("card__like-button_is-active");
      }

      /* кнопка для закрытия окна создания поста */

      if (evt.target === popupClose) {
        closeWindow();
      }
    });
  });
}

createInitialCard(initialCards);

function closeWindow() {
  popupNew.classList.remove("popup_is-opened");
}

/* функция добавления поста */
form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const newCard = card.cloneNode(true);
  const cardImage = newCard.querySelector(".card__image");
  const cardTitle = newCard.querySelector(".card__title");

  cardImage.src = form.link.value;
  cardTitle.textContent = form.placeName.value;

  cardContainer.prepend(newCard);

  closeWindow();
  form.reset();
});
