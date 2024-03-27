import EngineData from "../api/getDataEngine";

export default function startCar(): void {
  const startButtons = document.querySelectorAll(".button-start");
  const cars = document.querySelectorAll(".car-container");

  startButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log("Нажата кнопка старта с индексом:", index + 1);

      const newEngineData = new EngineData();

      newEngineData.switchEngien(index + 1, "started").then((dataStart) => {
        console.log(dataStart);
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
          .then((data) => {
            console.log(data);
          })
          .catch(() => {
            car.style.animationPlayState = "paused";
            newEngineData.switchEngien(index + 1, "stopped");
          });
      });
    });
  });
}
