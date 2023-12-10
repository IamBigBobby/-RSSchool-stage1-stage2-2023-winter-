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
            foundImgElement = itemImgElement.src;
            createModal(foundNameElement, foundImgElement, data);
        })
    });
}

function createModal(name, img, data){
    console.log(name, img);
    const product = data.find(item => item.name === name)
    console.log(product.sizes.l.size);

    let newModalWindow = document.createElement('div');
    newModalWindow.className = "modal";

    newModalWindow.innerHTML = `
    <div class="modal__window">
    <div class="modal__item-img-wrapper">
        <img src="${img}" alt="img" class="modal__item-img">
    </div>
    <div class="modal___face-information">
        <div class="modal__main-information">
            <div class="modal__name-item">${product.name}</div>
            <div class="modal__about-item">${product.description}</div>
        </div>
        <div class="modal__describe">
            <div class="modal__size">
                <div class="modal__size-name">Size</div>
                <div class="modal__size-variables">
                    <div class="modal__size-choise modal__size-choise_active">
                        <div class="modal__size-variable-scale ">S</div>
                        <div class="modal__size-variable-number">${product.sizes.s.size}</div>
                    </div>
                    <div class="modal__size-choise">
                        <div class="modal__size-variable-scale">M</div>
                        <div class="modal__size-variable-number">${product.sizes.m.size}</div>
                    </div>
                    <div class="modal__size-choise">
                        <div class="modal__size-variable-scale">L</div>
                        <div class="modal__size-variable-number">${product.sizes.l.size}</div>
                    </div>
                </div>
            </div>
            <div class="modal__additives">
                <div class="modal__additives-name">Additives</div>
                <div class="modal__additives-variables">
                    <div class="modal__additives-choise">
                        <div class="modal__additives-variable-scale">1</div>
                        <div class="modal__additives-variable-number">Sugar</div>
                    </div>
                    <div class="modal__additives-choise">
                        <div class="modal__additives-variable-scale">2</div>
                        <div class="modal__additives-variable-number">Cinnamon</div>
                    </div>
                    <div class="modal__additives-choise">
                        <div class="modal__additives-variable-scale">3</div>
                        <div class="modal__additives-variable-number">Syrup</div>
                    </div>
                </div>
            </div>
            <div class="modal__total">
                <div class="modal__total-name">Total:</div>
                <div class="modal__total-price">$${product.price}</div>
            </div>
            <div class="modal__adition-information">
                <svg class="modal__info-empty" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="info-empty" clip-path="url(#clip0_268_12877)">
                    <path id="Vector" d="M8 7.66663V11" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="Vector_2" d="M8 5.00667L8.00667 4.99926" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id="Vector_3" d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 8.00004C14.6663 4.31814 11.6816 1.33337 7.99967 1.33337C4.31778 1.33337 1.33301 4.31814 1.33301 8.00004C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z" stroke="#403F3D" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_268_12877">
                    <rect width="16" height="16" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <div class="modal__adition-information-text">
                    The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.
                </div>
            </div>
            <div class="modal__close-button button_modal">
                Close
            </div>
        </div>
    </div>
</div>
`

    let bodyElement = document.body;

    bodyElement.appendChild(newModalWindow);

}

showModal();
