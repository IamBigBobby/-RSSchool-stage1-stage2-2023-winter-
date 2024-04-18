import client from "../../constants/currentClient";
import changePage from "../changePage";
import parseData from "../parseData";
import showPopUp from "../popUp";

function checkErrorStatus() {
  return new Promise((resolve) => {
    let errorStatusBoolean = false;
    client.showMessageData((data) => {
      const parsedData = parseData(data);
      const errorStatus = parsedData.type;
      const errorType = parsedData.payload.error;

      if (errorStatus === "ERROR") {
        errorStatusBoolean = true;
        showPopUp(errorType);
      }
      resolve(errorStatusBoolean);
    });
  });
}

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

  checkErrorStatus().then((errorStatusBoolean) => {
    if (errorStatusBoolean === false) {
      changePage("messenger");
    }
  });
}
