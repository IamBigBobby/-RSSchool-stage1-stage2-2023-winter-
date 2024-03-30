import GarageData from "../api/getDataGarage";
import destroyRaceContainer from "../app/destroyRaceContainer";
import createRaceContainer from "../race/createRaceContainer";
import { idCarSelected } from "../race/selectButton";

export const carUpdate = {
  name: "",
  color: "",
};

function updateColor(): void {
  const colorPicker = document.querySelector(
    ".color-picker-update",
  ) as HTMLInputElement;

  colorPicker?.addEventListener("input", () => {
    const selectedColor = colorPicker.value;
    carUpdate.color = selectedColor;
  });
}

function updateCarName(): void {
  const inputElement = document.querySelector(
    ".input-update",
  ) as HTMLInputElement;

  inputElement?.addEventListener("input", () => {
    const newCarName = inputElement.value;
    carUpdate.name = newCarName;
  });
}

export function updateCarButton(): void {
  const updateButton = document.querySelector(".update-car-button");
  updateButton?.addEventListener("click", () => {
    if (carUpdate.name && carUpdate.color) {
      console.log("полученный id", idCarSelected.id);
      const currentId = idCarSelected.id;
      const newGarageData = new GarageData();
      const updateCar = {
        name: carUpdate.name,
        color: carUpdate.color,
      };
      if (currentId) {
        newGarageData.updateCar(currentId, updateCar).then(() => {
          const updateInput = document.querySelector(
            ".input-update",
          ) as HTMLInputElement;
          const updateColorInput = document.querySelector(
            ".color-picker-update",
          ) as HTMLInputElement;
          const updateButtonInput = document.querySelector(
            ".update-car-button",
          ) as HTMLButtonElement;
          updateInput.disabled = true;
          updateInput.value = "";
          updateColorInput.disabled = true;
          updateColorInput.value = "";
          updateButtonInput.disabled = true;
          destroyRaceContainer();
          createRaceContainer();
        });
      }
    } else {
      console.log("Please update your car name and color");
    }
  });
}

export default function createUpdateInput(): void {
  const inputCreateCarContainer = document.querySelector(
    ".input-update-container",
  );
  const inputElement = document.createElement("input");
  const colorPicker = document.createElement("input");
  const updateButton = document.createElement("button");

  inputElement.classList.add("input-update");
  inputElement.setAttribute("type", "text");
  colorPicker.classList.add("color-picker-update");
  inputElement.setAttribute("placeholder", "Input car name");
  colorPicker.setAttribute("type", "color");
  updateButton.classList.add("update-car-button");
  updateButton.textContent = "UPDATE";
  inputElement.disabled = true;
  colorPicker.disabled = true;
  updateButton.disabled = true;

  inputCreateCarContainer?.appendChild(inputElement);
  inputCreateCarContainer?.appendChild(colorPicker);
  inputCreateCarContainer?.appendChild(updateButton);

  updateColor();
  updateCarName();
  updateCarButton();
}
