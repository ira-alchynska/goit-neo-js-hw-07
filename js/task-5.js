function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


const refs = {
    body: document.querySelector('body'),
    button: document.querySelector('.change-color'),
    colorSpan: document.querySelector('.color'),
};


refs.button.addEventListener('click', () => {

    const randomColor = getRandomHexColor();


    refs.body.style.backgroundColor = randomColor;


    refs.colorSpan.textContent = randomColor;
});