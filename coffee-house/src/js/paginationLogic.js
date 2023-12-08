
export { updateProgressBar };
import { moveSliderLeft } from "./carouselSlider.js";

let indicator = document.querySelector('.pagination__stick_active .pagination__indicator');
let activeStick = document.querySelector('.pagination__stick_active');
const slideRight = document.querySelector('.carousel__slide_right');
const slideLeft = document.querySelector('.carousel__slide_left');
let animationIntervalId;

function updateProgressBar(indicator, activeStick) {
    let width = 1;
    let direction = 1;
    let id;

    function progressStatus() {
        let nextActivePagination = activeStick.nextElementSibling;
        if (width >= 100 || width <= 0) {
            direction *= -1;
            clearInterval(id);
            id = setInterval(progressStatus, direction === 1 ? 100 : 5);
        }
        if (width <= 0) {
            moveSliderLeft();

            if (nextActivePagination !== null) {
                activeStick.classList.remove('pagination__stick_active');
                nextActivePagination.classList.add('pagination__stick_active');
                let nextIndicator = nextActivePagination.querySelector('.pagination__indicator');

                clearInterval(id);

                updateProgressBar(nextIndicator, nextActivePagination);
            } else {
                let paginationContainer = document.querySelector('.pagination');
                activeStick.classList.remove('pagination__stick_active');
                let firstActivePagination = paginationContainer.firstElementChild;
                firstActivePagination.classList.add('pagination__stick_active');
                let firstIndicator = firstActivePagination.querySelector('.pagination__indicator');

                clearInterval(id);

                updateProgressBar(firstIndicator, firstActivePagination);
            }
        }

        width += direction;
        indicator.style.width = `${width}%`;
    }
    id = setInterval(progressStatus, 150);
    animationIntervalId = id;
}

slideRight.addEventListener('click', function () {
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
});

slideLeft.addEventListener('click', function () {
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
});

updateProgressBar(indicator, activeStick);
