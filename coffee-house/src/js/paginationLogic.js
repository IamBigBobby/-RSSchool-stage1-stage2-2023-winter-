export {paginationSLideLeft, paginationSLideRight, animateIndicator}
import { moveSliderLeft, moveSliderRight } from "./carouselSlider.js";

const paginationContainer = document.querySelector('.pagination');
let indicator = document.querySelector('.pagination__indicator');
let animationStopped = false;
let leftValue = -45;
const step = 2;
const intervalUp = 400;
const intervalDown = 1;

async function paginationSLideRight() {
    let activePagination = document.querySelector('.pagination__stick_active');

    if (activePagination.nextElementSibling === null) {
        paginationContainer.lastElementChild.classList.toggle('pagination__stick_active');
        paginationContainer.firstElementChild.classList.toggle('pagination__stick_active');

        leftValue = -45;
        await animateIndicator(paginationContainer.firstElementChild.querySelector('.pagination__indicator'));
        animationStopped = true;
        return;
    }

    activePagination.classList.toggle('pagination__stick_active');
    activePagination.nextElementSibling.classList.toggle('pagination__stick_active');

    leftValue = -45;
    await animateIndicator(activePagination.nextElementSibling.querySelector('.pagination__indicator'));
    animationStopped = true;
}

async function paginationSLideLeft() {
    let activePagination = document.querySelector('.pagination__stick_active');
    const paginationContainer = document.querySelector('.pagination');

    if (activePagination.previousElementSibling === null) {
        paginationContainer.firstElementChild.classList.toggle('pagination__stick_active');
        paginationContainer.lastElementChild.classList.toggle('pagination__stick_active');

        leftValue = -45;
        await animateIndicator(paginationContainer.lastElementChild.querySelector('.pagination__indicator'));
        animationStopped = true;
        return;
    }
    activePagination.classList.toggle('pagination__stick_active');
    activePagination.previousElementSibling.classList.toggle('pagination__stick_active');

    leftValue = -45;
    await animateIndicator(activePagination.previousElementSibling.querySelector('.pagination__indicator'));
    animationStopped = true;
}

    function animateIndicator(animationIndicator) {
    animationStopped = false;

    animationIndicator.style.left = leftValue + 'px';

    async function animateForward() {

        if (animationStopped) {
            setTimeout(animateBackward, intervalDown);
            animationStopped = false;
            leftValue = -45;
            return;
        }

        leftValue += step;
        animationIndicator.style.left = leftValue + 'px';

        if (leftValue < 5 && !animationStopped) {
            setTimeout(animateForward, intervalUp);
        } else {
            // await paginationSLideRight();
            setTimeout(animateBackward, intervalDown);
            moveSliderLeft();
            return;
        }
        // console.log(leftValue);
    }

    function animateBackward() {
        leftValue -= step;
        animationIndicator.style.left = leftValue + 'px';

        if (leftValue > -45 && !animationStopped) {
            setTimeout(animateBackward, intervalDown);
        }
    }
    animateForward();
}

animateIndicator(indicator);








