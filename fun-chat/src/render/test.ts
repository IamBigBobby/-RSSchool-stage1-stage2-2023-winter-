import addElementsToParent from "../utils/addElementsToParent";
import logInButtonHandler from "../utils/buttons/logIn";
import logOutButtonHandler from "../utils/buttons/logOut";

export default function renderTestButtons(): void {
  const { body } = document;

  const elementsData = [
    {
      tagName: "input",
      classNames: ["input-first-name"],
      attributes: {
        type: "text",
        placeholder: "login",
      },
    },
    {
      tagName: "input",
      classNames: ["input-second-name"],
      attributes: {
        type: "text",
        placeholder: "password",
      },
    },
    { tagName: "button", classNames: ["log-in-button"], textContent: "login" },
    {
      tagName: "button",
      classNames: ["log-out-button"],
      textContent: "logout",
    },
  ];

  addElementsToParent(body, elementsData);

  const logInButton = document.querySelector(
    ".log-in-button",
  ) as HTMLButtonElement;

  logInButtonHandler(logInButton);

  const logOutButton = document.querySelector(
    ".log-out-button",
  ) as HTMLButtonElement;

  logOutButtonHandler(logOutButton);
}
