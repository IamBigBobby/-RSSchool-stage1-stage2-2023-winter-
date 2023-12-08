export {moveSlider, moveSliderLeft, moveSliderRight, slideLeft, slideRight, carousel};
import { updateProgressBar, animationIntervalId } from "./paginationLogic.js";

const slideRight = document.querySelector('.carousel__slide_right');
const slideLeft = document.querySelector('.carousel__slide_left');
const carousel = document.querySelector('.carousel__container');
let slideRange = -348;

function moveSlider() {
    slideRight.addEventListener('click', moveSliderLeft);
    slideRight.addEventListener('click', breakPaginationRight)

    slideLeft.addEventListener('click', moveSliderRight);
    slideLeft.addEventListener('click', breakPaginationLeft);
}
function moveSliderLeft() {
    slideRange += 348;
        
    if (slideRange > 348) {
        slideRange = -348;
    }
    carousel.style.left = -slideRange + 'px';
    console.log(`left-slide:${slideRange}`);


}
function moveSliderRight() {
    slideRange -= 348;
        
    if (slideRange < -348) {
        slideRange = 348;
    }
    carousel.style.left = -slideRange + 'px';
    console.log(`right-slide:${slideRange}`);
}

function breakPaginationRight() {

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
}

function breakPaginationLeft() {
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
}
moveSlider();