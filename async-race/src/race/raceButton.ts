import GarageData from "../api/getDataGarage";
import { MoveCarResult } from "../interfaces/garageInterfaces";
import paginationPageAmendment from "../pagination/paginationStatus";
import resetButton from "./resetButton";
import moveCar from "./startCar";

export default function raceButton(): void {
  const raceButtonElement = document.querySelector(
    ".button-start-race",
  ) as HTMLButtonElement;
  raceButtonElement?.addEventListener("click", () => {
    resetButton();
    const backButtons = document.querySelectorAll(".button-stop");
    const startButtons = document.querySelectorAll(".button-start");

    backButtons.forEach((button) => {
      const currentButton = button as HTMLButtonElement;
      currentButton.disabled = true;
    });

    startButtons.forEach((button) => {
      const currentButton = button as HTMLButtonElement;
      currentButton.disabled = true;
    });

    raceButtonElement.disabled = true;
    const carsLenght = document.querySelectorAll(".car-container").length;

    const carsTimes: Promise<MoveCarResult>[] = [];
    const promises = [];

    const newGarageData = new GarageData();

    for (let i = 0; i < carsLenght; i += 1) {
      const promise = newGarageData.getGarageData().then((data) => {
        const selectedIndexButton = i;
        const selectedCar = data[i + paginationPageAmendment.amendment];
        if (selectedCar && selectedCar.id) {
          const idCar = selectedCar.id;
          carsTimes.push(moveCar(idCar, selectedIndexButton));
        }
      });
      promises.push(promise);
    }

    Promise.all(promises).then(() => {
      Promise.any(carsTimes).then((result) => {
        const resetButtonElements = document.querySelector(
          ".button-reset-race",
        ) as HTMLButtonElement;
        resetButtonElements.disabled = false;

        backButtons.forEach((button) => {
          const currentButton = button as HTMLButtonElement;
          currentButton.disabled = false;
        });
        console.log(result);
      });
    });
  });
}
