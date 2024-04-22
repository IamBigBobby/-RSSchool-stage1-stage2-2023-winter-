import scrollBottom from "./scrollBottom";

export default function addTrueDeliveredStatus(id: string) {
  const message = document.querySelector(`[id="${id}"]`);
  const messageStatus = message?.querySelector(
    ".messenger__send-satus",
  ) as HTMLElement;
  messageStatus.textContent = "delivered";
  scrollBottom();
}
