const slideRight = document.querySelector('.carousel__slide_right');
const slideLeft = document.querySelector('.carousel__slide_left')

export function moveSlider() {
    console.log('work');
    slideRight.addEventListener('click', function() {
        console.log('right');
    });

    slideLeft.addEventListener('click', function() {
        console.log('left');
    });
}
moveSlider();