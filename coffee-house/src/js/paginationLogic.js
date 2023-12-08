export { updateProgressBar, animationIntervalId };
import { moveSliderLeft } from "./carouselSlider.js";

let indicator = document.querySelector('.pagination__stick_active .pagination__indicator');
let activeStick = document.querySelector('.pagination__stick_active');

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

updateProgressBar(indicator, activeStick);
