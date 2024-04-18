import { PageType } from "../interfaces/interfaces";
import renderMessengerField from "../render/messenger/messengerField";
import destroyPage from "./destroyPage";
import renderWrapper from "./renderWrapper";

export default function changePage(page: PageType) {
  destroyPage();
  window.history.replaceState(null, "", `/${page}`);
  if (page === "messenger") {
    renderWrapper(`${page}`, renderMessengerField);
  }
}
