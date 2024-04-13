import { ElementData } from "../interfaces/interfaces";

export default function addElementsToParent(
  parent: HTMLElement,
  elementsData: ElementData[],
): void {
  elementsData.forEach((elementData) => {
    const { tagName, classNames, textContent, attributes } = elementData;
    const element = document.createElement(tagName);
    if (classNames) {
      classNames.forEach((className) => {
        element.classList.add(className);
      });
    }
    if (textContent) {
      element.textContent = textContent;
    }
    if (attributes) {
      Object.keys(attributes).forEach((attr) => {
        element.setAttribute(attr, attributes[attr]);
      });
    }
    parent.appendChild(element);
  });
}
