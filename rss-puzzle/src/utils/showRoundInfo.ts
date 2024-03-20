import { currentDifficulty } from './difficulty';
import { GetCurrentData } from './getData';
import makeNextRound from './makeNextRound';
import { currentRound } from './rounds';

export default function showRoundInfo(): void {
  const infoBlock = document.querySelector('.info-after-round');

  if (infoBlock) {
    const infoBlockWrapperCreate = document.createElement('div');
    infoBlockWrapperCreate.classList.add('info-block-wrapper');

    infoBlock.prepend(infoBlockWrapperCreate);

    const newData = new GetCurrentData(currentDifficulty, currentRound);

    Promise.all([
      newData.getImg(),
      newData.getAuthor(),
      newData.getYear(),
      newData.getName(),
    ]).then(([img, author, year, name]) => {
      const infoBlockWrapper = document.querySelector('.info-block-wrapper');

      if (infoBlockWrapper) {
        const imgBlock = document.createElement('img');
        imgBlock.classList.add('img-result');
        imgBlock.src = `https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/images/${img}`;

        imgBlock.style.display = 'block';
        imgBlock.style.width = '500px';
        imgBlock.style.height = 'auto';

        const aboutBlock = document.createElement('div');
        aboutBlock.classList.add('about-result');
        aboutBlock.textContent = `name:${name} autor:${author} year:${year}`;

        const nextRoundButton = document.createElement('button');
        nextRoundButton.classList.add('next-round-button');
        nextRoundButton.style.display = 'block';
        nextRoundButton.textContent = 'Next round';

        infoBlockWrapper.prepend(nextRoundButton);
        infoBlockWrapper.prepend(aboutBlock);
        infoBlockWrapper.prepend(imgBlock);

        makeNextRound();
      }
    });
  }
}
