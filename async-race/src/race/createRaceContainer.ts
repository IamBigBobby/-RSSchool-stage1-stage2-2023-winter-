import createTrack from "./createTrack";

export default function crateRaceContainer(): void {
  const main = document.querySelector(".main");
  const raceContainer = document.createElement("div");
  raceContainer.classList.add("race-container");

  main?.appendChild(raceContainer);

  createTrack();
}
