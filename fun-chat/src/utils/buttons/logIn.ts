import checkErrorStatus from "../inputs/checkErrorStatus";
import getUser from "../inputs/getUser";

export default function logInButtonHandler(): void {
  document.addEventListener("click", (event) => {
    const currentElement = event.target as HTMLElement;
    if (currentElement.classList.contains("log-in-button")) {
      console.log("log-in");
      getUser();
      checkErrorStatus();
    }
  });
  document.addEventListener("keydown", (event) => {
    const logInButton = document.querySelector(
      ".log-in-button",
    ) as HTMLButtonElement;
    if (logInButton) {
      if (
        !logInButton.classList.contains("log-in-button_disabled") &&
        event.key === "Enter"
      ) {
        console.log("log-in");
        event.preventDefault();
        getUser();
      }
    }
  });
}
