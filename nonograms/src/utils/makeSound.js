export { rightClickSound };

import point from "../assets/sounds/point.mp3";

function rightClickSound(event) {
  const pointSound = new Audio(point);
  if (
    event.button === 0 &&
    event.target.classList.contains("table-nonograms__cell")
  ) {
    pointSound.play();
  }
}
