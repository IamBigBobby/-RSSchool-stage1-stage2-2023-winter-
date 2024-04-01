import GarageData from "../api/getDataGarage";
import { MoveCarResult } from "../interfaces/garageInterfaces";
import { UpdateWinCar, WinCar } from "../interfaces/winnerInterfaces";
import paginationPageAmendment from "../pagination/paginationStatus";
import showPopUpWinner from "../popUp/showPopUpWinner";
import destroyViewWinners from "../winners/destroyViewWinners";
import paginationWinners from "../winners/paginationWinnersStatus";
import viewWinners from "../winners/viewWinners";
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
          const colorCar = selectedCar.color;
          carsTimes.push(moveCar(idCar, selectedIndexButton, colorCar));
        }
      });
      promises.push(promise);
    }

    Promise.all(promises).then(() => {
      Promise.any(carsTimes).then((result) => {
        showPopUpWinner();

        const resetButtonElements = document.querySelector(
          ".button-reset-race",
        ) as HTMLButtonElement;
        resetButtonElements.disabled = false;

        backButtons.forEach((button) => {
          const currentButton = button as HTMLButtonElement;
          currentButton.disabled = false;
        });
        const idWinCar = result.idCar;
        const winTime = Number(result.time);
        newGarageData.getCarWinner(idWinCar).then((winCar) => {
          if (Object.keys(winCar).length === 0) {
            const newWinner: WinCar = {
              id: idWinCar,
              wins: 1,
              time: winTime,
            };
            newGarageData.addCarWinner(newWinner).then(() => {
              destroyViewWinners().then(() => {
                viewWinners(paginationWinners.page, paginationWinners.sortBy);
              });
            });
          } else {
            newGarageData.getCarWinner(idWinCar).then((idWinCarBase) => {
              const currentId = idWinCarBase.id;
              let currentTime;
              if (idWinCarBase.time > winTime) {
                currentTime = winTime;
              } else {
                currentTime = idWinCarBase.time;
              }
              const updatedWins = idWinCarBase.wins + 1;
              const updateDate: UpdateWinCar = {
                wins: updatedWins,
                time: currentTime,
              };
              newGarageData.updateWinCar(currentId, updateDate).then(() => {
                destroyViewWinners().then(() => {
                  viewWinners(paginationWinners.page, paginationWinners.sortBy);
                });
              });
            });
          }
        });
      });
    });
  });
}
