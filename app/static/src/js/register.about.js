import composer from './composer.index';


document.addEventListener('DOMContentLoaded', function () {
    loader.unload();
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
