import { initialization, fabClose } from './composer.index';

document.addEventListener('DOMContentLoaded', function () {
    initialization();
});

const fab = document.querySelector('.fixed-action-btn');

fab.addEventListener('click', function (e) {
    fabClose();
})