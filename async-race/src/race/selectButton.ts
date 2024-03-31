import GarageData from "../api/getDataGarage";
import paginationPageAmendment from "../pagination/paginationStatus";

export const idCarSelected: { id: number | undefined } = {
  id: 0,
};

export default function selectButton(): void {
  const main = document.querySelector(".main");

  main?.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    if (target.classList.contains("button-select")) {
      const selectButtons = document.querySelectorAll(".button-select");
      const index = [...selectButtons].indexOf(target);

      const newGarageData = new GarageData();
      newGarageData.getGarageData().then((data) => {
        const selectedCar = data[index + paginationPageAmendment.amendment];
        console.log(selectedCar);
        const oldName = selectedCar.name;
        const oldColor = selectedCar.color;
        idCarSelected.id = selectedCar.id;
        const updateInput = document.querySelector(
          ".input-update",
        ) as HTMLInputElement;
        const updateColor = document.querySelector(
          ".color-picker-update",
        ) as HTMLInputElement;
        const updateButton = document.querySelector(
          ".update-car-button",
        ) as HTMLButtonElement;
        updateInput.disabled = false;
        updateInput.value = oldName;
        updateColor.disabled = false;
        updateColor.value = oldColor;
        updateButton.disabled = false;
      });
    }
  });
}
