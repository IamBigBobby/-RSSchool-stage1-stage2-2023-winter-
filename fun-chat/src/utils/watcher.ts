import client from "../constants/currentClient";

export default function watcher() {
  client.showMessageData((data) => {
    console.log("message from listener: ", data);
  });
}
