import createGreetingsField from './createGreetingsField';
import createInputField from './createInputField';

export default function appStart(): void {
  if (
    localStorage.getItem('IamBigBobby_name') !== null &&
    localStorage.getItem('IamBigBobby_surname') !== null
  ) {
    createGreetingsField();
  } else {
    createInputField();
  }
}
