export { switchSound };
import { leftClickSound, rightClickSound } from "./makeSound";

function switchSound(event) {
  console.log(event.target.textContent);
  const soundPosition = event.target.textContent;
  if (soundPosition === "sound: off") {
    const wrapper = document.querySelector(".wrapper-nonograms");
    wrapper.addEventListener("mousedown", leftClickSound);
    wrapper.addEventListener("mousedown", rightClickSound);

    event.target.style.backgroundColor = "aqua";

    event.target.innerHTML = "sound: on";
  } else {
    const wrapper = document.querySelector(".wrapper-nonograms");
    wrapper.removeEventListener("mousedown", leftClickSound);
    wrapper.removeEventListener("mousedown", rightClickSound);

    event.target.style.backgroundColor = "white";

    event.target.innerHTML = "sound: off";
  }
}
