import sendMessage from "../../utils/buttons/sendMessage";
import closeEditMenu from "../../utils/closeEditMenu";
import editMessage from "../../utils/editMessage";
import findUser from "../../utils/inputs/findUser";
import tapMessage from "../../utils/inputs/tapMessage";
import openEditMenu from "../../utils/openEditMenu";
import selectEditMenu from "../../utils/selectEditMenu";

export default function eventsMessengerField(): void {
  findUser();
  tapMessage();
  sendMessage();
  openEditMenu();
  selectEditMenu();
  closeEditMenu();
  editMessage();
}
