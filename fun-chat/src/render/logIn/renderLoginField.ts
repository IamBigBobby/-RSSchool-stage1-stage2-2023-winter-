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
    {
      tagName: "button",
      classNames: ["about-button"],
      textContent: "about",
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

  const explainData = [
    {
      tagName: "a",
      classNames: ["copy-link"],
      textContent: "clone app",
      attributes: {
        href: "https://rolling-scopes-school.github.io/iambigbobby-JSFE2023Q4/fun-chat",
        target: "_blank",
      },
    },
  ];

  addElementsToParent(currentPage, explainData);
}
