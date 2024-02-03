export { activateTimer, stopTimer };

let flagTimer = false;
let currentSeconds = 0;
let currentTime;

function activateTimer() {
  if (!flagTimer) {
    flagTimer = true;
    currentTime = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  flagTimer = false;
  currentSeconds = 0;

  clearInterval(currentTime);
  const timer = document.querySelector(".nonograms__timer");
  timer.innerHTML = "00:00";
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
