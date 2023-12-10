export { updateProgressBar, animationIntervalId, updateProgressBarVariable, animationPaused };
import { moveSliderLeft } from "./carouselSlider.js";

let indicator = document.querySelector('.pagination__stick_active .pagination__indicator');
let activeStick = document.querySelector('.pagination__stick_active');

let animationIntervalId;
let animationPaused = false;

let updateProgressBarVariable = updateProgressBar(indicator, activeStick);

function updateProgressBar(indicator, activeStick) {
    let direction = 1;
    let width = 1;
    let id;

    function progressStatus() {
        if (!animationPaused) {
            let nextActivePagination = activeStick ? activeStick.nextElementSibling : null;
            if (width >= 100 || width <= 0) {
                direction *= -1;
                clearInterval(id);
                id = setInterval(progressStatus, direction === 1 ? 100 : 5);
            }
            if (width <= 0) {
                moveSliderLeft();

                if (nextActivePagination !== null) {
                    activeStick && activeStick.classList.remove('pagination__stick_active');
                    nextActivePagination.classList.add('pagination__stick_active');
                    let nextIndicator = nextActivePagination.querySelector('.pagination__indicator');

                    clearInterval(id);

                    updateProgressBar(nextIndicator, nextActivePagination);
                } else {
                    let paginationContainer = document.querySelector('.pagination');
                    activeStick && activeStick.classList.remove('pagination__stick_active');
                    let firstActivePagination = paginationContainer ? paginationContainer.firstElementChild : null;
                    if (firstActivePagination) {
                        firstActivePagination.classList.add('pagination__stick_active');
                        let firstIndicator = firstActivePagination.querySelector('.pagination__indicator');

                        clearInterval(id);

                        updateProgressBar(firstIndicator, firstActivePagination);
                    }
                }
            }
            if (indicator) {
                width += direction;
                indicator.style.width = `${width}%`;
            }
            return;
        }
    }

    id = setInterval(progressStatus, 150);
    animationIntervalId = id;

    return {
        pauseAnimation: function () {
            animationPaused = true;
        },
        resumeAnimation: function () {
            animationPaused = false;
        }
    };
}

