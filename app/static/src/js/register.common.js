import helper from './helper';

helper.loader.load();


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
registerSW();