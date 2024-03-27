import moveCar from "./startCar";

export default function raceButton(): void {
  const raceButtonElement = document.querySelector(
    ".button-start-race",
  ) as HTMLButtonElement;
  raceButtonElement?.addEventListener("click", () => {
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

    const carsTimes = [];
    for (let i = 0; i < carsLenght; i += 1) {
      carsTimes.push(moveCar(i));
    }

    Promise.any(carsTimes).then((winer) => {
      const resetButton = document.querySelector(
        ".button-reset-race",
      ) as HTMLButtonElement;
      resetButton.disabled = false;

      backButtons.forEach((button) => {
        const currentButton = button as HTMLButtonElement;
        currentButton.disabled = false;
      });

      console.log(winer);
    });
  });
}
