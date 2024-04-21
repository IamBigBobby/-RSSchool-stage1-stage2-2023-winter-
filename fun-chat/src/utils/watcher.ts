import client from "../constants/currentClient";
import addNewUser from "../render/messenger/addNewUser";
import makeUserActive from "../render/messenger/makeUserActive";
import makeUserInactive from "../render/messenger/makeUserInactive";
import renderActiveUsers from "../render/messenger/renderActiveUsers";
import renderFetchingMessage from "../render/messenger/renderFetchingMessage";
import renderResponseMessage from "../render/messenger/renderResponseMessage";
import renderUnactiveUsers from "../render/messenger/renderUnactiveUsers";
import addDeliveredStatus from "./addDeliveredStatus";
import addTrueDeliveredStatus from "./addTrueDiliveredStatus";
import pinIdForSendedMessage from "./pinIdForSendedMessage";

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
    if (typeData === "USER_EXTERNAL_LOGIN") {
      addNewUser(dataPares.payload.user);
    }
    if (typeData === "MSG_SEND") {
      if (dataPares.id === null) {
        renderResponseMessage(dataPares.payload.message);
      } else {
        pinIdForSendedMessage(dataPares.payload.message.id);
        addDeliveredStatus(dataPares.payload.message.status.isDelivered);
      }
    }
    if (typeData === "MSG_FROM_USER") {
      renderFetchingMessage(dataPares.payload.messages);
    }
    if (typeData === "MSG_DELIVER") {
      addTrueDeliveredStatus(dataPares.payload.message.id);
    }
  });
}
