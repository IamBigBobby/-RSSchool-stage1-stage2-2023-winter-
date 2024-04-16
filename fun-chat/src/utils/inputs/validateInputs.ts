export default function validateInputs(
  inputName: HTMLInputElement,
  inputPassword: HTMLInputElement,
): void {
  const logInButton = document.querySelector(
    ".log-in-button",
  ) as HTMLButtonElement;

  function loginInputValidate(): boolean {
    let status: boolean = true;
    if (inputName.value.length < 4) {
      inputName.parentElement?.classList.remove("invalid_value_register");
      inputName.parentElement?.classList.add("invalid_value_count");
      status = false;
      return status;
    }
    if (inputName.value.length >= 4 || inputName.value.length === 0) {
      inputName.parentElement?.classList.remove("invalid_value_count");
    }
    if (!/[A-ZА-Я]/.test(inputName.value)) {
      inputName.parentElement?.classList.add("invalid_value_register");
      status = false;
      return status;
    }
    if (/[A-ZА-Я]/.test(inputName.value)) {
      inputName.parentElement?.classList.remove("invalid_value_register");
    }
    return status;
  }

  function passwordInputValidate(): boolean {
    let status: boolean = true;
    if (inputPassword.value.length < 4) {
      inputPassword.parentElement?.classList.remove("invalid_value_register");
      inputPassword.parentElement?.classList.add("invalid_value_count");
      status = false;
      return status;
    }
    if (inputPassword.value.length >= 4 || inputPassword.value.length === 0) {
      inputPassword.parentElement?.classList.remove("invalid_value_count");
    }
    if (!/[A-ZА-Я]/.test(inputPassword.value)) {
      inputPassword.parentElement?.classList.add("invalid_value_register");
      status = false;
      return status;
    }
    if (/[A-ZА-Я]/.test(inputPassword.value)) {
      inputPassword.parentElement?.classList.remove("invalid_value_register");
    }
    return status;
  }

  function updateButtonState() {
    if (loginInputValidate() && passwordInputValidate()) {
      logInButton.classList.remove("log-in-button_disabled");
    } else {
      logInButton.classList.add("log-in-button_disabled");
    }
  }

  function validateCommon(): void {
    updateButtonState();
  }

  inputName.addEventListener("input", validateCommon);
  inputPassword.addEventListener("input", validateCommon);
  inputName.addEventListener("input", loginInputValidate);
  inputPassword.addEventListener("input", passwordInputValidate);
}
