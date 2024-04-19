import eventsLoginFiled from "../render/logIn/eventsLoginField";
import renderLogInField from "../render/logIn/renderLoginField";
import addElementsToParent from "../utils/addElementsToParent";
import renderWrapper from "../utils/renderWrapper";
import watcher from "../utils/watcher";

export default function app() {
  watcher();

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
}
