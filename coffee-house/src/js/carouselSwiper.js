import { updateProgressBarVariable } from "./paginationLogic";

let slideRange = -348;
let startX;
let endX;
let xDiff;
const carousel = document.querySelector('.carousel__container');

function touchSlider() {    
    carousel.addEventListener('touchstart', touchStart);
    carousel.addEventListener('touchmove', touchMove);
    carousel.addEventListener('touchend', touchEnd);
}

function touchStart(event) {
    console.log('touchStart');
    event.preventDefault();
    
    updateProgressBarVariable.pauseAnimation();
    const firstTouch = event.touches[0];
    startX = firstTouch.clientX;
}

function touchMove(event) {
    endX = event.touches[0].clientX;
    xDiff = startX - endX;
    console.log('touchMove' ,startX, endX, xDiff)
}

function touchEnd() {
    if (xDiff > 10) {
        slideRange += 348;

        if (slideRange > 348) {
            slideRange = -348;
        }

        carousel.style.left = -slideRange + 'px';
    }

    if (xDiff < -10) {
        slideRange -= 348;

        if (slideRange < -348) {
            slideRange = 348;
        }

        carousel.style.left = -slideRange + 'px';
    }

    updateProgressBarVariable.resumeAnimation();
}

touchSlider();
