export const getCurrentVelocityObj: { [key: string]: number } = {};

export function clearCurrentVelocityObj() {
  const keys = Object.keys(getCurrentVelocityObj);
  keys.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(getCurrentVelocityObj, key)) {
      delete getCurrentVelocityObj[key];
    }
  });
}
