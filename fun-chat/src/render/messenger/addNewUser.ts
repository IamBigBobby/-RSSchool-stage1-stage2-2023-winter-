import { UsersStatus } from "../../interfaces/interfaces";
import addElementsToParent from "../../utils/addElementsToParent";
import selectUser from "../../utils/selectUser";

export default function addNewUser(user: UsersStatus) {
  const allUser = document.querySelectorAll(".messenger__users-list-element");
  let newUserBoolean = true;

  allUser.forEach((userItem) => {
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
        eventListener: {
          eventType: "click",
          listener: (event: Event) => {
            selectUser(event);
          },
        },
      },
    ];
    addElementsToParent(messengerUsersContainer, newUserData);
  }
}
