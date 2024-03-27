import moveCar from "./startCar";

export default function startCarButton(): void {
  const startButtons = document.querySelectorAll(".button-start");

  startButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log("Нажата кнопка старта с индексом:", index + 1);
      moveCar(index);
    });
  });
}
