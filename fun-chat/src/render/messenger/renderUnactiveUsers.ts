import { UsersStatus } from "../../interfaces/interfaces";
import addElementsToParent from "../../utils/addElementsToParent";
import selectUser from "../../utils/selectUser";

export default function renderUnactiveUsers(activeUsers: UsersStatus[]) {
  const messengerUsersContainer = document.querySelector(
    ".messenger__users-list",
  ) as HTMLUListElement;
  activeUsers.forEach((user) => {
    const userData = [
      {
        tagName: "li",
        classNames: [
          "messenger__users-list-element",
          "messenger__users-list-element_unactive",
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
    addElementsToParent(messengerUsersContainer, userData);
  });
}
