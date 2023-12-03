export function burgerLogic() {
    console.log('heh');
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerMenuUpSpan = document.querySelector('.burger-menu span:first-child');
    const burgerMenuDownSpan = document.querySelector('.burger-menu span:last-child')

    burgerMenu.addEventListener('click', function() {
        burgerMenuUpSpan.classList.toggle('burger-menu__first-span');
        burgerMenuDownSpan.classList.toggle('burger-menu__second-span');
    })
}
burgerLogic();