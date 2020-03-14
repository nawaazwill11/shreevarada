import composer from './composer.products';

document.addEventListener('DOMContentLoaded', function () {
    composer.initialization()
    .then(function () {
        $('.slider').slider({full_width: true, indicators:true});
    })
});

const fab = document.querySelector('.fixed-action-btn');

fab.addEventListener('click', function (e) {
    composer.fabClose();
})