import createAddInput from "../inputs/createAddInput";
import createUpdateInput from "../inputs/createUpdateInput";
import createButtonsPagination from "../pagination/createPagination";
import addNewCars from "../race/carGenerateButton";
import crateRaceContainer from "../race/createRaceContainer";
import removeCarButton from "../race/removeButton";

export default function createRace(): void {
  const { body } = document;
  const main = document.createElement("main");
  const inputCreateCarContainer = document.createElement("div");
  const inputUpdateContainer = document.createElement("div");
  const generateButton = document.createElement("button");

  main.classList.add("main");

  inputCreateCarContainer.classList.add("input-create-container");
  inputUpdateContainer.classList.add("input-update-container");
  generateButton.classList.add("button-generate-cars");
  generateButton.textContent = "GENERATE";

  body.appendChild(inputUpdateContainer);
  body.appendChild(inputCreateCarContainer);
  body.appendChild(generateButton);
  body.appendChild(main);

  generateButton.addEventListener("click", addNewCars);
  createButtonsPagination();
  createUpdateInput();
  createAddInput();
  removeCarButton();
  crateRaceContainer();
}
