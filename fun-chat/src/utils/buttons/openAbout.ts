import renderAbout from "../../render/about/renderAbout";
import destroyPage from "../destroyPage";
import renderWrapper from "../renderWrapper";

export default function openAbout() {
  document.addEventListener("click", (event) => {
    const currentElement = event.target as HTMLElement;
    if (currentElement.classList.contains("about-button")) {
      destroyPage();
      window.history.replaceState(null, "", "about");
      renderWrapper("about", renderAbout);
    }
  });
}
