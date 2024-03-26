import EngineData from "../api/getDataEngine";
import {
  clearCurrentVelocityObj,
  getCurrentVelocityObj,
} from "./getCurrentVelocityObj";

export default async function getCurrentVelocity() {
  clearCurrentVelocityObj();

  const garageLength = Array.from(document.querySelectorAll(".track")).length;
  const newEngineData = new EngineData();

  const promises = [];

  for (let i = 1; i <= garageLength; i += 1) {
    promises.push(
      newEngineData.switchEngien(i, "started").then((data) => {
        const { velocity, distance } = data;
        const animationTime = distance / velocity;
        getCurrentVelocityObj[i] = animationTime;
      }),
    );
  }
  await Promise.all(promises);

  return getCurrentVelocityObj;
}
