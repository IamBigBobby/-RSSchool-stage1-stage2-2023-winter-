import crateRaceContainer from "../race/createRaceContainer";
import raceButton from "../race/raceButton";

export default function createRace(): void {
  const { body } = document;
  const main = document.createElement("main");
  const buttonStartRace = document.createElement("button");
  const buttonResetRace = document.createElement("button");

  main.classList.add("main");
  buttonStartRace.classList.add("button-start-race");
  buttonResetRace.classList.add("button-reset-race");

  buttonStartRace.textContent = "RACE";
  buttonResetRace.textContent = "RESET";

  body.appendChild(buttonStartRace);
  body.appendChild(buttonResetRace);
  body.appendChild(main);

  raceButton();
  crateRaceContainer();
}
