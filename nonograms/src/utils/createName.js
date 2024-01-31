export { createName };

function createName(arrName) {
  const nameNonogram = document.createElement("div");
  nameNonogram.className = "name-nonograms";
  nameNonogram.innerHTML = arrName;

  const wrapper = document.querySelector(".wrapper-nonograms");
  wrapper.prepend(nameNonogram);
}
