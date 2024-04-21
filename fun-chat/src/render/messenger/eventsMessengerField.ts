import sendMessage from "../../utils/buttons/sendMessage";
import closeEditMenu from "../../utils/closeEditMenu";
import findUser from "../../utils/inputs/findUser";
import tapMessage from "../../utils/inputs/tapMessage";
import openEditMenu from "../../utils/openEditMenu";

export default function eventsMessengerField(): void {
  findUser();
  tapMessage();
  sendMessage();
  openEditMenu();
  closeEditMenu();
}
