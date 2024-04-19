import client from "../../constants/currentClient";
import checkErrorStatus from "./checkErrorStatus";

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

  loginInput.value = "";
  passwordInput.value = "";

  const userData = JSON.stringify({ login, password });

  sessionStorage.setItem("userData_iambigbobby", userData);

  client.addUser(login, password);

  logInButton.classList.add("log-in-button_disabled");

  checkErrorStatus();
}
