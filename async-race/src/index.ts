import "./style.scss";
import "./assets/car.svg";
import GetData from "./api/getData";

const link = "http://127.0.0.1:3000/garage";

const newData = new GetData(link);

console.log(newData.fetchData());
