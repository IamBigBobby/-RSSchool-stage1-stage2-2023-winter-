import { UsersStatus } from "../../interfaces/interfaces";
import addElementsToParent from "../../utils/addElementsToParent";

export default function addNewUser(user: UsersStatus) {
  console.log(user);
  const allUser = document.querySelectorAll(".messenger__users-list-element");
  console.log(allUser);
  let newUserBoolean = true;

  allUser.forEach((userItem) => {
    console.log(userItem.textContent);
    if (userItem.textContent === user.login) {
      newUserBoolean = false;
    }
  });

  if (newUserBoolean) {
    const messengerUsersContainer = document.querySelector(
      ".messenger__users-list",
    ) as HTMLUListElement;

    const newUserData = [
      {
        tagName: "li",
        classNames: [
          "messenger__users-list-element",
          "messenger__users-list-element_active",
        ],
        textContent: `${user.login}`,
      },
    ];
    addElementsToParent(messengerUsersContainer, newUserData);
  }
}
