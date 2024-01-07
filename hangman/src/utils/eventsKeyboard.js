export { eventsKeyboard }

function eventsKeyboard() {
    const keyboardKeys = document.querySelectorAll('.keyboard__key');
    
    keyboardKeys.forEach((key) => {
        key.addEventListener('click', function(event) {
            console.log(key.innerHTML)
        });
    });

    document.addEventListener('keydown', function(event){
        console.log(event.key.toUpperCase());
    })
}