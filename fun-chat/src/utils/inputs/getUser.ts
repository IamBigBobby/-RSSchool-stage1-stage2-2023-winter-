import client from "../../constants/currentClient";

export default function getUser(): void {
  const firstName = (
    document.querySelector(".input-first-name") as HTMLInputElement
  )?.value;
  const secondName = (
    document.querySelector(".input-second-name") as HTMLInputElement
  )?.value;

  client.addUser(firstName, secondName);
}
