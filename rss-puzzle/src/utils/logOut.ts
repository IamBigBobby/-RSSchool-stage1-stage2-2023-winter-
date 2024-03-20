import createInputField from './createInputField';
import destroyPage from './destroyPage';

export default function logOut(): void {
  const logOutButton = document.querySelector('.button-log-out');

  if (logOutButton) {
    logOutButton.addEventListener('click', () => {
      localStorage.removeItem('IamBigBobby_name');
      localStorage.removeItem('IamBigBobby_surname');
      destroyPage();
      createInputField();
    });
  }
}
