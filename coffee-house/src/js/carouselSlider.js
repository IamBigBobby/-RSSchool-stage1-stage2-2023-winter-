import { paginationSLideLeft } from "./paginationLogic.js";
import { paginationSLideRight } from "./paginationLogic.js";

const slideRight = document.querySelector('.carousel__slide_right');
const slideLeft = document.querySelector('.carousel__slide_left');
const carousel = document.querySelector('.carousel__container');

export function moveSlider() {
    let slideRange = -780;
    slideRight.addEventListener('click', function() {
        slideRange += 780;
        
        if (slideRange > 780) {
            slideRange = -780;
        }
        carousel.style.left = -slideRange + 'px';
        paginationSLideRight();
        console.log(slideRange);
    });

    slideLeft.addEventListener('click', function() {
        slideRange -= 780;
        
        if (slideRange < -780) {
            slideRange = 780;
        }
        carousel.style.left = -slideRange + 'px';
        paginationSLideLeft();
        console.log(slideRange);
    });
}
moveSlider();