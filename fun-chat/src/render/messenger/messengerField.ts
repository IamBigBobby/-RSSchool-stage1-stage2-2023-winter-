import client from "../../constants/currentClient";
import addElementsToParent from "../../utils/addElementsToParent";

export default function renderMessengerField(page: string): void {
  const currentPage = document.querySelector(`.${page}`) as HTMLElement;

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

  const user = sessionStorage.getItem("userData_iambigbobby") as string;
  const userParse = JSON.parse(user);

  const headerDataContent = [
    {
      tagName: "div",
      classNames: ["header__user"],
      textContent: `user: ${userParse.login}`,
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

  const editMenuData = [
    {
      tagName: "div",
      classNames: ["edit-menu"],
    },
  ];

  addElementsToParent(currentPage, editMenuData);

  const editMenu = document.querySelector(".edit-menu") as HTMLElement;

  const editMenuDataContent = [
    {
      tagName: "div",
      classNames: ["edit-menu__edit"],
      textContent: "edit",
    },
    {
      tagName: "div",
      classNames: ["edit-menu__delete"],
      textContent: "delete",
    },
  ];

  addElementsToParent(editMenu, editMenuDataContent);

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

  const messengerChatContainer = document.querySelector(
    ".messenger__chat",
  ) as HTMLElement;

  const messengerChatContainerData = [
    {
      tagName: "div",
      classNames: ["messenger__chat-window"],
    },
    {
      tagName: "div",
      classNames: ["messenger__container-input"],
    },
  ];

  addElementsToParent(messengerChatContainer, messengerChatContainerData);

  const containerInput = document.querySelector(
    ".messenger__container-input",
  ) as HTMLElement;

  const containerInputData = [
    {
      tagName: "input",
      classNames: ["messenger__chat-input", "messenger__chat-input_disabled"],
      attributes: {
        type: "text",
        placeholder: "send message",
      },
    },
    {
      tagName: "button",
      classNames: [
        "messenger__chat-send-button",
        "messenger__chat-send-button_disabled",
      ],
      textContent: "send",
    },
    {
      tagName: "button",
      classNames: ["messenger__chat-edit-button"],
      textContent: "edit",
    },
    {
      tagName: "button",
      classNames: ["messenger__chat-cancel-edit-button"],
      textContent: "cancel edit",
    },
  ];

  addElementsToParent(containerInput, containerInputData);

  const messengerWindow = document.querySelector(
    ".messenger__chat-window",
  ) as HTMLElement;

  const messengerWindowData = [
    {
      tagName: "div",
      classNames: ["messenger__window-messenger"],
      textContent: "select user",
    },
  ];

  addElementsToParent(messengerWindow, messengerWindowData);

  const usersField = document.querySelector(".messenger__users") as HTMLElement;

  const usersContainerData = [
    {
      tagName: "input",
      classNames: ["input-find-users"],
      attributes: {
        type: "text",
        placeholder: "enter user name",
      },
    },
    {
      tagName: "ul",
      classNames: ["messenger__users-list"],
    },
  ];

  addElementsToParent(usersField, usersContainerData);

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

  client.getAllAuthenticatedUsers();
  client.getAllUnauthenticatedUsers();
}
