import backCar from "./backCar";

export default function backCarButton() {
  const backButtons = document.querySelectorAll(".button-stop");
  const startButtons = document.querySelectorAll(".button-start");

  backButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log("Нажата кнопка возврата с индексом:", index + 1);
      const curentBackButton = backButtons[index] as HTMLButtonElement;
      const curentStartButton = startButtons[index] as HTMLButtonElement;
      curentBackButton.disabled = true;
      curentStartButton.disabled = false;
      backCar(index);
    });
  });
}
