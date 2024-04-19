export default function findUser() {
  const inputFindUser = document.querySelector(
    ".input-find-users",
  ) as HTMLInputElement;
  inputFindUser.addEventListener("input", () => {
    const allUser = document.querySelectorAll(".messenger__users-list-element");
    allUser.forEach((userItem) => {
      userItem.classList.remove("messenger__users-list-element_hidden");
      if (!userItem.textContent?.startsWith(inputFindUser.value)) {
        userItem.classList.add("messenger__users-list-element_hidden");
      }
    });
  });
}
