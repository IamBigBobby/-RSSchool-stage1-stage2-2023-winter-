import client from "../../constants/currentClient";
import message from "../../constants/message";
// eslint-disable-next-line
import eventsLoginFiled from "../../render/logIn/eventsLoginField";
import renderLogInField from "../../render/logIn/renderLoginField";
import destroyPage from "../destroyPage";
import renderWrapper from "../renderWrapper";

export default function logOutButtonHandler(): void {
  document.addEventListener("click", (event) => {
    const currentElement = event.target as HTMLElement;
    if (currentElement.classList.contains("log-out-button")) {
      console.log("log-out");
      message.to = "";
      message.text = "";
      const user = sessionStorage.getItem("userData_iambigbobby") as string;
      const userParse = JSON.parse(user);
      client.logout(userParse.login, userParse.password);
      sessionStorage.removeItem("userData_iambigbobby");
      destroyPage();
      window.history.replaceState(null, "", "login");
      renderWrapper("login", renderLogInField);
      eventsLoginFiled();
    }
  });
}
