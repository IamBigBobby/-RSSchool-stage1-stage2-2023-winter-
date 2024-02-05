export { toggleTheme };

function toggleTheme(event) {
  console.log(event.target.textContent);
  const currentTheme = event.target.textContent;
  const tableWrapper = document.querySelector(
    ".wrapper-nonograms__table-wrapper"
  );

  if (currentTheme === "theme: light") {
    document.body.style.backgroundColor = "grey";
    document.body.style.color = "white";
    tableWrapper.style.backgroundColor = "grey";

    event.target.innerHTML = "theme: dark";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    tableWrapper.style.backgroundColor = "white";

    event.target.innerHTML = "theme: light";
  }
}
