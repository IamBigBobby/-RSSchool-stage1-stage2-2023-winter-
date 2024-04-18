import addElementsToParent from "./addElementsToParent";

export default function renderWrapper(
  page: string,
  callback: (page: string) => void,
) {
  const app = document.querySelector(".app") as HTMLElement;

  const elementsData = [
    {
      tagName: "div",
      classNames: [page],
    },
  ];

  addElementsToParent(app, elementsData);

  callback(page);
}
