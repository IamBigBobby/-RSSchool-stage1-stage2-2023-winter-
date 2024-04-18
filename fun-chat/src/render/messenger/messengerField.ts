import client from "../../constants/currentClient";
import addElementsToParent from "../../utils/addElementsToParent";

export default function renderMessengerField(page: string): void {
  const currentPage = document.querySelector(`.${page}`) as HTMLElement;

  client.getAllAuthenticatedUsers();
  const headerData = [
    {
      tagName: "div",
      classNames: ["messenger__header"],
    },
  ];

  addElementsToParent(currentPage, headerData);

  const headerCreated = document.querySelector(
    ".messenger__header",
  ) as HTMLElement;

  const headerDataContent = [
    {
      tagName: "div",
      classNames: ["header__user"],
      textContent: "user",
    },
    {
      tagName: "div",
      classNames: ["header__app-name"],
      textContent: "Fun chat",
    },
    {
      tagName: "button",
      classNames: ["log-out-button"],
      textContent: "log out",
    },
    {
      tagName: "button",
      classNames: ["about-button"],
      textContent: "about",
    },
  ];

  addElementsToParent(headerCreated, headerDataContent);

  const messengerContainer = [
    {
      tagName: "div",
      classNames: ["messenger__container"],
    },
  ];

  addElementsToParent(currentPage, messengerContainer);

  const messengerContainerCreated = document.querySelector(
    ".messenger__container",
  ) as HTMLElement;

  const messengegContainerData = [
    {
      tagName: "div",
      classNames: ["messenger__users"],
    },
    {
      tagName: "div",
      classNames: ["messenger__chat"],
    },
  ];

  addElementsToParent(messengerContainerCreated, messengegContainerData);

  const app = document.querySelector(".app") as HTMLElement;

  const footerData = [
    {
      tagName: "div",
      classNames: ["footer"],
    },
  ];
  addElementsToParent(app, footerData);

  const footerCreated = document.querySelector(".footer") as HTMLElement;

  const footerContent = [
    {
      tagName: "div",
      classNames: ["footer__logo"],
      textContent: "RSSchool",
    },
    {
      tagName: "div",
      classNames: ["footer__creater"],
      textContent: "Denis Svetleishii",
    },
    {
      tagName: "div",
      classNames: ["footer_year"],
      textContent: "2024",
    },
  ];

  addElementsToParent(footerCreated, footerContent);
}
