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

      let isAllStartActive = true;

      for (let i = 0; i < startButtons.length; i += 1) {
        const currentButton = startButtons[i] as HTMLButtonElement;
        // console.log(currentButton);
        // console.log(currentButton.disabled);
        if (currentButton.disabled === true) {
          isAllStartActive = false;
          break;
        }
      }

      if (isAllStartActive) {
        const raceButton = document.querySelector(
          ".button-start-race",
        ) as HTMLButtonElement;
        const resetButton = document.querySelector(
          ".button-reset-race",
        ) as HTMLButtonElement;

        raceButton.disabled = false;
        resetButton.disabled = true;
      }

      backCar(index);
    });
  });
}
