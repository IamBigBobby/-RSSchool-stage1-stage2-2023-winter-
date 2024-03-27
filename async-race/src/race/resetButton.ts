import backCar from "./backCar";

export default function resetButton(): void {
  const resetButtonElement = document.querySelector(
    ".button-reset-race",
  ) as HTMLButtonElement;
  const raceButtonElement = document.querySelector(
    ".button-start-race",
  ) as HTMLButtonElement;
  resetButtonElement?.addEventListener("click", () => {
    raceButtonElement.disabled = false;
    resetButtonElement.disabled = true;
    const carsLenght = document.querySelectorAll(".car-container").length;

    for (let i = 0; i < carsLenght; i += 1) {
      backCar(i);
    }
  });
}
