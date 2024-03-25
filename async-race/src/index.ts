import "./style.scss";
import "./assets/car.svg";
import GarageData from "./api/getData";

const newData = new GarageData();

// const newItem = {
//   name: "BMW",
//   color: "#8a8a8a",
// };

// console.log(newData.getGarageData());
// console.log(newData.getCar(1));
newData.deleteCar(1);
newData.deleteCar(3);
newData.deleteCar(5);
console.log(newData.getGarageData());
