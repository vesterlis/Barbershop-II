let yourAccount = document.querySelector('.yourAccount');
let enterAccount__link = document.querySelector('.enterAccount__link');

enterAccount__link.onclick = function () {
    yourAccount.classList.add('yourAccount-open');
};


let yourAccount__closeButton = document.querySelector('.yourAccount__closeButton');
yourAccount__closeButton.onclick = function () {
    yourAccount.classList.remove('yourAccount-open');
}


let yourAccount__crossButton = document.querySelector('.yourAccount__crossButton');

yourAccount__crossButton.onclick = function () {
    yourAccount.classList.remove('yourAccount-open');
}