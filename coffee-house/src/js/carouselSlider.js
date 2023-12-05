const slideRight = document.querySelector('.carousel__slide_right');
const slideLeft = document.querySelector('.carousel__slide_left');
const carousel = document.querySelector('.carousel__container');

export function moveSlider() {
    let slideRange = 0;
    console.log('work');
    slideRight.addEventListener('click', function() {
        console.log('right');
        slideRange += 780;
        
        if (slideRange > 780) {
            slideRange = -780;
        }
        carousel.style.left = -slideRange + 'px';
    });

    slideLeft.addEventListener('click', function() {
        console.log('left');
        slideRange -= 780;
        
        if (slideRange < -780) {
            slideRange = 780;
        }
        carousel.style.left = -slideRange + 'px';
    });
    console.log(slideRange);
}
moveSlider();