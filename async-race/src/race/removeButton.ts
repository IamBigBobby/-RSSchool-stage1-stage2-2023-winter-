import GarageData from "../api/getDataGarage";
import destroyRaceContainer from "../app/destroyRaceContainer";
import createRaceContainer from "./createRaceContainer";

export default function removeCarButton(): void {
  const main = document.querySelector(".main");

  main?.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target.classList.contains("button-delete")) {
      const removeButtons = document.querySelectorAll(".button-delete");
      const index = [...removeButtons].indexOf(target);

      const newGarageData = new GarageData();
      newGarageData
        .getGarageData()
        .then((data) => {
          const selectedCar = data[index];
          return selectedCar;
        })
        .then((selectedCar) => {
          const idCar = selectedCar.id;
          if (idCar) {
            newGarageData.deleteCar(idCar).then(() => {
              destroyRaceContainer();
              createRaceContainer();
            });
          }
        });
    }
  });
}
