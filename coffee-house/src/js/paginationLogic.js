const paginationContainer = document.querySelector('.pagination');
let indicator = document.querySelector('.pagination__indicator');
let animationStopped = false;
let leftValue = -40;
const step = 2;
const intervalUp = 400;
const intervalDown = 1;

export function paginationSLideRight() {
    let activePagination = document.querySelector('.pagination__stick_active');

    if (activePagination.nextElementSibling === null) {
        paginationContainer.lastElementChild.classList.toggle('pagination__stick_active');
        paginationContainer.firstElementChild.classList.toggle('pagination__stick_active');
        return;
    }

    activePagination.classList.toggle('pagination__stick_active');
    activePagination.nextElementSibling.classList.toggle('pagination__stick_active');

    animateIndicator(activePagination.nextElementSibling.querySelector('.pagination__indicator'));
    animationStopped = true;
}

export function paginationSLideLeft() {
    let activePagination = document.querySelector('.pagination__stick_active');
    const paginationContainer = document.querySelector('.pagination');

    if (activePagination.previousElementSibling === null) {
        paginationContainer.firstElementChild.classList.toggle('pagination__stick_active');
        paginationContainer.lastElementChild.classList.toggle('pagination__stick_active');
        return;
    }
    activePagination.classList.toggle('pagination__stick_active');
    activePagination.previousElementSibling.classList.toggle('pagination__stick_active');
}

export function animateIndicator(animationIndicator) {
    animationIndicator.style.left = leftValue + 'px';

    function animateForward() {
        
        if (animationStopped === true) {
            setTimeout(animateBackward, intervalDown);
            animationStopped = false;
            indicator.style.left = '-40px';
            return;
        }

        leftValue += step;
        animationIndicator.style.left = leftValue + 'px';

        if (leftValue <= 0 && !animationStopped) {
            setTimeout(animateForward, intervalUp);
        } else {
            setTimeout(animateBackward, intervalDown);
            return;
        }
        console.log(leftValue);
    }

    function animateBackward() {
        leftValue -= step;
        animationIndicator.style.left = leftValue + 'px';

        if (leftValue >= -40 && !animationStopped) {
            setTimeout(animateBackward, intervalDown);
        }
    }
    animateForward();
}

animateIndicator(indicator);





