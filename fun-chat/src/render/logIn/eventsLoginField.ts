// import logInButtonHandler from "../../utils/buttons/logIn";
import validateInputs from "../../utils/inputs/validateInputs";

export default function eventsLoginFiled(): void {
  // const logInButton = document.querySelector(
  //   ".log-in-button",
  // ) as HTMLButtonElement;

  // logInButtonHandler(logInButton);

  const inputName = document.querySelector(".input-login") as HTMLInputElement;
  const inputPassword = document.querySelector(
    ".input-password",
  ) as HTMLInputElement;

  validateInputs(inputName, inputPassword);
}
