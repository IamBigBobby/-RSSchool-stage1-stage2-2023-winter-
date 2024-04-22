import addElementsToParent from "../../utils/addElementsToParent";

export default function renderAbout(page: string) {
  const currentPage = document.querySelector(`.${page}`) as HTMLElement;

  const headerData = [
    {
      tagName: "div",
      classNames: ["about__message"],
      textContent:
        "This application is developed by Denis Svetleishii RS-2023Q4",
    },
    {
      tagName: "button",
      classNames: ["back-about-button"],
      textContent: "back",
    },
  ];

  addElementsToParent(currentPage, headerData);
}
