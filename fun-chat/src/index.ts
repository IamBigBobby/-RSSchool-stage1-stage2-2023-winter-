import renderLogInField from "./render/logIn/loginField";
import "./style.scss";
import handlePages from "./utils/handlePages";
import renderWrapper from "./utils/renderWrapper";

handlePages();
renderWrapper("login", renderLogInField);
// check
