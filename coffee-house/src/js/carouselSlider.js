export {moveSlider, moveSliderLeft, moveSliderRight, slideLeft, slideRight, carousel};

const slideRight = document.querySelector('.carousel__slide_right');
const slideLeft = document.querySelector('.carousel__slide_left');
const carousel = document.querySelector('.carousel__container');
let slideRange = -780;

function moveSlider() {
    slideRight.addEventListener('click', moveSliderLeft);

    slideLeft.addEventListener('click', moveSliderRight);
}
function moveSliderLeft() {
    slideRange += 780;
        
    if (slideRange > 780) {
        slideRange = -780;
    }
    carousel.style.left = -slideRange + 'px';
    console.log(`left-slide:${slideRange}`);
}
function moveSliderRight() {
    slideRange -= 780;
        
    if (slideRange < -780) {
        slideRange = 780;
    }
    carousel.style.left = -slideRange + 'px';
    console.log(`right-slide:${slideRange}`);
}
moveSlider();