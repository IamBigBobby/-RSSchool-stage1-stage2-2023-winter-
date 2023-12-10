import { slideRange } from "./carouselSlider.js";
import { updateProgressBarVariable, updateProgressBar, animationIntervalId } from "./paginationLogic.js";

// let slideRange = -348;
let startX;
let endX;
let xDiff;
const carousel = document.querySelector('.carousel__container');

function touchSlider() {
    if (carousel) {
        carousel.addEventListener('touchstart', touchStart);
        carousel.addEventListener('touchmove', touchMove);
        carousel.addEventListener('touchend', touchEnd);
        carousel.addEventListener('touchend', breakPaginationRightTouch);
        carousel.addEventListener('touchend', breakPaginationLeftTouch);
    }
    return;    
}

function touchStart(event) {
    event.preventDefault();
    
    updateProgressBarVariable.pauseAnimation();
    const firstTouch = event.touches[0];
    startX = firstTouch.clientX;
}

function touchMove(event) {
    endX = event.touches[0].clientX;
    xDiff = startX - endX;

    console.log(xDiff);
}

function touchEnd() {
    if (xDiff > 20 ) {
        slideRange += 348;
    }
    
    if (xDiff < -20) {
        slideRange -= 348;
    }

    if (slideRange > 348) {
        slideRange = -348;
    }
    
    if (slideRange < -348) {
        slideRange = 348;
    }

    carousel.style.left = -slideRange + 'px';
    updateProgressBarVariable.resumeAnimation();
}


function breakPaginationRightTouch() {
    if (xDiff > 20) {
        clearInterval(animationIntervalId);

        let currentPagination = document.querySelector('.pagination__stick_active');
        let currentIndicator = document.querySelector('.pagination__stick_active .pagination__indicator');

        let width = 1;
        let direction = -1;

        function animateWidth() {
            width += direction;
            currentIndicator.style.width = `${width}%`;

            if (width > 0) {
                requestAnimationFrame(animateWidth);
            } else {
                let nextCurrentPagination = currentPagination.nextElementSibling;

                if (nextCurrentPagination !== null) {
                    currentPagination.classList.remove('pagination__stick_active');
                    nextCurrentPagination.classList.add('pagination__stick_active');
                    let nextIndicator = nextCurrentPagination.querySelector('.pagination__indicator');

                    updateProgressBar(nextIndicator, nextCurrentPagination);
                } else {
                    let paginationContainer = document.querySelector('.pagination');
                    currentPagination.classList.remove('pagination__stick_active');
                    let firstActivePagination = paginationContainer.firstElementChild;
                    firstActivePagination.classList.add('pagination__stick_active');
                    let firstIndicator = firstActivePagination.querySelector('.pagination__indicator');

                    updateProgressBar(firstIndicator, firstActivePagination);
                }
            }
        }

        animateWidth();

        xDiff = 0;
    }
}

function breakPaginationLeftTouch() {
    if (xDiff < -20) {
        clearInterval(animationIntervalId);

        let currentPagination = document.querySelector('.pagination__stick_active');
        let currentIndicator = document.querySelector('.pagination__stick_active .pagination__indicator');

        let width = 1;
        let direction = -1;

        function animateWidth() {
            width += direction;
            currentIndicator.style.width = `${width}%`;

            if (width > 0) {
                requestAnimationFrame(animateWidth);
            } else {
                let previousCurrentPagination = currentPagination.previousElementSibling;

                if (previousCurrentPagination !== null) {
                    currentPagination.classList.remove('pagination__stick_active');
                    previousCurrentPagination.classList.add('pagination__stick_active');
                    let nextIndicator = previousCurrentPagination.querySelector('.pagination__indicator');

                    updateProgressBar(nextIndicator, previousCurrentPagination);
                } else {
                    let paginationContainer = document.querySelector('.pagination');
                    currentPagination.classList.remove('pagination__stick_active');
                    let lastActivePagination = paginationContainer.lastElementChild;
                    lastActivePagination.classList.add('pagination__stick_active');
                    let indicators = document.querySelectorAll('.pagination__indicator');
                    let lastIndicator = indicators[indicators.length - 1];

                    updateProgressBar(lastIndicator, lastActivePagination);
                }
            }
        }

        animateWidth();

        xDiff = 0;
    }
}

touchSlider();
