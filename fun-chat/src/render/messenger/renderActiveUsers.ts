import { UsersStatus } from "../../interfaces/interfaces";
import addElementsToParent from "../../utils/addElementsToParent";
import selectUser from "../../utils/selectUser";

export default function renderActiveUsers(activeUsers: UsersStatus[]) {
  const userInfo = sessionStorage.getItem("userData_iambigbobby") as string;
  const userParsed = JSON.parse(userInfo);
  const messengerUsersContainer = document.querySelector(
    ".messenger__users-list",
  ) as HTMLUListElement;
  activeUsers.forEach((user) => {
    if (user.login !== userParsed.login) {
      const userData = [
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
      addElementsToParent(messengerUsersContainer, userData);
    }
  });
}
