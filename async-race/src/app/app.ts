import crateRaceContainer from "../race/createRaceContainer";

export default function createApp(): void {
  const { body } = document;
  const main = document.createElement("main");
  main.classList.add("main");
  body.appendChild(main);

  crateRaceContainer();
}
