import GarageData from "../api/getDataGarage";
import paginationPageAmendment from "../pagination/paginationStatus";
import backCar from "./backCar";

export default function resetButton(): void {
  const resetButtonElement = document.querySelector(
    ".button-reset-race",
  ) as HTMLButtonElement;
  const raceButtonElement = document.querySelector(
    ".button-start-race",
  ) as HTMLButtonElement;
  resetButtonElement?.addEventListener("click", () => {
    const backButtons = document.querySelectorAll(".button-stop");
    const startButtons = document.querySelectorAll(".button-start");
    startButtons.forEach((button) => {
      const currentButton = button as HTMLButtonElement;
      currentButton.disabled = false;
    });
    backButtons.forEach((button) => {
      const currentButton = button as HTMLButtonElement;
      currentButton.disabled = true;
    });
    raceButtonElement.disabled = false;
    resetButtonElement.disabled = true;
    const carsLenght = document.querySelectorAll(".car-container").length;

    for (let i = 0; i < carsLenght; i += 1) {
      const newGarageData = new GarageData();
      newGarageData.getGarageData().then((data) => {
        const selectedIndexButton = i;
        const selectedCar = data[i + paginationPageAmendment.amendment];
        if (selectedCar && selectedCar.id) {
          const idCar = selectedCar.id;
          backCar(idCar, selectedIndexButton);
        }
      });
    }
  });
}
