import addElementsToParent from "../../utils/addElementsToParent";

export default function renderLogInField(page: string): void {
  const currentPage = document.querySelector(`.${page}`) as HTMLElement;

  const elementsData = [
    {
      tagName: "div",
      classNames: ["input-first-name-wrapper"],
    },
    {
      tagName: "div",
      classNames: ["input-password-wrapper"],
    },
    {
      tagName: "button",
      classNames: ["log-in-button", "log-in-button_disabled"],
      textContent: "login",
    },
  ];

  addElementsToParent(currentPage, elementsData);

  const inputNameWrapper = document.querySelector(
    ".input-first-name-wrapper",
  ) as HTMLElement;
  const inputPasswordWrapper = document.querySelector(
    ".input-password-wrapper",
  ) as HTMLElement;

  const inputsData = [
    {
      tagName: "input",
      classNames: ["input-login"],
      attributes: {
        type: "text",
        placeholder: "login",
      },
    },
    {
      tagName: "input",
      classNames: ["input-password"],
      attributes: {
        type: "text",
        placeholder: "password",
      },
    },
  ];

  addElementsToParent(inputNameWrapper, [inputsData[0]]);
  addElementsToParent(inputPasswordWrapper, [inputsData[1]]);
}
