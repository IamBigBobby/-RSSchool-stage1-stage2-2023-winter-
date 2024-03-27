import EngineData from "../api/getDataEngine";

export default function backCar() {
  const backButtons = document.querySelectorAll(".button-stop");
  const cars = document.querySelectorAll(".car-container");

  backButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log("Нажата кнопка возврата с индексом:", index);

      const controller = new AbortController();
      const { signal } = controller;

      fetch(`http://127.0.0.1:3000/engine/?id=${index + 1}&status=drive`, {
        signal,
      });

      controller.abort();

      const newEngineData = new EngineData();

      newEngineData.switchEngien(index + 1, "stopped").then(() => {
        const car = cars[index] as HTMLElement;
        car.classList.remove("car-container_move");
        car.style.animationPlayState = "running";
      });
    });
  });
}
