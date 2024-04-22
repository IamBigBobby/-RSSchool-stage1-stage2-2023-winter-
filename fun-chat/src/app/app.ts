import eventsLoginFiled from "../render/logIn/eventsLoginField";
import renderLogInField from "../render/logIn/renderLoginField";
import addElementsToParent from "../utils/addElementsToParent";
import backButtonAbout from "../utils/buttons/backAboutButton";
import logInButtonHandler from "../utils/buttons/logIn";
import logOutButtonHandler from "../utils/buttons/logOut";
import openAbout from "../utils/buttons/openAbout";
import renderWrapper from "../utils/renderWrapper";
// import watcher from "../utils/watcher";

export default function app() {
  window.addEventListener("beforeunload", () => {
    sessionStorage.removeItem("userData_iambigbobby");
  });

  // watcher();

  const { body } = document;
  const containerApp = [
    {
      tagName: "div",
      classNames: ["app"],
    },
  ];
  addElementsToParent(body, containerApp);
  window.history.replaceState(null, "", "login");
  renderWrapper("login", renderLogInField);
  eventsLoginFiled();

  logInButtonHandler();
  logOutButtonHandler();
  openAbout();
  backButtonAbout();
}
