import addElementsToParent from "./addElementsToParent";

function closePopUp() {
  const wrapperPopup = document.querySelector(".wrapper-popup");

  if (wrapperPopup) {
    wrapperPopup.parentNode?.removeChild(wrapperPopup);
  }
}

export default function showPopUp(message: string): void {
  closePopUp();

  const { body } = document;

  const wrapperData = [
    {
      tagName: "div",
      classNames: ["wrapper-popup"],
    },
  ];
  addElementsToParent(body, [wrapperData[0]]);

  const wrapperDataCreated = document.querySelector(
    ".wrapper-popup",
  ) as HTMLElement;

  const popupContainerData = [
    {
      tagName: "div",
      classNames: ["popup-container"],
    },
  ];
  addElementsToParent(wrapperDataCreated, [popupContainerData[0]]);

  const popupContainerCreated = document.querySelector(
    ".popup-container",
  ) as HTMLElement;

  const popupInfoData = [
    {
      tagName: "div",
      classNames: ["popup-info"],
      textContent: message,
    },
    {
      tagName: "button",
      classNames: ["popup-button"],
      textContent: "Ok",
    },
  ];
  addElementsToParent(popupContainerCreated, popupInfoData);

  const popUpButton = document.querySelector(".popup-button");
  popUpButton?.addEventListener("click", closePopUp);
}
