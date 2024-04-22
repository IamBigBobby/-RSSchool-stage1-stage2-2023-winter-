import addElementsToParent from "./addElementsToParent";

export default function addEmptyHistory() {
  const windowChat = document.querySelector(
    ".messenger__chat-window",
  ) as HTMLElement;

  const messageData = [
    {
      tagName: "div",
      classNames: ["messenger__empty-history"],
      textContent: "start communication",
    },
  ];

  addElementsToParent(windowChat, messageData);
}
