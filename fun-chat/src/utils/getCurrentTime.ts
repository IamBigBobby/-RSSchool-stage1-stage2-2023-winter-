export default function getCurrentTime(time: Date): string {
  const monthsArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = String(time.getDate());
  const year = String(time.getFullYear());
  const month = time.getMonth();
  const hour = String(time.getHours());
  const minute = String(time.getMinutes());
  const second = String(time.getSeconds());

  return `${date} ${monthsArr[month]} ${year} ${hour}:${minute}:${second}`;
}
