export default function logInButtonHandler(
  logInButton: HTMLButtonElement,
): void {
  logInButton.addEventListener("click", () => {
    console.log("logIn");
  });
}
