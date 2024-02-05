export { switchSound };
import { leftClickSound, rightClickSound } from "./makeSound";

function switchSound(event) {
  console.log(event.target.textContent);
  const soundPosition = event.target.textContent;
  if (soundPosition === "sound: off") {
    const cells = document.querySelectorAll(".table-nonograms__cell");
    cells.forEach((cell) => {
      cell.addEventListener("mousedown", leftClickSound);
      cell.addEventListener("mousedown", rightClickSound);
    });

    event.target.style.backgroundColor = "aqua";

    event.target.innerHTML = "sound: on";
  } else {
    const cells = document.querySelectorAll(".table-nonograms__cell");
    cells.forEach((cell) => {
      cell.removeEventListener("mousedown", leftClickSound);
      cell.removeEventListener("mousedown", rightClickSound);
    });

    event.target.style.backgroundColor = "white";

    event.target.innerHTML = "sound: off";
  }
}
