import validateInputs from "../../utils/inputs/validateInputs";

export default function eventsLoginFiled(): void {
  const inputName = document.querySelector(".input-login") as HTMLInputElement;
  const inputPassword = document.querySelector(
    ".input-password",
  ) as HTMLInputElement;

  validateInputs(inputName, inputPassword);
}
