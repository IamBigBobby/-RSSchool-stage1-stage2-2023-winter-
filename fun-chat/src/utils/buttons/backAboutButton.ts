import eventsLoginFiled from "../../render/logIn/eventsLoginField";
import renderLogInField from "../../render/logIn/renderLoginField";
import eventsMessengerField from "../../render/messenger/eventsMessengerField";
import renderMessengerField from "../../render/messenger/messengerField";
import destroyPage from "../destroyPage";
import renderWrapper from "../renderWrapper";

export default function backButtonAbout() {
  document.addEventListener("click", (event) => {
    const currentElement = event.target as HTMLElement;
    if (currentElement.classList.contains("back-about-button")) {
      const userData = sessionStorage.getItem("userData_iambigbobby");
      if (userData === null) {
        destroyPage();
        window.history.replaceState(null, "", "login");
        renderWrapper("login", renderLogInField);
        eventsLoginFiled();
      } else {
        console.log("уже в мессенджере");
        destroyPage();
        window.history.replaceState(null, "", "message");
        renderWrapper("message", renderMessengerField);
        eventsMessengerField();
      }
    }
  });
}
