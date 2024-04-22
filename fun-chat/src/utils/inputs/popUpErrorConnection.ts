import addElementsToParent from "../addElementsToParent";

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
}
