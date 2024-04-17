import getUser from "../inputs/getUser";

export default function logInButtonHandler(
  logInButton: HTMLButtonElement,
): void {
  console.log(logInButton);
  logInButton.addEventListener("click", getUser);
  document.addEventListener("keydown", (event) => {
    console.log("слушатель на кнопку повешан");
    const loginButton = document.querySelector(
      ".log-in-button",
    ) as HTMLButtonElement;
    if (
      !loginButton.classList.contains("log-in-button_disabled") &&
      event.key === "Enter"
    ) {
      event.preventDefault();
      getUser();
    }
  });
}
