import WebSocketClient from "../api/server";
import parseData from "../utils/parseData";
import showPopUp from "../utils/popUp";

const client = new WebSocketClient();

client.connect();

client.showMessageData((data) => {
  const parsedData = parseData(data);
  const errorStatus = parsedData.type;
  const errorType = parsedData.payload.error;

  if (errorStatus === "ERROR") {
    showPopUp(errorType);
  } else {
    window.location.pathname = "./messenger";
  }
});

export default client;
