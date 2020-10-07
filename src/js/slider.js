
let slide1 = document.getElementById('slide1');
let slide2 = document.getElementById('slide2');
let slide3 = document.getElementById('slide3');
let caret = document.querySelector('.advantages__list')


slide1.addEventListener('click', function () {
    caret.style.transform = ' translateX(0%)'
})

slide2.addEventListener('click', function () {
    caret.style.transform = ' translateX(-100%)'
})

slide3.addEventListener('click', function () {
    caret.style.transform = ' translateX(-200%)'
})


let slide1f = document.getElementById('slide1f');
let slide2f = document.getElementById('slide2f');
let slide3f = document.getElementById('slide3f');
let caretF = document.querySelector('.feedback__list')


slide1f.addEventListener('click', function () {
    caretF.style.transform = ' translateX(0%)'
})

slide2f.addEventListener('click', function () {
    caretF.style.transform = ' translateX(-100%)'
})

slide3f.addEventListener('click', function () {
    caretF.style.transform = ' translateX(-200%)'
})