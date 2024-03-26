import EngineData from "../api/getDataEngine";
// import GarageData from "../api/getDataGarage";

export default async function getCurrentVelocity() {
  const garageLength = Array.from(document.querySelectorAll(".track")).length;
  const newEngineData = new EngineData();
  const getCurrentVelocityObj: { [key: number]: number } = {};

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

  console.log(getCurrentVelocityObj);
}

//   garageLenght
//     .then((cars) => {
//       const countCars = cars.length;
//       return countCars;
//     })
//     .then((countCars) => {
//       for (let i = 1; i <= countCars; i += 1) {
//         const newEngineData = new EngineData();
//         newEngineData.switchEngien(i, "started").then((data) => {
//           const { velocity } = data;
//           const { distance } = data;
//           const animationTime = distance / velocity;
//           getCurrentVelocityObj[i] = animationTime;
//         });
//       }
//     });

//   console.log(getCurrentVelocityObj);

// newEngineData
//   .switchEngien(index + 1, "started")
//   .then((data) => {
//     console.log(data);
//     const { velocity } = data;
//     const { distance } = data;

//     const animationTime = distance / velocity;

//     return animationTime;
//   })
//   .then((animationTime) => {
//     console.log(animationTime, index + 1);
//   });
