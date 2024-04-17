import renderLogInField from "../render/logIn/loginField";
import renderMessengerField from "../render/messenger/messengerField";
import renderWrapper from "../utils/renderWrapper";

const routes: { [key: string]: () => void } = {
  "/": () => {
    renderWrapper("login", renderLogInField);
  },
  "/messenger": () => {
    renderWrapper("messenger", renderMessengerField);
  },
};

export default function app() {
  let path = window.location.pathname;
  const routeHandler = routes[path];
  const userDataExists = localStorage.getItem("userData_iambigbobby");
  if (path === "/" && !userDataExists) {
    routeHandler();
  } else if (path === "/messenger" && userDataExists) {
    routeHandler();
  } else if (path === "/messenger" && !userDataExists) {
    path = "/";
    const currentPage = routes[path];
    currentPage();
  }
}
