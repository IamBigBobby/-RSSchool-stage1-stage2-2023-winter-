// export { updateProgressBar };
// import { moveSliderLeft } from "./carouselSlider.js";

// let indicator = document.querySelector('.pagination__stick_active .pagination__indicator');
// let activeStick = document.querySelector('.pagination__stick_active');
// const slideRight = document.querySelector('.carousel__slide_right');
// let animationIntervalId;

// function updateProgressBar(indicator, activeStick) {
//     console.log('работает');
//     let width = 1;
//     let direction = 1;
//     let id;

//     function progressStatus() {
//         let nextActivePagination = activeStick.nextElementSibling;
//         if (width >= 100 || width <= 0) {
//             direction *= -1;
//             clearTimeout(id);
//             id = setTimeout(progressStatus, direction === 1 ? 100 : 5);
//         }
//         if (width <= 0) {
//             moveSliderLeft();

//             if (nextActivePagination !== null) {
//                 activeStick.classList.remove('pagination__stick_active');
//                 nextActivePagination.classList.add('pagination__stick_active');
//                 let nextIndicator = nextActivePagination.querySelector('.pagination__indicator');

//                 clearTimeout(id);

//                 updateProgressBar(nextIndicator, nextActivePagination);
//             } else {
//                 let paginationContainer = document.querySelector('.pagination');
//                 activeStick.classList.remove('pagination__stick_active');
//                 let firstActivePagination = paginationContainer.firstElementChild;
//                 firstActivePagination.classList.add('pagination__stick_active');
//                 let firstIndicator = firstActivePagination.querySelector('.pagination__indicator');

//                 clearTimeout(id);

//                 updateProgressBar(firstIndicator, firstActivePagination);
//             }
//         }

//         width += direction;
//         indicator.style.width = `${width}%`;
//         console.log(direction, width)
//     }
//     id = setTimeout(progressStatus, 100);
//     animationIntervalId = id;
// } 

// slideRight.addEventListener('click', function(){
//     clearTimeout(animationIntervalId);
//     let currentPagination = document.querySelector('.pagination__stick_active');
//     let currentIndicator = document.querySelector('.pagination__stick_active .pagination__indicator');
//     clearTimeout (function(){
//         let width = 1;
//         let direction = 1;
//         width -= direction;
//         currentIndicator.style.width = `${width}%`;  
//     }, 1000);

//     let nextCurrentPagination = currentPagination.nextElementSibling;
//     // console.log(currentPagination, nextCurrentPagination);

//     if (nextCurrentPagination !== null) {
//         currentPagination.classList.remove('pagination__stick_active');
//         nextCurrentPagination.classList.add('pagination__stick_active');
//         let nextIndicator = nextCurrentPagination.querySelector('.pagination__indicator');

//         updateProgressBar(nextIndicator, nextCurrentPagination);
//     } else {
//         let paginationContainer = document.querySelector('.pagination');
//         currentPagination.classList.remove('pagination__stick_active');
//         let firstActivePagination = paginationContainer.firstElementChild;
//         firstActivePagination.classList.add('pagination__stick_active');
//         let firstIndicator = firstActivePagination.querySelector('.pagination__indicator');

//         updateProgressBar(firstIndicator, firstActivePagination);
//     }

// }); 
// updateProgressBar(indicator, activeStick);

export { updateProgressBar };
import { moveSliderLeft } from "./carouselSlider.js";

let indicator = document.querySelector('.pagination__stick_active .pagination__indicator');
let activeStick = document.querySelector('.pagination__stick_active');
const slideRight = document.querySelector('.carousel__slide_right');
let animationIntervalId;

function updateProgressBar(indicator, activeStick) {
    console.log('работает');
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
        console.log(direction, width);
    }
    id = setInterval(progressStatus, 150);
    animationIntervalId = id;
}

slideRight.addEventListener('click', function () {
    clearInterval(animationIntervalId);

    let currentPagination = document.querySelector('.pagination__stick_active');
    let currentIndicator = document.querySelector('.pagination__stick_active .pagination__indicator');

    // Эмулируем анимацию для демонстрации
    let width = 1;
    let direction = -1;

    function animateWidth() {
        width += direction;
        currentIndicator.style.width = `${width}%`;

        if (width > 0) {
            requestAnimationFrame(animateWidth);
        } else {
            // Анимация завершена, обновляем стили и запускаем следующую анимацию
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








