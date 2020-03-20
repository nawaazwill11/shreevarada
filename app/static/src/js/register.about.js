import composer from './composer.index';
import './register.common';
import helper from './helper';

document.addEventListener('DOMContentLoaded', function () {
    helper.loader.unload();
    composer.initialization();
    registerSW();
});

const fab = document.querySelector('.fixed-action-btn');

fab.addEventListener('click', function (e) {
    composer.fabClose();
})
 function registerSW() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js', {scope: '/'})
            .then(registration => {
                console.log('Service Worker is registered', registration);
            })
            .catch(err => {
                console.error('Registration failed:', err);
            });
        });
    }   
}
