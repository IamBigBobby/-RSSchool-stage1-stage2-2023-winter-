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
}
