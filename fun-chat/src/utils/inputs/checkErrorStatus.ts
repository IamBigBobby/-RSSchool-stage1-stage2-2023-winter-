import client from "../../constants/currentClient";
import eventsMessengerField from "../../render/messenger/eventsMessengerField";
import renderMessengerField from "../../render/messenger/messengerField";
import destroyPage from "../destroyPage";
import parseData from "../parseData";
import showPopUp from "../popUpError";
import renderWrapper from "../renderWrapper";

function errorPromise() {
  return new Promise((resolve) => {
    let errorStatusBoolean = false;
    client.showMessageData((data) => {
      const parsedData = parseData(data);
      const errorStatus = parsedData.type;
      const errorType = parsedData.payload.error;

      if (errorStatus === "ERROR") {
        errorStatusBoolean = true;
        showPopUp(errorType);
      }
      resolve(errorStatusBoolean);
    });
  });
}

export default function checkErrorStatus(): void {
  errorPromise().then((errorStatusBoolean) => {
    if (errorStatusBoolean === false) {
      destroyPage();
      window.history.replaceState(null, "", "message");
      renderWrapper("message", renderMessengerField);
      eventsMessengerField();
    }
  });
}
