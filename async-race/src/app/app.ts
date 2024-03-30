import createAddInput from "../inputs/createAddInput";
import crateRaceContainer from "../race/createRaceContainer";
import removeCarButton from "../race/removeButton";

export default function createRace(): void {
  const { body } = document;
  const main = document.createElement("main");
  const inputCreateCarContainer = document.createElement("div");

  main.classList.add("main");

  inputCreateCarContainer.classList.add("input-create-container");

  body.appendChild(inputCreateCarContainer);
  body.appendChild(main);

  createAddInput();
  removeCarButton();
  crateRaceContainer();
}
