export { getWinGame, sortWinGame };

function getWinGame(name, difficulty, time) {
  const newWinGame = {
    lvl: name,
    difficulty: difficulty,
    time: time,
  };

  if (localStorage.getItem("IamBigBobby_winGames")) {
    console.log("уже есть");
    const existingDataWins = localStorage.getItem("IamBigBobby_winGames");

    const existingData = JSON.parse(existingDataWins);

    existingData.push(newWinGame);

    localStorage.setItem("IamBigBobby_winGames", JSON.stringify(existingData));
  } else {
    console.log("еще нет");
    const winArr = [];
    winArr.push(newWinGame);
    localStorage.setItem("IamBigBobby_winGames", JSON.stringify(winArr));
  }
}

function sortWinGame() {
  const winGameData = localStorage.getItem("IamBigBobby_winGames");
  const existingWinGameData = JSON.parse(winGameData);

  existingWinGameData.sort((a, b) => a.time - b.time);

  const topFiveWinArr = existingWinGameData.slice(0, 5);

  return topFiveWinArr;
}
