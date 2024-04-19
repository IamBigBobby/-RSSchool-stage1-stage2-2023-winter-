import { UsersStatus } from "../../interfaces/interfaces";

export default function makeUserInactive(user: UsersStatus): void {
  const allUsers = document.querySelectorAll(".messenger__users-list-element");

  allUsers.forEach((userItem) => {
    if (userItem.textContent === user.login) {
      userItem.classList.add("messenger__users-list-element_unactive");
    }
  });
}
