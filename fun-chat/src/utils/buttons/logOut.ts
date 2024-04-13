import client from "../../constants/currentClient";
import currentUser from "../../constants/currentUser";

export default function logOutButtonHandler(
  logInButton: HTMLButtonElement,
): void {
  logInButton.addEventListener("click", () => {
    client.logout(currentUser.login, currentUser.password);
  });
}
