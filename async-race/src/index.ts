import "./style.scss";
import "./assets/car.svg";
// import GarageData from "./api/getDataGarage";
import EngineData from "./api/getDataEngine";

// const newDataGarage = new GarageData();
const newDataEngien = new EngineData();

newDataEngien.switchEngien(1, "started").then((result) => {
  console.log(result);
});
// newDataGarage.getGarageData().then((result) => {
//   console.log(result);
// });
newDataEngien.driveModeEngien(1).then((result) => {
  console.log(result);
});
