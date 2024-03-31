import GarageData from "../api/getDataGarage";
import paginationPageAmendment from "../pagination/paginationStatus";
import moveCar from "./startCar";

export default function startCarButton(): void {
  const startButtons = document.querySelectorAll(".button-start");
  const backButtons = document.querySelectorAll(".button-stop");

  startButtons.forEach((startButton, index) => {
    startButton.addEventListener("click", () => {
      const curentBackButton = backButtons[index] as HTMLButtonElement;
      const curentStartButton = startButtons[index] as HTMLButtonElement;
      curentBackButton.disabled = false;
      curentStartButton.disabled = true;

      const newGarageData = new GarageData();
      newGarageData
        .getGarageData()
        .then((data) => {
          const selectedIndexButton = index;
          const selectedCar = data[index + paginationPageAmendment.amendment];
          return { selectedCar, selectedIndexButton };
        })
        .then(({ selectedCar, selectedIndexButton }) => {
          const idCar = selectedCar.id;
          const colorCar = selectedCar.color;
          if (idCar) {
            moveCar(idCar, selectedIndexButton, colorCar);
          }
        });
    });
  });
}
