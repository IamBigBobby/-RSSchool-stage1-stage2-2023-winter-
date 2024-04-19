import { UsersStatus } from "../../interfaces/interfaces";
import addElementsToParent from "../../utils/addElementsToParent";

export default function renderUnactiveUsers(activeUsers: UsersStatus[]) {
  //   const userInfo = sessionStorage.getItem("userData_iambigbobby") as string;
  //   const userParsed = JSON.parse(userInfo);
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
      },
    ];
    addElementsToParent(messengerUsersContainer, userData);
  });
}
