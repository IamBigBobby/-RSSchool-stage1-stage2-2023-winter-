export default function pinIdForSendedMessage(id: string) {
  const messengerStatusCreated = document.querySelectorAll(
    ".messenger__message",
  );
  const lastMessengerStatus = messengerStatusCreated[
    messengerStatusCreated.length - 1
  ] as HTMLElement;
  lastMessengerStatus.id = id;
}
