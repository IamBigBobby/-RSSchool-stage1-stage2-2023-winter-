export { moveTag }


function moveTag(){
    let tags = document.querySelectorAll('.menu__tag');
    let coffeeTab = document.querySelector('.menu__coffee-category');
    let teaTab = document.querySelector('.menu__tea-category');
    let dessertTab = document.querySelector('.menu__dessert-category');
    let refreshButton = document.querySelector('.menu__refresh-button');
    let otherCards = document.querySelectorAll('.menu__food-item:nth-child(n+5):nth-child(-n+8)');

    coffeeTab.style.display = 'flex';
    
    console.log(otherCards);

    tags.forEach((tag) => {
        tag.addEventListener('click', function(){
            tags.forEach((element) => {
                element.classList.remove('menu__tag_active');
            })
            tag.classList.toggle('menu__tag_active');

            let tagName = tag.querySelector('.menu__tag-name').textContent;
            console.log(tagName);

            if (tagName === "Tea") {
                teaTab.style.display = 'flex';
                coffeeTab.style.display = 'none';
                dessertTab.style.display = 'none';
                refreshButton.style.display = 'none'
            }

            if (tagName === 'Dessert'){
                teaTab.style.display = 'none';
                coffeeTab.style.display = 'none';
                dessertTab.style.display = 'flex';
                if (window.innerWidth <= 768) {
                    refreshButton.style.display = 'block';
                }
            }

            if (tagName === 'Coffee'){
                teaTab.style.display = 'none';
                coffeeTab.style.display = 'flex';
                dessertTab.style.display = 'none';
                if (window.innerWidth <= 768) {
                    refreshButton.style.display = 'block';
                }
            }
        });
    })

    refreshButton.addEventListener('click', function(){
        if (coffeeTab.style.display === 'flex') {
            for (let i = 0; i < otherCards.length - 4; i++){
                console.log(otherCards[i]);
                otherCards[i].style.display = 'block';
            }
        }
        if (dessertTab.style.display === 'flex') {
            for (let i = otherCards.length - 4; i < otherCards.length; i++){
                otherCards[i].style.display = 'block';
            }
        } 
        refreshButton.style.display = 'none';
    });
}    
moveTag();