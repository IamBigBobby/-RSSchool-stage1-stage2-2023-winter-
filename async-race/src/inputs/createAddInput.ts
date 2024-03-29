import { newCar } from "../interfaces/garageInterfaces";

const car: newCar = {
  name: "",
  color: "",
};

function pickColor(): void {
  const colorPicker = document.querySelector(
    ".color-picker-create",
  ) as HTMLInputElement;

  colorPicker?.addEventListener("input", () => {
    const selectedColor = colorPicker.value;
    car.color = selectedColor;
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
      console.log("Creating car:", car);
    } else {
      console.log("Please enter both car name and color");
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
