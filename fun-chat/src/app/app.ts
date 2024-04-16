import renderLogInField from "../render/logIn/loginField";
import renderMessengerField from "../render/messenger/messengerField";
import renderWrapper from "../utils/renderWrapper";

const routes: { [key: string]: () => void } = {
  "/": () => {
    console.log("This is the login page");
    renderWrapper("login", renderLogInField);
  },
  "/messenger": () => {
    console.log("This is the messenger page");
    renderWrapper("messenger", renderMessengerField);
  },
};

export default function handleRouting() {
  console.log("строчка поменялась");
  const path = window.location.pathname;
  console.log(path);
  const routeHandler = routes[path];
  if (routeHandler) {
    routeHandler();
  } else {
    console.log("404 - Page not found");
  }
}
