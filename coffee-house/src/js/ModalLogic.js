export { showModal }

function showModal() {
    let dataProducts = '../json/data.json';

    fetch(dataProducts)
    .then(response => {
        if(!response.ok){
            throw new Error('Error');
        }
        return response.json();
    })
    .then(data => {
        findItemName(data);
    })
    .catch(error => {
        console.error(error.message);
    })
}

function findItemName(data) {
    const foodItems = document.querySelectorAll('.menu__food-item');
    let foundNameElement;
    let foundImgElement;

    foodItems.forEach((item) => {
        item.addEventListener('click', function(event){
            console.log('click');
            let itemNameElement = item.querySelector('.menu__item-name');
            let itemImgElement = item.querySelector('.menu__item-img');
            foundNameElement = itemNameElement.textContent;
            foundImgElement = itemImgElement;
            handleNameElement(foundNameElement, foundImgElement, data);
        })
    });
}

function handleNameElement(name, img, data){
    console.log(name, img, data);
    const product = data.find(item => item.name === name)

    console.log(product);
}

showModal();
