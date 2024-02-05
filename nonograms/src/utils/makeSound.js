export { leftClickSound, rightClickSound, winSound };

import point from "../assets/sounds/point.mp3";
import glassKnock from "../assets/sounds/glass-knock.mp3";
import wow from "../assets/sounds/wow.mp3";

function leftClickSound(event) {
  const pointSound = new Audio(point);
  if (
    event.button === 0 &&
    event.target.classList.contains("table-nonograms__cell")
  ) {
    pointSound.play();
  }
}

function rightClickSound(event) {
  const knockSound = new Audio(glassKnock);
  if (
    event.button === 2 &&
    event.target.classList.contains("table-nonograms__cell")
  ) {
    knockSound.play();
  }
}

function winSound() {
  const wowSound = new Audio(wow);
  wowSound.play();
}
