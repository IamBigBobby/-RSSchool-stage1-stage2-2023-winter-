export default function openEditMenu() {
  const editMenu = document.querySelector(".edit-menu") as HTMLElement;
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    const currentMessage = event.target as HTMLElement;
    const closestSendedMessage = currentMessage.closest(
      ".messenger__sended-message",
    ) as HTMLElement;

    if (closestSendedMessage) {
      editMenu.style.display = "block";
      editMenu.style.left = `${event.clientX}px`;
      editMenu.style.top = `${event.clientY}px`;
    }
  });
}
