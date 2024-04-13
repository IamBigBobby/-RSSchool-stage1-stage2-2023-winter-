import addElementsToParent from "../utils/addElementsToParent";
import logInButtonHandler from "../utils/buttons/logIn";
import logOutButtonHandler from "../utils/buttons/logOut";

export default function renderTestButtons(): void {
  const { body } = document;

  const buttonsData = [
    { tagName: "input", classNames: ["input-name"] },
    { tagName: "button", classNames: ["log-in-button"], textContent: "login" },
    {
      tagName: "button",
      classNames: ["log-out-button"],
      textContent: "logout",
    },
  ];

  addElementsToParent(body, buttonsData);

  const logInButton = document.querySelector(
    ".log-in-button",
  ) as HTMLButtonElement;

  logInButtonHandler(logInButton);

  const logOutButton = document.querySelector(
    ".log-out-button",
  ) as HTMLButtonElement;

  logOutButtonHandler(logOutButton);
}
