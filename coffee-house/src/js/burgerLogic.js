    const burgerMenuUpSpan = document.querySelector('.burger-menu span:first-child');
    const burgerMenuDownSpan = document.querySelector('.burger-menu span:last-child');
    const headerLinks = document.querySelector('.header__links');
    const burgerMenu = document.querySelector('.burger-menu');
    const navigationLinks = document.querySelectorAll('.navigation__link');

export function burgerLogic() {
    burgerMenu.addEventListener('click', moveBurger);
    navigationLinks.forEach((link) => {
        link.addEventListener('click', selectLink);
    });
}

function moveBurger() {
    burgerMenuUpSpan.classList.toggle('burger-menu__first-span');
    burgerMenuDownSpan.classList.toggle('burger-menu__second-span');

    headerLinks.classList.toggle('header__links_hide');

    if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = '';
    } else {    
        document.body.style.overflow = 'hidden';
    }
}

function selectLink() {
    burgerMenuUpSpan.classList.toggle('burger-menu__first-span');
    burgerMenuDownSpan.classList.toggle('burger-menu__second-span');

    headerLinks.classList.toggle('header__links_hide');

    document.body.style.overflow = '';
}
burgerLogic();