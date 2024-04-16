import addElementsToParent from "../../utils/addElementsToParent";

export default function renderMessengerField(page: string): void {
  const currentPage = document.querySelector(`.${page}`) as HTMLElement;

  const elementsData = [
    {
      tagName: "button",
      classNames: ["log-out-button"],
      textContent: "logout",
    },
  ];

  addElementsToParent(currentPage, elementsData);
}
