import client from "../../constants/currentClient";
import changePage from "../changePage";
import parseData from "../parseData";
import showPopUp from "../popUp";

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

  const userData = JSON.stringify({ login, password });

  sessionStorage.setItem("userData_iambigbobby", userData);

  client.addUser(login, password);

  logInButton.classList.add("log-in-button_disabled");

  client.showMessageData((data) => {
    const parsedData = parseData(data);
    const errorStatus = parsedData.type;
    const errorType = parsedData.payload.error;

    if (errorStatus === "ERROR") {
      showPopUp(errorType);
    } else {
      console.log("страница поменялась");
      changePage("messenger");
    }
  });
}
