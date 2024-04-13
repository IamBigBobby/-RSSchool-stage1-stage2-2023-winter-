import getUser from "../inputs/getUser";

export default function logInButtonHandler(
  logInButton: HTMLButtonElement,
): void {
  logInButton.addEventListener("click", getUser);
}
