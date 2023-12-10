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
            let itemNameElement = item.querySelector('.menu__item-name');
            let itemImgElement = item.querySelector('.menu__item-img');
            foundNameElement = itemNameElement.textContent;
            foundImgElement = itemImgElement.src;
            createModal(foundNameElement, foundImgElement, data);
        })
    });
}

function createModal(name, img, data){
    // console.log(name, img);
    const product = data.find(item => item.name === name)
    // console.log(product.sizes.l.size);

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
            <div class="button_modal">
                Close
            </div>
        </div>
    </div>
</div>
`

    let bodyElement = document.body;

    bodyElement.appendChild(newModalWindow);

    if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = '';
    } else {    
        document.body.style.overflow = 'hidden';
    }
    closeModalWindow();
    changeActiveButtons();
    changePrice(product);
}

function closeModalWindow() {
    const overlay = document.querySelector('.modal');
    const closeButtonModal = document.querySelector('.button_modal');

    overlay.addEventListener('click', function(event){
        if (event.currentTarget === overlay && !event.target.closest('.modal__window')) {
            overlay.remove();
            if (document.body.style.overflow === 'hidden') {
                document.body.style.overflow = '';
            } else {    
                document.body.style.overflow = 'hidden';
            }
        }
    });

    closeButtonModal.addEventListener('click', function(){
        overlay.remove();
        if (document.body.style.overflow === 'hidden') {
            document.body.style.overflow = '';
        } else {    
            document.body.style.overflow = 'hidden';
        }
    });    
}

function changeActiveButtons() {
    const sizeButtonsContainer = document.querySelector('.modal__size-variables');
    const additivesButtonsContainer = document.querySelector('.modal__additives-variables');

    sizeButtonsContainer.addEventListener('click', function(event) {
        const targetButton = event.target.closest('.modal__size-choise');

        if (targetButton) {
            const sizeButtons = sizeButtonsContainer.querySelectorAll('.modal__size-choise');
            
            sizeButtons.forEach((button) => {
                button.classList.remove('modal__size-choise_active');
            });

            targetButton.classList.toggle('modal__size-choise_active');
        }
    });

    additivesButtonsContainer.addEventListener('click', function(event) {
        const targetButton = event.target.closest('.modal__additives-choise');

        if (targetButton) {
            const additivesButtons = additivesButtonsContainer.querySelectorAll('.modal__additives-choise');
            
            additivesButtons.forEach((button) => {
                button.classList.remove('modal__additives-choise_active');
            });

            targetButton.classList.toggle('modal__additives-choise_active');
        }
    });
}




function changePrice(product) {
    let sizeChoiseElement = document.querySelectorAll('.modal__size-choise');
    let additivesChoiseElement = document.querySelectorAll('.modal__additives-choise');
    let price = document.querySelector('.modal__total-price');
    let currentPrice;



    sizeChoiseElement.forEach((element) => {
        element.addEventListener('click', function(){

            let sizeElement = element.querySelector('.modal__size-variable-scale');
    
            let sizeContent = sizeElement.textContent || sizeElement.innerText;

            if (sizeContent === 'S') {
                currentPrice = price.textContent;
                currentPrice = parseFloat(product.price);

                let additionalPriceS = parseFloat(product.sizes.s['add-price']);
                let totalS = (currentPrice + additionalPriceS).toFixed(2);
                price.textContent = `${parseFloat(totalS).toFixed(2)}$`;

                return currentPrice = totalS;
            }

            if (sizeContent === 'M') {
                currentPrice = price.textContent;
                currentPrice = parseFloat(product.price);

                let additionalPriceM = parseFloat(product.sizes.m['add-price']);
                let totalM = (currentPrice + additionalPriceM).toFixed(2);
                price.textContent = `${parseFloat(totalM).toFixed(2)}$`;

                return currentPrice = totalM;
            }
            if (sizeContent === 'L') {
                currentPrice = price.textContent;
                currentPrice = parseFloat(product.price);

                let additionalPriceL = parseFloat(product.sizes.l['add-price']);
                let totalL = (currentPrice + additionalPriceL).toFixed(2);
                price.textContent = `${parseFloat(totalL).toFixed(2)}$`;

                return currentPrice = totalL;
            }
        });
    });

    additivesChoiseElement.forEach((element) => {
        element.addEventListener('click', function(){
            let additivesElement = element.querySelector('.modal__additives-variable-number');
    
            let additivesContent = additivesElement.textContent || additivesElement.innerText;
    
            console.log(additivesContent);
            console.log(currentPrice);
        });
    });
    


}




showModal();
