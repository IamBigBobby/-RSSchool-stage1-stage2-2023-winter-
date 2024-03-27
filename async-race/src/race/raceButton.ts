import moveCar from "./startCar";

export default function raceButton(): void {
  const raceButtonElement = document.querySelector(".button-start-race");
  raceButtonElement?.addEventListener("click", () => {
    const carsLenght = document.querySelectorAll(".car-container").length;

    const carsTimes = [];
    for (let i = 0; i < carsLenght; i += 1) {
      carsTimes.push(moveCar(i));
    }

    Promise.any(carsTimes).then((winer) => console.log(winer));
  });
}
