const { createWrapper, createGame } = require("./utils/createField");
import { data } from "./data/dataMatrix";
import "./style.scss";
import { countingTrueCells } from "./utils/countingAnswersCells";
import { createName } from "./utils/createName";
import { playerLogic } from "./utils/playerLogic";

const firstMatrix = data.easy[0].matrix;
const firstName = data.easy[0].name;

createWrapper();
createGame(firstMatrix);
createName(firstName);
countingTrueCells();

playerLogic();
