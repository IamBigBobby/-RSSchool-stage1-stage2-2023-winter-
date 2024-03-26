import getCurrentVelocity from "./getCurrentVelocity";
// import { getCurrentVelocityObj } from "./getCurrentVelocityObj";

export default function startCar(): void {
  const startButtons = document.querySelectorAll(".button-start");
  const cars = document.querySelectorAll(".car-container");

  startButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log("Нажата кнопка с индексом:", index + 1);
      cars[index].classList.add("car-container_move");

      cars[index].addEventListener("animationiteration", () => {
        cars[index].classList.remove("car-container_move");
      });

      getCurrentVelocity();
    });
  });
}
