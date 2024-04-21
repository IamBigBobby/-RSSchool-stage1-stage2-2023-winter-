export default function closeEditMenu() {
  document.addEventListener("click", () => {
    const editMenu = document.querySelector(".edit-menu") as HTMLElement;
    editMenu.style.display = "none";
  });
}
