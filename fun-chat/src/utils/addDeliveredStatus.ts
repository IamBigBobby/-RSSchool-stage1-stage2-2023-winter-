import scrollBottom from "./scrollBottom";

export default function addDeliveredStatus(status: boolean) {
  const allSendStatus = document.querySelectorAll(".messenger__send-satus");
  const lastSendStatus = allSendStatus[allSendStatus.length - 1];
  if (status === true) {
    lastSendStatus.textContent = "delivered";
    scrollBottom();
  }
}
