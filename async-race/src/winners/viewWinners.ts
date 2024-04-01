import GarageData from "../api/getDataGarage";
import {
  PushWinCar,
  PushWinCarArr,
  WinCarsArray,
} from "../interfaces/winnerInterfaces";
import paginationWinners from "./paginationWinnersStatus";

function renderFunction(arrWinnresRender: PushWinCarArr): void {
  const currentWinnerPage = document.querySelector(".current-page-winner");

  arrWinnresRender.forEach((car, index) => {
    const winner = document.createElement("div");
    winner.classList.add("win-car");
    currentWinnerPage?.appendChild(winner);

    const numberOfTable = document.createElement("div");
    const carName = document.createElement("div");
    const carWins = document.createElement("div");
    const carTime = document.createElement("div");

    numberOfTable.classList.add("number-of-table");
    carName.classList.add("win-car-name");
    carWins.classList.add("win-car-wins");
    carTime.classList.add("win-car-time");

    numberOfTable.textContent = `${index + 1}`;
    carName.textContent = `${car.name}`;
    carWins.textContent = `${car.wins}`;
    carTime.textContent = `${car.time}`;

    winner.appendChild(numberOfTable);
    winner.appendChild(carName);
    winner.appendChild(carWins);
    winner.appendChild(carTime);
  });
}

function createWinners(arrWinCars: WinCarsArray): void {
  const arrWinnresRender: PushWinCarArr = [];
  const newDataGarage = new GarageData();
  const promises: Promise<void>[] = [];

  arrWinCars.forEach((car) => {
    const carId = car.id;
    const carTime = car.time;
    const carWins = car.wins;

    const promise = newDataGarage.getCar(carId).then((carPush) => {
      const carName = carPush.name;
      const carColor = carPush.color;

      const pushCar: PushWinCar = {
        name: carName,
        time: carTime,
        wins: carWins,
        color: carColor,
      };
      arrWinnresRender.push(pushCar);
    });
    promises.push(promise);
  });

  Promise.all(promises).then(() => {
    renderFunction(arrWinnresRender);
  });
}

export default function viewWinners(
  page: number,
  sortBy: "time" | "id" | "wins",
): void {
  const newDataGarage = new GarageData();

  const winnersPage = document.querySelector(".winners-page");

  const currentPage = document.createElement("div");
  const currentNumberPage = document.createElement("div");
  const leftWinnerPagination = document.createElement("button");
  const rightWinnerPagination = document.createElement("button");

  currentPage.classList.add("current-page-winner");
  currentNumberPage.classList.add("current-page-winner-number");
  leftWinnerPagination.classList.add("left-winner-pagination");
  rightWinnerPagination.classList.add("right-winner-pagination");

  currentNumberPage.textContent = `Page# ${paginationWinners.page}`;
  leftWinnerPagination.textContent = "PREV";
  rightWinnerPagination.textContent = "NEXT";

  winnersPage?.appendChild(currentNumberPage);
  winnersPage?.appendChild(currentPage);
  winnersPage?.appendChild(leftWinnerPagination);
  winnersPage?.appendChild(rightWinnerPagination);

  const arrWinCars: WinCarsArray = [];

  newDataGarage.getWinnersGarageData(page, sortBy, "ASC").then((data) => {
    const promises = data.map((carData) =>
      newDataGarage.getCarWinner(carData.id),
    );
    Promise.all(promises).then((cars) => {
      arrWinCars.push(...cars);
      createWinners(arrWinCars);
    });
  });
}
