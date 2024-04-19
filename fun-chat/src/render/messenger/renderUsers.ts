import { UsersStatus } from "../../interfaces/interfaces";
import addElementsToParent from "../../utils/addElementsToParent";

export default function renderActiveUsers(activeUsers: UsersStatus[]) {
  const userInfo = sessionStorage.getItem("userData_iambigbobby") as string;
  const userParsed = JSON.parse(userInfo);
  const messengerUsersContainer = document.querySelector(
    ".messenger__users-list",
  ) as HTMLUListElement;
  console.log("data in render function: ", activeUsers);
  activeUsers.forEach((user) => {
    console.log(user.login, userParsed.login);
    if (user.login !== userParsed.login) {
      const userData = [
        {
          tagName: "li",
          className: ["messenger__users-list-element"],
          textContent: `${user.login}`,
        },
      ];
      addElementsToParent(messengerUsersContainer, userData);
    }
  });
}
