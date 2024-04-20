import message from "../../constants/message";
import { ResevedMessage } from "../../interfaces/interfaces";
import addElementsToParent from "../../utils/addElementsToParent";

export default function renderResponseMessage(resevedMessage: ResevedMessage) {
  console.log(resevedMessage);
  const messengerChatWindow = document.querySelector(
    ".messenger__chat-window",
  ) as HTMLElement;
  const userGetter = sessionStorage.getItem("userData_iambigbobby") as string;
  const userGetterParsed = JSON.parse(userGetter);
  if (
    resevedMessage.to === userGetterParsed.login &&
    message.to === resevedMessage.from
  ) {
    const resevedMessageData = [
      {
        tagName: "div",
        classNames: ["messenger__message", "messenger__response-message"],
        textContent: resevedMessage.text,
      },
    ];
    addElementsToParent(messengerChatWindow, resevedMessageData);
  }
}
