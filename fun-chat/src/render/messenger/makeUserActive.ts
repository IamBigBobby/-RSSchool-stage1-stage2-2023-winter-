import { UsersStatus } from "../../interfaces/interfaces";

export default function makeUserActive(user: UsersStatus): void {
  console.log(user);
  const allUsers = document.querySelectorAll(".messenger__users-list-element");

  allUsers.forEach((userItem) => {
    console.log(userItem.textContent, user.login);
    if (userItem.textContent === user.login) {
      userItem.classList.remove("messenger__users-list-element_unactive");
    }
  });
}
