import crateRaceContainer from "../race/createRaceContainer";

export default function createRace(): void {
  const { body } = document;
  const main = document.createElement("main");
  const inputCreateCarContainer = document.createElement("div");

  main.classList.add("main");

  inputCreateCarContainer.classList.add("input-create-container");

  body.appendChild(inputCreateCarContainer);
  body.appendChild(main);

  crateRaceContainer();
}
