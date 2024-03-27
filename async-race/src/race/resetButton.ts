import backCar from "./backCar";

export default function resetButton(): void {
  const resetButtonElement = document.querySelector(".button-reset-race");
  resetButtonElement?.addEventListener("click", () => {
    const carsLenght = document.querySelectorAll(".car-container").length;

    for (let i = 0; i < carsLenght; i += 1) {
      backCar(i);
    }
  });
}
