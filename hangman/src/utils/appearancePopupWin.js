export { popupWin };

function popupWin(word) {
  let popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
  <div class="popup__content">
    <div class="popup__content-info">Good game! You were right, the answer was ${word}!</div>
    <button class="button">Next question</button>
  </div>
  `;
  document.body.prepend(popup);
}
