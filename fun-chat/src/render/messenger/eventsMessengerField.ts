import sendMessage from "../../utils/buttons/sendMessage";
import findUser from "../../utils/inputs/findUser";
import tapMessage from "../../utils/inputs/tapMessage";

export default function eventsMessengerField(): void {
  findUser();
  tapMessage();
  sendMessage();
}
