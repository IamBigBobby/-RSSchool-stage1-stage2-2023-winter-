import getUser from "../inputs/getUser";

export default function logInButtonHandler(
  logInButton: HTMLButtonElement,
): void {
  document.addEventListener("click", (event) => {
    const currentElement = event.target as HTMLElement;
    if (currentElement.classList.contains("log-in-button")) {
      getUser();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (
      !logInButton.classList.contains("log-in-button_disabled") &&
      event.key === "Enter"
    ) {
      event.preventDefault();
      getUser();
    }
  });
}
