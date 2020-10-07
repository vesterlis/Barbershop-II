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