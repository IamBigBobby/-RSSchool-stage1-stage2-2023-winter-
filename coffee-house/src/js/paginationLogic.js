export { updateProgressBar };
import { moveSliderLeft } from "./carouselSlider.js";

let indicator = document.querySelector('.pagination__stick_active .pagination__indicator');
let activeStick = document.querySelector('.pagination__stick_active');

function updateProgressBar(indicator, activeStick) {
    console.log('работает');
    let width = 1;
    let direction = 1; // Направление анимации: 1 - вперед, -1 - назад
    let id;

    function progressStatus() {
        if (width >= 100 || width <= 0) {
            // Если достигли 100% или 0%, меняем направление анимации и устанавливаем соответствующий интервал
            direction *= -1;
            clearInterval(id);
            id = setInterval(progressStatus, direction === 1 ? 100 : 5);
        }
        if (width <= 0) {
            moveSliderLeft();
            let nextActivePagination = activeStick.nextElementSibling;
            activeStick.classList.remove('pagination__stick_active');
            nextActivePagination.classList.add('pagination__stick_active');
            let nextIndicator = nextActivePagination.querySelector('.pagination__indicator');
            clearInterval(id);
            console.log(nextActivePagination, nextIndicator);
            updateProgressBar(nextIndicator, nextActivePagination);
        }

        width += direction;
        indicator.style.width = `${width}%`;
    }

    // Инициализация анимации с прямым направлением и интервалом 100 миллисекунд
    id = setInterval(progressStatus, 100);
}

updateProgressBar(indicator, activeStick);





































































// export {paginationSLideLeft, paginationSLideRight, animateIndicator}
// import { moveSliderLeft } from "./carouselSlider.js";

// const paginationContainer = document.querySelector('.pagination');
// let activePagination = document.querySelector('.pagination__stick_active');
// let indicator = activePagination.querySelector('.pagination__indicator');
// let animationStopped = false;
// let leftValue = -45;
// const step = 2;
// const intervalUp = 400;
// const intervalDown = 1;

// async function paginationSLideRight() {

//     if (activePagination.nextElementSibling === null) {
//         paginationContainer.lastElementChild.classList.toggle('pagination__stick_active');
//         paginationContainer.firstElementChild.classList.toggle('pagination__stick_active');

//         leftValue = -45;
//         await animateIndicator(paginationContainer.firstElementChild.querySelector('.pagination__indicator'));
//         animationStopped = true;
//         return;
//     }

//     activePagination.classList.remove('pagination__stick_active');
//     let nextActivePagination = activePagination.nextElementSibling;
//     nextActivePagination.classList.add('pagination__stick_active');

//     leftValue = -45;
//     let nextIndicator = nextActivePagination.querySelector('.pagination__indicator'); 
//     await animateIndicator(nextIndicator);
//     animationStopped = true;

//     console.log(`right: ${nextActivePagination.classList.contains('pagination__stick_active')}`, nextIndicator);

// }

// async function paginationSLideLeft() {

//     if (activePagination.previousElementSibling === null) {
//         paginationContainer.firstElementChild.classList.toggle('pagination__stick_active');
//         paginationContainer.lastElementChild.classList.toggle('pagination__stick_active');

//         leftValue = -45;
//         await animateIndicator(paginationContainer.lastElementChild.querySelector('.pagination__indicator'));
//         animationStopped = true;
//         return;
//     }
//     activePagination.classList.toggle('pagination__stick_active');
//     activePagination.previousElementSibling.classList.toggle('pagination__stick_active');

//     console.log(`left:${activePagination.previousElementSibling.classList.toggle('pagination__stick_active')}`)

//     leftValue = -45;
//     await animateIndicator(activePagination.previousElementSibling.querySelector('.pagination__indicator'));
//     animationStopped = true;
// }

//     function animateIndicator(animationIndicator) {

//     leftValue = -45;
//     animationStopped = false;

//     animationIndicator.style.left = leftValue + 'px';

//     async function animateForward() {

//         if (animationStopped) {
//             setTimeout(animateBackward, intervalDown);
//             animationStopped = false;
//             leftValue = -45;
//             return;
//         }

//         leftValue += step;
//         animationIndicator.style.left = leftValue + 'px';

//         if (leftValue < 5) {
//             setTimeout(animateForward, intervalUp);
//         } else {
//             // await paginationSLideRight();
//             setTimeout(animateBackward, intervalDown);
//             moveSliderLeft();
//             await paginationSLideRight();
//             return;
//         }
//         // console.log(leftValue);
//     }

//     function animateBackward() {
//         leftValue -= step;
//         animationIndicator.style.left = leftValue + 'px';

//         if (leftValue > -45 && !animationStopped) {
//             setTimeout(animateBackward, intervalDown);
//         }
//     }
//     animateForward();
// }

// animateIndicator(indicator);








