import composer from './composer.index';
import './register.common';
import helper from './helper';

document.addEventListener('DOMContentLoaded', function () {
    helper.loader.unload();
    composer.initialization();
});

const fab = document.querySelector('.fixed-action-btn');

fab.addEventListener('click', function (e) {
    composer.fabClose();
})