let keydownObject = document.querySelector("#keydownEnter")

keydownObject.addEventListener('keydown', (event) => {
    if (event.code == 'Enter') {
        console.log(`key down : ${event.code}`);
    }
});