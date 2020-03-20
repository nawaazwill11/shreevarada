import composer from './composer.products';
import './register.common';
import helper from './helper';

document.addEventListener('DOMContentLoaded', function () {
    helper.loader.unload();
    composer.initialization()
    .then(function () {
        $('.slider').slider({full_width: true, indicators:true});
    })
});

const fab = document.querySelector('.fixed-action-btn');

fab.addEventListener('click', function (e) {
    composer.fabClose();
})

const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    composer.toggleProductsView(section);
});

const interactions = document.querySelectorAll('.section-interaction button');
interactions.forEach(action => {
    action.addEventListener('click', composer.interaction);
});