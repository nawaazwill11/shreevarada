import composer from './composer.products';

document.addEventListener('DOMContentLoaded', function () {
    composer.initialization();
});

const fab = document.querySelector('.fixed-action-btn');

fab.addEventListener('click', function (e) {
    composer.fabClose();
})