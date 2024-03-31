import EngineData from "../api/getDataEngine";

export default function backCar(carId: number, index: number): void {
  const cars = document.querySelectorAll(".car-container");

  const newEngineData = new EngineData();

  const car = cars[index] as HTMLElement;
  car.classList.remove("car-container_move");
  car.style.animationPlayState = "running";
  newEngineData.switchEngien(carId, "stopped");
}
