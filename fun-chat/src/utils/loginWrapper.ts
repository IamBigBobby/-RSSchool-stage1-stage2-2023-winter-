import addElementsToParent from "./addElementsToParent";

export default function renderWrapper(
  page: string,
  callback: (page: string) => void,
) {
  const { body } = document;

  const elementsData = [
    {
      tagName: "div",
      classNames: [page],
    },
  ];

  addElementsToParent(body, elementsData);

  callback(page);
}
