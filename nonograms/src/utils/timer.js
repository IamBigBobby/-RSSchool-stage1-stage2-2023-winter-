export { activateTimer, flagTimer };

let flagTimer = false;
let currentSeconds = 0;

function activateTimer(flagTimer) {
  if (flagTimer === true) {
    setInterval(updateTimer, 1000);
  } else {
    console.log("pause");
  }
}

function updateTimer() {
  let minutes = Math.floor((currentSeconds % 3600) / 60);
  let seconds = currentSeconds % 60;

  let strMinutes = minutes.toString().padStart(2, "0");
  let strSeconds = seconds.toString().padStart(2, "0");

  currentSeconds++;

  const timer = document.querySelector(".nonograms__timer");

  timer.innerHTML = `${strMinutes}:${strSeconds}`;
}
