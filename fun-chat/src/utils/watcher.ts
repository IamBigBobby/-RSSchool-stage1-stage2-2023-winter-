import client from "../constants/currentClient";
import renderActiveUsers from "../render/messenger/renderUsers";

export default function watcher() {
  client.showMessageData((data) => {
    const dataPares = JSON.parse(data);
    const typeData = dataPares.type;
    console.log("data from watcher :", dataPares);
    // console.log("message from listener: ", dataPares.type);
    if (typeData === "USER_ACTIVE") {
      // console.log("Active arr :", dataPares.payload.users);
      renderActiveUsers(dataPares.payload.users);
    }
  });
}
