import addElementsToParent from "../addElementsToParent";

function animationConnecting() {
  const textConnection = document.querySelector(
    ".popup-connecting-container",
  ) as HTMLElement;
  let countOfDot = 0;
  const maxCoutDot = 3;

  function addDot() {
    if (countOfDot < maxCoutDot) {
      textConnection.textContent += ".";
      countOfDot += 1;
    } else {
      textConnection.textContent = "Lost connection. Try to connect";
      countOfDot = 0;
    }
  }

  setInterval(addDot, 1000);
}

export default function showConnectingPopUp() {
  const { body } = document;

  const wrapperDataConnecting = [
    {
      tagName: "div",
      classNames: ["wrapper-popup-connecting"],
    },
  ];

  addElementsToParent(body, [wrapperDataConnecting[0]]);

  const wrapperPopupConnecting = document.querySelector(
    ".wrapper-popup-connecting",
  ) as HTMLElement;

  const popupContainer = [
    {
      tagName: "div",
      classNames: ["popup-connecting-container"],
      textContent: "Lost connection. Try to connect",
    },
  ];

  addElementsToParent(wrapperPopupConnecting, popupContainer);

  animationConnecting();
}
