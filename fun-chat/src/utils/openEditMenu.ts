import messageId from "../constants/messageId";

export default function openEditMenu() {
  const editMenu = document.querySelector(".edit-menu") as HTMLElement;
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    const currentMessage = event.target as HTMLElement;
    const closestSendedMessage = currentMessage.closest(
      ".messenger__sended-message",
    ) as HTMLElement;

    if (closestSendedMessage) {
      const message = closestSendedMessage.querySelector(
        ".messenger__text",
      ) as HTMLElement;
      const textMessage = message.textContent as string;
      const idMessage = closestSendedMessage.getAttribute("id") as string;
      editMenu.style.display = "block";
      editMenu.style.left = `${event.clientX}px`;
      editMenu.style.top = `${event.clientY}px`;
      messageId.id = idMessage;
      messageId.text = textMessage;
      console.log(messageId.id);
    }
  });
}
