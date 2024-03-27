import backCar from "./backCar";

export default function backCarButton() {
  const backButtons = document.querySelectorAll(".button-stop");

  backButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log("Нажата кнопка возврата с индексом:", index + 1);
      backCar(index);
    });
  });
}
