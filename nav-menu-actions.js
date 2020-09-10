let yourAccount = document.querySelector('.yourAccount');
let enterAccount__link = document.querySelector('.enterAccount__link');

enterAccount__link.onclick = function () {
    yourAccount.classList.add('yourAccount-open');
};

let headerNavigation = document.querySelector('.headerNavigation');
let headerNavigation__toggle = document.querySelector('.headerNavigation__toggle');

headerNavigation__toggle.onclick = function () {
    if (headerNavigation.classList.contains('headerNavigation--closed')) {
        headerNavigation.classList.remove('headerNavigation--closed');
        headerNavigation.classList.add('headerNavigation--opened');
    } else {
        headerNavigation.classList.remove('headerNavigation--opened');
        headerNavigation.classList.add('headerNavigation--closed');
    }
};


let yourAccount__closeButton = document.querySelector('.yourAccount__closeButton');
yourAccount__closeButton.onclick = function () {
    yourAccount.classList.remove('yourAccount-open');
}


let yourAccount__crossButton = document.querySelector('.yourAccount__crossButton');

yourAccount__crossButton.onclick = function () {
    yourAccount.classList.remove('yourAccount-open');
}





/*
let headerNavigation = document.querySelector('.headerNavigation');
let enterAccount__link = document.querySelector('.enterAccount__link');

enterAccount__link.onclick = function () {
    headerNavigation.classList.remove('headerNavigation--opened');
    headerNavigation.classList.add('headerNavigation--closed');
}
*/












/*

let news__item = document.querySelector('.news__item');

let news__showAll = document.querySelector('.news__showAll');
news__showAll.onclick = function () {
    console.log('Кнопка нажата!');
    news__item.classList.remove('close-new');
}


let yourAccount = document.querySelector('.yourAccount');

let userList__linkEnter = document.querySelector('.userList__linkEnter');
userList__linkEnter.onclick = function () {
    yourAccount.classList.add('yourAccount-open');
    headerMenuOpen.classList.remove('open');
}


*/