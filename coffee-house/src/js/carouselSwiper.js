import { animationIntervalId } from "./paginationLogic.js";
export {touchSlider};

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
    clearInterval(animationIntervalId);

    const firstTouch = event.touches[0];
    startX = firstTouch.clientX;
}

function touchMove(event) {
    if (!startX) {
        return false;
    }
    endX = event.touches[0].clientX;
    xDiff = startX - endX;
    console.log(startX, endX, xDiff)
}

function touchEnd() {
    if (xDiff > 0) {
        slideRange += 348;

        if (slideRange > 348) {
            slideRange = -348;
        }

        carousel.style.left = -slideRange + 'px';
    }

    if (xDiff < 0) {
        slideRange -= 348;

        if (slideRange < -348) {
            slideRange = 348;
        }

        carousel.style.left = -slideRange + 'px';
    }
}
touchSlider();