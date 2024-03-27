import moveCar from "./startCar";

export default function startCarButton(): void {
  const startButtons = document.querySelectorAll(".button-start");
  const backButtons = document.querySelectorAll(".button-stop");

  startButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log("Нажата кнопка старта с индексом:", index + 1);
      const curentBackButton = backButtons[index] as HTMLButtonElement;
      const curentStartButton = startButtons[index] as HTMLButtonElement;
      curentBackButton.disabled = false;
      curentStartButton.disabled = true;
      moveCar(index);
    });
  });
}
