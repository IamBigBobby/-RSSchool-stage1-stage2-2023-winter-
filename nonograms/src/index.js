const { createWrapper, createGame } = require("./utils/createField");
import "./style.scss";
import { countingTrueCells } from "./utils/countingAnswersCells";

createWrapper();
createGame();
countingTrueCells();
