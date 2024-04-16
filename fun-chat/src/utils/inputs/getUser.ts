import client from "../../constants/currentClient";
import currentUser from "../../constants/currentUser";

export default function getUser(): void {
  const loginInput = document.querySelector(
    ".input-first-name",
  ) as HTMLInputElement;
  const passwordInput = document.querySelector(
    ".input-second-name",
  ) as HTMLInputElement;

  const login = loginInput.value;
  const password = passwordInput.value;

  currentUser.login = login;
  currentUser.password = password;

  client.addUser(login, password);

  loginInput.value = "";
  passwordInput.value = "";
}
