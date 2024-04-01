import GarageData from "../api/getDataGarage";
import { CarsArray } from "../interfaces/garageInterfaces";

export default function viewWinners(): void {
  const winnersPage = document.querySelector(".winners-page");

  const currentPage = document.createElement("div");

  currentPage.classList.add("current-page-winner");

  winnersPage?.appendChild(currentPage);

  const newDataGarage = new GarageData();

  const arrWinCars: CarsArray = [];

  newDataGarage.getWinnersGarageData(1, "id", "ASC").then((data) => {
    const countCars = data.length;
    for (let i = 0; i < countCars; i += 1) {
      newDataGarage.getCar(data[i].id).then((car) => {
        arrWinCars.push(car);
        if (Object.keys(car).length === 0) {
          console.log("first time");
        }
      });
    }
  });
}
