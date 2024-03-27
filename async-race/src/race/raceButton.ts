import moveCar from "./startCar";

export default function raceButton(): void {
  const raceButtonElement = document.querySelector(
    ".button-start-race",
  ) as HTMLButtonElement;
  raceButtonElement?.addEventListener("click", () => {
    raceButtonElement.disabled = true;
    const carsLenght = document.querySelectorAll(".car-container").length;

    const carsTimes = [];
    for (let i = 0; i < carsLenght; i += 1) {
      carsTimes.push(moveCar(i));
    }

    Promise.any(carsTimes).then((winer) => {
      const resetButton = document.querySelector(
        ".button-reset-race",
      ) as HTMLButtonElement;
      resetButton.disabled = false;
      console.log(winer);
    });
  });
}
