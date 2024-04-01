export default function showPopUpWinner(): void {
  const { body } = document;

  const popUp = document.createElement("div");
  popUp.classList.add("pop-up");
  popUp.textContent = "Тест";

  body.appendChild(popUp);

  const popUpCreated = document.querySelector(".pop-up");
  const popUpMessage = document.createElement("div");
  popUpMessage.classList.add("pop-up-message");
  popUpCreated?.appendChild(popUpMessage);

  setTimeout(() => {
    popUp.remove();
  }, 3000);
}
