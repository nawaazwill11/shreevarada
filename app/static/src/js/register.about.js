import composer from './composer.about';


document.addEventListener('DOMContentLoaded', function () {
    loader.unload();
    composer.initialization();
});

const fab = document.querySelector('.fixed-action-btn');

fab.addEventListener('click', function (e) {
    composer.fabClose();
})
