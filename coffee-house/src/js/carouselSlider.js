import { paginationSLideLeft } from "./paginationLogic.js";
import { paginationSLideRight } from "./paginationLogic.js";

const slideRight = document.querySelector('.carousel__slide_right');
const slideLeft = document.querySelector('.carousel__slide_left');
const carousel = document.querySelector('.carousel__container');
let slideRange = -780;

export function moveSlider() {
    slideRight.addEventListener('click', moveSliderLeft);

    slideLeft.addEventListener('click', moveSliderRight);
}
export function moveSliderLeft() {
    slideRange += 780;
        
    if (slideRange > 780) {
        slideRange = -780;
    }
    carousel.style.left = -slideRange + 'px';
    paginationSLideRight();
}
export function moveSliderRight() {
    slideRange -= 780;
        
    if (slideRange < -780) {
        slideRange = 780;
    }
    carousel.style.left = -slideRange + 'px';
    paginationSLideLeft();
}
moveSlider();