import EngineData from "../api/getDataEngine";

export default function backCar() {
  const backButtons = document.querySelectorAll(".button-stop");
  const cars = document.querySelectorAll(".car-container");

  backButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log("Нажата кнопка возврата с индексом:", index);

      const newEngineData = new EngineData();

      newEngineData.switchEngien(index + 1, "stopped").then((data) => {
        console.log(data);
        const car = cars[index] as HTMLElement;
        car.classList.remove("car-container_move");
        car.style.animationPlayState = "running";
      });
    });
  });
}
