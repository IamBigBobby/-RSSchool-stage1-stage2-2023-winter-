import EngineData from "../api/getDataEngine";

export default function startCar(): void {
  const startButtons = document.querySelectorAll(".button-start");

  startButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log("start");

      const newEngineData = new EngineData();

      newEngineData
        .switchEngien(index + 1, "started")
        .then((data) => {
          console.log(data);
          const { velocity } = data;
          const { distance } = data;

          const animationTime = distance / velocity;

          return animationTime;
        })
        .then((animationTime) => {
          console.log(animationTime, index + 1);
        });
    });
  });
}
