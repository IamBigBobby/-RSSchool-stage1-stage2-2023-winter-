import EngineData from "../api/getDataEngine";
import { MoveCarResult } from "../interfaces/garageInterfaces";

export default function moveCar(
  idCar: number,
  selectedIndexButton: number,
): Promise<MoveCarResult> {
  return new Promise((resolve) => {
    const newEngineData = new EngineData();
    const cars = document.querySelectorAll(".car-container");
    const nameCars = document.querySelectorAll(".car-name");
    newEngineData.switchEngien(idCar, "started").then((dataStart) => {
      const { velocity } = dataStart;
      const { distance } = dataStart;
      const animationTime = distance / velocity;
      const car = cars[selectedIndexButton] as HTMLElement;
      car.classList.add("car-container_move");
      car.addEventListener("animationiteration", () => {
        car.classList.remove("car-container_move");
      });
      car.addEventListener("animationend", () => {
        car.style.animationPlayState = "running";
      });
      car.style.animationDuration = `${animationTime.toFixed(0)}ms`;
      newEngineData
        .driveModeEngien(idCar)
        .then(() => {
          const time = (animationTime / 1000).toFixed(2);
          const winCar = nameCars[selectedIndexButton].textContent;
          resolve({ time, winCar });
        })
        .catch(() => {
          car.style.animationPlayState = "paused";
          newEngineData.switchEngien(idCar, "stopped");
        });
    });
  });
}
