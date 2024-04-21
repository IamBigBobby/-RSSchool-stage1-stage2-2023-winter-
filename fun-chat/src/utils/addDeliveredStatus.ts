export default function addDeliveredStatus(status: boolean) {
  console.log("добавил статус ", status);
  const allSendStatus = document.querySelectorAll(".messenger__send-satus");
  const lastSendStatus = allSendStatus[allSendStatus.length - 1];
  console.log(lastSendStatus);
  if (status === true) {
    lastSendStatus.textContent = "delivered";
  }
}
