import renderLogInField from "../render/logIn/loginField";
import renderWrapper from "../utils/renderWrapper";

export default function app() {
  // window.history.replaceState(null, "", "/login");
  renderWrapper("login", renderLogInField);
}
