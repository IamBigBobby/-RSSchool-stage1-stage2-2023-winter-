export default function logOutButtonHandler(
  logInButton: HTMLButtonElement,
): void {
  logInButton.addEventListener("click", () => {
    console.log("logOut");
  });
}
