import client from "../constants/currentClient";
import makeUserActive from "../render/messenger/makeUserActive";
import makeUserInactive from "../render/messenger/makeUserInactive";
import renderActiveUsers from "../render/messenger/renderActiveUsers";
import renderUnactiveUsers from "../render/messenger/renderUnactiveUsers";

export default function watcher() {
  client.showMessageData((data) => {
    const dataPares = JSON.parse(data);
    const typeData = dataPares.type;
    console.log("data from watcher :", dataPares);
    if (typeData === "USER_ACTIVE") {
      renderActiveUsers(dataPares.payload.users);
    }
    if (typeData === "USER_INACTIVE") {
      renderUnactiveUsers(dataPares.payload.users);
    }
    if (typeData === "USER_EXTERNAL_LOGIN") {
      makeUserActive(dataPares.payload.user);
    }
    if (typeData === "USER_EXTERNAL_LOGOUT") {
      makeUserInactive(dataPares.payload.user);
    }
  });
}
