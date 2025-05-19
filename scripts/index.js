// @todo: Темплейт карточки
const cardContainer = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;
const card = cardTemplate.querySelector(".card").cloneNode(true);

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
    console.log(newCard);

    /* кнопка удаления */

    buttonDelete.addEventListener("click", () => {
      console.log("click");
      newCard.remove();
    });

    /* кнопка лайка */

    buttonLike.addEventListener("click", () => {
      console.log("click");
      buttonLike.classList.toggle('card__like-button_is-active')
    });
  });
}

createInitialCard(initialCards);

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
