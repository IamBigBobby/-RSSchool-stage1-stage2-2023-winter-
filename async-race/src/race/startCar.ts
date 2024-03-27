import EngineData from "../api/getDataEngine";
import { MoveCarResult } from "../interfaces/garageInterfaces";

export default function moveCar(index: number): Promise<MoveCarResult> {
  return new Promise((resolve) => {
    const newEngineData = new EngineData();
    const cars = document.querySelectorAll(".car-container");
    const nameCars = document.querySelectorAll(".car-name");

    newEngineData.switchEngien(index + 1, "started").then((dataStart) => {
      const { velocity } = dataStart;
      const { distance } = dataStart;
      const animationTime = distance / velocity;

      const car = cars[index] as HTMLElement;
      car.classList.add("car-container_move");

      car.addEventListener("animationiteration", () => {
        car.classList.remove("car-container_move");
      });

      car.addEventListener("animationend", () => {
        car.style.animationPlayState = "running";
      });

      car.style.animationDuration = `${animationTime.toFixed(0)}ms`;

      newEngineData
        .driveModeEngien(index + 1)
        .then(() => {
          const time = (animationTime / 1000).toFixed(2);
          const winCar = nameCars[index].textContent;
          resolve({ time, winCar });
        })
        .catch(() => {
          car.style.animationPlayState = "paused";
          newEngineData.switchEngien(index + 1, "stopped");
        });
    });
  });
}
