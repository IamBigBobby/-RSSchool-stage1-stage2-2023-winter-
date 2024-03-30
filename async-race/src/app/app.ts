import createAddInput from "../inputs/createAddInput";
import createUpdateInput from "../inputs/createUpdateInput";
import crateRaceContainer from "../race/createRaceContainer";
import removeCarButton from "../race/removeButton";

export default function createRace(): void {
  const { body } = document;
  const main = document.createElement("main");
  const inputCreateCarContainer = document.createElement("div");
  const inputUpdateContainer = document.createElement("div");

  main.classList.add("main");

  inputCreateCarContainer.classList.add("input-create-container");
  inputUpdateContainer.classList.add("input-update-container");

  body.appendChild(inputUpdateContainer);
  body.appendChild(inputCreateCarContainer);
  body.appendChild(main);

  createUpdateInput();
  createAddInput();
  removeCarButton();
  crateRaceContainer();
}
