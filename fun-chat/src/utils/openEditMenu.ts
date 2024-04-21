export default function openEditMenu() {
  const editMenu = document.querySelector(".edit-menu") as HTMLElement;
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    editMenu.style.display = "block";
    editMenu.style.left = `${event.clientX}px`;
    editMenu.style.top = `${event.clientY}px`;
  });
}
