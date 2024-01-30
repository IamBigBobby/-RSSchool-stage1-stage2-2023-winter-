const { createWrapper, createGame } = require("./utils/createField");
import "./style.scss";
import { countingTrueCells } from "./utils/countingAnswersCells";
import { playerLogic } from "./utils/playerLogic";

createWrapper();
createGame();
countingTrueCells();

playerLogic();
