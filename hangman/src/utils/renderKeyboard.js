export { renderKeyboard, renderWrapperKeyboard };

function renderWrapperKeyboard() {
  let keyboard = document.createElement('div');
  keyboard.className = 'keyboard';

  let main = document.querySelector('.main');
  main.append(keyboard);
}

function renderKeyboard(disabledKeys) {
  const keyboardArr = [
    81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76,
    90, 88, 67, 86, 66, 78, 77,
  ];

  let out = '';

  for (let i = 0; i < keyboardArr.length; i++) {
    if (disabledKeys) {
      if (disabledKeys.includes(keyboardArr[i])) {
        out += `<div class="keyboard__key keyboard__key_disabled" data=${
          keyboardArr[i]
        }>${String.fromCharCode(keyboardArr[i])}</div>`;
      } else {
        out += `<div class="keyboard__key" data=${
          keyboardArr[i]
        }>${String.fromCharCode(keyboardArr[i])}</div>`;
      }
    } else {
      out += `<div class="keyboard__key" data=${
        keyboardArr[i]
      }>${String.fromCharCode(keyboardArr[i])}</div>`;
    }
  }

  document.querySelector('.keyboard').innerHTML = out;

  let disabledKey = document.querySelectorAll(
    '.keyboard__key.keyboard__key_disabled',
  );

  disabledKey.forEach((key) => {
    key.style.pointerEvents = 'none';
  });
  console.log(disabledKey);
}
