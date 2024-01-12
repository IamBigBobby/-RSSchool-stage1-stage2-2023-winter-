export { popupLose };

function popupLose(word) {
  let popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
  <div class="popup__content">
    <div class="popup__content-info">Unfortunately you wasted your attempts, the answer was ${word}.</div>
    <button class="button">Next try</button>
  </div>
  `;
  document.body.prepend(popup);
}
