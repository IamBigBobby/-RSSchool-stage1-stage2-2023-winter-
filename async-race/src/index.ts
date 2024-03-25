import "./style.scss";
import "./assets/car.svg";
import GarageData from "./api/getDataGarage";
import EngineData from "./api/getDataEngine";

const newDataGarage = new GarageData();
const newDataEngien = new EngineData();

// newDataGarage.deleteCar(1);
// newDataGarage.deleteCar(3);
// newDataGarage.deleteCar(5);
console.log(newDataEngien.switchEngien(2, "started"));
console.log(newDataEngien.switchEngien(4, "started"));
console.log(newDataEngien.switchEngien(1, "started"));
console.log(newDataEngien.switchEngien(123, "started"));
console.log(newDataGarage.getGarageData());
