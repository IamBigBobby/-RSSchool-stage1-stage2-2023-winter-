import client from "../../constants/currentClient";
import currentUser from "../../constants/currentUser";

export default function getUser(): void {
  const loginInput = document.querySelector(".input-login") as HTMLInputElement;
  const passwordInput = document.querySelector(
    ".input-password",
  ) as HTMLInputElement;
  const logInButton = document.querySelector(
    ".log-in-button",
  ) as HTMLButtonElement;

  const login = loginInput.value;
  const password = passwordInput.value;

  currentUser.login = login;
  currentUser.password = password;

  client.addUser(login, password);

  loginInput.value = "";
  passwordInput.value = "";

  logInButton.classList.add("log-in-button_disabled");

  window.location.pathname = "./messenger";
}
