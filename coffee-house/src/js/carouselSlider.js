export {moveSlider, moveSliderLeft, moveSliderRight, slideLeft, slideRight, carousel};

const slideRight = document.querySelector('.carousel__slide_right');
const slideLeft = document.querySelector('.carousel__slide_left');
const carousel = document.querySelector('.carousel__container');
let slideRange = -348;

function moveSlider() {
    slideRight.addEventListener('click', moveSliderLeft);

    slideLeft.addEventListener('click', moveSliderRight);
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
moveSlider();