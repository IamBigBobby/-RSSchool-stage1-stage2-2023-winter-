import destroyWindowChat from "./destroyWindowChat";

export default function selectUser(event: Event) {
  console.log(event.target);
  destroyWindowChat();
}
