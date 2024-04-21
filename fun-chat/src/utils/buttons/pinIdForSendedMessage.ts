export default function pinIdForSendedMessage(id: string) {
  console.log("give id for message", id);
  const messengerStatusCreated = document.querySelectorAll(
    ".messenger__message",
  );
  const lastMessengerStatus = messengerStatusCreated[
    messengerStatusCreated.length - 1
  ] as HTMLElement;
  lastMessengerStatus.id = id;
  console.log(lastMessengerStatus);
}
