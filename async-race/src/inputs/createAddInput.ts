import GarageData from "../api/getDataGarage";
import destroyRaceContainer from "../app/destroyRaceContainer";
// import { Car } from "../interfaces/garageInterfaces";
import crateRaceContainer from "../race/createRaceContainer";

const car = {
  name: "",
  color: "#000000",
};

function pickColor(): void {
  const colorPicker = document.querySelector(
    ".color-picker-create",
  ) as HTMLInputElement;

  colorPicker?.addEventListener("input", () => {
    const selectedColor = colorPicker.value;
    car.color = selectedColor;
    console.log(car.color);
  });
}

function createCarName(): void {
  const inputElement = document.querySelector(
    ".input-create",
  ) as HTMLInputElement;

  inputElement?.addEventListener("input", () => {
    const newCarName = inputElement.value;
    car.name = newCarName;
  });
}

function addCarButton(): void {
  const updateButton = document.querySelector(".create-car-button");
  updateButton?.addEventListener("click", () => {
    if (car.name && car.color) {
      const newGarageData = new GarageData();
      newGarageData.addCar(car).then(() => {
        const inputElement = document.querySelector(
          ".input-create",
        ) as HTMLInputElement;
        inputElement.value = "";
        destroyRaceContainer();
        crateRaceContainer();
      });
    } else {
      console.log("Please enter car name");
    }
  });
}

export default function createAddInput(): void {
  const inputCreateCarContainer = document.querySelector(
    ".input-create-container",
  );
  const inputElement = document.createElement("input");
  const colorPicker = document.createElement("input");
  const updateButton = document.createElement("button");

  inputElement.classList.add("input-create");
  inputElement.setAttribute("type", "text");
  colorPicker.classList.add("color-picker-create");
  inputElement.setAttribute("placeholder", "Input car name");
  colorPicker.setAttribute("type", "color");
  updateButton.classList.add("create-car-button");
  updateButton.textContent = "CREATE";

  inputCreateCarContainer?.appendChild(inputElement);
  inputCreateCarContainer?.appendChild(colorPicker);
  inputCreateCarContainer?.appendChild(updateButton);

  pickColor();
  createCarName();
  addCarButton();
}
